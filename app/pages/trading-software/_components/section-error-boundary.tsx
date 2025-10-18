'use client';

/**
 * @fileoverview Section Error Boundary Component
 * @description Catches errors in individual sections without breaking entire page
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
    console.error('[SectionErrorBoundary] Error caught:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(
      `[SectionErrorBoundary] ${this.props.name} failed:`,
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      console.warn(`[SectionErrorBoundary] ${this.props.name} - Rendering fallback UI`);
      
      // Silent fail in production - don't show error to users
      if (process.env.NODE_ENV === 'production') {
        return null;
      }
      
      // Show error in development
      return (
        <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg p-6 my-4">
          <h3 className="text-red-700 dark:text-red-400 font-bold mb-2">
            ⚠️ Section Error: {this.props.name}
          </h3>
          <pre className="text-xs text-red-600 dark:text-red-300 overflow-auto">
            {this.state.error?.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
