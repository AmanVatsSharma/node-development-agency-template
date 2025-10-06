/**
 * Admin Login Page
 * 
 * Modern, responsive login page for admin and editor users.
 * Uses NextAuth v5 for authentication with credentials provider.
 * 
 * Features:
 * - Pre-filled credentials for easy testing (admin@example.com / password123)
 * - Error message display for failed login attempts
 * - Loading states during authentication
 * - Responsive design with dark mode support
 * - Redirect to callback URL after successful login
 * - URL parameter error handling
 * 
 * Flow:
 * 1. User enters email and password
 * 2. Form submission calls signIn() from NextAuth
 * 3. NextAuth validates credentials via /api/auth/signin
 * 4. On success: redirect to callbackUrl (default: /pages/admin/integrations)
 * 5. On failure: display error message
 * 
 * @see https://authjs.dev/getting-started/authentication/credentials
 */

'use client';

import { useState, useEffect, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

function LoginForm() {
  // Form state
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get URL parameters for error messages and callback URL
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/pages/admin/integrations';
  const urlError = searchParams.get('error');

  // Display error messages from URL parameters
  useEffect(() => {
    if (urlError === 'insufficient_permissions') {
      setError('Access denied. You need admin or editor role to access this area.');
    } else if (urlError) {
      setError('Authentication failed. Please try again.');
    }
  }, [urlError]);

  /**
   * Handle form submission
   * Calls NextAuth signIn with credentials
   * 
   * @param e - Form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Login] Attempting sign in for:', email);
    
    setLoading(true);
    setError(null);

    try {
      // Call NextAuth signIn function
      const result = await signIn('credentials', {
        redirect: false, // Handle redirect manually to show errors
        email,
        password,
      });

      console.log('[Login] Sign in result:', result);

      // Check if sign-in was successful
      if (result?.error) {
        console.error('[Login] Sign in failed:', result.error);
        setError('Invalid email or password. Please try again.');
        setLoading(false);
      } else if (result?.ok) {
        console.log('[Login] Sign in successful, redirecting to:', callbackUrl);
        // Redirect to callback URL on success
        window.location.href = callbackUrl;
      } else {
        console.error('[Login] Unexpected sign in result');
        setError('An unexpected error occurred. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      console.error('[Login] Exception during sign in:', err);
      setError('An error occurred during sign in. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Admin Portal
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                className="w-full"
                autoComplete="email"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
                className="w-full"
                autoComplete="current-password"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 text-base font-medium"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </Button>
      </form>

          {/* Help Text */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              For testing: <strong>admin@example.com</strong> / <strong>password123</strong>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2">
              Only admin and editor roles can access the dashboard
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Admin Portal
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Loading...
              </p>
            </div>
          </div>
        </div>
      </main>
    }>
      <LoginForm />
    </Suspense>
  );
}


