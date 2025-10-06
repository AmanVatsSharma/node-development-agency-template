/**
 * NextAuth v5 (Auth.js) Configuration
 * 
 * This file centralizes authentication configuration for the entire application.
 * It provides JWT-based session management with role-based access control (RBAC).
 * 
 * Features:
 * - Credentials-based authentication with bcrypt password hashing
 * - JWT session strategy for stateless authentication
 * - Role-based authorization (admin, editor, user)
 * - Secure token signing with NEXTAUTH_SECRET
 * 
 * Flow:
 * 1. User submits credentials via login form
 * 2. authorize() validates credentials against Prisma database
 * 3. bcrypt.compare() verifies password hash
 * 4. JWT token is created with user data and role
 * 5. Session includes user info and role for authorization checks
 * 
 * @see https://authjs.dev/getting-started/migrating-to-v5
 */

import NextAuth, { type User as NextAuthUser, type Session } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { JWT } from 'next-auth/jwt';

// Extend NextAuth types to include role
declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string;
  }
}

/**
 * NextAuth configuration object
 * Exported as named exports for use in API routes and middleware
 */
const nextAuthConfig = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'admin@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      /**
       * Authorize function - validates user credentials
       * 
       * @param credentials - Email and password from login form
       * @returns User object if valid, null if invalid
       * 
       * Process:
       * 1. Check if email and password are provided
       * 2. Query database for user by email
       * 3. Verify user exists and is active
       * 4. Compare provided password with stored hash using bcrypt
       * 5. Return user data (without password) if valid
       */
      async authorize(credentials): Promise<NextAuthUser | null> {
        console.log('[Auth] Attempting login for:', credentials?.email);
        
        // Validate credentials exist
        if (!credentials?.email || !credentials?.password) {
          console.warn('[Auth] Missing email or password');
          return null;
        }

        try {
          // Find user in database
          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
          });

          // Check if user exists
          if (!user) {
            console.warn('[Auth] User not found:', credentials.email);
            return null;
          }

          // Check if user is active
          if (!user.active) {
            console.warn('[Auth] User account is inactive:', credentials.email);
            return null;
          }

          // Verify password
          const isPasswordValid = await bcrypt.compare(
            credentials.password as string,
            user.passwordHash
          );

          if (!isPasswordValid) {
            console.warn('[Auth] Invalid password for user:', credentials.email);
            return null;
          }

          console.log('[Auth] Login successful for:', user.email, '| Role:', user.role);

          // Return user object (password hash excluded)
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error('[Auth] Error during authorization:', error);
          return null;
        }
      },
    }),
  ],

  /**
   * Session configuration
   * Using JWT strategy for stateless authentication
   * - No database sessions needed
   * - Tokens are signed and verified with NEXTAUTH_SECRET
   * - Default expiry: 30 days
   */
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  /**
   * Pages configuration
   * Custom authentication pages
   */
  pages: {
    signIn: '/login',
    error: '/login', // Redirect errors to login page
  },

  /**
   * Callbacks - customize JWT and session behavior
   */
  callbacks: {
    /**
     * JWT callback - runs when JWT is created or updated
     * Adds custom claims (user ID and role) to the token
     * 
     * @param token - The JWT token
     * @param user - User object (only available on sign-in)
     * @returns Modified JWT token with user data
     */
    async jwt({ token, user }): Promise<JWT> {
      // On sign-in, user object is available
      if (user) {
        console.log('[Auth] JWT callback - Adding user to token:', user.email);
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    /**
     * Session callback - runs when session is checked
     * Adds user data from JWT to the session object
     * 
     * @param session - The session object
     * @param token - The JWT token
     * @returns Modified session with user data
     */
    async session({ session, token }): Promise<Session> {
      if (token) {
        console.log('[Auth] Session callback - Building session for:', token.email);
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },

  /**
   * Secret for signing and encrypting tokens
   * MUST be set in environment variables
   * Generate with: openssl rand -base64 32
   */
  secret: process.env.NEXTAUTH_SECRET,

  /**
   * Enable debug mode in development
   */
  debug: process.env.NODE_ENV === 'development',
});

// Export the auth functions and handlers
export const { auth, signIn, signOut, handlers } = nextAuthConfig;
// Ensure Node.js runtime for server auth internals
export const runtime = 'nodejs';

/**
 * Helper function to check if user has required role
 * Can be used in API routes for additional authorization checks
 * 
 * @param session - The user session
 * @param allowedRoles - Array of allowed roles
 * @returns Boolean indicating if user has required role
 * 
 * @example
 * ```ts
 * const session = await auth();
 * if (!hasRole(session, ['admin'])) {
 *   return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
 * }
 * ```
 */
export function hasRole(
  session: Session | null,
  allowedRoles: string[]
): boolean {
  if (!session?.user?.role) {
    return false;
  }
  return allowedRoles.includes(session.user.role);
}

console.log('[Auth] NextAuth v5 configuration loaded');
