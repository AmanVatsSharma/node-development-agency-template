import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { upsertIntegrationSettingsFromEnv } from '@/app/lib/zohoService';

// NOTE: In production, protect these routes with auth/role checks.

export async function GET() {
  let settings = await prisma.integrationSettings.findFirst();
  if (!settings) {
    await upsertIntegrationSettingsFromEnv();
    settings = await prisma.integrationSettings.findFirst();
  }
  return NextResponse.json({ settings });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // Ensure only allowed keys are written
  const allowed: Record<string, any> = {};
  const keys = [
    'zohoClientId',
    'zohoClientSecret',
    'zohoRefreshToken',
    'googleConversionId',
    'googleApiKey',
    'googleEventLabels',
  ];
  for (const k of keys) if (k in body) allowed[k] = body[k];

  const exists = await prisma.integrationSettings.findFirst();
  let settings;
  if (exists) {
    settings = await prisma.integrationSettings.update({ where: { id: exists.id }, data: allowed });
  } else {
    settings = await prisma.integrationSettings.create({ data: allowed });
  }
  return NextResponse.json({ settings });
}


