import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Free Resources | Vedpragya Guides, Templates & Assets',
  description:
    'Access free templates, guides, ebooks, and practical digital growth resources by Vedpragya — India.',
  path: '/pages/resources',
  keywords: [
    'free business resources',
    'seo and marketing templates',
    'web development guides',
    'vedpragya resources',
    'free digital marketing guides india',
  ],
});

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'Resources', url: `${SEO_SITE_URL}/pages/resources` },
      ]} />
      {children}
    </>
  );
}
