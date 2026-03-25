import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Services | Vedpragya — Web, AI & Growth Solutions',
  description:
    'Explore Vedpragya services: web development, Shopify, AI automation, Google Ads management, SEO, ERP, and industry-specific software solutions from India.',
  path: '/pages/services',
  keywords: [
    'vedpragya services',
    'web development agency india',
    'ai automation services',
    'google ads management india',
    'shopify development services',
    'software development services india',
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
      ]} />
      {children}
    </>
  );
}
