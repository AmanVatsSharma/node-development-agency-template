'use client';

import React, { lazy, Suspense } from 'react';

interface DynamicImportOptions {
  ssr?: boolean;
  loading?: React.ReactNode;
  errorFallback?: React.ReactNode;
}

/**
 * A utility function for dynamically importing components
 * 
 * This helps with code splitting by dynamically loading components only when they are needed
 * 
 * @param importFn - A function that returns a dynamic import (e.g., () => import('@/components/SomeComponent'))
 * @param options - Configuration options
 * @returns A lazily loaded component with Suspense
 */
export function dynamicImport<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: DynamicImportOptions = {}
) {
  const {
    ssr = false,
    loading = <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-md"></div>,
    errorFallback = <div className="text-red-500 p-4">Error loading component</div>
  } = options;

  // Use React.lazy for component lazy loading
  const LazyComponent = lazy(importFn);

  // Return a wrapped component with Suspense
  return function DynamicComponent(props: React.ComponentProps<T>) {
    // If SSR is disabled, render only on client side
    if (!ssr && typeof window === 'undefined') {
      return <>{loading}</>;
    }

    // Error boundary for handling load failures
    return (
      <Suspense fallback={loading}>
        <ErrorBoundary fallback={errorFallback}>
          <LazyComponent {...props} />
        </ErrorBoundary>
      </Suspense>
    );
  };
}

/**
 * Simple error boundary component for catching errors in lazy-loaded components
 */
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Dynamic component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

/**
 * Example usage:
 * 
 * // Import a component dynamically
 * const DynamicChart = dynamicImport(() => import('@/components/Chart'), {
 *   loading: <LoadingSpinner />,
 *   ssr: false, // Don't render on server
 * });
 * 
 * // Use it like a regular component
 * function Dashboard() {
 *   return (
 *     <div>
 *       <h1>Dashboard</h1>
 *       <DynamicChart data={chartData} />
 *     </div>
 *   );
 * }
 */ 