import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Services | Enterprise Hero Web, AI & Growth Solutions',
  description:
    'Explore Enterprise Hero services including web development, Shopify, AI automation, Google Ads, SEO, and industry-specific software solutions.',
  path: '/pages/services',
  keywords: [
    'enterprise hero services',
    'web development agency',
    'ai automation services',
    'google ads management services',
    'shopify development services',
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
