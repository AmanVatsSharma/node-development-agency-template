import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Business Website Development Services | Enterprise Hero',
  description:
    'Get conversion-focused business websites built for speed, SEO, and lead generation with Enterprise Hero.',
  path: '/pages/business-website',
  keywords: [
    'business website development',
    'professional website services',
    'lead generation website',
    'seo-ready business website',
  ],
});

export default function BusinessWebsiteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
