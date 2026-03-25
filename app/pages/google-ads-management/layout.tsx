import { Metadata } from 'next';
import { metadata as pageMetadata } from './metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = pageMetadata;

export default function GoogleAdsManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
        { name: 'Google Ads Management', url: `${SEO_SITE_URL}/pages/google-ads-management` },
      ]} />
      {children}
    </>
  );
}
