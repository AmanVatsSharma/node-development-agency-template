/**
 * Performance Monitoring Utilities
 * 
 * This file provides utilities for measuring and reporting key performance metrics.
 * It leverages the Web Vitals and Performance APIs to collect important metrics.
 */

// Define the structure for performance metrics
export interface PerformanceMetrics {
  // Core Web Vitals
  LCP?: number;  // Largest Contentful Paint
  FID?: number;  // First Input Delay
  CLS?: number;  // Cumulative Layout Shift
  
  // Additional metrics
  TTFB?: number; // Time to First Byte
  FCP?: number;  // First Contentful Paint
  TTI?: number;  // Time to Interactive
  
  // Navigation timing
  domLoad?: number;
  windowLoad?: number;
  
  // Resource timing
  resources?: Array<{
    name: string;
    duration: number;
    transferSize?: number;
    initiatorType?: string;
  }>;
}

/**
 * Collect performance metrics when called
 * Captures the current state of performance metrics
 */
export const collectPerformanceMetrics = (): PerformanceMetrics => {
  if (typeof window === 'undefined' || !window.performance) {
    return {};
  }
  
  const metrics: PerformanceMetrics = {};
  
  try {
    // Get basic navigation timing
    const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navTiming) {
      metrics.TTFB = navTiming.responseStart;
      metrics.domLoad = navTiming.domContentLoadedEventEnd - navTiming.startTime;
      metrics.windowLoad = navTiming.loadEventEnd - navTiming.startTime;
    }
    
    // Get paint timing
    const paintMetrics = performance.getEntriesByType('paint');
    const firstPaint = paintMetrics.find(({ name }) => name === 'first-paint');
    const firstContentfulPaint = paintMetrics.find(({ name }) => name === 'first-contentful-paint');
    
    if (firstContentfulPaint) {
      metrics.FCP = firstContentfulPaint.startTime;
    }
    
    // Resource timing
    const resourceEntries = performance.getEntriesByType('resource');
    metrics.resources = resourceEntries.map(entry => ({
      name: entry.name,
      duration: entry.duration,
      transferSize: (entry as PerformanceResourceTiming).transferSize,
      initiatorType: (entry as PerformanceResourceTiming).initiatorType,
    }));
    
    // Try to get Largest Contentful Paint if available
    try {
      // LCP requires web-vitals library or custom implementation
      // This is a simplified placeholder implementation
      const performanceObserver = (window as any).__lcpEntry;
      if (performanceObserver) {
        metrics.LCP = performanceObserver.startTime;
      }
    } catch (e) {
      console.error('Error measuring LCP:', e);
    }
    
  } catch (error) {
    console.error('Error collecting performance metrics:', error);
  }
  
  return metrics;
};

/**
 * Report performance metrics to an analytics service
 * This function should be called after the page has loaded completely
 */
export const reportPerformanceMetrics = (
  analyticsEndpoint: string = '/api/analytics/performance',
  additionalData: Record<string, any> = {}
) => {
  // Only run in browser and in production
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
    return;
  }
  
  // Wait until the page is fully loaded
  if (document.readyState !== 'complete') {
    window.addEventListener('load', () => {
      // Wait a moment after load to capture all metrics
      setTimeout(() => {
        const metrics = collectPerformanceMetrics();
        sendMetricsToAnalytics(metrics, analyticsEndpoint, additionalData);
      }, 1000);
    });
  } else {
    // Page already loaded, collect metrics now
    const metrics = collectPerformanceMetrics();
    sendMetricsToAnalytics(metrics, analyticsEndpoint, additionalData);
  }
};

/**
 * Send collected metrics to the analytics endpoint
 */
const sendMetricsToAnalytics = (
  metrics: PerformanceMetrics,
  endpoint: string,
  additionalData: Record<string, any>
) => {
  // Add metadata to metrics
  const dataToSend = {
    metrics,
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    ...additionalData
  };
  
  // Use navigator.sendBeacon for reliable delivery even on page unload
  // Fall back to fetch if sendBeacon is not available
  if (navigator.sendBeacon) {
    const blob = new Blob([JSON.stringify(dataToSend)], { type: 'application/json' });
    navigator.sendBeacon(endpoint, blob);
  } else {
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 'application/json'
      },
      // Use keepalive to ensure the request completes even if the page unloads
      keepalive: true
    }).catch(err => console.error('Error sending performance data:', err));
  }
};

/**
 * Initialize performance monitoring
 * This should be called early in your application's lifecycle
 */
export const initPerformanceMonitoring = () => {
  // Set up LCP observer
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      // Track Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        (window as any).__lcpEntry = lastEntry;
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      
    } catch (e) {
      console.error('LCP monitoring error:', e);
    }
  }
  
  // Report metrics after page load
  reportPerformanceMetrics();
}; 