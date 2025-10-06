import prisma from './prisma';

type ConversionEventType = 'lead_submit' | 'call_click' | 'whatsapp_click' | 'newsletter_signup';

export async function getGoogleConfig() {
  const settings = await prisma.integrationSettings.findFirst();
  if (!settings) throw new Error('IntegrationSettings not found');
  const labels = (settings.googleEventLabels as any) || {};
  return {
    conversionId: settings.googleConversionId || '',
    labels,
  };
}

// Client-side helper payload for gtag
export async function getClientConversionMapping() {
  const cfg = await getGoogleConfig();
  return {
    conversionId: cfg.conversionId,
    labels: cfg.labels,
  };
}

// Server-side Google Ads Conversion API stub (optional reliability layer)
// Note: Full Google Ads API requires OAuth2 and developer token. Here we store intent
// and log events to support future expansion, while gtag handles primary tracking.
export async function logServerConversion(eventType: ConversionEventType, context?: Record<string, any>) {
  await prisma.integrationLog.create({
    data: {
      type: eventType,
      provider: 'google_ads',
      level: 'info',
      message: 'Conversion event logged (client-side gtag expected to fire)',
      request: context as any,
    },
  });
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


