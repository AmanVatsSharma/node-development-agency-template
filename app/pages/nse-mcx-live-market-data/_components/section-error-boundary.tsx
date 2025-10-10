'use client';

/**
 * @fileoverview Error Boundary for Market Data API sections
 * @description Prevents entire page crash if one section fails
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
    console.error(`[Market-Data-API] Error in ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 px-4 text-center bg-red-50 dark:bg-red-900/10">
          <p className="text-red-600 dark:text-red-400 font-semibold">
            Section temporarily unavailable: {this.props.name}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

console.log('[Market-Data-API] SectionErrorBoundary loaded');
