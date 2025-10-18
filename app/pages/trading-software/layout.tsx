/**
 * @fileoverview Trading Software Landing Page - Layout
 * @description Layout wrapper with metadata and structured data
 * @company Vedpragya Bharat Pvt. Ltd.
 */

import { ReactNode } from 'react';
import { metadata, structuredData } from './metadata';

// Export metadata for Next.js
export { metadata };

interface LayoutProps {
  children: ReactNode;
}

export default function TradingSoftwareLayout({ children }: LayoutProps) {
  console.log('[Trading-Software] Layout mounted');
  
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Page Content */}
      {children}
    </>
  );
}
