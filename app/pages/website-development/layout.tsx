import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Website Development Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Website Development Services',
    serviceDescription: 'Professional website development services. Custom websites, responsive design, CMS integration, ecommerce solutions, and modern web applications.',
    serviceType: 'Website Development',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Website Starter',
        description: 'Basic website with responsive design',
        price: '35000',
        priceCurrency: 'INR',
      },
      {
        name: 'Website Professional',
        description: 'Advanced website with custom features',
        price: '100000',
        priceCurrency: 'INR',
      },
      {
        name: 'Website Enterprise',
        description: 'Enterprise website with full customization',
        price: '300000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '380',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What is included in website development?',
        answer: 'Our website development includes design, development, responsive optimization, SEO setup, content management system, hosting setup, and basic training.',
      },
      {
        question: 'Do you provide website maintenance?',
        answer: 'Yes, we offer maintenance packages including updates, backups, security monitoring, and technical support. Maintenance plans are available starting from ₹8,000/month.',
      },
      {
        question: 'Can you redesign an existing website?',
        answer: 'Yes, we provide website redesign services. We can modernize your existing website while preserving important content and improving user experience.',
      },
      {
        question: 'How do you ensure websites are mobile-friendly?',
        answer: 'We use responsive design techniques and mobile-first approaches. All websites are tested across devices and screen sizes to ensure optimal mobile experience.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Website Development', url: '/pages/website-development' },
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

export default function WebsiteDevelopmentLayout({
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
