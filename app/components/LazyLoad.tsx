'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number; // Visibility threshold (0 to 1)
  rootMargin?: string; // Margin around the root
  placeholder?: React.ReactNode; // Optional placeholder while loading
  onVisible?: () => void; // Callback when component becomes visible
}

/**
 * LazyLoad component for performance optimization
 * Only renders its children when they are about to enter the viewport
 */
export default function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  placeholder = <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-32 rounded"></div>,
  onVisible,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          onVisible?.();
          
          // Once it's visible, we don't need to observe it anymore
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin, // Margin around the root
        threshold, // Percentage of visibility needed to trigger
      }
    );

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold, rootMargin, onVisible]);

  return (
    <div ref={containerRef} className="lazy-load-container">
      {isVisible ? children : placeholder}
    </div>
  );
}

// Export a special version for above-the-fold content that should load immediately
export function AboveFoldContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// Example usage:
// 
// import LazyLoad from '@/components/LazyLoad';
//
// <LazyLoad 
//   threshold={0.2} 
//   rootMargin="50px" 
//   placeholder={<CustomLoadingIndicator />}
//   onVisible={() => console.log('Component is visible!')}
// >
//   <ExpensiveComponent />
// </LazyLoad> 