/**
 * NextAuth v5 API Route Handler
 * 
 * This file exports the NextAuth request handlers (GET, POST) for the API route.
 * In NextAuth v5, the configuration is centralized in /auth.ts and imported here.
 * 
 * Route: /api/auth/[...nextauth]
 * 
 * Handles:
 * - GET /api/auth/session - Get current session
 * - GET /api/auth/csrf - Get CSRF token
 * - GET /api/auth/providers - List available providers
 * - POST /api/auth/signin - Sign in
 * - POST /api/auth/signout - Sign out
 * - POST /api/auth/callback/* - OAuth callbacks
 * 
 * @see https://authjs.dev/getting-started/migrating-to-v5
 */

import { handlers } from '@/auth';

// Export NextAuth handlers for GET and POST requests
// These handle all authentication-related API calls
export const { GET, POST } = handlers;

console.log('[API] NextAuth v5 handlers initialized at /api/auth/[...nextauth]');

// Ensure Node.js runtime for bcrypt/prisma compatibility
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';


