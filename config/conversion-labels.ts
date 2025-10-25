/**
 * @fileoverview Google Ads Conversion Labels Configuration
 * @description Hardcoded conversion tracking configuration for all landing pages
 * @version 1.0.0
 * 
 * USAGE:
 * 1. Replace GOOGLE_CONVERSION_ID with your actual Google Ads conversion ID
 * 2. Replace 'LABEL_HERE' with actual conversion labels from Google Ads
 * 3. Labels are unique per event but conversion ID is same for entire website
 * 
 * SETUP STEPS:
 * 1. Login to Google Ads account
 * 2. Go to Tools & Settings > Conversions
 * 3. Create conversion actions for each event
 * 4. Copy the conversion label (e.g., "Y3bsCKXpn6gbEJC-sctB")
 * 5. Paste label here in the corresponding event
 * 
 * TOTAL EVENTS: 41 (13 landing pages × 3 events + 2 global events)
 */

// ============================================
// GOOGLE ADS CONVERSION ID
// ============================================
/**
 * Your Google Ads Conversion ID
 * Format: AW-XXXXXXXXXX
 * Same for all conversion events across the website
 */
export const GOOGLE_CONVERSION_ID = 'AW-17606401808'; // ⚠️ REPLACE WITH YOUR CONVERSION ID

// ============================================
// CONVERSION LABELS BY LANDING PAGE
// ============================================

/**
 * Landing Page: Business Website
 * Events: Form submit, Call click, WhatsApp click
 */
