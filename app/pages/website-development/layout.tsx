import React from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Website Development Services | Vedpragya — Fast, SEO-Ready Websites',
  description:
    'Build premium business websites that are fast, conversion-focused, mobile-ready, and SEO-optimized with Vedpragya — India\'s enterprise software development company.',
  path: '/pages/website-development',
  keywords: [
    'website development services india',
    'custom website development',
    'business website agency india',
    'seo optimized website development',
    'professional website development',
    'responsive website development india',
    'website development company mumbai',
    'next js website development',
    'react website development',
    'ecommerce website development india',
    'landing page development',
    'website design and development',
    'vedpragya web development',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'How long does website development take?',
    answer:
      'A standard business website typically takes 2–4 weeks. Complex web applications with custom features and integrations can take 6–12 weeks depending on scope and requirements.',
  },
  {
    question: 'How much does website development cost in India?',
    answer:
      'Website development costs vary by complexity. A basic business website starts around ₹25,000–₹50,000, while a feature-rich web application can range from ₹1,00,000 to ₹5,00,000+. Contact us for a free custom quote.',
  },
  {
    question: 'Do you build SEO-friendly websites?',
    answer:
      'Yes. Every website we build includes on-page SEO best practices: semantic HTML, fast load times, Core Web Vitals optimization, structured data markup, meta tags, and sitemap generation.',
  },
  {
    question: 'What technologies do you use for website development?',
    answer:
      'We use modern technologies including Next.js, React, Node.js, TypeScript, and Tailwind CSS. We choose the right technology stack based on your project requirements and long-term goals.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes, we offer ongoing maintenance, performance monitoring, content updates, and feature enhancements after launch. We have monthly support plans tailored to different business needs.',
  },
];

export default function WebsiteDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Website Development', url: `${SEO_SITE_URL}/pages/website-development` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      {children}
    </>
  );
}
