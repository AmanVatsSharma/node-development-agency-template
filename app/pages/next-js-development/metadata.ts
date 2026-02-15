import { Metadata } from 'next';
import { companyProfile } from '@/app/data/companyProfile';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Next.js Web Development Services | Fast, SEO-Ready Websites',
  description:
    'Build lightning-fast and scalable Next.js websites with enterprise-grade architecture, performance optimization, and technical SEO.',
  path: '/pages/next-js-development',
  keywords: [
    'nextjs development services',
    'custom nextjs website',
    'nextjs seo optimization',
    'nextjs agency',
    'react nextjs development',
  ],
});

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Next.js Development Services',
  description:
    'Professional Next.js development for business websites, landing pages, and scalable web applications.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
    logo: toAbsoluteSeoUrl('/logo.png'),
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  serviceType: 'Web Development',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
};
