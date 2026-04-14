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
  title: 'Web Development Company in Noida | Vedpragya',
  description:
    'Noida web development company serving Sector 62, Sector 18, Noida Expressway, and Greater Noida. Custom websites, e-commerce, and SaaS platforms.',
  path: '/pages/web-development-noida',
  keywords: [
    'web development company noida',
    'website design noida',
    'web developer noida',
    'ecommerce development noida',
    'next.js development noida',
    'react development noida',
    'nodejs development noida',
    'saas development noida',
    'sector 62 web development',
    'vedpragya noida',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'Do you offer web development services in Noida?',
    answer:
      'Yes — we serve Noida businesses across Sector 62, Sector 18, Sector 125, and the Noida Expressway area. Fully remote delivery.',
  },
  {
    question: 'How much does a Noida website cost?',
    answer:
      'Noida web development packages start at ₹49,000 for business websites and scale to ₹10,00,000+ for enterprise platforms.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development Services Noida',
  description: 'Custom web development for Noida businesses.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: { '@type': 'City', name: 'Noida', addressCountry: 'India' },
};

export default function NoidaWebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Web Development Noida', url: `${SEO_SITE_URL}/pages/web-development-noida` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="Web Development Services Noida"
        description="Custom web development for Noida businesses."
        url={`${SEO_SITE_URL}/pages/web-development-noida`}
        ratingValue={4.9}
        reviewCount={24}
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
