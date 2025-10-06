/**
 * Simple Login API Route
 * 
 * Validates password against ADMIN_PASSWORD env variable.
 * Sets an HttpOnly cookie if password is correct.
 * 
 * No database, no JWT, no complexity - just simple password check.
 */

import { NextRequest, NextResponse } from 'next/server';

const ADMIN_COOKIE_NAME = 'admin_session';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    // Get admin password from environment variable
    const adminPassword = process.env.ADMIN_PASSWORD || 'changeme';

    // Simple password comparison
    if (password === adminPassword) {
      console.log('[Login] Password correct - setting session cookie');
      
      const response = NextResponse.json({ success: true });
      
      // Set HttpOnly cookie with the password as value
      // In production, this should be over HTTPS only
      response.cookies.set(ADMIN_COOKIE_NAME, adminPassword, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      return response;
    } else {
      console.warn('[Login] Invalid password attempt');
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('[Login] Error processing login:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
