/**
 * AI Agent Configuration API
 * GET: Fetch current AI agent config
 * POST: Update AI agent config (admin only)
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

const ADMIN_COOKIE_NAME = 'admin_session';

/**
 * GET - Fetch public AI agent configuration
 * Returns sanitized config (without API keys)
 */
export async function GET(request: NextRequest) {
  try {
    // Fetch the first (and only) AI agent config
    let config = await prisma.aIAgentConfig.findFirst();
    
    // If no config exists, create default
    if (!config) {
      config = await prisma.aIAgentConfig.create({
        data: {
          provider: 'openai',
          model: 'gpt-4o',
          agentName: 'Nova',
          agentRole: 'AI Sales Assistant',
          companyName: 'Vedpragya Bharat',
          welcomeMessage: 'Hi! I\'m Nova, your AI assistant at Vedpragya Bharat. How can I help you today?',
          systemPrompt: 'You are a helpful AI sales assistant.',
          temperature: 0.7,
          maxTokens: 2000,
          enabled: false, // Disabled by default until API key is set
          leadQualification: true,
          autoGreeting: true,
          greetingDelay: 3000,
          widgetPosition: 'bottom-right',
          primaryColor: '#3b82f6',
        }
      });
    }

    // Return public config (exclude API key)
    return NextResponse.json({
      success: true,
      config: {
        id: config.id,
        provider: config.provider,
        model: config.model,
        agentName: config.agentName,
        agentRole: config.agentRole,
        companyName: config.companyName,
        welcomeMessage: config.welcomeMessage,
        systemPrompt: config.systemPrompt,
        temperature: config.temperature,
        maxTokens: config.maxTokens,
        enabled: config.enabled,
        leadQualification: config.leadQualification,
        autoGreeting: config.autoGreeting,
        greetingDelay: config.greetingDelay,
        widgetPosition: config.widgetPosition,
        primaryColor: config.primaryColor,
        hasApiKey: !!config.apiKey,
      }
    });
  } catch (error) {
    console.error('[AI Agent Config API] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch configuration' },
      { status: 500 }
    );
  }
}

/**
 * POST - Update AI agent configuration (Admin only)
 */
export async function POST(request: NextRequest) {
  try {
    // Check authentication using cookie-based auth
    const sessionCookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
    const isAuthorized = sessionCookie === adminPassword;
    
    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Get existing config or create new
    let config = await prisma.aIAgentConfig.findFirst();
    
    const updateData: any = {
      provider: body.provider,
      model: body.model,
      agentName: body.agentName,
      agentRole: body.agentRole,
      companyName: body.companyName,
      welcomeMessage: body.welcomeMessage,
      systemPrompt: body.systemPrompt,
      temperature: parseFloat(body.temperature),
      maxTokens: parseInt(body.maxTokens),
      enabled: body.enabled,
      leadQualification: body.leadQualification,
      autoGreeting: body.autoGreeting,
      greetingDelay: parseInt(body.greetingDelay),
      widgetPosition: body.widgetPosition,
      primaryColor: body.primaryColor,
    };

    // Only update API key if provided
    if (body.apiKey && body.apiKey.trim() !== '') {
      updateData.apiKey = body.apiKey;
    }

    if (config) {
      // Update existing
      config = await prisma.aIAgentConfig.update({
        where: { id: config.id },
        data: updateData
      });
    } else {
      // Create new
      config = await prisma.aIAgentConfig.create({
        data: updateData
      });
    }

    // Return without API key
    return NextResponse.json({
      success: true,
      config: {
        id: config.id,
        provider: config.provider,
        model: config.model,
        agentName: config.agentName,
        agentRole: config.agentRole,
        companyName: config.companyName,
        welcomeMessage: config.welcomeMessage,
        systemPrompt: config.systemPrompt,
        temperature: config.temperature,
        maxTokens: config.maxTokens,
        enabled: config.enabled,
        leadQualification: config.leadQualification,
        autoGreeting: config.autoGreeting,
        greetingDelay: config.greetingDelay,
        widgetPosition: config.widgetPosition,
        primaryColor: config.primaryColor,
        hasApiKey: !!config.apiKey,
      }
    });
  } catch (error) {
    console.error('[AI Agent Config API] Update error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update configuration' },
      { status: 500 }
    );
  }
}
