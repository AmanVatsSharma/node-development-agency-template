'use client';

/**
 * Section Error Boundary
 * Graceful error handling for individual sections
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';

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
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[Next-JS-Dev] Error in ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500">
          <div className="container mx-auto px-4 text-center">
            <p className="text-red-600 dark:text-red-400 font-semibold">
              ⚠️ Section temporarily unavailable: {this.props.name}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
