import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog & Resources | Vedpragya Insights',
  description:
    'Explore expert articles on software development, AI automation, digital marketing, and business growth from Vedpragya — India.',
  path: '/pages/blog',
  keywords: [
    'vedpragya blog',
    'software development insights',
    'web development guides',
    'ai automation articles',
    'digital growth resources',
    'india tech blog',
  ],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'Blog', url: `${SEO_SITE_URL}/pages/blog` },
      ]} />
      {children}
    </>
  );
}
