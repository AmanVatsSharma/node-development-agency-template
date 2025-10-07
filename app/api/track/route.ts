/**
 * @fileoverview Conversion Tracking API Route
 * @description Server-side backup for conversion tracking events
 * @version 2.0.0 - Scalable Architecture
 * 
 * PURPOSE:
 * - Provide server-side backup for client-side conversion tracking
 * - Log all conversion events to IntegrationLog table
 * - Support debugging and verification of conversion tracking
 * 
 * USAGE:
 * POST /api/track
 * Body: { eventType: 'business_website_lead_submit', value?: 100, currency?: 'INR' }
 */

import { NextRequest, NextResponse } from 'next/server';
import { logServerConversion, ConversionEventType } from '@/app/lib/googleAds';

// ============================================
// ALLOWED EVENT TYPES (Scalable)
// ============================================

const ALLOWED_EVENT_TYPES = new Set<ConversionEventType>([
  // Business Website
  'business_website_lead_submit',
  'business_website_whatsapp_click',
  'business_website_call_click',
  // AI Voice Agents
  'ai_voice_agents_lead_submit',
  'ai_voice_agents_whatsapp_click',
  'ai_voice_agents_call_click',
  // SEO Audit
  'seo_audit_lead_submit',
  'seo_audit_whatsapp_click',
  'seo_audit_call_click',
  // Global
  'newsletter_signup',
  'contact_form_submit',
]);

// ============================================
// API ROUTE HANDLER
// ============================================

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  console.log('[API/Track] POST request received');
  
  try {
    const body = await req.json().catch(() => ({}));
    console.log('[API/Track] Request body:', body);
    
    const eventType = body?.eventType as string;
    console.log('[API/Track] Event type:', eventType);
    
    // Validate event type
    if (!eventType || !ALLOWED_EVENT_TYPES.has(eventType as ConversionEventType)) {
      console.error('[API/Track] Invalid eventType:', eventType);
      console.error('[API/Track] Allowed types:', Array.from(ALLOWED_EVENT_TYPES));
      return NextResponse.json(
        { error: 'Invalid eventType', allowed: Array.from(ALLOWED_EVENT_TYPES) }, 
        { status: 400 }
      );
    }
    
    // Log the conversion event
    console.log('[API/Track] Logging conversion event to database');
    await logServerConversion(eventType as ConversionEventType, { 
      body,
      headers: {
        userAgent: req.headers.get('user-agent'),
        referer: req.headers.get('referer'),
      },
      timestamp: new Date().toISOString(),
    });
    
    console.log('[API/Track] ✅ Conversion logged successfully');
    return NextResponse.json({ ok: true });
    
  } catch (error) {
    console.error('[API/Track] ❌ Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}


