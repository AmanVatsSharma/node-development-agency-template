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
  title: 'Web Development Company in Gurgaon | Vedpragya',
  description:
    'Gurgaon web development company headquartered in Haryana. Custom websites, e-commerce, and SaaS platforms built with Next.js and Node.js.',
  path: '/pages/web-development-gurgaon',
  keywords: [
    'web development company gurgaon',
    'website design gurgaon',
    'web developer gurgaon',
    'gurgaon website design company',
    'ecommerce development gurgaon',
    'next.js development gurgaon',
    'react development gurgaon',
    'nodejs development gurgaon',
    'saas development gurgaon',
    'custom website gurgaon',
    'haryana web development',
    'vedpragya gurgaon',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'Are you a Gurgaon-based web development company?',
    answer:
      'Yes. Vedpragya Bharat Private Limited is registered in Haryana and serves businesses across Gurgaon including Cyber Hub, DLF Cyber City, Sohna Road, and Golf Course Road.',
  },
  {
    question: 'How much does a website cost in Gurgaon?',
    answer:
      'Our Gurgaon web development packages start at ₹49,000 for business websites and scale to ₹10,00,000+ for custom SaaS platforms and web applications.',
  },
  {
    question: 'Do you offer in-person meetings in Gurgaon?',
    answer:
      'Yes — as a Haryana-registered company, we can meet clients in person in Gurgaon for discovery calls and key milestones.',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development Services Gurgaon',
  description: 'Custom web development for Gurgaon businesses by a Haryana-registered agency.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: { '@type': 'City', name: 'Gurgaon', addressCountry: 'India' },
};

export default function GurgaonWebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Web Development Gurgaon', url: `${SEO_SITE_URL}/pages/web-development-gurgaon` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="Web Development Services Gurgaon"
        description="Custom web development for Gurgaon businesses."
        url={`${SEO_SITE_URL}/pages/web-development-gurgaon`}
        ratingValue={4.9}
        reviewCount={36}
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
