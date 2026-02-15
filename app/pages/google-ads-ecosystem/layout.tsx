import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Google Ads Ecosystem | Complete PPC Services',
  description:
    'Access a complete Google Ads ecosystem including strategy, campaign management, audits, optimization, and conversion-focused execution.',
  path: '/pages/google-ads-ecosystem',
  keywords: [
    'google ads ecosystem',
    'complete ppc services',
    'google ads agency services',
    'paid search growth services',
  ],
});

export default function GoogleAdsEcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}