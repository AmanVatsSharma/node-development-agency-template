import { ReactNode } from 'react';
import { metadata, structuredData } from './metadata';

export { metadata };

/**
 * Layout for AI Chatbot Development Landing Page
 * Includes structured data for SEO and Google Ads optimization
 */
export default function AIChatbotDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {/* Structured Data Script for SEO */}
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
