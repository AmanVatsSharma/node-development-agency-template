import { ReactNode } from 'react';
import { metadata, structuredData } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export { metadata };

const FAQ_QUESTIONS = [
  {
    question: 'Why should I use Next.js for my web application?',
    answer:
      'Next.js provides server-side rendering, automatic code splitting, built-in image optimization, API routes, and excellent SEO out of the box. It is the leading React framework for production-grade web applications with superior Core Web Vitals scores.',
  },
  {
    question: 'How much does Next.js development cost in India?',
    answer:
      'Next.js development costs depend on project complexity. A business website starts around ₹40,000, a SaaS application ranges from ₹1,50,000–₹8,00,000, and enterprise platforms are custom-quoted. Contact us for a free estimate.',
  },
  {
    question: 'Can you migrate my existing website to Next.js?',
    answer:
      'Yes. We migrate websites from WordPress, CRA React, PHP, and other frameworks to Next.js — improving performance, SEO scores, and developer experience. We handle all data migration and URL redirects to preserve rankings.',
  },
  {
    question: 'How long does a Next.js project take to build?',
    answer:
      'A standard Next.js website takes 3–5 weeks. A full-stack Next.js application with API routes, authentication, and database integration takes 6–16 weeks depending on feature scope and complexity.',
  },
  {
    question: 'Do you offer Next.js performance and SEO optimization?',
    answer:
      'Yes. We implement Core Web Vitals optimization, server-side rendering, static generation, image optimization, structured data markup, and sitemap generation — ensuring your Next.js site ranks well and loads fast.',
  },
];

export default function NextJsDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Next.js Development', url: `${SEO_SITE_URL}/pages/next-js-development` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}
