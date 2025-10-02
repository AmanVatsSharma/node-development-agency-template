'use client';

/**
 * Section Error Boundary Component
 * Catches errors in individual sections to prevent entire page failure
 * Provides graceful degradation and error logging
 */

import React from 'react';

console.log('[Business-Website] SectionErrorBoundary component loaded');

interface Props {
  name: string;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class SectionErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[Business-Website] Error in section: ${this.props.name}`, {
      error,
      errorInfo,
      timestamp: new Date().toISOString()
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section 
          className="py-12 bg-red-50 dark:bg-red-900/10" 
          role="alert" 
          aria-live="polite"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">
                Section Temporarily Unavailable
              </h3>
              <p className="text-red-600 dark:text-red-400 mb-4">
                This section encountered an error. Please refresh the page or contact us if the problem persists.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

