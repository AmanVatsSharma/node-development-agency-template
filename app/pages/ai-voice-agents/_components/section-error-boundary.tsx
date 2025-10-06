'use client';

/**
 * Error Boundary for Landing Page Sections
 */

import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  name: string;
}

interface State {
  hasError: boolean;
}

export class SectionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(`Error in ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="py-16 bg-red-50 dark:bg-red-900/10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-red-600 dark:text-red-400">
              Section failed to load: {this.props.name}
            </p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
