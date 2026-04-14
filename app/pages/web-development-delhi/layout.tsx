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
  title: 'Web Development Company in Delhi NCR | Vedpragya',
  description:
    'Top web development company serving Delhi NCR. Custom websites, e-commerce, SaaS, and web apps with Next.js, React, and Node.js. Transparent INR pricing, fast delivery.',
  path: '/pages/web-development-delhi',
  keywords: [
    'web development company delhi',
    'website design delhi',
    'web development delhi ncr',
    'website developer delhi',
    'ecommerce development delhi',
    'next.js development delhi',
    'react development delhi',
    'nodejs development delhi',
    'delhi website design company',
    'custom website delhi',
    'saas development delhi',
    'vedpragya delhi',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'Do you offer web development services in Delhi NCR?',
    answer:
      'Yes. Vedpragya provides web development services for businesses across Delhi NCR — from Connaught Place to Nehru Place, Saket, Rohini, and beyond. We work fully remote.',
  },
  {
    question: 'How much does a website cost for a Delhi business?',
    answer:
      'Our Delhi NCR web development packages start at ₹49,000 for business websites and scale to ₹10,00,000+ for custom SaaS platforms.',
  },
  {
    question: 'Can you build SEO-optimized websites for Delhi companies?',
    answer:
      'Yes — every website we build includes Next.js server-side rendering, schema markup, sitemap, and Core Web Vitals optimization for strong Google rankings.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development Services Delhi',
  description:
    'Custom web development for Delhi NCR businesses — Next.js, React, Node.js, and headless e-commerce.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: { '@type': 'City', name: 'Delhi', addressCountry: 'India' },
};

export default function DelhiWebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Web Development Delhi', url: `${SEO_SITE_URL}/pages/web-development-delhi` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="Web Development Services Delhi"
        description="Custom web development for Delhi NCR businesses."
        url={`${SEO_SITE_URL}/pages/web-development-delhi`}
        ratingValue={4.9}
        reviewCount={32}
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
