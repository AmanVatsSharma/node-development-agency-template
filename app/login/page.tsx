/**
 * Simple Admin Login Page
 * 
 * Minimalist login page with just a password field.
 * No database, no complex auth - just checks against ADMIN_PASSWORD env variable.
 * 
 * SEO:
 * - Includes noindex/nofollow via metadata
 * - Also blocked in robots.txt
 */

import { Metadata } from 'next';
import LoginForm from './LoginForm';

// Metadata for SEO - prevents indexing
export const metadata: Metadata = {
  title: 'Admin Login',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
