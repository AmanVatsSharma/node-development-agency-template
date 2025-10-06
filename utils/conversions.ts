type ConversionEventType = 'lead_submit' | 'call_click' | 'whatsapp_click' | 'newsletter_signup';

let cachedMapping: { conversionId: string; labels: Record<string, string> } | null = null;

async function getMapping() {
  if (cachedMapping) return cachedMapping;
  try {
    const res = await fetch('/api/google-config');
    const data = await res.json();
    cachedMapping = { conversionId: data.conversionId || '', labels: data.labels || {} };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[Conversions] Failed to load google-config', e);
    cachedMapping = { conversionId: '', labels: {} };
  }
  return cachedMapping!;
}

export async function fireConversion(eventType: ConversionEventType, value?: number, currency: string = 'INR') {
  // Server-side log for reliability
  try {
    void fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventType, value, currency, ts: Date.now() }),
    });
  } catch {}

  // Client-side gtag
  try {
    const mapping = await getMapping();
    const labelOrSendTo = mapping.labels?.[eventType] as string | undefined;
    const sendTo = labelOrSendTo?.includes('AW-') ? labelOrSendTo : (mapping.conversionId && labelOrSendTo ? `${mapping.conversionId}/${labelOrSendTo}` : undefined);

    if (typeof window !== 'undefined' && window.gtag && sendTo) {
      const params: Record<string, any> = { send_to: sendTo };
      if (typeof value === 'number') {
        params.value = value;
        params.currency = currency;
      }
      window.gtag('event', 'conversion', params);
      // eslint-disable-next-line no-console
      console.log('[Conversions] Fired', { eventType, params });
    } else {
      // eslint-disable-next-line no-console
      console.warn('[Conversions] gtag not available or missing send_to');
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[Conversions] Error firing conversion', e);
  }
}


