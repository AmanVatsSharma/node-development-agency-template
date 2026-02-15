import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Free Resources | Enterprise Hero Guides, Templates & Assets',
  description:
    'Access free templates, guides, ebooks, and practical growth resources by Enterprise Hero.',
  path: '/pages/resources',
  keywords: [
    'free business resources',
    'seo and marketing templates',
    'web development guides',
    'enterprise hero resources',
  ],
});

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
