import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(`/admin/integrations?zoho_error=${encodeURIComponent(error)}`);
  }

  if (!code) {
    return NextResponse.redirect('/admin/integrations?zoho_error=missing_code');
  }

  try {
    const settings = await prisma.integrationSettings.findFirst();
    if (!settings?.zohoClientId || !settings?.zohoClientSecret) {
      return NextResponse.redirect('/admin/integrations?zoho_error=missing_credentials');
    }

    // Exchange code for tokens
    const accountsBase = process.env.ZOHO_ACCOUNTS_BASE || 'https://accounts.zoho.in';
    const origin = `${req.nextUrl.protocol}//${req.nextUrl.host}`;
    const redirectUri = `${origin}/api/admin/integrations/zoho/oauth/callback`;

    const tokenUrl = `${accountsBase}/oauth/v2/token`;
    const params = new URLSearchParams({
      code,
      client_id: settings.zohoClientId,
      client_secret: settings.zohoClientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });

    const resp = await fetch(tokenUrl, { method: 'POST', body: params });
    const data: any = await resp.json().catch(() => ({}));

    await prisma.integrationLog.create({
      data: {
        type: 'token_exchange',
        provider: 'zoho',
        level: resp.ok ? 'info' : 'error',
        message: resp.ok ? 'Exchanged auth code for tokens' : 'Token exchange failed',
        statusCode: resp.status,
        response: data,
      },
    });

    if (!resp.ok || !data.refresh_token) {
      return NextResponse.redirect('/admin/integrations?zoho_error=exchange_failed');
    }

    // Save refresh token and access token
    await prisma.integrationSettings.update({
      where: { id: settings.id },
      data: {
        zohoRefreshToken: data.refresh_token,
        zohoAccessToken: data.access_token || null,
        zohoTokenExpiresAt: data.expires_in
          ? new Date(Date.now() + (Number(data.expires_in) - 60) * 1000)
          : null,
        lastZohoTokenRefreshAt: new Date(),
      },
    });

    return NextResponse.redirect('/admin/integrations?zoho_connected=1');
  } catch (e: any) {
    console.error('[Zoho OAuth Callback] Error:', e);
    return NextResponse.redirect('/admin/integrations?zoho_error=exception');
  }
}


