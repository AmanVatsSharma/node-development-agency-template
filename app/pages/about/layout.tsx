import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Enterprise Hero | Global Engineering & Growth Partner',
  description:
    'Learn about Enterprise Hero by Vedpragya Bharat Private Limited, our global team, engineering standards, and mission to build reliable digital systems.',
  path: '/pages/about',
  keywords: [
    'about enterprise hero',
    'vedpragya bharat',
    'software development company',
    'global development team',
    'enterprise engineering partner',
  ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
