type ConversionEventType = 'lead_submit' | 'call_click' | 'whatsapp_click' | 'newsletter_signup';

// Cache per landing page
let cachedMappings: Record<string, { conversionId: string; labels: Record<string, string> }> = {};

/**
 * Get landing page specific conversion mapping
 * Falls back to global config if landing page config not found
 */
async function getMapping(landingPageSlug?: string) {
  const cacheKey = landingPageSlug || '_global';
  
  if (cachedMappings[cacheKey]) {
    return cachedMappings[cacheKey];
  }

  try {
    // If landing page slug provided, try to get landing page specific config
    if (landingPageSlug) {
      const res = await fetch(`/api/landing-page-config?slug=${landingPageSlug}`);
      if (res.ok) {
        const data = await res.json();
        cachedMappings[cacheKey] = {
          conversionId: data.conversionId || '',
          labels: data.labels || {},
        };
        return cachedMappings[cacheKey];
      }
    }
    
    // Fallback to global config
    const res = await fetch('/api/google-config');
    const data = await res.json();
    cachedMappings[cacheKey] = {
      conversionId: data.conversionId || '',
      labels: data.labels || {},
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[Conversions] Failed to load config', e);
    cachedMappings[cacheKey] = { conversionId: '', labels: {} };
  }
  
  return cachedMappings[cacheKey];
}

/**
 * Fire Google Ads conversion event
 * @param eventType - Type of conversion event
 * @param landingPageSlug - Optional landing page slug for page-specific conversion labels
 * @param value - Optional conversion value
 * @param currency - Currency code (default: INR)
 */
export async function fireConversion(
  eventType: ConversionEventType,
  landingPageSlug?: string,
  value?: number,
  currency: string = 'INR'
) {
  // Server-side log for reliability
  try {
    void fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType,
        landingPageSlug,
        value,
        currency,
        ts: Date.now(),
      }),
    });
  } catch {}

  // Client-side gtag
  try {
    const mapping = await getMapping(landingPageSlug);
    const labelOrSendTo = mapping.labels?.[eventType] as string | undefined;
    const sendTo = labelOrSendTo?.includes('AW-')
      ? labelOrSendTo
      : mapping.conversionId && labelOrSendTo
      ? `${mapping.conversionId}/${labelOrSendTo}`
      : undefined;

    if (typeof window !== 'undefined' && window.gtag && sendTo) {
      const params: Record<string, any> = { send_to: sendTo };
      if (typeof value === 'number') {
        params.value = value;
        params.currency = currency;
      }
      window.gtag('event', 'conversion', params);
      // eslint-disable-next-line no-console
      console.log('[Conversions] Fired', {
        eventType,
        landingPageSlug,
        params,
      });
    } else {
      // eslint-disable-next-line no-console
      console.warn('[Conversions] gtag not available or missing send_to', {
        eventType,
        landingPageSlug,
        sendTo,
      });
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[Conversions] Error firing conversion', e);
  }
}


