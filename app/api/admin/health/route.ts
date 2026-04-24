/**
 * Admin System Health API
 * Real-time health checks for database, Zoho CRM, AI Agent, and retry queue
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { testZohoConnection } from '@/app/lib/zohoService';

const prisma = new PrismaClient();

function isAuthenticated(req: NextRequest) {
  const cookie = req.cookies.get('admin_session')?.value;
  return cookie === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const results = await Promise.allSettled([
    checkDatabase(),
    checkZoho(),
    checkAIAgent(),
    checkRetryQueue(),
  ]);

  const [dbResult, zohoResult, aiResult, retryResult] = results;

  return NextResponse.json({
    database: dbResult.status === 'fulfilled' ? dbResult.value : { ok: false, latencyMs: null, error: String(dbResult.reason) },
    zoho: zohoResult.status === 'fulfilled' ? zohoResult.value : { ok: false, connected: false, error: String(zohoResult.reason) },
    aiAgent: aiResult.status === 'fulfilled' ? aiResult.value : { ok: false, enabled: false, error: String(aiResult.reason) },
    retryQueue: retryResult.status === 'fulfilled' ? retryResult.value : { queued: 0, failed: 0 },
    checkedAt: new Date().toISOString(),
  });
}

async function checkDatabase() {
  const start = Date.now();
  await prisma.$queryRaw`SELECT 1`;
  const latencyMs = Date.now() - start;
  return { ok: true, latencyMs };
}

async function checkZoho() {
  try {
    const result = await testZohoConnection();
    return {
      ok: result.ok,
      connected: result.ok && result.accessTokenPresent,
      tokenExpiresAt: result.tokenExpiresAt ?? null,
      lastRefreshAt: result.lastRefreshAt ?? null,
    };
  } catch (err: unknown) {
    return { ok: false, connected: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
}

async function checkAIAgent() {
  const config = await prisma.aIAgentConfig.findFirst();
  if (!config) {
    return { ok: true, enabled: false, provider: null, hasApiKey: false };
  }
  return {
    ok: true,
    enabled: config.enabled,
    provider: config.provider,
    model: config.model,
    hasApiKey: !!config.apiKey,
  };
}

async function checkRetryQueue() {
  const [queued, failed] = await Promise.all([
    prisma.integrationRetry.count({ where: { status: 'queued' } }),
    prisma.integrationRetry.count({ where: { status: 'failed' } }),
  ]);
  return { queued, failed };
}
