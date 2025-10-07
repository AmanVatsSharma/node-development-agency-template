/**
 * @fileoverview Scalable Google Ads Conversion Tracking System
 * @description Multi-landing-page conversion tracking with comprehensive logging
 * @version 2.0.0 - Scalable Architecture
 * 
 * ARCHITECTURE:
 * - Supports multiple landing pages with unique conversion actions
 * - Page-specific conversion tracking (business-website, ai-voice-agents, etc.)
 * - Centralized configuration from database
 * - Comprehensive error handling and logging
 * - Server-side backup tracking for reliability
 * 
 * CONVERSION FLOW:
 * 1. User triggers conversion (form submit, call click, WhatsApp click)
 * 2. fireConversion() called with eventType and optional page context
 * 3. Fetch conversion mapping from /api/google-config
 * 4. Fire client-side gtag conversion event
 * 5. Send server-side backup log to /api/track
 * 6. All events logged to console for debugging
 * 
 * SCALABILITY:
 * - Add new landing pages by extending ConversionEventType
 * - Configure labels in database via admin panel
 * - No code changes needed for new conversion actions
 */

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

/**
 * Conversion mapping structure from database
 */
interface ConversionMapping {
  conversionId: string; // e.g., "AW-17606401808"
  labels: Record<string, string>; // e.g., { "business_website_lead_submit": "Y3bsCKXpn6gbEJC-sctB" }
}

// ============================================
// CACHING LAYER
// ============================================

/**
 * In-memory cache for conversion mapping
 * Reduces database calls and improves performance
 */
let cachedMapping: ConversionMapping | null = null;

/**
 * Fetch conversion mapping from API with caching
 * @returns {Promise<ConversionMapping>} Conversion configuration
 */
async function getMapping(): Promise<ConversionMapping> {
  console.log('[Conversions] getMapping called');
  
  // Return cached mapping if available
  if (cachedMapping) {
    console.log('[Conversions] Using cached mapping:', cachedMapping);
    return cachedMapping;
  }

  console.log('[Conversions] Fetching mapping from /api/google-config');
  
  try {
    const res = await fetch('/api/google-config');
    
    if (!res.ok) {
      console.error('[Conversions] Failed to fetch google-config:', res.status, res.statusText);
      throw new Error(`google-config API returned ${res.status}`);
    }
    
    const data = await res.json();
    console.log('[Conversions] Received mapping from API:', data);
    
    cachedMapping = { 
      conversionId: data.conversionId || '', 
      labels: data.labels || {} 
    };
    
    console.log('[Conversions] Cached mapping updated:', cachedMapping);
    return cachedMapping;
    
  } catch (error) {
    console.error('[Conversions] Failed to load google-config:', error);
    console.error('[Conversions] Error details:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    // Fallback to empty mapping
    cachedMapping = { conversionId: '', labels: {} };
    return cachedMapping;
  }
}

/**
 * Clear cached mapping (useful for testing or admin updates)
 */
export function clearConversionCache(): void {
  console.log('[Conversions] Cache cleared');
  cachedMapping = null;
}

// ============================================
// MAIN CONVERSION TRACKING FUNCTION
// ============================================

/**
 * Fire a conversion event to Google Ads
 * 
 * USAGE:
 * ```typescript
 * // Form submit on business-website page
 * await fireConversion('business_website_lead_submit');
 * 
 * // WhatsApp click with custom value
 * await fireConversion('business_website_whatsapp_click', 0, 'INR');
 * 
 * // Call click with tracking
 * await fireConversion('business_website_call_click');
 * ```
 * 
 * @param {ConversionEventType} eventType - Type of conversion event
 * @param {number} [value] - Optional conversion value (for ROI tracking)
 * @param {string} [currency='INR'] - Currency code (default: INR for Indian market)
 * @returns {Promise<void>}
 */
export async function fireConversion(
  eventType: ConversionEventType, 
  value?: number, 
  currency: string = 'INR'
): Promise<void> {
  console.log('='.repeat(80));
  console.log('[Conversions] 🎯 CONVERSION EVENT TRIGGERED');
  console.log('='.repeat(80));
  console.log('[Conversions] Event Type:', eventType);
  console.log('[Conversions] Value:', value ?? 'No value');
  console.log('[Conversions] Currency:', currency);
  console.log('[Conversions] Timestamp:', new Date().toISOString());
  console.log('[Conversions] User Agent:', typeof window !== 'undefined' ? navigator.userAgent : 'Server-side');
  console.log('[Conversions] Page URL:', typeof window !== 'undefined' ? window.location.href : 'Unknown');
  
  // ============================================
  // 1. SERVER-SIDE BACKUP TRACKING
  // ============================================
  console.log('[Conversions] Step 1: Sending server-side backup log to /api/track');
  
  try {
    // Fire-and-forget server-side log (don't await to avoid blocking)
    void fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        eventType, 
        value, 
        currency, 
        ts: Date.now(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
        pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
      }),
    }).catch(err => {
      console.error('[Conversions] Server-side tracking failed (non-critical):', err);
    });
    
    console.log('[Conversions] ✅ Server-side backup log dispatched');
  } catch (error) {
    console.error('[Conversions] ❌ Server-side tracking error:', error);
    // Non-critical, continue with client-side tracking
  }

  // ============================================
  // 2. FETCH CONVERSION MAPPING
  // ============================================
  console.log('[Conversions] Step 2: Fetching conversion mapping');
  
  let mapping: ConversionMapping;
  try {
    mapping = await getMapping();
    console.log('[Conversions] ✅ Mapping retrieved:', mapping);
  } catch (error) {
    console.error('[Conversions] ❌ Failed to get mapping:', error);
    console.log('[Conversions] Aborting conversion tracking');
    return;
  }

  // ============================================
  // 3. BUILD CONVERSION PAYLOAD
  // ============================================
  console.log('[Conversions] Step 3: Building conversion payload');
  
  const label = mapping.labels?.[eventType] as string | undefined;
  console.log('[Conversions] Label for event type:', label || 'NOT FOUND');
  
  if (!label) {
    console.warn('[Conversions] ⚠️ No conversion label configured for:', eventType);
    console.warn('[Conversions] Available labels:', Object.keys(mapping.labels || {}));
    console.warn('[Conversions] Action: Configure this label in admin panel → Integrations');
    return;
  }
  
  // Build send_to parameter: conversionId/label or full AW-XXXXX/label
  const sendTo = label.includes('AW-') 
    ? label 
    : (mapping.conversionId && label ? `${mapping.conversionId}/${label}` : undefined);
  
  console.log('[Conversions] Conversion ID:', mapping.conversionId);
  console.log('[Conversions] Send To:', sendTo);
  
  if (!sendTo) {
    console.error('[Conversions] ❌ Unable to build send_to parameter');
    console.error('[Conversions] Conversion ID:', mapping.conversionId || 'MISSING');
    console.error('[Conversions] Label:', label || 'MISSING');
    return;
  }

  // ============================================
  // 4. FIRE CLIENT-SIDE GTAG CONVERSION
  // ============================================
  console.log('[Conversions] Step 4: Firing client-side gtag conversion');
  
  try {
    // Check if gtag is available
    if (typeof window === 'undefined') {
      console.warn('[Conversions] ⚠️ Window is undefined (server-side context)');
      return;
    }
    
    if (!window.gtag) {
      console.error('[Conversions] ❌ gtag is not available on window object');
      console.error('[Conversions] Make sure GoogleAdsTracking component is loaded in layout');
      return;
    }
    
    console.log('[Conversions] ✅ gtag function is available');
    
    // Build conversion parameters
    const params: Record<string, any> = { 
      send_to: sendTo,
    };

    // Add value and currency if provided
    if (typeof value === 'number') {
      params.value = value;
      params.currency = currency;
      console.log('[Conversions] Including conversion value:', value, currency);
    }
    
    console.log('[Conversions] Conversion parameters:', params);
    
    // Fire the conversion
    window.gtag('event', 'conversion', params);
    
    console.log('[Conversions] ✅ CONVERSION FIRED SUCCESSFULLY');
    console.log('[Conversions] Event:', 'conversion');
    console.log('[Conversions] Parameters:', JSON.stringify(params, null, 2));
    console.log('='.repeat(80));
    
  } catch (error) {
    console.error('[Conversions] ❌ ERROR FIRING CONVERSION');
    console.error('[Conversions] Error details:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      eventType,
      sendTo,
    });
    console.log('='.repeat(80));
  }
}

