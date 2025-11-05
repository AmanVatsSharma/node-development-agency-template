import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

const ADMIN_COOKIE_NAME = 'admin_session';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Auth check
    const sessionCookie = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
    const isAuthorized = sessionCookie === adminPassword;

    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const conversationId = params.id;
    if (!conversationId) {
      return NextResponse.json(
        { success: false, error: 'Conversation ID is required' },
        { status: 400 }
      );
    }

    const conversation = await prisma.aIConversation.findUnique({ where: { id: conversationId } });

    if (!conversation) {
      return NextResponse.json(
        { success: false, error: 'Conversation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, conversation });
  } catch (error: any) {
    console.error('[AI Conversations Detail API] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch conversation', details: error.message },
      { status: 500 }
    );
  }
}
