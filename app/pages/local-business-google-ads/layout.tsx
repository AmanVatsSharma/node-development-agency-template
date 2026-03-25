import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Local Business Google Ads Services | Drive Local Leads — Vedpragya',
  description:
    'Grow local visibility and leads using Google Ads campaigns with location targeting, map intent, and conversion tracking. Local PPC experts in India.',
  path: '/pages/local-business-google-ads',
  keywords: [
    'local business google ads',
    'local google ads management',
    'location targeting ads',
    'local lead generation',
    'google local service ads india',
    'google ads for local business',
    'local ppc management india',
    'google maps advertising',
    'local search advertising',
    'nearby customer ads',
    'google ads local campaigns',
    'local business digital marketing',
    'vedpragya local ads',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'How do Google Ads help local businesses get more customers?',
    answer:
      'Google Ads for local businesses show your ads to people searching for your services in your specific area. With location targeting, call extensions, map promotions, and local service ads, you can appear at the top when nearby customers search for businesses like yours.',
  },
  {
    question: 'What is a Google Local Service Ad (LSA)?',
    answer:
      'Google Local Service Ads (LSAs) appear at the very top of Google search results for local service queries. They feature your business name, rating, service area, and phone number. You only pay per verified lead — not per click.',
  },
  {
    question: 'What is the minimum budget for local Google Ads?',
    answer:
      'Local Google Ads can be effective with budgets as low as ₹10,000–₹20,000/month for hyperlocal targeting. We optimize your budget for maximum local visibility and calls/leads within your service area.',
  },
  {
    question: 'Can you target specific cities or pin codes with Google Ads?',
    answer:
      'Yes. We can target specific cities, districts, pin codes, or a radius around your business location. We can even target specific neighborhoods or exclude areas where you don\'t want to show ads.',
  },
  {
    question: 'How do you track calls and leads from local ads?',
    answer:
      'We set up call tracking with Google forwarding numbers, form submission tracking, and website visit attribution. You\'ll see exactly how many calls and leads your local ads generate each month.',
  },
];

export default function LocalBusinessGoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Local Business Google Ads', url: `${SEO_SITE_URL}/pages/local-business-google-ads` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
