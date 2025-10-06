import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const provider = searchParams.get('provider') || undefined;
  const level = searchParams.get('level') || undefined;
  const take = Math.min(Number(searchParams.get('take') || 50), 200);

  const logs = await prisma.integrationLog.findMany({
    where: {
      provider,
      level,
    },
    orderBy: { createdAt: 'desc' },
    take,
  });
  return NextResponse.json({ logs });
}


