"use client";

import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Fallback component while the 3D animation is loading
const AnimationFallback = () => (
  <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Dynamically import the ENHANCED 3D animation with no SSR to avoid hydration issues
const HeroAnimation = dynamic(() => import("../animations/HeroAnimationEnhanced"), {
  ssr: false,
  loading: () => <AnimationFallback />
});

// Error boundary for Three.js rendering issues
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-600/50">
          {/* Fallback UI when 3D rendering fails */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default function HeroAnimationWrapper() {
  // Client-side only rendering check
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <AnimationFallback />;
  }

  return (
    <ErrorBoundary>
      <HeroAnimation />
    </ErrorBoundary>
  );
} 