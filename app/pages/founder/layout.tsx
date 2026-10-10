import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { PersonStructuredData } from '@/app/components/SEO/PersonStructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';
import { companyProfile } from '@/app/data/companyProfile';
import { FOUNDER_NAME, FOUNDER_SHORT_BIO, FOUNDER_TITLE } from '@/app/data/founder';

export const metadata: Metadata = buildPageMetadata({
  title: `${FOUNDER_NAME} — ${FOUNDER_TITLE} | Vedpragya`,
  description: `Meet ${FOUNDER_NAME}, ${FOUNDER_TITLE.toLowerCase()} of ${companyProfile.legalName} — a full-stack engineer and entrepreneur building reliable software for businesses in India and abroad.`,
  path: '/pages/founder',
  keywords: [
    'aman kumar sharma',
    'vedpragya founder',
    'vedpragya bharat private limited',
    'founder software company india',
    'operations head software agency',
  ],
});

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'About', url: `${SEO_SITE_URL}/pages/about` },
          { name: FOUNDER_NAME, url: `${SEO_SITE_URL}/pages/founder` },
        ]}
      />
      <PersonStructuredData
        name={FOUNDER_NAME}
        jobTitle={FOUNDER_TITLE}
        description={FOUNDER_SHORT_BIO}
        url={`${SEO_SITE_URL}/pages/founder`}
        worksFor={{ name: companyProfile.legalName, url: SEO_SITE_URL }}
      />
      {children}
    </>
  );
}
