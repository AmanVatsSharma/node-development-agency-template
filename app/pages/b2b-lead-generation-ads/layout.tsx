import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'B2B Lead Generation Ads Services',
  description:
    'Generate qualified B2B leads with intent-driven Google Ads strategy, targeting, and conversion optimization.',
  path: '/pages/b2b-lead-generation-ads',
  keywords: [
    'b2b lead generation ads',
    'google ads for b2b leads',
    'b2b paid search strategy',
    'qualified lead generation',
  ],
});

export default function B2BLeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}