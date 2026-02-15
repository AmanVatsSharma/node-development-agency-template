import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Google Ads Audit & Strategy Services',
  description:
    'Get a detailed Google Ads account audit with strategic recommendations to improve efficiency, lead quality, and ROAS.',
  path: '/pages/google-ads-audit-strategy',
  keywords: [
    'google ads audit',
    'google ads strategy',
    'ppc account analysis',
    'campaign performance audit',
  ],
});

export default function GoogleAdsAuditStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}