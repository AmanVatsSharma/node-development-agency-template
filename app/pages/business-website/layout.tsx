import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Business Website Development Services | Vedpragya India',
  description:
    'Get conversion-focused business websites built for speed, SEO, and lead generation by Vedpragya — India\'s enterprise software development company.',
  path: '/pages/business-website',
  keywords: [
    'business website development india',
    'professional website services',
    'lead generation website',
    'seo-ready business website',
    'business website design india',
    'professional business website',
    'small business website india',
    'corporate website development',
    'business website cost india',
    'startup website development',
    'company website development india',
    'vedpragya web development',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What is included in a business website development package?',
    answer:
      'A complete business website package includes: custom design, responsive mobile layout, contact forms, Google Analytics setup, basic SEO optimization (meta tags, sitemap, schema), page speed optimization, SSL setup, and post-launch support.',
  },
  {
    question: 'How much does a business website cost in India?',
    answer:
      'A professional business website costs between ₹25,000–₹1,50,000 depending on number of pages, design complexity, and features. We offer transparent pricing packages — contact us for a free quote tailored to your requirements.',
  },
  {
    question: 'How long does it take to develop a business website?',
    answer:
      'A standard business website is delivered in 2–4 weeks. More complex websites with custom animations, integrations, or large content volumes can take 4–8 weeks. We provide a clear timeline before starting.',
  },
  {
    question: 'Will my business website rank on Google?',
    answer:
      'Every website we build follows SEO best practices: semantic HTML, fast load times, optimized images, meta tags, schema markup, and sitemap. We also offer ongoing SEO services to help you rank for your target keywords.',
  },
  {
    question: 'Do you provide domain and hosting services?',
    answer:
      'Yes. We can assist with domain registration and set up hosting on your preferred cloud provider (AWS, GCP, Hostinger, Vercel, etc.). We guide you in selecting the right hosting plan for your traffic and budget.',
  },
];

export default function BusinessWebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Business Website Development', url: `${SEO_SITE_URL}/pages/business-website` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
