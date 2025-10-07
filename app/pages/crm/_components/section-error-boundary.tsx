'use client';

/**
 * @fileoverview Section Error Boundary - EnterpriseHero CRM
 * @description Error boundary wrapper for section components
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React from 'react';

console.log('[CRM] SectionErrorBoundary component loaded');

interface Props {
  children: React.ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class SectionErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('[CRM] SectionErrorBoundary caught error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[CRM] Section Error Boundary - Component:', this.props.name);
    console.error('[CRM] Error:', error);
    console.error('[CRM] Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black text-red-600 dark:text-red-400 mb-4">
                Section Error: {this.props.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This section encountered an error. Please refresh the page or contact support.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
