/**
 * AI Agent Chat API
 * Handles real-time conversations with AI agent
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { AIProviderFactory, AIMessage } from '@/app/lib/ai/providers';
import { buildPageContext, generateSystemPrompt, detectLeadCapture } from '@/app/lib/ai/contextEngine';
import { v4 as uuidv4 } from 'uuid';

/**
 * POST - Send message to AI agent and get response
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      sessionId,
      message,
      pageUrl,
      pagePath,
      pageTitle,
      visitorId,
      conversationHistory = []
    } = body;

    // Validate input
    if (!message || !pageUrl || !pagePath) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Fetch AI agent configuration
    const config = await prisma.aIAgentConfig.findFirst();
    
    if (!config || !config.enabled) {
      return NextResponse.json(
        { success: false, error: 'AI agent is not enabled' },
        { status: 503 }
      );
    }

    if (!config.apiKey) {
      return NextResponse.json(
        { success: false, error: 'AI agent is not configured' },
        { status: 503 }
      );
    }

    // Build page context
    const pageContext = await buildPageContext(pagePath, pageUrl, pageTitle);

    // Generate system prompt with context
    const systemPrompt = generateSystemPrompt(
      config.agentName,
      config.agentRole,
      config.companyName,
      pageContext
    );

    // Build messages array for AI
    const messages: AIMessage[] = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    // Call AI provider
    const aiResponse = await AIProviderFactory.chat(
      {
        provider: config.provider as 'openai' | 'claude' | 'gemini',
        apiKey: config.apiKey,
        model: config.model,
        temperature: config.temperature,
        maxTokens: config.maxTokens,
      },
      messages
    );

    // Update conversation history
    const updatedHistory = [
      ...conversationHistory,
      { role: 'user', content: message, timestamp: new Date().toISOString() },
      { role: 'assistant', content: aiResponse.content, timestamp: new Date().toISOString() }
    ];

    // Detect if lead has been captured
    const leadDetection = detectLeadCapture(updatedHistory);

    // Get or create conversation record
    let conversation = sessionId 
      ? await prisma.aIConversation.findUnique({ where: { sessionId } })
      : null;

    const finalSessionId = sessionId || uuidv4();

    if (conversation) {
      // Update existing conversation
      conversation = await prisma.aIConversation.update({
        where: { id: conversation.id },
        data: {
          messages: updatedHistory as any, // Cast to any for Prisma Json type
          messageCount: updatedHistory.length,
          lastMessageAt: new Date(),
          leadCaptured: leadDetection.captured || conversation.leadCaptured,
          status: leadDetection.captured ? 'converted' : conversation.status,
        }
      });
    } else {
      // Create new conversation
      conversation = await prisma.aIConversation.create({
        data: {
          sessionId: finalSessionId,
          visitorId,
          pageUrl,
          pagePath,
          pageTitle: pageTitle || pageUrl,
          pageContext: pageContext as any, // Cast to any for Prisma Json type
          messages: updatedHistory as any, // Cast to any for Prisma Json type
          messageCount: updatedHistory.length,
          lastMessageAt: new Date(),
          leadCaptured: leadDetection.captured,
          status: leadDetection.captured ? 'converted' : 'active',
        }
      });
    }

    // If lead captured, create lead record automatically
    if (leadDetection.captured && !conversation.leadCaptured) {
      try {
        // Call the convert-lead API internally
        const leadData = leadDetection.leadData || {};
        
        const convertResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/ai-agent/convert-lead`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            conversationId: conversation.id,
            sessionId: conversation.sessionId,
            leadData: {
              name: leadData.name || 'AI Agent Lead',
              email: leadData.email,
              phone: leadData.phone,
              company: leadData.company,
              requirements: leadData.requirements,
              message: leadData.requirements || 'Lead captured via AI Agent conversation',
            }
          })
        });

        const convertResult = await convertResponse.json();
        console.log('[AI Agent Chat] Lead conversion result:', convertResult);
      } catch (error) {
        console.error('[AI Agent Chat] Failed to convert lead:', error);
        // Don't fail the chat response if lead conversion fails
      }
    }

    // Track analytics
    await prisma.aIAnalytics.create({
      data: {
        date: new Date(),
        conversationId: conversation.id,
        pageUrl,
        metric: 'message_sent',
        value: 1,
        metadata: {
          provider: config.provider,
          model: config.model,
          tokensUsed: aiResponse.usage?.totalTokens || 0
        }
      }
    }).catch(err => console.error('Analytics error:', err));

    // Return AI response
    return NextResponse.json({
      success: true,
      response: aiResponse.content,
      sessionId: finalSessionId,
      leadCaptured: leadDetection.captured,
      usage: aiResponse.usage,
    });

  } catch (error: any) {
    console.error('[AI Agent Chat API] Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process message',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
