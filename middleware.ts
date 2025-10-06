/**
 * Middleware for NextAuth v5 Route Protection
 * 
 * This middleware protects admin routes using NextAuth v5's auth() function.
 * It enforces role-based access control (RBAC) for admin and editor roles only.
 * 
 * Protected Routes:
 * - /pages/admin/* - Admin UI pages
 * - /api/admin/* - Admin API endpoints
 * 
 * Authorization Flow:
 * 1. Check if route requires authentication (admin routes)
 * 2. Verify user is authenticated via NextAuth session
 * 3. Check if user has required role (admin or editor)
 * 4. Allow access if authorized, redirect/reject if not
 * 
 * Behavior:
 * - Unauthenticated users → Redirect to /login with callbackUrl
 * - Authenticated but wrong role → Redirect to /login with error
 * - API routes → Return 401 Unauthorized JSON response
 * - Authorized users → Allow through to protected resource
 * 
 * @see https://authjs.dev/getting-started/session-management/protecting
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';

/**
 * Middleware function - runs before every request matching the config matcher
 * 
 * @param req - Next.js request object
 * @returns NextResponse - Either allows request through or redirects/rejects
 */
export async function middleware(req: NextRequest) {
  console.log('[Middleware] Processing request:', req.nextUrl.pathname);

  const url = req.nextUrl;
  const pathname = url.pathname;
  
  // Determine request type
  const isApi = pathname.startsWith('/api/');
  const needsAuth = pathname.startsWith('/pages/admin') || pathname.startsWith('/api/admin');

  // Allow public routes to pass through
  if (!needsAuth) {
    console.log('[Middleware] Public route, allowing through');
    return NextResponse.next();
  }

  console.log('[Middleware] Protected route, checking authentication...');

  // FAST-PATH: If there is no auth cookie at all, redirect immediately
  // This avoids importing the full auth context and any app code when unauthenticated
  const sessionCookie =
    req.cookies.get('__Secure-authjs.session-token')?.value ||
    req.cookies.get('authjs.session-token')?.value ||
    req.cookies.get('__Secure-next-auth.session-token')?.value ||
    req.cookies.get('next-auth.session-token')?.value;

  if (!sessionCookie) {
    console.warn('[Middleware] No auth cookie found, redirecting to /login');
    if (isApi) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
          message: 'Authentication required. Please log in.',
        },
        { status: 401 }
      );
    }
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Get authentication session using NextAuth v5
  const session = await auth();
  
  // Check if user is authenticated
  const isAuthenticated = !!session?.user;
  const userRole = session?.user?.role;
  const userName = session?.user?.email;

  console.log('[Middleware] Auth status:', {
    isAuthenticated,
    userRole,
    userName,
  });

  // Check if user has required role (admin or editor)
  const allowedRoles = ['admin', 'editor'];
  const hasRequiredRole = userRole && allowedRoles.includes(userRole);

  // User is authenticated AND has required role - allow access
  if (isAuthenticated && hasRequiredRole) {
    console.log('[Middleware] Access granted for:', userName, '| Role:', userRole);
    return NextResponse.next();
  }

  // User is NOT authorized - handle rejection based on request type
  console.warn('[Middleware] Access denied for:', userName || 'anonymous', '| Role:', userRole || 'none');

  // API routes - return JSON error response
  if (isApi) {
    console.warn('[Middleware] Rejecting API request with 401');
    return NextResponse.json(
      { 
        error: 'Unauthorized',
        message: isAuthenticated 
          ? 'Insufficient permissions. Admin or Editor role required.'
          : 'Authentication required. Please log in.',
      },
      { status: 401 }
    );
  }

  // Web pages - redirect to login with callback URL
  const loginUrl = new URL('/login', req.url);
  loginUrl.searchParams.set('callbackUrl', pathname);
  
  if (isAuthenticated && !hasRequiredRole) {
    // User is logged in but doesn't have required role
    loginUrl.searchParams.set('error', 'insufficient_permissions');
    console.warn('[Middleware] Redirecting to login - insufficient permissions');
  } else {
    // User is not logged in
    console.warn('[Middleware] Redirecting to login - not authenticated');
  }

  return NextResponse.redirect(loginUrl);
}

/**
 * Middleware configuration
 * Specifies which routes this middleware should run on
 * 
 * Pattern Matching:
 * - /pages/admin/* - All admin UI pages
 * - /api/admin/* - All admin API endpoints
 * 
 * Note: Login page (/login) is NOT matched, so it remains public
 */
export const config = {
  matcher: [
    '/pages/admin/:path*',
    '/api/admin/:path*',
  ],
};

console.log('[Middleware] NextAuth v5 middleware configured');


