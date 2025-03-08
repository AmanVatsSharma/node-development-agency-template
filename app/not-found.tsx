'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Client component that uses useSearchParams
function NotFoundContent() {
  // Wrap the component that uses useSearchParams in its own component
  const searchParams = useSearchParams();
  const referrer = searchParams.get('from') || '';
  
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-primary mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-8">Page Not Found</h2>
      <p className="text-lg mb-8">
        We're sorry, the page you requested could not be found.
        {referrer && <span> You were referred from {referrer}.</span>}
      </p>
      <div className="mb-12">
        <Link 
          href="/" 
          className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-200px)] flex items-center justify-center py-16">
      <Suspense fallback={
        <div className="text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-8">Page Not Found</h2>
          <div className="mb-12">
            <Link 
              href="/" 
              className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      }>
        <NotFoundContent />
      </Suspense>
    </main>
  );
} 