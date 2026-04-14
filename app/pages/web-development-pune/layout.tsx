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
  title: 'Web Development Company in Pune | Vedpragya',
  description:
    'Pune web development company for SaaS, e-commerce, and web applications. Next.js, React, Node.js development with INR pricing.',
  path: '/pages/web-development-pune',
  keywords: [
    'web development company pune',
    'website design pune',
    'web developer pune',
    'ecommerce development pune',
    'next.js development pune',
    'react development pune',
    'nodejs development pune',
    'saas development pune',
    'custom website pune',
    'pune it services',
    'vedpragya pune',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'Do you work with Pune businesses?',
    answer:
      'Yes — we work with Pune startups and enterprises across Kothrud, Baner, Hinjewadi, Viman Nagar, and Koregaon Park, fully remote.',
  },
  {
    question: 'How much does a Pune website cost?',
    answer:
      'Pune web development packages start at ₹49,000 for business websites and range to ₹10,00,000+ for custom SaaS platforms.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development Services Pune',
  description: 'Custom web development for Pune businesses.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: { '@type': 'City', name: 'Pune', addressCountry: 'India' },
};

export default function PuneWebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Web Development Pune', url: `${SEO_SITE_URL}/pages/web-development-pune` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="Web Development Services Pune"
        description="Custom web development for Pune businesses."
        url={`${SEO_SITE_URL}/pages/web-development-pune`}
        ratingValue={4.9}
        reviewCount={29}
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
