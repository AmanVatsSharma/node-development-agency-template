import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Vedpragya | Talk to Our Software Development Team',
  description:
    'Contact Vedpragya to discuss web development, AI automation, and growth marketing services. We respond quickly with actionable next steps.',
  path: '/pages/contact',
  keywords: [
    'contact vedpragya',
    'software development consultation india',
    'hire web developer india',
    'google ads consultation',
    'ai automation consultation',
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: SEO_SITE_URL },
        { name: 'Contact', url: `${SEO_SITE_URL}/pages/contact` },
      ]} />
      {children}
    </>
  );
}
