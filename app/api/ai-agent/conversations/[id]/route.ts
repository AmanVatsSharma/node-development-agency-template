/**
 * AI Agent Single Conversation API
 * GET /api/ai-agent/conversations/[id]
 * Returns full conversation details with messages (admin only)
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

const ADMIN_COOKIE_NAME = 'admin_session';

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const conversationId = context.params?.id;
  console.log('[AI Conversations API] Fetching conversation detail', { conversationId });

  try {
    // Auth check (same as list endpoint)
    const sessionCookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
    const isAuthorized = sessionCookie === adminPassword;

    if (!isAuthorized) {
      console.warn('[AI Conversations API] Unauthorized access attempt to conversation detail');
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (!conversationId) {
      console.warn('[AI Conversations API] Missing conversation ID in request');
      return NextResponse.json(
        { success: false, error: 'Conversation ID is required' },
        { status: 400 }
      );
    }

    const conversation = await prisma.aIConversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) {
      console.warn('[AI Conversations API] Conversation not found', { conversationId });
      return NextResponse.json(
        { success: false, error: 'Conversation not found' },
        { status: 404 }
      );
    }

    console.log('[AI Conversations API] Conversation detail loaded', {
      id: conversation.id,
      messageCount: conversation.messageCount,
      status: conversation.status,
    });

    return NextResponse.json({ success: true, conversation });
  } catch (error: any) {
    console.error('[AI Conversations API] Error loading conversation detail:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch conversation' },
      { status: 500 }
    );
  }
}
