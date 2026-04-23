import { ReactNode } from 'react';
import { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { companyProfile } from '@/app/data/companyProfile';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL, toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'SaaS Website Design Agency | High-Converting SaaS Marketing Sites',
  description:
    'We design and build SaaS marketing websites, landing pages, and docs sites that convert visitors into paying users. Next.js + Framer Motion. India-based, global clients.',
  path: '/pages/saas-website-design',
  keywords: [
    'saas website design agency',
    'saas landing page design',
    'saas web design company',
    'saas marketing website design',
    'saas product website',
    'saas website design india',
    'hire saas web designer',
    'saas website development',
    'saas website design company india',
    'startup website design agency',
    'saas product landing page',
    'nextjs saas website',
    'framer saas website',
    'saas homepage design',
    'b2b saas website design',
  ],
});

const FAQ_QUESTIONS = [
  {
    question: 'What makes a great SaaS marketing website?',
    answer:
      'A great SaaS website has a crystal-clear value proposition above the fold, social proof (logos, testimonials, case studies), feature walkthroughs that address objections, and a frictionless CTA flow. It loads in under 2 seconds and scores 90+ on Core Web Vitals. We build all of this with Next.js and Tailwind.',
  },
  {
    question: 'How much does SaaS website design cost in India?',
    answer:
      'A high-quality SaaS marketing website starts at ₹80,000 for a 5-page site (homepage, pricing, features, about, contact). A full design system with landing pages, docs integration, and blog starts at ₹2,50,000. Enterprise-grade sites with custom animations and CMS are priced on request.',
  },
  {
    question: 'How long does it take to build a SaaS website?',
    answer:
      'A focused SaaS homepage with core marketing pages takes 3–4 weeks. A full marketing site with blog, docs, pricing, changelog, and CMS integration takes 6–10 weeks. We work in two-week sprints with design-then-code handoff.',
  },
  {
    question: 'Do you design or just develop?',
    answer:
      'Both. We handle strategy, UX wireframes, visual design, and development end-to-end. If you already have Figma designs, we can build pixel-perfect from them. We align to your brand or create a new design system from scratch.',
  },
  {
    question: 'Can you integrate our SaaS website with HubSpot, Intercom, or our app?',
    answer:
      'Yes. We integrate analytics (GA4, Mixpanel, Segment), CRM and marketing automation (HubSpot, Intercom, Customer.io), auth redirects to your product, and custom webhook pipelines. If your app has an API, we can connect to it.',
  },
  {
    question: 'Will the site rank on Google?',
    answer:
      'SEO is built in, not bolted on. Every page ships with canonical tags, JSON-LD structured data, semantic HTML, next/image optimization, sitemap.xml, and a robots.txt. We also help plan your content architecture so the site can earn organic traffic over time.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SaaS Website Design & Development',
  description:
    'End-to-end SaaS website design and development — marketing sites, landing pages, pricing pages, and docs sites built with Next.js and Tailwind.',
  provider: {
    '@type': 'Organization',
    name: companyProfile.legalName,
    url: companyProfile.websiteUrl,
    logo: toAbsoluteSeoUrl('/logo.png'),
  },
  areaServed: { '@type': 'Place', name: 'Worldwide' },
  serviceType: 'SaaS Website Design',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
};

export default function SaasWebsiteDesignLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'SaaS Website Design', url: `${SEO_SITE_URL}/pages/saas-website-design` },
        ]}
      />
      <FAQStructuredData questions={FAQ_QUESTIONS} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
