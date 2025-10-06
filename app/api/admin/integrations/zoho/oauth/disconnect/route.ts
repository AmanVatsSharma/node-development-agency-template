import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const settings = await prisma.integrationSettings.findFirst();
    if (!settings) return NextResponse.json({ ok: true });
    await prisma.integrationSettings.update({
      where: { id: settings.id },
      data: {
        zohoRefreshToken: null,
        zohoAccessToken: null,
        zohoTokenExpiresAt: null,
      },
    });
    await prisma.integrationLog.create({
      data: {
        type: 'disconnect',
        provider: 'zoho',
        level: 'info',
        message: 'Zoho disconnected from admin panel',
      },
    });
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: String(error?.message || error) }, { status: 500 });
  }
}


