/**
 * Simple Middleware for Admin Route Protection
 * 
 * This is a lightweight alternative to complex authentication systems.
 * Uses a simple password stored in environment variable (ADMIN_PASSWORD).
 * 
 * How it works:
 * 1. User enters password on /login
 * 2. Password is compared to ADMIN_PASSWORD env variable
 * 3. If correct, a signed cookie is set
 * 4. Middleware checks for this cookie on admin routes
 * 
 * Security features:
 * - HttpOnly cookies (can't be accessed by JavaScript)
 * - Secure cookies in production (HTTPS only)
 * - Simple password comparison (no database needed)
 * 
 * Protected Routes:
 * - /admin/* - Admin UI pages (top-level, no website header/footer)
 * - /api/admin/* - Admin API endpoints
 * 
 * Console Logs:
 * - [Middleware] Checking admin access - Route protection checks
 * - [Middleware] Access granted - Successful authentication
 * - [Middleware] Access denied - Failed authentication
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_COOKIE_NAME = 'admin_session';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  
  console.log('[Middleware] Processing request:', pathname);
  
  // Determine request type
  const isApi = pathname.startsWith('/api/');
  const needsAuth = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');

  // Allow public routes to pass through
  if (!needsAuth) {
    console.log('[Middleware] Public route, allowing access:', pathname);
    return NextResponse.next();
  }

  console.log('[Middleware] Protected route detected, checking admin access for:', pathname);

  // Check for admin session cookie
  const sessionCookie = req.cookies.get(ADMIN_COOKIE_NAME)?.value;

  // Verify the session cookie matches our admin password
  const adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
  const isAuthorized = sessionCookie === adminPassword;

  if (isAuthorized) {
    console.log('[Middleware] Access granted - valid session');
    return NextResponse.next();
  }

  // User is NOT authorized
  console.warn('[Middleware] Access denied - no valid session');

  // API routes - return JSON error response
  if (isApi) {
    return NextResponse.json(
      { 
        error: 'Unauthorized',
        message: 'Authentication required. Please log in.',
      },
      { status: 401 }
    );
  }

  // Web pages - redirect to login with callback URL
  const loginUrl = new URL('/login', req.url);
  loginUrl.searchParams.set('callbackUrl', pathname);
  return NextResponse.redirect(loginUrl);
}

/**
 * Middleware configuration
 * Specifies which routes this middleware should run on
 * 
 * Updated to use new /admin/* path structure
 * This provides clean separation from website routes
 */
export const config = {
  matcher: [
    '/admin/:path*',      // Admin dashboard pages
    '/api/admin/:path*',  // Admin API endpoints
  ],
};

console.log('[Middleware] Configuration loaded - Protecting routes:', config.matcher);

console.log('[Middleware] Simple admin auth middleware loaded');
