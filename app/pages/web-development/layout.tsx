import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Web Development Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Web Development Services',
    serviceDescription: 'Enterprise-grade web development: Next.js apps, SEO optimization, analytics & tracking, branding, integrations, and growth consulting.',
    serviceType: 'Web Development & Consulting',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Web Development Starter',
        description: 'Basic website development, responsive design, SEO setup',
        price: '50000',
        priceCurrency: 'INR',
      },
      {
        name: 'Web Development Professional',
        description: 'Advanced features, custom integrations, performance optimization',
        price: '150000',
        priceCurrency: 'INR',
      },
      {
        name: 'Web Development Enterprise',
        description: 'Enterprise solutions, custom architecture, ongoing support',
        price: '500000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '420',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'We use modern technologies including Next.js, React, TypeScript, Tailwind CSS, Node.js, and various databases. We choose the best stack based on your project requirements.',
      },
      {
        question: 'How long does a web development project take?',
        answer: 'Project timelines vary based on complexity. A basic website takes 2-4 weeks, while enterprise applications can take 3-6 months. We provide detailed timelines during project planning.',
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, we offer maintenance packages including updates, security patches, performance monitoring, and technical support. Maintenance plans start from ₹10,000/month.',
      },
      {
        question: 'Can you integrate with third-party services?',
        answer: 'Yes, we integrate with payment gateways, CRM systems, analytics platforms, email services, and other third-party APIs. We have experience with most popular integrations.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Web Development', url: '/pages/web-development' },
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

export default function WebDevelopmentLayout({
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
