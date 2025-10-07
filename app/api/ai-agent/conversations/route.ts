/**
 * AI Agent Conversations API
 * View and manage conversation history (Admin only)
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

const ADMIN_COOKIE_NAME = 'admin_session';

/**
 * GET - Fetch conversation history
 * Query params:
 * - limit: number of conversations to fetch (default: 50)
 * - status: filter by status (active, converted, abandoned, closed)
 * - leadCaptured: filter by lead captured (true/false)
 */
export async function GET(request: NextRequest) {
  try {
    // Check authentication using cookie-based auth
    const sessionCookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
    const isAuthorized = sessionCookie === adminPassword;
    
    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '50');
    const status = searchParams.get('status');
    const leadCaptured = searchParams.get('leadCaptured');

    // Build where clause
    const where: any = {};
    if (status) where.status = status;
    if (leadCaptured !== null) where.leadCaptured = leadCaptured === 'true';

    // Fetch conversations
    const conversations = await prisma.aIConversation.findMany({
      where,
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        sessionId: true,
        pageUrl: true,
        pagePath: true,
        pageTitle: true,
        status: true,
        leadCaptured: true,
        messageCount: true,
        sentimentScore: true,
        leadScore: true,
        conversionData: true,
        createdAt: true,
        lastMessageAt: true,
      }
    });

    // Get statistics
    const stats = await prisma.aIConversation.aggregate({
      _count: true,
      where: { createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } }
    });

    const conversionsToday = await prisma.aIConversation.count({
      where: {
        leadCaptured: true,
        createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
      }
    });

    return NextResponse.json({
      success: true,
      conversations,
      stats: {
        totalToday: stats._count,
        conversionsToday,
        conversionRate: stats._count > 0 ? (conversionsToday / stats._count * 100).toFixed(1) : 0
      }
    });

  } catch (error) {
    console.error('[AI Conversations API] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch conversations' },
      { status: 500 }
    );
  }
}

/**
 * GET - Fetch single conversation details
 * Note: This is a helper function, not an HTTP route handler
 * To use this, create a dynamic route at /app/api/ai-agent/conversations/[id]/route.ts
 */
export async function GET_SINGLE(conversationId: string, request: NextRequest) {
  try {
    // Check authentication using cookie-based auth
    const sessionCookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
    const isAuthorized = sessionCookie === adminPassword;
    
    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const conversation = await prisma.aIConversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) {
      return NextResponse.json(
        { success: false, error: 'Conversation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      conversation
    });

  } catch (error) {
    console.error('[AI Conversations API] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch conversation' },
      { status: 500 }
    );
  }
}
