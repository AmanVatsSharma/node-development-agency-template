'use client';

/**
 * @fileoverview Section Error Boundary Component
 * @description Catches and handles errors in individual page sections
 * @version 1.0.0
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';

console.log('[Shopify-Product-Page] SectionErrorBoundary component loaded');

interface Props {
  children: ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary for graceful error handling in page sections
 * Prevents entire page crash if one section fails
 */
export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('[Shopify-Product-Page] Error caught by boundary:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[Shopify-Product-Page] Section error details:', {
      section: this.props.name,
      error: error.message,
      componentStack: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 bg-red-50 dark:bg-red-950/20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-red-600 dark:text-red-400">
              ⚠️ Error loading {this.props.name}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

console.log('[Shopify-Product-Page] SectionErrorBoundary exported');
