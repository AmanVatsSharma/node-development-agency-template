import React from 'react';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import {
  BreadcrumbStructuredData,
  FAQStructuredData,
  AggregateRatingStructuredData,
} from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';
import { companyProfile } from '@/app/data/companyProfile';

export const metadata: Metadata = buildPageMetadata({
  title: 'Node.js Development Company in India | Vedpragya',
  description:
    'Hire an expert Node.js development team from India. We build scalable backends, real-time apps, microservices, and enterprise APIs with Node.js 20 + TypeScript. Trusted by startups and enterprises in India, UAE, and the US.',
  path: '/pages/nodejs-development',
  keywords: [
    'nodejs development india',
    'node.js development company india',
    'hire node.js developers india',
    'node.js backend development',
    'node.js microservices',
    'node.js api development',
    'express.js development',
    'fastify development',
    'nestjs development india',
    'nodejs typescript development',
    'realtime nodejs application',
    'nodejs saas backend',
    'enterprise nodejs development',
    'vedpragya nodejs',
  ],
});

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Node.js Development',
  name: 'Node.js Development Services',
  description:
    'Expert Node.js backend development — REST APIs, microservices, real-time systems, and enterprise platforms built with TypeScript, Fastify, NestJS, and PostgreSQL.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
  },
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Node.js Development Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'REST API MVP',
          description: 'Node.js REST API with auth, database, and deployment',
        },
        priceCurrency: 'INR',
        price: '150000',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SaaS Backend',
          description: 'Multi-tenant Node.js backend with billing, permissions, and admin panel',
        },
        priceCurrency: 'INR',
        price: '500000',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise Microservices',
          description: 'Production-grade microservices with observability, CI/CD, and scale',
        },
        priceCurrency: 'INR',
        price: '1500000',
      },
    ],
  },
};

const FAQ_QUESTIONS = [
  {
    question: 'How much does Node.js development cost in India?',
    answer:
      'Node.js development in India ranges from ₹1,50,000 for MVP APIs to ₹15,00,000+ for enterprise microservices platforms. Senior Node.js developer rates range from ₹1,200 to ₹2,500 per hour.',
  },
  {
    question: 'Which Node.js framework do you use?',
    answer:
      'We default to Fastify for high-throughput APIs, NestJS for enterprise applications, and Express.js for simpler projects. All production work uses TypeScript with strict mode.',
  },
  {
    question: 'Do you build real-time Node.js applications?',
    answer:
      'Yes. We build real-time features using WebSockets, Socket.io, and Redis Pub/Sub — including chat applications, live trading dashboards, notification systems, and collaborative tools.',
  },
  {
    question: 'Can you take over an existing Node.js codebase?',
    answer:
      'Yes. We audit existing Node.js codebases, identify architecture issues, improve test coverage, fix performance bottlenecks, and modernize the stack to current best practices.',
  },
  {
    question: 'Do you deploy Node.js apps to AWS, GCP, or Vercel?',
    answer:
      'Yes. We deploy Node.js applications on AWS (ECS, Fargate, Lambda), GCP (Cloud Run, GKE), Vercel, and Docker-based infrastructure with full CI/CD pipelines on GitHub Actions.',
  },
];

export default function NodeJSDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Node.js Development', url: `${SEO_SITE_URL}/pages/nodejs-development` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <AggregateRatingStructuredData
        itemName="Node.js Development Services"
        description="Expert Node.js backend development for startups and enterprises across India, UAE, and the US."
        url={`${SEO_SITE_URL}/pages/nodejs-development`}
        ratingValue={4.9}
        reviewCount={41}
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
