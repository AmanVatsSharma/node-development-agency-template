import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Vedpragya | Software Development Company — India',
  description:
    'Learn about Vedpragya Bharat Private Limited — our team, engineering standards, and mission to build reliable digital systems for businesses across India and globally.',
  path: '/pages/about',
  keywords: [
    'about vedpragya',
    'vedpragya bharat private limited',
    'software development company india',
    'it solutions company haryana',
    'enterprise engineering partner',
  ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'About', url: `${SEO_SITE_URL}/pages/about` },
      ]} />
      {children}
    </>
  );
}
