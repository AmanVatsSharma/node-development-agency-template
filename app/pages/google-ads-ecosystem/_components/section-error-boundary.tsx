'use client';

/**
 * @fileoverview Section Error Boundary - Error handling for individual sections
 * @description Error boundary component to catch and handle errors in individual sections
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Catches errors in individual sections
 * - Prevents full page crashes
 * - Shows friendly error message
 * - Logs errors for debugging
 */

import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[SectionErrorBoundary] Error in ${this.props.name}:`, error, errorInfo);
    
    // Track error for monitoring
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'section_error', {
        section_name: this.props.name,
        error_message: error.message,
        page_location: window.location.pathname
      });
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    console.log(`[SectionErrorBoundary] Retrying ${this.props.name}`);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Something went wrong
          </h3>
          
          <p className="text-red-600 mb-4">
            We encountered an error loading the {this.props.name} section. 
            This doesn't affect the rest of the page.
          </p>
          
          <button
            onClick={this.handleRetry}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm text-red-600 font-semibold">
                Error Details (Development)
              </summary>
              <pre className="mt-2 text-xs text-red-600 bg-red-100 p-2 rounded overflow-auto">
                {this.state.error.message}
                {'\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default SectionErrorBoundary;