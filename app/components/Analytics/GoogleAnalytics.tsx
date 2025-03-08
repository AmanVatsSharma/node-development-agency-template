'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

/**
 * Google Analytics integration component for Next.js
 * This component initializes GA4 and tracks page views automatically
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Track page views when the route changes
  useEffect(() => {
    if (pathname && window.gtag) {
      // Construct the full URL from pathname and search params
      let url = pathname;
      if (searchParams?.toString()) {
        url += `?${searchParams.toString()}`;
      }
      
      // Send page view event to Google Analytics
      window.gtag('config', measurementId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, measurementId]);
  
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Types for window object with gtag function
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, any>,
    ) => void;
  }
}

// Utility functions for tracking events
export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Example usage:
// 
// // In your layout.tsx or app.tsx file:
// import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics';
//
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
//
// // For event tracking in any component:
// import { trackEvent } from '@/components/Analytics/GoogleAnalytics';
//
// function ContactForm() {
//   const handleSubmit = (e) => {
//     // Form submission logic
//     trackEvent('submit', 'contact_form', 'Contact form submitted');
//   };
//   // ...
// } 