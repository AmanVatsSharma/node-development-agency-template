import type { Metadata } from 'next';
import { metadata as pageMetadata, structuredData } from './metadata';

export const metadata: Metadata = pageMetadata;

export default function ShopifyHeadlessMigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
