import { NextRequest, NextResponse } from 'next/server';
import { PerformanceMetrics } from '@/utils/performanceMonitoring';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Extract metrics and metadata
    const { metrics, url, userAgent, timestamp } = data;
    
    // Validate metrics
    if (!metrics) {
      return NextResponse.json(
        { error: 'Invalid metrics data' },
        { status: 400 }
      );
    }
    
    // Log metrics (in a real app, you would store this in a database)
    console.log('Performance metrics received:', {
      url,
      timestamp,
      metrics: {
        LCP: metrics.LCP,
        FID: metrics.FID,
        CLS: metrics.CLS,
        TTFB: metrics.TTFB,
        FCP: metrics.FCP,
        domLoad: metrics.domLoad,
        windowLoad: metrics.windowLoad,
        resourceCount: metrics.resources?.length || 0,
      }
    });
    
    // In a real application, you would:
    // 1. Store metrics in a database (e.g., MongoDB, PostgreSQL)
    // 2. Send them to an analytics service (e.g., Google Analytics 4, Segment)
    // 3. Potentially trigger alerts for poor performance
    
    // Example database storage (pseudocode):
    /*
    await db.performanceMetrics.create({
      url,
      userAgent,
      timestamp,
      lcp: metrics.LCP,
      fid: metrics.FID,
      cls: metrics.CLS,
      ttfb: metrics.TTFB,
      fcp: metrics.FCP,
      domLoad: metrics.domLoad,
      windowLoad: metrics.windowLoad,
    });
    */
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing performance metrics:', error);
    return NextResponse.json(
      { error: 'Failed to process metrics' },
      { status: 500 }
    );
  }
}

// Also allow OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
} 