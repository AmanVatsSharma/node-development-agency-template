import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Healthcare Software Development Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Healthcare Software Development',
    serviceDescription: 'Build HIPAA-compliant healthcare software including Hospital Management System, EHR, Telemedicine platforms for healthcare providers.',
    serviceType: 'Healthcare Software Development',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Healthcare Software Starter',
        description: 'Basic healthcare software with essential features',
        price: '250000',
        priceCurrency: 'INR',
      },
      {
        name: 'Healthcare Software Professional',
        description: 'Advanced healthcare software with full features',
        price: '800000',
        priceCurrency: 'INR',
      },
      {
        name: 'Healthcare Software Enterprise',
        description: 'Enterprise healthcare solution with full customization',
        price: '2000000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '120',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'What healthcare software do you develop?',
        answer: 'We develop Hospital Management Systems, EHR software, Telemedicine platforms, Pharmacy Management Systems, Lab Management Systems, and custom healthcare solutions.',
      },
      {
        question: 'Is your software HIPAA compliant?',
        answer: 'Yes, we ensure all healthcare software is HIPAA compliant with proper security measures, data encryption, access controls, and audit trails.',
      },
      {
        question: 'How long does healthcare software development take?',
        answer: 'Healthcare software development typically takes 3-12 months depending on complexity. We provide detailed timelines during project planning.',
      },
      {
        question: 'Do you provide training and support?',
        answer: 'Yes, we provide comprehensive training for healthcare staff and ongoing support including updates, maintenance, and technical assistance.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Healthcare Software Development', url: '/pages/healthcare-software-development' },
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

export default function HealthcareSoftwareDevelopmentLayout({
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
