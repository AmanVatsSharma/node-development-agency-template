import { ReactNode } from 'react';
import { metadata, structuredData } from './metadata';

export { metadata };

/**
 * Layout for Next.js Development Landing Page
 * Includes structured data for SEO
 */
export default function NextJsDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* Structured Data Script */}
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
