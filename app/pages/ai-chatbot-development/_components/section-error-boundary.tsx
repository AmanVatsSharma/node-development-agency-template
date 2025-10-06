'use client';

/**
 * Section Error Boundary
 * Wraps each section to prevent full page crashes
 */

import React from 'react';

interface SectionErrorBoundaryProps {
  name: string;
  children: React.ReactNode;
}

interface SectionErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class SectionErrorBoundary extends React.Component<
  SectionErrorBoundaryProps,
  SectionErrorBoundaryState
> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): SectionErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[AI-Chatbot-Dev] Error in ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-16 bg-red-50 dark:bg-red-900/10">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
              ⚠️ Section Error
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {this.props.name} could not be loaded. Please refresh the page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
