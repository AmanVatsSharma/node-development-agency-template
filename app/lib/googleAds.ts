/**
 * @fileoverview Google Ads Integration Library - Scalable Multi-Page Support
 * @description Server-side Google Ads conversion tracking with database-backed configuration
 * @version 2.0.0 - Scalable Architecture
 * 
 * FEATURES:
 * - Multi-landing-page conversion tracking
 * - Database-backed configuration (no hard-coded values)
 * - Comprehensive logging to IntegrationLog table
 * - Support for future Google Ads API integration
 * 
 * FLOW:
 * 1. Admin configures conversion labels in database via /admin/integrations
 * 2. getGoogleConfig() reads from IntegrationSettings table
 * 3. Client-side code fetches config via /api/google-config
 * 4. Conversions fire via gtag with proper labels
 * 5. Server-side logs provide backup tracking
 */

import prisma from './prisma';

// ============================================
// TYPE DEFINITIONS
// ============================================

/**
 * Supported conversion event types - ALL 10 LANDING PAGES
 * 3 conversion types per page: lead_submit, call_click, whatsapp_click
 */
export type ConversionEventType = 
  // 1. Business Website
  | 'business_website_lead_submit'
  | 'business_website_call_click'
  | 'business_website_whatsapp_click'
  // 2. AI Voice Agents
  | 'ai_voice_agents_lead_submit'
  | 'ai_voice_agents_call_click'
  | 'ai_voice_agents_whatsapp_click'
  // 3. Next.js Development
  | 'nextjs_development_lead_submit'
  | 'nextjs_development_call_click'
  | 'nextjs_development_whatsapp_click'
  // 4. React.js Development
  | 'reactjs_development_lead_submit'
  | 'reactjs_development_call_click'
  | 'reactjs_development_whatsapp_click'
  // 5. WhatsApp Business API
  | 'whatsapp_business_api_lead_submit'
  | 'whatsapp_business_api_call_click'
  | 'whatsapp_business_api_whatsapp_click'
  // 6. AI Chatbot Development
  | 'ai_chatbot_development_lead_submit'
  | 'ai_chatbot_development_call_click'
  | 'ai_chatbot_development_whatsapp_click'
  // 7. Shopify Product Page Customization
  | 'shopify_product_page_lead_submit'
  | 'shopify_product_page_call_click'
  | 'shopify_product_page_whatsapp_click'
  // 8. Google Ads Management
  | 'google_ads_management_lead_submit'
  | 'google_ads_management_call_click'
  | 'google_ads_management_whatsapp_click'
  // 9. CRM Solutions
  | 'crm_solutions_lead_submit'
  | 'crm_solutions_call_click'
  | 'crm_solutions_whatsapp_click'
  // 10. Shopify Headless Migration
  | 'shopify_headless_migration_lead_submit'
  | 'shopify_headless_migration_call_click'
  | 'shopify_headless_migration_whatsapp_click'
  // SEO Audit
  | 'seo_audit_lead_submit'
  | 'seo_audit_call_click'
  | 'seo_audit_whatsapp_click'
  // Global conversions
  | 'newsletter_signup'
  | 'contact_form_submit';

// ============================================
// CONFIGURATION RETRIEVAL
// ============================================

/**
 * Get Google Ads configuration from database
 * @returns {Promise<{conversionId: string, labels: Record<string, string>}>}
 */
export async function getGoogleConfig() {
  console.log('[GoogleAds] getGoogleConfig called');
  
  try {
    const settings = await prisma.integrationSettings.findFirst();
    
    if (!settings) {
      console.error('[GoogleAds] IntegrationSettings not found in database');
      console.error('[GoogleAds] Action: Initialize settings via /admin/integrations or run seed script');
      throw new Error('IntegrationSettings not found');
    }
    
    const labels = (settings.googleEventLabels as any) || {};
    const conversionId = settings.googleConversionId || '';
    
    console.log('[GoogleAds] Configuration retrieved:');
    console.log('[GoogleAds] - Conversion ID:', conversionId || 'NOT CONFIGURED');
    console.log('[GoogleAds] - Labels configured:', Object.keys(labels).length);
    console.log('[GoogleAds] - Label details:', JSON.stringify(labels, null, 2));
    
    return {
      conversionId,
      labels,
    };
  } catch (error) {
    console.error('[GoogleAds] Error retrieving config:', error);
    throw error;
  }
}

// Client-side helper payload for gtag
export async function getClientConversionMapping() {
  const cfg = await getGoogleConfig();
  return {
    conversionId: cfg.conversionId,
    labels: cfg.labels,
  };
}

// ============================================
// SERVER-SIDE CONVERSION LOGGING
// ============================================

/**
 * Log conversion event on server-side for reliability and backup tracking
 * 
 * NOTE: This is a backup logging mechanism. Primary conversion tracking happens
 * via client-side gtag. Future enhancement: Integrate Google Ads Conversion API
 * for server-side conversion reporting (requires OAuth2 and developer token)
 * 
 * @param {ConversionEventType} eventType - Type of conversion event
 * @param {Record<string, any>} [context] - Additional context (leadId, zohoLeadId, etc.)
 */
export async function logServerConversion(
  eventType: ConversionEventType, 
  context?: Record<string, any>
): Promise<void> {
  console.log('[GoogleAds] logServerConversion called');
  console.log('[GoogleAds] Event Type:', eventType);
  console.log('[GoogleAds] Context:', context);
  
  try {
    await prisma.integrationLog.create({
      data: {
        type: eventType,
        provider: 'google_ads',
        level: 'info',
        message: 'Conversion event logged (client-side gtag expected to fire)',
        request: context as any,
      },
    });
    
    console.log('[GoogleAds] ✅ Conversion logged to IntegrationLog table');
  } catch (error) {
    console.error('[GoogleAds] ❌ Error logging conversion:', error);
    // Non-critical error, don't throw
  }
}

export type { ConversionEventType };

export async function testGoogleConfig() {
  try {
    const { conversionId, labels } = await getGoogleConfig();
    return { ok: Boolean(conversionId), conversionId, labels };
  } catch (error: any) {
    return { ok: false, error: String(error?.message || error) };
  }
}


