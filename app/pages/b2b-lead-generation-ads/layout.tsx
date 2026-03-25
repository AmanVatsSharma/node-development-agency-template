import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'B2B Lead Generation Ads Services | Google Ads for B2B — Vedpragya',
  description:
    'Generate qualified B2B leads with intent-driven Google Ads strategy, targeting, and conversion optimization. Trusted B2B PPC agency in India.',
  path: '/pages/b2b-lead-generation-ads',
  keywords: [
    'b2b lead generation ads',
    'google ads for b2b leads',
    'b2b paid search strategy',
    'qualified lead generation',
    'b2b ppc management india',
    'b2b google ads agency',
    'lead generation advertising india',
    'b2b demand generation',
    'b2b digital marketing india',
    'paid lead generation services',
    'google ads b2b campaigns',
    'b2b marketing agency india',
    'inbound lead generation ads',
    'vedpragya b2b ads',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'How does B2B lead generation with Google Ads work?',
    answer:
      'B2B lead generation via Google Ads involves targeting high-intent search queries from business decision-makers. We create campaigns targeting specific job titles, industries, and keywords, driving them to optimized landing pages with clear CTAs to capture qualified leads.',
  },
  {
    question: 'What is the minimum budget for B2B Google Ads?',
    answer:
      'We recommend a minimum monthly ad spend of ₹30,000–₹50,000 for B2B campaigns to gather meaningful data. Our management fees are charged separately. Larger budgets yield better data and faster optimization.',
  },
  {
    question: 'How long does it take to see results from B2B lead gen ads?',
    answer:
      'You typically start seeing leads within the first 1–2 weeks of launch. However, campaigns usually take 4–8 weeks to fully optimize as we gather conversion data and refine targeting, bids, and messaging.',
  },
  {
    question: 'Do you track lead quality and not just quantity?',
    answer:
      'Yes. We set up CRM integrations and lead scoring to track lead quality. We optimize campaigns toward qualified leads that match your ideal customer profile (ICP), not just raw form fills.',
  },
  {
    question: 'Can you run B2B lead generation campaigns on LinkedIn as well?',
    answer:
      'Yes. In addition to Google Ads, we manage LinkedIn Ads campaigns for B2B lead generation, including sponsored content, Lead Gen Forms, message ads, and retargeting to reach decision-makers on LinkedIn.',
  },
];

export default function B2BLeadGenerationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'B2B Lead Generation Ads', url: `${SEO_SITE_URL}/pages/b2b-lead-generation-ads` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
