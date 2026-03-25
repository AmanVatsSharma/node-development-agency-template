import React from 'react';
import { metadata } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';
import { companyProfile } from '@/app/data/companyProfile';

export { metadata };

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development Services Mumbai',
  description:
    'Professional, mobile-responsive website development for Mumbai businesses with fast delivery and conversion-focused design.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
    addressCountry: 'India',
  },
};

const FAQ_QUESTIONS = [
  {
    question: 'Do you offer web development services in Mumbai?',
    answer:
      'Yes. Vedpragya provides professional web development services for businesses in Mumbai — including website design, React and Next.js development, e-commerce stores, and SEO-optimized landing pages.',
  },
  {
    question: 'How much does a website cost for a Mumbai business?',
    answer:
      'A professional business website for a Mumbai company starts from ₹25,000. E-commerce websites start from ₹50,000. Enterprise web applications are custom-quoted based on requirements.',
  },
  {
    question: 'Can you develop my website remotely from Mumbai?',
    answer:
      'Yes. We work with Mumbai businesses fully remotely with regular video calls, shared project management tools, and prompt communication. Most of our Mumbai clients never need an in-person meeting.',
  },
  {
    question: 'Do you build websites for Mumbai startups?',
    answer:
      'Yes. We work with Mumbai startups on MVP development, landing pages, and full-stack web applications. We offer startup-friendly pricing and flexible engagement models.',
  },
  {
    question: 'How long does website development take for a Mumbai business?',
    answer:
      'A standard business website takes 2–3 weeks. Complex web applications or e-commerce platforms take 4–10 weeks. We provide a clear project timeline before starting any work.',
  },
];

export default function MumbaiWebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Web Development Mumbai', url: `${SEO_SITE_URL}/pages/web-development-mumbai` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      {children}
    </>
  );
}
