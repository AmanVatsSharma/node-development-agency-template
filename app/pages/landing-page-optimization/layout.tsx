import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Landing Page Optimization Services',
  description:
    'Improve conversion rates with landing page audits, UX improvements, testing strategy, and performance optimization.',
  path: '/pages/landing-page-optimization',
  keywords: [
    'landing page optimization',
    'conversion rate optimization',
    'landing page audit',
    'cro services',
  ],
});

export default function LandingPageOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}