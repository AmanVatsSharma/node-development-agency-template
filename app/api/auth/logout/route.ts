/**
 * Simple Logout API Route
 * 
 * Clears the admin session cookie.
 */

import { NextResponse } from 'next/server';

const ADMIN_COOKIE_NAME = 'admin_session';

export async function POST() {
  console.log('[Logout] Clearing admin session');
  
  const response = NextResponse.json({ success: true });
  
  // Clear the session cookie
  response.cookies.delete(ADMIN_COOKIE_NAME);
  
  return response;
}
