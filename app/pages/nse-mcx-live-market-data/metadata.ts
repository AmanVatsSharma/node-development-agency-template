// TEMPORARILY DISABLED — NSE/MCX Live Market Data metadata stub.
// Original moved to _disabled-metadata.ts. To restore, rename _disabled-metadata.ts back to metadata.ts.

import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Page Unavailable — Vedpragya',
  description: 'This page is temporarily unavailable.',
  path: '/pages/nse-mcx-live-market-data',
  noIndex: true,
});

export const structuredData = null;
