/**
 * @fileoverview Error Boundary for Consultation Components
 * @description Catches and handles errors gracefully to prevent page crashes
 * @module components/consultation/ErrorBoundary
 * 
 * Features:
 * - Catches JavaScript errors in child components
 * - Displays user-friendly error message
 * - Logs errors for debugging
 * - Provides fallback UI
 * 
 * Built by: Vedpragya Bharat Private Limited
 */

"use client";

import React, { Component, ReactNode } from 'react';

// Console log for debugging
console.log('[ConsultationErrorBoundary] Component loaded');

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ConsultationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('[ConsultationErrorBoundary] Error caught:', error);
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[ConsultationErrorBoundary] Error details:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log('[ConsultationErrorBoundary] Rendering fallback UI');
      
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-500/50 text-yellow-800 dark:text-yellow-200 p-6 rounded-2xl">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Free Consultation Feature Unavailable</h3>
              <p className="mb-3">
                The consultation booking system encountered an error. This may be due to pending database setup.
              </p>
              <div className="bg-yellow-100 dark:bg-yellow-900/40 rounded-lg p-3 mb-3">
                <p className="text-sm font-mono">
                  {this.state.error?.message || 'Unknown error'}
                </p>
              </div>
              <div className="text-sm">
                <p className="font-medium mb-2">To fix this issue:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Run database migration: <code className="bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">npx prisma migrate dev</code></li>
                  <li>Restart the development server: <code className="bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded">npm run dev</code></li>
                  <li>Refresh this page</li>
                </ol>
              </div>
              <button
                onClick={() => {
                  console.log('[ConsultationErrorBoundary] Resetting error state');
                  this.setState({ hasError: false, error: null });
                }}
                className="mt-4 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
