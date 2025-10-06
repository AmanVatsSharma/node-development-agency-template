'use client';

/**
 * Section Error Boundary Component
 * Graceful error handling for individual sections
 */

import React from 'react';

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
    console.error('[ReactJS-Dev] Section error caught:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[ReactJS-Dev] Error in section ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 bg-red-50 dark:bg-red-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
              Section Error
            </h2>
            <p className="text-red-500 dark:text-red-300">
              Failed to load {this.props.name}. Please refresh the page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
