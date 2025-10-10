/**
 * @fileoverview Layout for NSE/MCX Live Market Data Landing Page
 * @description Handles metadata and structured data for SEO
 * @version 1.0.0
 */

import { metadata as pageMetadata, structuredData } from './metadata';

export const metadata = pageMetadata;

export default function MarketDataAPILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}

console.log('[Market-Data-API] Layout loaded successfully');
