import prisma from './prisma';

type ZohoTokenState = {
  accessToken: string;
  expiresAt: Date;
};

type CreateLeadParams = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  campaign?: string;
  leadSource?: string;
  raw?: Record<string, any>;
};

const ZOHO_TOKEN_URL = 'https://accounts.zoho.in/oauth/v2/token';
const ZOHO_LEADS_URL = 'https://www.zohoapis.in/crm/v2/Leads';

async function getSettings() {
  const settings = await prisma.integrationSettings.findFirst();
  if (!settings) {
    throw new Error('IntegrationSettings not found. Initialize in admin.');
  }
  return settings;
}

async function saveToken(accessToken: string, expiresInSeconds: number) {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + (expiresInSeconds - 60) * 1000); // refresh 60s early
  await prisma.integrationSettings.updateMany({
    data: {
      zohoAccessToken: accessToken,
      zohoTokenExpiresAt: expiresAt,
      lastZohoTokenRefreshAt: now,
    },
  });
  return { accessToken, expiresAt } as ZohoTokenState;
}

async function refreshAccessToken(): Promise<ZohoTokenState> {
  const settings = await getSettings();
  if (!settings.zohoClientId || !settings.zohoClientSecret || !settings.zohoRefreshToken) {
    throw new Error('Zoho credentials are not configured');
  }

  const params = new URLSearchParams({
    refresh_token: settings.zohoRefreshToken,
    client_id: settings.zohoClientId,
    client_secret: settings.zohoClientSecret,
    grant_type: 'refresh_token',
  });

  const resp = await fetch(`${ZOHO_TOKEN_URL}?${params.toString()}`, { method: 'POST' });
  const data: any = await resp.json().catch(() => ({}));

  if (!resp.ok) {
    await prisma.integrationLog.create({
      data: {
        type: 'token_refresh',
        provider: 'zoho',
        level: 'error',
        message: 'Zoho token refresh failed',
        statusCode: resp.status,
        request: data ? { url: ZOHO_TOKEN_URL } : undefined,
        response: data,
      },
    });
    throw new Error(`Zoho token refresh failed: ${resp.status}`);
  }

  await prisma.integrationLog.create({
    data: {
      type: 'token_refresh',
      provider: 'zoho',
      level: 'info',
      message: 'Zoho token refreshed',
      response: data,
    },
  });

  return saveToken(data.access_token, data.expires_in);
}

async function getValidAccessToken(): Promise<string> {
  const settings = await getSettings();
  const now = new Date();
  if (settings.zohoAccessToken && settings.zohoTokenExpiresAt && settings.zohoTokenExpiresAt > new Date(now.getTime() + 30 * 1000)) {
    return settings.zohoAccessToken;
  }
  const token = await refreshAccessToken();
  return token.accessToken;
}

export async function createZohoLead(params: CreateLeadParams) {
  const { name, email, phone, message, source, campaign, leadSource, raw } = params;

  const accessToken = await getValidAccessToken();

  // Map to Zoho fields
  const payload = {
    data: [
      {
        Last_Name: name || 'Unknown',
        Email: email,
        Phone: phone,
        Description: message,
        Lead_Source: leadSource || source || 'Website',
        Campaign_Source: campaign,
        // Preserve original payload for audit
        Custom_Lead_Source__c: source,
      },
    ],
    trigger: ['workflow'],
  };

  const resp = await fetch(ZOHO_LEADS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Zoho-oauthtoken ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const data: any = await resp.json().catch(() => ({}));

  await prisma.integrationLog.create({
    data: {
      type: 'lead_submit',
      provider: 'zoho',
      level: resp.ok ? 'info' : 'error',
      message: resp.ok ? 'Zoho lead created' : 'Zoho lead creation failed',
      statusCode: resp.status,
      request: payload as any,
      response: data,
    },
  });

  if (!resp.ok) {
    // Token expiry specific handling: 401 => refresh and retry once
    if (resp.status === 401) {
      await refreshAccessToken();
      return createZohoLead(params);
    }
    throw new Error(`Zoho lead creation failed: ${resp.status}`);
  }

  const record = data?.data?.[0];
  const zohoLeadId: string | undefined = record?.details?.id;
  return { zohoLeadId, response: data };
}

export async function upsertIntegrationSettingsFromEnv() {
  // Initialize settings with env if not present
  const count = await prisma.integrationSettings.count();
  if (count === 0) {
    await prisma.integrationSettings.create({
      data: {
        zohoClientId: process.env.ZOHO_CLIENT_ID || null,
        zohoClientSecret: process.env.ZOHO_CLIENT_SECRET || null,
        zohoRefreshToken: process.env.ZOHO_REFRESH_TOKEN || null,
        googleConversionId: process.env.GOOGLE_CONVERSION_ID || null,
        googleApiKey: process.env.GOOGLE_API_KEY || null,
        googleEventLabels: {
          lead_submit: process.env.GOOGLE_LEAD_SUBMIT_LABEL || null,
          call_click: process.env.GOOGLE_CALL_CLICK_LABEL || null,
          whatsapp_click: process.env.GOOGLE_WHATSAPP_CLICK_LABEL || null,
          newsletter_signup: process.env.GOOGLE_NEWSLETTER_SIGNUP_LABEL || null,
        } as any,
      },
    });
  }
}

export type { CreateLeadParams };

// Lightweight connectivity test for admin UI
export async function testZohoConnection() {
  try {
    const accessToken = await getValidAccessToken();
    const settings = await prisma.integrationSettings.findFirst();
    return {
      ok: true,
      accessTokenPresent: Boolean(accessToken),
      tokenExpiresAt: settings?.zohoTokenExpiresAt || null,
      lastRefreshAt: settings?.lastZohoTokenRefreshAt || null,
    };
  } catch (error: any) {
    return { ok: false, error: String(error?.message || error) };
  }
}


