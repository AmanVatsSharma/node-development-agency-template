import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Next.js Development Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Next.js Web Development',
    serviceDescription: 'Build lightning-fast, future-proof websites using Next.js + Tailwind CSS + NestJS. SEO-ready, secure & scalable web applications.',
    serviceType: 'Next.js Development',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Next.js Starter',
        description: 'Basic Next.js website with essential features',
        price: '14999',
        priceCurrency: 'INR',
      },
      {
        name: 'Next.js Professional',
        description: 'Advanced Next.js application with custom features',
        price: '80000',
        priceCurrency: 'INR',
      },
      {
        name: 'Next.js Enterprise',
        description: 'Enterprise Next.js solution with full customization',
        price: '300000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.9',
      reviewCount: '450',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'Why choose Next.js for web development?',
        answer: 'Next.js offers server-side rendering, automatic code splitting, optimized performance, built-in SEO features, and excellent developer experience. It\'s ideal for fast, scalable web applications.',
      },
      {
        question: 'What can you build with Next.js?',
        answer: 'We can build websites, web applications, ecommerce stores, dashboards, SaaS applications, and any custom web solution using Next.js and modern technologies.',
      },
      {
        question: 'How long does a Next.js project take?',
        answer: 'Project timelines vary. A basic Next.js website takes 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during project planning.',
      },
      {
        question: 'Do you provide Next.js maintenance?',
        answer: 'Yes, we offer Next.js maintenance including updates, security patches, performance optimization, and technical support. Maintenance plans start from ₹15,000/month.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Next.js Development', url: '/pages/next-js-development' },
    ],
  });

  return (
    <>
      <StructuredDataScript data={serviceSchema} />
      <StructuredDataScript data={faqSchema} />
      <StructuredDataScript data={breadcrumbSchema} />
    </>
  );
}

export default function NextJSDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      {children}
    </>
  );
}
