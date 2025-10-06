/**
 * Logout API Route
 * 
 * Clears the admin session cookie
 */

import { NextRequest, NextResponse } from 'next/server';

const ADMIN_COOKIE_NAME = 'admin_session';

export async function POST(req: NextRequest) {
  try {
    const response = NextResponse.json({ success: true });
    
    // Clear the admin session cookie
    response.cookies.set(ADMIN_COOKIE_NAME, '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0, // Expire immediately
      path: '/',
    });

    console.log('[Logout] Session cookie cleared');
    return response;
  } catch (error) {
    console.error('[Logout] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Logout failed' },
      { status: 500 }
    );
  }
}
