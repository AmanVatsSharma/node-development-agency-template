/**
 * CONVERSION TESTING HELPER SCRIPT
 * 
 * HOW TO USE:
 * 1. Open Chrome DevTools (F12)
 * 2. Go to Console tab
 * 3. Copy and paste this entire script
 * 4. Press Enter
 * 5. Use the commands shown below
 * 
 * COMMANDS:
 * - listAllEvents()          → Show all 35 conversion event types
 * - testEvent('eventType')   → Test a specific conversion event
 * - testPage('pageName')     → Test all conversions for a page
 * - checkGtag()              → Verify gtag is loaded
 * - checkConfig()            → Verify conversion configuration
 * - monitorConversions()     → Start real-time monitoring
 * 
 * EXAMPLES:
 * > testEvent('business_website_lead_submit')
 * > testPage('business-website')
 * > monitorConversions()
 */

(function() {
  'use strict';

  console.log('═'.repeat(80));
  console.log('🎯 CONVERSION TESTING HELPER LOADED');
  console.log('═'.repeat(80));
  console.log('');
  console.log('📋 Available Commands:');
  console.log('  • listAllEvents()          - Show all conversion event types');
  console.log('  • testEvent(eventType)     - Test a specific conversion');
  console.log('  • testPage(pageName)       - Test all conversions for a page');
  console.log('  • checkGtag()              - Verify gtag is loaded');
  console.log('  • checkConfig()            - Check conversion configuration');
  console.log('  • monitorConversions()     - Start real-time monitoring');
  console.log('');
  console.log('💡 Examples:');
  console.log('  testEvent("business_website_lead_submit")');
  console.log('  testPage("business-website")');
  console.log('');
  console.log('═'.repeat(80));

  // All conversion events organized by page
  const CONVERSION_EVENTS = {
    'business-website': [
      'business_website_lead_submit',
      'business_website_call_click',
      'business_website_whatsapp_click'
    ],
    'ai-voice-agents': [
      'ai_voice_agents_lead_submit',
      'ai_voice_agents_call_click',
      'ai_voice_agents_whatsapp_click'
    ],
    'nextjs-development': [
      'nextjs_development_lead_submit',
      'nextjs_development_call_click',
      'nextjs_development_whatsapp_click'
    ],
    'reactjs-development': [
      'reactjs_development_lead_submit',
      'reactjs_development_call_click',
      'reactjs_development_whatsapp_click'
    ],
    'whatsapp-business-api': [
      'whatsapp_business_api_lead_submit',
      'whatsapp_business_api_call_click',
      'whatsapp_business_api_whatsapp_click'
    ],
    'ai-chatbot-development': [
      'ai_chatbot_development_lead_submit',
      'ai_chatbot_development_call_click',
      'ai_chatbot_development_whatsapp_click'
    ],
    'shopify-product-page': [
      'shopify_product_page_lead_submit',
      'shopify_product_page_call_click',
      'shopify_product_page_whatsapp_click'
    ],
    'google-ads-management': [
      'google_ads_management_lead_submit',
      'google_ads_management_call_click',
      'google_ads_management_whatsapp_click'
    ],
    'crm-solutions': [
      'crm_solutions_lead_submit',
      'crm_solutions_call_click',
      'crm_solutions_whatsapp_click'
    ],
    'shopify-headless-migration': [
      'shopify_headless_migration_lead_submit',
      'shopify_headless_migration_call_click',
      'shopify_headless_migration_whatsapp_click'
    ],
    'seo-audit': [
      'seo_audit_lead_submit',
      'seo_audit_call_click',
      'seo_audit_whatsapp_click'
    ],
    'global': [
      'newsletter_signup',
      'contact_form_submit'
    ]
  };

  // List all conversion events
  window.listAllEvents = function() {
    console.log('');
    console.log('═'.repeat(80));
    console.log('📋 ALL CONVERSION EVENTS (35 total)');
    console.log('═'.repeat(80));
    console.log('');
    
    let count = 1;
    for (const [page, events] of Object.entries(CONVERSION_EVENTS)) {
      const pageName = page.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      console.log(`${count}. ${pageName} (${events.length} events):`);
      events.forEach(event => {
        console.log(`   → ${event}`);
      });
      console.log('');
      count++;
    }
    
    console.log('═'.repeat(80));
    console.log('💡 Usage: testEvent("business_website_lead_submit")');
    console.log('═'.repeat(80));
    console.log('');
  };

  // Test a specific conversion event
  window.testEvent = async function(eventType) {
    console.log('');
    console.log('═'.repeat(80));
    console.log(`🧪 TESTING CONVERSION: ${eventType}`);
    console.log('═'.repeat(80));
    console.log('');
    
    // Check if gtag is available
    if (typeof window.gtag === 'undefined') {
      console.error('❌ ERROR: gtag is not available');
      console.error('💡 Make sure GoogleAdsTracking component is loaded');
      console.error('💡 Check app/layout.tsx has <GoogleAdsTracking />');
      return;
    }
    
    console.log('✅ gtag is available');
    console.log('');
    
    // Fetch conversion configuration
    console.log('📡 Fetching conversion configuration from /api/google-config...');
    try {
      const response = await fetch('/api/google-config');
      
      if (!response.ok) {
        console.error(`❌ Failed to fetch config: ${response.status} ${response.statusText}`);
        return;
      }
      
      const config = await response.json();
      console.log('✅ Configuration retrieved:');
      console.log('   Conversion ID:', config.conversionId || 'NOT SET');
      console.log('   Total Labels:', Object.keys(config.labels || {}).length);
      console.log('');
      
      // Check if label exists for this event type
      const label = config.labels[eventType];
      if (!label) {
        console.warn(`⚠️  WARNING: No label configured for event type: ${eventType}`);
        console.warn('💡 Configure this label in Admin Panel → Google Ads → Event Labels');
        console.warn('💡 Available labels:', Object.keys(config.labels || {}));
        return;
      }
      
      console.log('✅ Label found:', label);
      console.log('');
      
      // Build send_to parameter
      const sendTo = label.includes('AW-') ? label : `${config.conversionId}/${label}`;
      console.log('📤 Sending conversion to Google Ads:');
      console.log('   send_to:', sendTo);
      console.log('');
      
      // Fire the conversion
      window.gtag('event', 'conversion', {
        send_to: sendTo
      });
      
      console.log('✅ CONVERSION FIRED SUCCESSFULLY!');
      console.log('');
      console.log('🔍 Check:');
      console.log('   1. Network tab for request to google-analytics.com');
      console.log('   2. Tag Assistant extension (if installed)');
      console.log('   3. Google Ads dashboard (wait 3-24 hours)');
      console.log('');
      console.log('═'.repeat(80));
      console.log('');
      
    } catch (error) {
      console.error('❌ ERROR:', error.message);
      console.error('Stack:', error.stack);
    }
  };

  // Test all conversions for a specific page
  window.testPage = function(pageName) {
    console.log('');
    console.log('═'.repeat(80));
    console.log(`🧪 TESTING PAGE: ${pageName}`);
    console.log('═'.repeat(80));
    console.log('');
    
    const events = CONVERSION_EVENTS[pageName];
    
    if (!events) {
      console.error(`❌ ERROR: Unknown page: ${pageName}`);
      console.log('💡 Available pages:');
      Object.keys(CONVERSION_EVENTS).forEach(page => {
        console.log(`   → ${page}`);
      });
      return;
    }
    
    console.log(`Found ${events.length} conversion events for ${pageName}:`);
    events.forEach((event, index) => {
      console.log(`   ${index + 1}. ${event}`);
    });
    console.log('');
    console.log('💡 Testing each event (5 second delay between tests)...');
    console.log('');
    
    // Test each event with a delay
    events.forEach((event, index) => {
      setTimeout(() => {
        console.log(`\n${'─'.repeat(80)}`);
        console.log(`Testing ${index + 1}/${events.length}: ${event}`);
        console.log('─'.repeat(80));
        window.testEvent(event);
      }, index * 5000); // 5 second delay between tests
    });
  };

  // Check if gtag is loaded
  window.checkGtag = function() {
    console.log('');
    console.log('═'.repeat(80));
    console.log('🔍 CHECKING GTAG SETUP');
    console.log('═'.repeat(80));
    console.log('');
    
    // Check gtag
    if (typeof window.gtag === 'undefined') {
      console.error('❌ gtag is NOT available');
      console.error('💡 GoogleAdsTracking component may not be loaded');
      console.error('💡 Check app/layout.tsx');
    } else {
      console.log('✅ gtag is available');
      console.log('   Type:', typeof window.gtag);
    }
    
    // Check dataLayer
    if (typeof window.dataLayer === 'undefined') {
      console.error('❌ dataLayer is NOT available');
    } else {
      console.log('✅ dataLayer is available');
      console.log('   Events:', window.dataLayer.length);
    }
    
    // Check for Google Ads script
    const scripts = Array.from(document.scripts);
    const gtagScript = scripts.find(s => s.src.includes('googletagmanager.com/gtag/js'));
    
    if (gtagScript) {
      console.log('✅ Google Tag Manager script loaded');
      console.log('   URL:', gtagScript.src);
    } else {
      console.error('❌ Google Tag Manager script NOT found');
      console.error('💡 Check if GoogleAdsTracking component is in layout.tsx');
    }
    
    console.log('');
    console.log('═'.repeat(80));
    console.log('');
  };

  // Check conversion configuration
  window.checkConfig = async function() {
    console.log('');
    console.log('═'.repeat(80));
    console.log('🔍 CHECKING CONVERSION CONFIGURATION');
    console.log('═'.repeat(80));
    console.log('');
    
    try {
      const response = await fetch('/api/google-config');
      
      if (!response.ok) {
        console.error(`❌ Failed to fetch config: ${response.status} ${response.statusText}`);
        console.error('💡 Check if database is configured');
        console.error('💡 Check if IntegrationSettings table exists');
        return;
      }
      
      const config = await response.json();
      
      console.log('✅ Configuration retrieved successfully');
      console.log('');
      console.log('📊 Configuration Details:');
      console.log('─'.repeat(80));
      console.log('Conversion ID:', config.conversionId || '❌ NOT SET');
      console.log('Total Labels:', Object.keys(config.labels || {}).length, '/ 35');
      console.log('');
      
      // Show all configured labels
      if (config.labels && Object.keys(config.labels).length > 0) {
        console.log('📋 Configured Labels:');
        Object.entries(config.labels).forEach(([event, label], index) => {
          const status = label && label !== '[LABEL]' && label !== '[LABEL_HERE]' ? '✅' : '⚠️ ';
          console.log(`   ${index + 1}. ${status} ${event}: ${label}`);
        });
      } else {
        console.warn('⚠️  No labels configured');
        console.log('💡 Configure labels in Admin Panel → Google Ads → Event Labels');
      }
      
      console.log('');
      console.log('═'.repeat(80));
      console.log('');
      
    } catch (error) {
      console.error('❌ ERROR:', error.message);
      console.error('Stack:', error.stack);
    }
  };

  // Monitor conversions in real-time
  window.monitorConversions = function() {
    console.log('');
    console.log('═'.repeat(80));
    console.log('👁️  REAL-TIME CONVERSION MONITORING STARTED');
    console.log('═'.repeat(80));
    console.log('');
    console.log('💡 This will log all gtag events to console');
    console.log('💡 Trigger conversions to see them appear here');
    console.log('💡 Press Ctrl+C to stop (or refresh page)');
    console.log('');
    console.log('─'.repeat(80));
    console.log('');
    
    // Intercept gtag calls
    const originalGtag = window.gtag;
    
    window.gtag = function() {
      const args = Array.from(arguments);
      const [command, action, params] = args;
      
      // Log conversion events
      if (command === 'event' && action === 'conversion') {
        console.log('🎯 CONVERSION EVENT DETECTED!');
        console.log('   Time:', new Date().toLocaleTimeString());
        console.log('   send_to:', params?.send_to || 'NOT SET');
        console.log('   value:', params?.value || 'N/A');
        console.log('   currency:', params?.currency || 'N/A');
        console.log('');
      }
      
      // Call original gtag
      return originalGtag.apply(this, args);
    };
    
    console.log('✅ Monitoring active. Waiting for conversion events...');
    console.log('');
  };

  // Auto-check on load
  setTimeout(() => {
    console.log('🔄 Running automatic health check...');
    window.checkGtag();
  }, 1000);

})();
