'use client';

/**
 * Section Error Boundary Component
 * Catches errors in individual sections to prevent full page crashes
 */

import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[Google-Ads] Error in ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[200px] flex items-center justify-center bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-lg p-8 my-4">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 font-bold mb-2">
              Section Error: {this.props.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {this.state.error?.message || 'An error occurred'}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