// ============================================
// HELPER FUNCTIONS FOR BACKWARD COMPATIBILITY
// ============================================

/**
 * Legacy helper - maps old event types to new page-specific types
 * @deprecated Use fireConversion with page-specific event types instead
 */
export async function fireLegacyConversion(
  eventType: 'lead_submit' | 'call_click' | 'whatsapp_click' | 'newsletter_signup',
  page: 'business-website' | 'ai-voice-agents' | 'seo-audit' = 'business-website',
  value?: number,
  currency?: string
): Promise<void> {
  console.log('[Conversions] Legacy conversion called - mapping to new format');
  console.log('[Conversions] Old event type:', eventType);
  console.log('[Conversions] Page:', page);
  
  // Map legacy event types to new page-specific types
  const eventMap: Record<string, Record<string, ConversionEventType>> = {
    'business-website': {
      'lead_submit': 'business_website_lead_submit',
      'call_click': 'business_website_call_click',
      'whatsapp_click': 'business_website_whatsapp_click',
      'newsletter_signup': 'newsletter_signup',
    },
    'ai-voice-agents': {
      'lead_submit': 'ai_voice_agents_lead_submit',
      'call_click': 'ai_voice_agents_call_click',
      'whatsapp_click': 'ai_voice_agents_whatsapp_click',
      'newsletter_signup': 'newsletter_signup',
    },
    'seo-audit': {
      'lead_submit': 'seo_audit_lead_submit',
      'call_click': 'seo_audit_call_click',
      'whatsapp_click': 'seo_audit_whatsapp_click',
      'newsletter_signup': 'newsletter_signup',
    },
  };
  
  const newEventType = eventMap[page]?.[eventType];
  
  if (!newEventType) {
    console.error('[Conversions] Unable to map legacy event:', { eventType, page });
    return;
  }
  
  console.log('[Conversions] Mapped to new event type:', newEventType);
  
  return fireConversion(newEventType, value, currency);
}

// ============================================
// EXPORTS
// ============================================

export default fireConversion;