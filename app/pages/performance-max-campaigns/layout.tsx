import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Performance Max Campaign Management Services',
  description:
    'Run high-performing Google Performance Max campaigns with strategic setup, continuous optimization, and conversion-focused reporting.',
  path: '/pages/performance-max-campaigns',
  keywords: [
    'performance max campaigns',
    'google performance max management',
    'ai powered ads optimization',
    'google ads automation services',
  ],
});

export default function PerformanceMaxCampaignsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}