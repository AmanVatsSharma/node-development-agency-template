import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'E-commerce Google Ads Optimization Services',
  description:
    'Scale e-commerce revenue with Google Shopping, Merchant Center optimization, and conversion-focused campaign management.',
  path: '/pages/ecommerce-google-ads-optimization',
  keywords: [
    'ecommerce google ads optimization',
    'google shopping campaigns',
    'merchant center optimization',
    'ecommerce ppc management',
  ],
});

export default function EcommerceGoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}