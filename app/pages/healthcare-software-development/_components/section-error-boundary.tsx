'use client';

/**
 * Section Error Boundary Component - Healthcare Software Development
 * Error handling for individual sections
 */

import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

console.log('[Healthcare-Software-Dev] SectionErrorBoundary component loaded');

interface Props {
  children: ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('[Healthcare-Software-Dev] Section error:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[Healthcare-Software-Dev] Section error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Section Temporarily Unavailable
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The {this.props.name} section is experiencing technical difficulties. 
                Please refresh the page or contact support if the issue persists.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}