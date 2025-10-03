'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

/**
 * Google Ads Conversion Tracking Component
 * 
 * Purpose:
 * - Implements Google Ads conversion tracking for advertising campaigns
 * - Tracks conversions and user interactions for ad performance measurement
 * - Uses Google Tag (gtag.js) for conversion tracking
 * 
 * @param {string} conversionId - Google Ads conversion ID (format: AW-XXXXXXXXXX)
 * 
 * Flow:
 * 1. Component mounts
 * 2. Loads Google Tag script asynchronously
 * 3. Initializes dataLayer array
 * 4. Configures Google Ads tag with conversion ID
 * 5. Tracks page views and conversions automatically
 * 
 * @example
 * // In layout.tsx:
 * <GoogleAdsTracking conversionId="AW-17606401808" />
 */

interface GoogleAdsTrackingProps {
  conversionId: string;
}

export default function GoogleAdsTracking({ conversionId }: GoogleAdsTrackingProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Log component initialization
  useEffect(() => {
    console.log('[GoogleAdsTracking] Component initialized');
    console.log('[GoogleAdsTracking] Conversion ID:', conversionId);
    
    // Validate conversion ID format
    if (!conversionId || !conversionId.startsWith('AW-')) {
      console.error('[GoogleAdsTracking] Invalid conversion ID format. Expected format: AW-XXXXXXXXXX');
      setHasError(true);
    }

    return () => {
      console.log('[GoogleAdsTracking] Component unmounted');
    };
  }, [conversionId]);

  // Handle script load success
  const handleScriptLoad = () => {
    console.log('[GoogleAdsTracking] Google Ads script loaded successfully');
    setIsLoaded(true);
    
    // Verify gtag is available
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      console.log('[GoogleAdsTracking] gtag function is available');
      console.log('[GoogleAdsTracking] dataLayer initialized:', window.dataLayer);
    } else {
      console.warn('[GoogleAdsTracking] gtag function not found after script load');
    }
  };

  // Handle script load error
  const handleScriptError = (error: Error) => {
    console.error('[GoogleAdsTracking] Failed to load Google Ads script:', error);
    console.error('[GoogleAdsTracking] Error details:', {
      message: error.message,
      stack: error.stack,
      conversionId: conversionId
    });
    setHasError(true);
  };

  // Monitor dataLayer for debugging
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      console.log('[GoogleAdsTracking] Monitoring dataLayer events');
      
      // Log all gtag calls for debugging
      const originalGtag = window.gtag;
      window.gtag = function(command: any, targetIdOrDate: any, config?: any) {
        console.log('[GoogleAdsTracking] gtag call:', command, targetIdOrDate, config);
        return originalGtag.call(window, command, targetIdOrDate, config);
      } as any;
    }
  }, [isLoaded]);

  // Don't render if there's an error with the conversion ID
  if (hasError) {
    console.error('[GoogleAdsTracking] Component not rendering due to error');
    return null;
  }

  console.log('[GoogleAdsTracking] Rendering tracking scripts');

  return (
    <>
      {/* Load Google Tag Manager script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${conversionId}`}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
        id="google-ads-script"
      />
      
      {/* Initialize Google Ads tracking */}
      <Script
        id="google-ads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('[GoogleAdsTracking] Initializing Google Ads');
            
            try {
              // Initialize dataLayer
              window.dataLayer = window.dataLayer || [];
              console.log('[GoogleAdsTracking] dataLayer initialized');
              
              // Define gtag function
              function gtag(){
                dataLayer.push(arguments);
                console.log('[GoogleAdsTracking] Event pushed to dataLayer:', arguments);
              }
              window.gtag = gtag;
              
              // Set current timestamp
              gtag('js', new Date());
              console.log('[GoogleAdsTracking] Timestamp set:', new Date().toISOString());
              
              // Configure Google Ads
              gtag('config', '${conversionId}');
              console.log('[GoogleAdsTracking] Google Ads configured with ID: ${conversionId}');
              
              console.log('[GoogleAdsTracking] Initialization complete');
            } catch (error) {
              console.error('[GoogleAdsTracking] Initialization error:', error);
              console.error('[GoogleAdsTracking] Error stack:', error.stack);
            }
          `,
        }}
      />
    </>
  );
}

/**
 * Type definitions are extended in GoogleAnalytics.tsx to support both GA4 and Google Ads
 * No need to redeclare here - using shared global types
 */

/**
 * Utility function to track conversion events
 * 
 * Use this function to manually track specific conversion actions
 * 
 * @param conversionLabel - The conversion label from Google Ads
 * @param value - Optional conversion value
 * @param currency - Optional currency code (default: USD)
 * 
 * @example
 * // Track a purchase conversion
 * trackConversion('purchase_label', 99.99, 'USD');
 * 
 * // Track a form submission
 * trackConversion('contact_form_label');
 */
export const trackConversion = (
  conversionLabel: string,
  value?: number,
  currency: string = 'USD'
) => {
  console.log('[GoogleAdsTracking] trackConversion called');
  console.log('[GoogleAdsTracking] Conversion details:', {
    label: conversionLabel,
    value,
    currency,
    timestamp: new Date().toISOString()
  });

  try {
    if (typeof window !== 'undefined' && window.gtag) {
      const conversionData: Record<string, any> = {
        send_to: conversionLabel,
      };

      if (value !== undefined) {
        conversionData.value = value;
        conversionData.currency = currency;
      }

      window.gtag('event', 'conversion', conversionData);
      console.log('[GoogleAdsTracking] Conversion tracked successfully:', conversionData);
    } else {
      console.warn('[GoogleAdsTracking] gtag not available, conversion not tracked');
    }
  } catch (error) {
    console.error('[GoogleAdsTracking] Error tracking conversion:', error);
    console.error('[GoogleAdsTracking] Conversion data:', {
      label: conversionLabel,
      value,
      currency
    });
  }
};

/**
 * Utility function to track custom events
 * 
 * @param eventName - Name of the event to track
 * @param eventParams - Optional event parameters
 * 
 * @example
 * // Track a button click
 * trackEvent('button_click', { button_name: 'Get Started' });
 * 
 * // Track a page engagement
 * trackEvent('page_engagement', { engagement_time: 30 });
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  console.log('[GoogleAdsTracking] trackEvent called');
  console.log('[GoogleAdsTracking] Event details:', {
    name: eventName,
    params: eventParams,
    timestamp: new Date().toISOString()
  });

  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams || {});
      console.log('[GoogleAdsTracking] Event tracked successfully');
    } else {
      console.warn('[GoogleAdsTracking] gtag not available, event not tracked');
    }
  } catch (error) {
    console.error('[GoogleAdsTracking] Error tracking event:', error);
    console.error('[GoogleAdsTracking] Event data:', {
      name: eventName,
      params: eventParams
    });
  }
};

