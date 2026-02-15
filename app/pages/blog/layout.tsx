import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog & Resources | Enterprise Hero Insights',
  description:
    'Explore expert blogs on web development, performance marketing, AI automation, and digital growth from Enterprise Hero.',
  path: '/pages/blog',
  keywords: [
    'enterprise hero blog',
    'web development insights',
    'seo and google ads guides',
    'ai automation articles',
    'digital growth resources',
  ],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
