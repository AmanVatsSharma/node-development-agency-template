'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

interface GoogleAnalyticsProps {
  measurementId?: string;
  adsConversionId?: string;
}

const CONSENT_STORAGE_KEY = 'analytics-consent';

type ConsentState = 'granted' | 'denied';

const getConsentState = (): ConsentState => {
  if (typeof window === 'undefined') {
    return 'denied';
  }

  const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (storedConsent === 'granted' || storedConsent === 'denied') {
    return storedConsent;
  }

  // Respect browser-level privacy signal when no explicit app preference exists.
  if (window.navigator.doNotTrack === '1') {
    return 'denied';
  }

  return 'granted';
};

const buildPageLocation = (pathname: string, searchParams: URLSearchParams | null) => {
  const query = searchParams?.toString();
  return `${window.location.origin}${pathname}${query ? `?${query}` : ''}`;
};

// Internal component that uses Next.js navigation hooks.
function GoogleAnalyticsContent({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || !window.gtag) {
      return;
    }

    const consentState = getConsentState();
    if (measurementId) {
      window.gtag('config', measurementId, {
        page_path: pathname,
        page_location: buildPageLocation(pathname, searchParams),
        anonymize_ip: true,
      });
    }

    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: buildPageLocation(pathname, searchParams),
      send_to: measurementId,
      non_interaction: true,
      consent_state: consentState,
    });
  }, [pathname, searchParams, measurementId]);

  return null;
}

/**
 * Unified Google tag integration for GA4 + Google Ads.
 *
 * Enterprise-oriented defaults:
 * - Single shared gtag bootstrap to prevent duplicate initialization.
 * - Consent mode defaults to denied until consent state is resolved.
 * - IP anonymization enabled for analytics config calls.
 */
export default function GoogleAnalytics({ measurementId, adsConversionId }: GoogleAnalyticsProps) {
  const primaryTagId = measurementId || adsConversionId;

  if (!primaryTagId) {
    return null;
  }

  return (
    <>
      <Script
        id="google-tag-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`}
        strategy="afterInteractive"
      />

      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;

          // Consent Mode v2 defaults (privacy-safe by default)
          window.gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });

          window.gtag('set', {
            url_passthrough: true,
            ads_data_redaction: true
          });

          window.gtag('js', new Date());

          ${measurementId ? `window.gtag('config', '${measurementId}', { send_page_view: false, anonymize_ip: true });` : ''}
          ${adsConversionId ? `window.gtag('config', '${adsConversionId}');` : ''}
        `}
      </Script>

      <Script id="google-tag-consent-state" strategy="afterInteractive">
        {`
          (function applyStoredConsent() {
            var storedConsent = window.localStorage.getItem('${CONSENT_STORAGE_KEY}');
            var doNotTrackEnabled = window.navigator && window.navigator.doNotTrack === '1';
            var resolvedConsent = (storedConsent === 'granted' || storedConsent === 'denied')
              ? storedConsent
              : (doNotTrackEnabled ? 'denied' : 'granted');

            window.gtag && window.gtag('consent', 'update', {
              analytics_storage: resolvedConsent,
              ad_storage: resolvedConsent,
              ad_user_data: resolvedConsent,
              ad_personalization: resolvedConsent,
            });
          })();
        `}
      </Script>

      <Suspense fallback={null}>
        <GoogleAnalyticsContent measurementId={measurementId} />
      </Suspense>
    </>
  );
}

// Types for window object with gtag function.
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'js' | 'config' | 'event' | 'set' | 'consent',
      targetIdOrDate: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

// Utility function for generic event tracking.
export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number,
) => {
  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
