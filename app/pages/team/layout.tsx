import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Our Team | Vedpragya',
  description:
    'Meet the people behind Vedpragya Bharat Private Limited — the founder and the engineers, designers and operators who build and ship your software.',
  path: '/pages/team',
  keywords: [
    'vedpragya team',
    'software development team india',
    'vedpragya founder',
    'meet the team',
  ],
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'About', url: `${SEO_SITE_URL}/pages/about` },
          { name: 'Team', url: `${SEO_SITE_URL}/pages/team` },
        ]}
      />
      {children}
    </>
  );
}