export const CONVERSION_LABELS = {
  // 1. Business Website Landing Page
  business_website_lead_submit: 'Y3bsCKXpn6gbEJC-sctB',      // ⚠️ REPLACE WITH ACTUAL LABEL
  business_website_call_click: 'IFTrCKXfy6gbEJC-sctB',        // ⚠️ REPLACE WITH ACTUAL LABEL
  business_website_whatsapp_click: 'XO54CKjpn6gbEJC-sctB',    // ⚠️ REPLACE WITH ACTUAL LABEL

  // 2. AI Voice Agents Landing Page
  ai_voice_agents_lead_submit: 'LABEL_HERE',        // ⚠️ REPLACE WITH ACTUAL LABEL
  ai_voice_agents_call_click: 'LABEL_HERE',         // ⚠️ REPLACE WITH ACTUAL LABEL
  ai_voice_agents_whatsapp_click: 'LABEL_HERE',     // ⚠️ REPLACE WITH ACTUAL LABEL

  // 3. Next.js Development Landing Page
  nextjs_development_lead_submit: 'LABEL_HERE',     // ⚠️ REPLACE WITH ACTUAL LABEL
  nextjs_development_call_click: 'LABEL_HERE',      // ⚠️ REPLACE WITH ACTUAL LABEL
  nextjs_development_whatsapp_click: 'LABEL_HERE',  // ⚠️ REPLACE WITH ACTUAL LABEL

  // 4. React.js Development Landing Page
  reactjs_development_lead_submit: 'LABEL_HERE',    // ⚠️ REPLACE WITH ACTUAL LABEL
  reactjs_development_call_click: 'LABEL_HERE',     // ⚠️ REPLACE WITH ACTUAL LABEL
  reactjs_development_whatsapp_click: 'LABEL_HERE', // ⚠️ REPLACE WITH ACTUAL LABEL

  // 5. WhatsApp Business API Landing Page
  whatsapp_business_api_lead_submit: 'LABEL_HERE',  // ⚠️ REPLACE WITH ACTUAL LABEL
  whatsapp_business_api_call_click: 'LABEL_HERE',   // ⚠️ REPLACE WITH ACTUAL LABEL
  whatsapp_business_api_whatsapp_click: 'LABEL_HERE', // ⚠️ REPLACE WITH ACTUAL LABEL

  // 6. AI Chatbot Development Landing Page
  ai_chatbot_development_lead_submit: 'LABEL_HERE',  // ⚠️ REPLACE WITH ACTUAL LABEL
  ai_chatbot_development_call_click: 'LABEL_HERE',   // ⚠️ REPLACE WITH ACTUAL LABEL
  ai_chatbot_development_whatsapp_click: 'LABEL_HERE', // ⚠️ REPLACE WITH ACTUAL LABEL

  // 7. Shopify Product Page Customization Landing Page
  shopify_product_page_lead_submit: 'LABEL_HERE',   // ⚠️ REPLACE WITH ACTUAL LABEL
  shopify_product_page_call_click: 'LABEL_HERE',     // ⚠️ REPLACE WITH ACTUAL LABEL
  shopify_product_page_whatsapp_click: 'LABEL_HERE', // ⚠️ REPLACE WITH ACTUAL LABEL

  // 8. Google Ads Management Landing Page
  google_ads_management_lead_submit: 'LABEL_HERE',   // ⚠️ REPLACE WITH ACTUAL LABEL
  google_ads_management_call_click: 'LABEL_HERE',    // ⚠️ REPLACE WITH ACTUAL LABEL
  google_ads_management_whatsapp_click: 'LABEL_HERE', // ⚠️ REPLACE WITH ACTUAL LABEL

  // 9. CRM Solutions Landing Page
  crm_solutions_lead_submit: 'LABEL_HERE',           // ⚠️ REPLACE WITH ACTUAL LABEL
  crm_solutions_call_click: 'LABEL_HERE',            // ⚠️ REPLACE WITH ACTUAL LABEL
  crm_solutions_whatsapp_click: 'LABEL_HERE',       // ⚠️ REPLACE WITH ACTUAL LABEL

  // 10. Shopify Headless Migration Landing Page
  shopify_headless_migration_lead_submit: 'LABEL_HERE',    // ⚠️ REPLACE WITH ACTUAL LABEL
  shopify_headless_migration_call_click: 'LABEL_HERE',     // ⚠️ REPLACE WITH ACTUAL LABEL
  shopify_headless_migration_whatsapp_click: 'LABEL_HERE', // ⚠️ REPLACE WITH ACTUAL LABEL

  // 11. SEO Audit Landing Page
  seo_audit_lead_submit: 'LABEL_HERE',               // ⚠️ REPLACE WITH ACTUAL LABEL
  seo_audit_call_click: 'LABEL_HERE',                // ⚠️ REPLACE WITH ACTUAL LABEL
  seo_audit_whatsapp_click: 'LABEL_HERE',            // ⚠️ REPLACE WITH ACTUAL LABEL

  // 12. NSE/MCX Live Market Data Landing Page
  nse_mcx_live_market_data_lead_submit: 'LABEL_HERE',     // ⚠️ REPLACE WITH ACTUAL LABEL
  nse_mcx_live_market_data_call_click: 'LABEL_HERE',      // ⚠️ REPLACE WITH ACTUAL LABEL
  nse_mcx_live_market_data_whatsapp_click: 'LABEL_HERE', // ⚠️ REPLACE WITH ACTUAL LABEL

  // 13. Trading Software Landing Page
  trading_software_lead_submit: 'LABEL_HERE',         // ⚠️ REPLACE WITH ACTUAL LABEL
  trading_software_call_click: 'LABEL_HERE',          // ⚠️ REPLACE WITH ACTUAL LABEL
  trading_software_whatsapp_click: 'LABEL_HERE',      // ⚠️ REPLACE WITH ACTUAL LABEL

  // Global Events (site-wide)
  newsletter_signup: 'LABEL_HERE',                   // ⚠️ REPLACE WITH ACTUAL LABEL
  contact_form_submit: 'LABEL_HERE',                  // ⚠️ REPLACE WITH ACTUAL LABEL
} as const;

// ============================================
// TYPE DEFINITIONS
// ============================================

/**
 * Type for conversion event keys
 */
export type ConversionEventKey = keyof typeof CONVERSION_LABELS;

/**
 * Google Ads Configuration Structure
 */
export interface GoogleAdsConfig {
  conversionId: string;
  labels: Record<string, string>;
}

// ============================================
// EXPORT CONFIGURATION
// ============================================

/**
 * Get Google Ads configuration
 * @returns Google Ads config with conversion ID and labels
 */
export function getGoogleAdsConfig(): GoogleAdsConfig {
  return {
    conversionId: GOOGLE_CONVERSION_ID,
    labels: CONVERSION_LABELS as Record<string, string>,
  };
}

/**
 * Get conversion label for a specific event
 * @param eventType - The conversion event type
 * @returns The conversion label or undefined if not found
 */
export function getConversionLabel(eventType: string): string | undefined {
  return CONVERSION_LABELS[eventType as ConversionEventKey];
}

