import React from 'react';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';
import { companyProfile } from '@/app/data/companyProfile';
export { metadata } from './metadata';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  name: 'Web Development Services',
  description:
    'Enterprise-grade web development covering Next.js applications, SEO optimization, analytics integration, and growth-focused consulting.',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Business Website', description: 'Professional business website with SEO and performance optimization' },
        priceCurrency: 'INR',
        price: '25000',
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Web Application', description: 'Custom web application built with Next.js and React' },
        priceCurrency: 'INR',
        price: '100000',
      },
    ],
  },
};

const FAQ_QUESTIONS = [
  {
    question: 'What web development technologies does Vedpragya use?',
    answer:
      'We specialize in Next.js, React, Node.js, TypeScript, Tailwind CSS, and PostgreSQL. For enterprise projects we use microservices, Docker, and cloud deployments on AWS, GCP, or Vercel.',
  },
  {
    question: 'How much does enterprise web development cost?',
    answer:
      'Enterprise web applications start from ₹1,00,000 and can range to ₹25,00,000+ for complex platforms with custom integrations. We provide free detailed estimates after understanding your requirements.',
  },
  {
    question: 'Do you build web apps for startups?',
    answer:
      'Yes. We offer MVP development for startups with lean timelines and scalable codebases. We help startups launch quickly while building technical foundations that support future growth.',
  },
  {
    question: 'Can you take over an existing web project?',
    answer:
      'Yes. We can take over and improve existing codebases. We start with a technical audit to understand the architecture, identify issues, and create a roadmap for improvements.',
  },
  {
    question: 'Do you provide web development for international clients?',
    answer:
      'Yes. We serve clients across India, UAE, the US, the UK, and Canada. Our team is experienced with international project management, remote collaboration, and timezone-flexible communication.',
  },
];

export default function WebDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Web Development', url: `${SEO_SITE_URL}/pages/web-development` },
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
