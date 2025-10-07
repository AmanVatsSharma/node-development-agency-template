'use client';

/**
 * @fileoverview Section Error Boundary Component
 * @description Wraps each landing page section to prevent one section's error from crashing the entire page
 * @version 1.0.0
 * 
 * FEATURES:
 * - Graceful error handling per section
 * - Console logging for debugging
 * - Fallback UI for failed sections
 * - Production-ready error tracking
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  name: string;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Section Error Boundary
 * Catches errors in child components and displays fallback UI
 */
export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
    console.log(`[Error-Boundary-${props.name}] Initialized`);
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('[Error-Boundary] Error caught:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { name } = this.props;
    
    console.error(`[Error-Boundary-${name}] Component error:`, {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    });

    // In production, send to error tracking service (Sentry, LogRocket, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: `Section Error: ${name} - ${error.message}`,
        fatal: false
      });
    }
  }

  render() {
    const { hasError, error } = this.state;
    const { children, name, fallback } = this.props;

    if (hasError) {
      console.warn(`[Error-Boundary-${name}] Rendering fallback UI`);
      
      // Custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default fallback UI (minimal, non-disruptive)
      return (
        <section 
          className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900"
          role="region"
          aria-label={`Error in ${name}`}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {/* Minimal error message for users */}
                This section is temporarily unavailable. Please refresh or continue browsing.
              </p>
              
              {/* Show detailed error in development only */}
              {process.env.NODE_ENV === 'development' && error && (
                <details className="mt-4 text-left bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <summary className="cursor-pointer font-semibold text-red-700 dark:text-red-400">
                    Development Error Details (Section: {name})
                  </summary>
                  <pre className="mt-2 text-xs overflow-auto text-red-600 dark:text-red-300">
                    {error.message}
                    {'\n\n'}
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </section>
      );
    }

    return children;
  }
}

console.log('[WhatsApp-API] SectionErrorBoundary component loaded');
