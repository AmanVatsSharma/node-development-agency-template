import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Business Website Development Services | Vedpragya',
  description:
    'Get conversion-focused business websites built for speed, SEO, and lead generation by Vedpragya — India\'s enterprise software development company.',
  path: '/pages/business-website',
  keywords: [
    'business website development india',
    'professional website services',
    'lead generation website',
    'seo-ready business website',
    'vedpragya web development',
  ],
});

export default function BusinessWebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
        { name: 'Business Website Development', url: `${SEO_SITE_URL}/pages/business-website` },
      ]} />
      {children}
    </>
  );
}
