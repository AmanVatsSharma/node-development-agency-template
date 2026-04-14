import React from 'react';
import { Metadata } from 'next';
import { metadata as pageMetadata } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData, AggregateRatingStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';
import { companyProfile } from '@/app/data/companyProfile';

export const metadata: Metadata = pageMetadata;

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Google Ads Management',
  name: 'Google Ads Management Service',
  description:
    'Expert Google Ads management to build, manage, and optimize high-ROI campaigns for leads and revenue growth.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United States' },
  ],
};

const FAQ_QUESTIONS = [
  {
    question: 'What is included in your Google Ads management service?',
    answer:
      'Our Google Ads management includes: campaign strategy, keyword research, ad copywriting, audience targeting, bid management, A/B testing, conversion tracking setup, monthly performance reports, and ongoing optimization.',
  },
  {
    question: 'How much does Google Ads management cost?',
    answer:
      'Our management fees start from ₹15,000/month for small accounts and scale with account complexity and ad spend. We charge a flat management fee — not a percentage of ad spend. All ad budget goes directly to Google.',
  },
  {
    question: 'What results can I expect from Google Ads?',
    answer:
      'Results depend on your industry, competition, and budget. Most clients see qualified leads within the first 2 weeks. We target specific KPIs like cost-per-lead (CPL), ROAS, and conversion rate based on your business goals.',
  },
  {
    question: 'Do you manage Google Ads for specific industries?',
    answer:
      'Yes. We have experience managing Google Ads for e-commerce, healthcare, education, real estate, SaaS, B2B services, legal, finance, and many other industries across India and internationally.',
  },
  {
    question: 'How do you track Google Ads conversions?',
    answer:
      'We set up Google Ads conversion tracking for form fills, phone calls, WhatsApp clicks, purchases, and other actions. We integrate with Google Analytics 4 and your CRM to attribute leads accurately.',
  },
];

export default function GoogleAdsManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Google Ads Management', url: `${SEO_SITE_URL}/pages/google-ads-management` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="Google Ads Management Service"
        description="Expert Google Ads management for lead-gen and revenue growth across India, UAE, and US markets."
        url={`${SEO_SITE_URL}/pages/google-ads-management`}
        ratingValue={4.9}
        reviewCount={54}
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
