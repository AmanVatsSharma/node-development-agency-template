/**
 * Process Server-Side Conversion Retry Queue
 * 
 * This endpoint should be called by a cron job every 5-15 minutes
 * to process failed server-side conversion uploads
 * 
 * Setup with Vercel Cron:
 * Add to vercel.json:
 * {
 *   "crons": [{
 *     "path": "/api/admin/process-conversion-queue",
 *     "schedule": "*/15 * * * *"
 *   }]
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { processServerSideRetryQueue } from '@/app/lib/googleAdsServerSide';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60; // 60 seconds max execution time

export async function GET(request: NextRequest) {
  try {
    // Simple auth check (optional - add proper auth for production)
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('[Conversion Queue] Starting processing...');
    
    // Process the retry queue
    await processServerSideRetryQueue();
    
    console.log('[Conversion Queue] Processing complete');
    
    return NextResponse.json({
      success: true,
      message: 'Conversion retry queue processed successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('[Conversion Queue] Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Also support POST for manual triggers
  return GET(request);
}
