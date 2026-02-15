import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Portfolio | Enterprise Hero Case Studies & Results',
  description:
    'Explore Enterprise Hero portfolio projects across web development, 3D experiences, e-commerce, and enterprise systems.',
  path: '/pages/portfolio',
  keywords: [
    'enterprise hero portfolio',
    'software development case studies',
    'ecommerce project portfolio',
    'web development results',
  ],
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
