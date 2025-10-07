/**
 * AI Agent Lead Conversion API
 * Converts AI conversation to lead and pushes to Zoho CRM + Google Ads
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

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

    // Create lead in database - THIS MUST ALWAYS SUCCEED
    // We log but don't fail if there's an issue
    let lead;
    try {
      lead = await prisma.lead.create({
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
      
      console.log(`[AI Agent] Lead ${lead.id} saved to database successfully for email: ${leadData.email}`);
    } catch (dbError: any) {
      console.error('[AI Agent] CRITICAL: Failed to save lead to database:', dbError);
      
      // Log the critical error
      await prisma.integrationLog.create({
        data: {
          type: 'ai_agent_lead_db_error',
          provider: 'database',
          level: 'error',
          message: 'CRITICAL: Failed to save AI agent lead to database',
          error: dbError.message,
          request: { sessionId: conversation.sessionId, leadData },
        }
      }).catch(console.error);
      
      // Still fail the request so caller knows there's an issue
      return NextResponse.json(
        { success: false, error: 'Failed to save lead to database', details: dbError.message },
        { status: 500 }
      );
    }

    // Update conversation with lead info
    try {
      await prisma.aIConversation.update({
        where: { id: conversation.id },
        data: {
          leadId: lead.id,
          leadCaptured: true,
          status: 'converted',
          conversionData: leadData,
        }
      });
      console.log(`[AI Agent] Conversation ${conversation.id} marked as converted`);
    } catch (updateError) {
      console.error('[AI Agent] Warning: Failed to update conversation:', updateError);
      // Don't fail the request - lead is already saved
    }

    // Push to Zoho CRM (async, don't wait - lead is already safe in DB)
    pushToZohoCRM(lead).catch(err => 
      console.error('[AI Agent] Zoho push failed (lead is safe in DB):', err)
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
        message: `Lead ${lead.id} converted from AI conversation on ${conversation.pagePath}`,
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
    const { createZohoLead } = await import('@/app/lib/zohoService');
    
    const zohoData = {
      name: lead.name || 'AI Agent Lead',
      email: lead.email,
      phone: lead.phone || '',
      message: lead.message || 'Lead captured via AI Agent',
      source: 'ai_agent',
      campaign: lead.campaign || '',
      leadSource: lead.leadSource || 'AI Agent',
      raw: lead.raw,
    };

    const result = await createZohoLead(zohoData);
    
    // Update lead with Zoho ID
    if (result.zohoLeadId) {
      await prisma.lead.update({
        where: { id: lead.id },
        data: {
          zohoLeadId: result.zohoLeadId,
          status: 'pushed',
        }
      });
      
      console.log(`[AI Agent] Lead ${lead.id} pushed to Zoho with ID: ${result.zohoLeadId}`);
    }

    return { success: true, zohoLeadId: result.zohoLeadId };
  } catch (error: any) {
    console.error('[Zoho Push] Error:', error);
    
    // Log the error
    await prisma.integrationLog.create({
      data: {
        type: 'ai_agent_zoho_push',
        provider: 'zoho',
        level: 'error',
        message: 'Failed to push AI agent lead to Zoho',
        error: error.message,
        request: { leadId: lead.id },
      }
    }).catch(console.error);
    
    // Don't throw - we don't want to fail the whole lead creation
    return { success: false, error: error.message };
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
