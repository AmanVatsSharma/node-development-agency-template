import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for CRM Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'EnterpriseHero CRM',
    serviceDescription: 'Experience India\'s premium self-hosted CRM — customizable, secure, and ERP-ready. Own your business data with enterprise-grade features.',
    serviceType: 'CRM Software',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'CRM Starter',
        description: 'Basic CRM with essential features',
        price: '50000',
        priceCurrency: 'INR',
      },
      {
        name: 'CRM Professional',
        description: 'Advanced CRM with custom features and integrations',
        price: '150000',
        priceCurrency: 'INR',
      },
      {
        name: 'CRM Enterprise',
        description: 'Enterprise CRM with full customization and support',
        price: '500000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '180',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What is EnterpriseHero CRM?',
        answer: 'EnterpriseHero CRM is a premium self-hosted CRM built on the BharatERP stack. It\'s customizable, secure, and ERP-ready, giving you full control over your business data.',
      },
      {
        question: 'Is CRM self-hosted?',
        answer: 'Yes, EnterpriseHero CRM is self-hosted, meaning you own and control your data. You can host it on your own servers or cloud infrastructure.',
      },
      {
        question: 'Can CRM be customized?',
        answer: 'Yes, CRM is highly customizable. We can customize features, workflows, integrations, and UI to match your business needs.',
      },
      {
        question: 'Does CRM integrate with other systems?',
        answer: 'Yes, CRM integrates with email systems, payment gateways, accounting software, and other business tools. We can create custom integrations as needed.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'CRM', url: '/pages/crm' },
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

export default function CRMLayout({
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
