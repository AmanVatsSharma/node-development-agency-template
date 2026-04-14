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
  title: 'Web Development Company in Bangalore | Vedpragya',
  description:
    'Top Bangalore web development company for startups and enterprises. Next.js, React, Node.js, and Shopify development with transparent INR pricing.',
  path: '/pages/web-development-bangalore',
  keywords: [
    'web development company bangalore',
    'website design bangalore',
    'web developer bangalore',
    'ecommerce development bangalore',
    'next.js development bangalore',
    'react development bangalore',
    'nodejs development bangalore',
    'saas development bangalore',
    'mvp development bangalore',
    'custom website bangalore',
    'bangalore startup development agency',
    'vedpragya bangalore',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'Do you work with Bangalore startups?',
    answer:
      'Yes — we specialize in MVP development, SaaS platforms, and AI-powered products for Bangalore startups. Most of our clients are Bangalore-based founders.',
  },
  {
    question: 'How much does a Bangalore website cost?',
    answer:
      'Bangalore web development packages start at ₹49,000 for business websites and range to ₹10,00,000+ for custom SaaS platforms.',
  },
  {
    question: 'Do you serve clients across Koramangala and Whitefield?',
    answer:
      'Yes, we serve clients across all of Bangalore including Koramangala, Indiranagar, Whitefield, HSR Layout, Electronic City, and MG Road — fully remote.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development Services Bangalore',
  description: 'Custom web development for Bangalore startups and enterprises.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: { '@type': 'City', name: 'Bangalore', addressCountry: 'India' },
};

export default function BangaloreWebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Web Development Bangalore', url: `${SEO_SITE_URL}/pages/web-development-bangalore` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="Web Development Services Bangalore"
        description="Custom web development for Bangalore startups and enterprises."
        url={`${SEO_SITE_URL}/pages/web-development-bangalore`}
        ratingValue={4.9}
        reviewCount={44}
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
