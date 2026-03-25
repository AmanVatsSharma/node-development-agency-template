import React from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Website Services | Vedpragya — Web Development & Optimization',
  description:
    'Comprehensive website services by Vedpragya including UX design, development, performance optimization, and growth support for businesses in India and globally.',
  path: '/pages/website-services',
  keywords: [
    'website services india',
    'web development services',
    'ui ux design services',
    'business website optimization',
    'website performance optimization',
    'website redesign services india',
    'web maintenance services',
    'website speed optimization',
    'mobile website development',
    'website support services',
    'professional web design india',
    'vedpragya website services',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What website services does Vedpragya offer?',
    answer:
      'Vedpragya offers a full range of website services: custom web development, UI/UX design, website redesign, performance optimization, SEO, e-commerce development, website maintenance, and ongoing growth support.',
  },
  {
    question: 'Can you improve the speed of my existing website?',
    answer:
      'Yes. We perform in-depth performance audits and implement Core Web Vitals improvements including image optimization, code splitting, caching strategies, and server-side rendering to significantly boost your website\'s speed.',
  },
  {
    question: 'Do you work with businesses outside of India?',
    answer:
      'Absolutely. We serve clients across India, the UAE, the US, the UK, and globally. Our team works in IST timezone and accommodates flexible meeting schedules for international clients.',
  },
  {
    question: 'How do I get started with your website services?',
    answer:
      'Simply reach out via our contact page or WhatsApp. We\'ll schedule a free discovery call, assess your requirements, and provide a detailed proposal with timelines and pricing.',
  },
  {
    question: 'Do you offer website maintenance packages?',
    answer:
      'Yes. We offer monthly maintenance packages that include security updates, content updates, performance monitoring, backups, and priority support — starting from ₹5,000/month.',
  },
];

export default function WebsiteServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Website Services', url: `${SEO_SITE_URL}/pages/website-services` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
