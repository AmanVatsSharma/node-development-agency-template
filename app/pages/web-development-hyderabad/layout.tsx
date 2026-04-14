import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import {
  BreadcrumbStructuredData,
  FAQStructuredData,
  AggregateRatingStructuredData,
} from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';
import { companyProfile } from '@/app/data/companyProfile';

export const metadata: Metadata = buildPageMetadata({
  title: 'Web Development Company in Hyderabad | Vedpragya',
  description:
    'Hyderabad web development company for SaaS, e-commerce, healthcare, and custom web applications. Built with Next.js and Node.js.',
  path: '/pages/web-development-hyderabad',
  keywords: [
    'web development company hyderabad',
    'website design hyderabad',
    'web developer hyderabad',
    'ecommerce development hyderabad',
    'next.js development hyderabad',
    'react development hyderabad',
    'nodejs development hyderabad',
    'saas development hyderabad',
    'hitec city web development',
    'vedpragya hyderabad',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'Do you work with Hyderabad businesses?',
    answer:
      'Yes — we work with Hyderabad startups and enterprises across HITEC City, Gachibowli, Madhapur, Kondapur, and Jubilee Hills, fully remote.',
  },
  {
    question: 'How much does a Hyderabad website cost?',
    answer:
      'Hyderabad web development packages start at ₹49,000 for business websites and range to ₹10,00,000+ for enterprise platforms.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development Services Hyderabad',
  description: 'Custom web development for Hyderabad businesses.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: { '@type': 'City', name: 'Hyderabad', addressCountry: 'India' },
};

export default function HyderabadWebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Web Development Hyderabad', url: `${SEO_SITE_URL}/pages/web-development-hyderabad` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="Web Development Services Hyderabad"
        description="Custom web development for Hyderabad businesses."
        url={`${SEO_SITE_URL}/pages/web-development-hyderabad`}
        ratingValue={4.9}
        reviewCount={27}
        provider={{ name: companyProfile.legalName, url: companyProfile.websiteUrl }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      {children}
    </>
  );
}
