import React from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'ReactJS Web App Development Services | Vedpragya India',
  description:
    'Build scalable ReactJS web applications, dashboards, and SaaS products with performance-focused engineering. Expert React development team in India.',
  path: '/pages/reactjs-development',
  keywords: [
    'reactjs development india',
    'react web app development',
    'custom react applications',
    'react dashboard development',
    'react js development company',
    'hire react developer india',
    'react saas development',
    'react frontend development',
    'react component development',
    'react js consulting',
    'react typescript development',
    'next js react development',
    'react web application india',
    'vedpragya react development',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'How much does ReactJS development cost in India?',
    answer:
      'ReactJS development costs depend on project complexity. A simple web app starts from ₹50,000, while a full SaaS platform or enterprise dashboard ranges from ₹2,00,000 to ₹15,00,000+. Contact us for a free project estimate.',
  },
  {
    question: 'How long does a ReactJS web application take to build?',
    answer:
      'A basic React web app typically takes 3–6 weeks. A complex SaaS platform or enterprise dashboard can take 3–6 months depending on features, integrations, and custom UI requirements.',
  },
  {
    question: 'Do you build ReactJS apps with TypeScript?',
    answer:
      'Yes. We build all production React applications with TypeScript by default for type safety, better developer experience, and long-term maintainability. We also use Next.js for server-side rendering and SEO.',
  },
  {
    question: 'Can you integrate third-party APIs into my React application?',
    answer:
      'Yes. We integrate payment gateways (Razorpay, Stripe), CRM systems, analytics platforms, REST/GraphQL APIs, WebSockets for real-time features, and any third-party service your business requires.',
  },
  {
    question: 'Do you provide React development for startups?',
    answer:
      'Yes. We work with startups, SMEs, and enterprises alike. For startups, we offer MVP development packages to get your product to market quickly while keeping the codebase scalable for future growth.',
  },
];

export default function ReactJSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'ReactJS Development', url: `${SEO_SITE_URL}/pages/reactjs-development` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
