import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// Build Zoho OAuth URL (Authorization Code grant)
// Defaults to India data center; override with env ZOHO_ACCOUNTS_BASE if provided
function buildZohoAuthUrl(clientId: string, redirectUri: string, scope: string) {
  const accountsBase = process.env.ZOHO_ACCOUNTS_BASE || 'https://accounts.zoho.in';
  const params = new URLSearchParams({
    scope,
    client_id: clientId,
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
    redirect_uri: redirectUri,
  });
  return `${accountsBase}/oauth/v2/auth?${params.toString()}`;
}

export async function GET(req: NextRequest) {
  try {
    // Read current settings
    const settings = await prisma.integrationSettings.findFirst();
    if (!settings?.zohoClientId) {
      return NextResponse.json({ error: 'Zoho Client ID not configured' }, { status: 400 });
    }

    // Compute redirect URI for callback
    const origin = `${req.nextUrl.protocol}//${req.nextUrl.host}`;
    const redirectUri = `${origin}/api/admin/integrations/zoho/oauth/callback`;

    // Minimal scopes for Leads + settings access; adjust as needed
    const scope = 'ZohoCRM.modules.ALL,ZohoCRM.settings.ALL';

    const url = buildZohoAuthUrl(settings.zohoClientId, redirectUri, scope);
    return NextResponse.redirect(url);
  } catch (error: any) {
    console.error('[Zoho OAuth Start] Error:', error);
    return NextResponse.json({ error: String(error?.message || error) }, { status: 500 });
  }
}


