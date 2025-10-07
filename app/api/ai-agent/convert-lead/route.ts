/**
 * AI Agent Lead Conversion API
 * Converts AI conversation to lead and pushes to Zoho CRM + Google Ads
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

interface LeadData {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  requirements?: string;
}

/**
 * POST - Convert conversation to lead
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, conversationId, leadData } = body;

    if (!sessionId && !conversationId) {
      return NextResponse.json(
        { success: false, error: 'Session ID or Conversation ID required' },
        { status: 400 }
      );
    }

    if (!leadData || !leadData.email) {
      return NextResponse.json(
        { success: false, error: 'Lead data with email is required' },
        { status: 400 }
      );
    }

    // Find conversation
    const conversation = conversationId
      ? await prisma.aIConversation.findUnique({ where: { id: conversationId } })
      : await prisma.aIConversation.findUnique({ where: { sessionId } });

    if (!conversation) {
      return NextResponse.json(
        { success: false, error: 'Conversation not found' },
        { status: 404 }
      );
    }

    // Create lead in database
    const lead = await prisma.lead.create({
      data: {
        name: leadData.name || null,
        email: leadData.email,
        phone: leadData.phone || null,
        message: leadData.message || leadData.requirements || null,
        source: 'ai_agent',
        campaign: conversation.pagePath,
        leadSource: `AI Agent - ${conversation.pageTitle || conversation.pagePath}`,
        raw: {
          conversationId: conversation.id,
          sessionId: conversation.sessionId,
          pageUrl: conversation.pageUrl,
          leadData: leadData,
          capturedAt: new Date().toISOString(),
        },
        status: 'pending',
      }
    });

    // Update conversation with lead info
    await prisma.aIConversation.update({
      where: { id: conversation.id },
      data: {
        leadId: lead.id,
        leadCaptured: true,
        status: 'converted',
        conversionData: leadData,
      }
    });

    // Push to Zoho CRM (async, don't wait)
    pushToZohoCRM(lead).catch(err => 
      console.error('[AI Agent] Zoho push failed:', err)
    );

    // Track Google Ads conversion (async, don't wait)
    trackGoogleAdsConversion(conversation, lead).catch(err => 
      console.error('[AI Agent] Google Ads tracking failed:', err)
    );

    // Log the conversion
    await prisma.integrationLog.create({
      data: {
        type: 'ai_agent_lead_conversion',
        provider: 'ai_agent',
        level: 'info',
        message: `Lead converted from AI conversation on ${conversation.pagePath}`,
        request: { sessionId: conversation.sessionId, leadData },
        response: { leadId: lead.id },
      }
    }).catch(err => console.error('Log error:', err));

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      conversationId: conversation.id,
    });

  } catch (error: any) {
    console.error('[AI Agent Convert Lead API] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to convert lead', details: error.message },
      { status: 500 }
    );
  }
}

/**
 * Push lead to Zoho CRM
 */
async function pushToZohoCRM(lead: any) {
  try {
    // Use existing Zoho service
    const zohoService = await import('@/app/lib/zohoService');
    
    const zohoData = {
      Last_Name: lead.name || 'AI Agent Lead',
      Email: lead.email,
      Phone: lead.phone || '',
      Company: (lead.raw as any)?.leadData?.company || 'Not Provided',
      Lead_Source: lead.leadSource || 'AI Agent',
      Description: lead.message || 'Lead captured via AI Agent',
      Lead_Status: 'Not Contacted',
    };

    const result = await zohoService.createLead(zohoData);
    
    // Update lead with Zoho ID
    if (result.success && result.zohoLeadId) {
      await prisma.lead.update({
        where: { id: lead.id },
        data: {
          zohoLeadId: result.zohoLeadId,
          status: 'pushed',
        }
      });
    }

    return result;
  } catch (error) {
    console.error('[Zoho Push] Error:', error);
    throw error;
  }
}

/**
 * Track Google Ads conversion
 */
async function trackGoogleAdsConversion(conversation: any, lead: any) {
  try {
    // Determine conversion event based on page
    let conversionLabel = 'ai_agent_lead_conversion';
    
    // Map page path to specific conversion events
    if (conversation.pagePath.includes('shopify')) {
      conversionLabel = 'shopify_lead_submit';
    } else if (conversation.pagePath.includes('ai-voice')) {
      conversionLabel = 'ai_voice_agents_lead_submit';
    } else if (conversation.pagePath.includes('chatbot')) {
      conversionLabel = 'ai_chatbot_development_lead_submit';
    } else if (conversation.pagePath.includes('nextjs')) {
      conversionLabel = 'nextjs_development_lead_submit';
    } else if (conversation.pagePath.includes('google-ads')) {
      conversionLabel = 'google_ads_management_lead_submit';
    } else if (conversation.pagePath.includes('seo')) {
      conversionLabel = 'seo_audit_lead_submit';
    } else if (conversation.pagePath.includes('crm')) {
      conversionLabel = 'crm_solutions_lead_submit';
    }

    // Log conversion event
    await prisma.integrationLog.create({
      data: {
        type: conversionLabel,
        provider: 'google_ads',
        level: 'info',
        message: `AI Agent lead conversion tracked for ${conversation.pagePath}`,
        request: {
          leadId: lead.id,
          pageUrl: conversation.pageUrl,
          conversionLabel,
        }
      }
    });

  } catch (error) {
    console.error('[Google Ads Tracking] Error:', error);
    throw error;
  }
}
