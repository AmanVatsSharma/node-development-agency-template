import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Portfolio | Vedpragya Case Studies & Client Results',
  description:
    'Explore Vedpragya portfolio projects across web development, 3D experiences, e-commerce, AI systems, and enterprise software — with real client results.',
  path: '/pages/portfolio',
  keywords: [
    'vedpragya portfolio',
    'software development case studies india',
    'ecommerce project portfolio',
    'web development results',
    'it company portfolio india',
  ],
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'Portfolio', url: `${SEO_SITE_URL}/pages/portfolio` },
      ]} />
      {children}
    </>
  );
}
