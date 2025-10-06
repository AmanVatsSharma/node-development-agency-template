import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const takeParam = url.searchParams.get('take');
    const provider = url.searchParams.get('provider') || undefined; // 'zoho' | 'google_ads'
    const level = url.searchParams.get('level') || undefined; // 'info' | 'warn' | 'error'

    let take = Number(takeParam ?? 100);
    if (!Number.isFinite(take) || take <= 0) take = 100;
    if (take > 500) take = 500;

    const where: any = {};
    if (provider) where.provider = provider;
    if (level) where.level = level;

    const logs = await prisma.integrationLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take,
    });

    return NextResponse.json({ logs });
  } catch (error: any) {
    return NextResponse.json(
      { error: String(error?.message || error) },
      { status: 500 }
    );
  }
}
