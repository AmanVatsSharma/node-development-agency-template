/**
 * App Providers Component
 * 
 * This component wraps the application with necessary providers:
 * - SessionProvider from NextAuth for authentication context
 * 
 * This is a client component that provides authentication state
 * to all child components via React Context.
 * 
 * Usage in layout.tsx:
 * ```tsx
 * <Providers>
 *   {children}
 * </Providers>
 * ```
 */

'use client';

import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

interface ProvidersProps {
  children: React.ReactNode;
  session?: Session | null;
}

export function Providers({ children, session }: ProvidersProps) {
  console.log('[Providers] Initializing SessionProvider');
  
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
