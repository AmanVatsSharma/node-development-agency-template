/**
 * @fileoverview Layout for WhatsApp Business API Landing Page
 * @description Handles metadata and structured data
 * @version 1.0.0
 */

import { metadata as pageMetadata, structuredData } from './metadata';

export const metadata = pageMetadata;

export default function WhatsAppBusinessAPILayout({
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

console.log('[WhatsApp-API] Layout loaded successfully');
