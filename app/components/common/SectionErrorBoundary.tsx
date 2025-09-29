'use client'
import React from 'react';

type Props = { name: string; children: React.ReactNode };

export class SectionErrorBoundary extends React.Component<Props, { hasError: boolean }>{
  constructor(props: Props){
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(){
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown){
    // Log error details for diagnostics
    console.error(`[SectionErrorBoundary] Error in section: ${this.props.name}`, { error, info });
  }

  render(){
    if(this.state.hasError){
      return (
        <section className="py-12" role="alert" aria-live="polite">
          <div className="container mx-auto px-4">
            <div className="rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/10 p-6 text-red-700 dark:text-red-300">
              This section failed to load. Please refresh the page.
            </div>
          </div>
        </section>
      );
    }
    return this.props.children as React.ReactElement;
  }
}


