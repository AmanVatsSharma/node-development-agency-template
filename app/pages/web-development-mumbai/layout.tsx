import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for Web Development Mumbai Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Web Development Services in Mumbai',
    serviceDescription: 'Professional web development services in Mumbai. Custom websites, ecommerce solutions, and web applications for businesses in Mumbai and across India.',
    serviceType: 'Web Development Services',
    areaServed: ['Mumbai', 'India'],
    offers: [
      {
        name: 'Mumbai Web Development Starter',
        description: 'Basic website for Mumbai businesses',
        price: '40000',
        priceCurrency: 'INR',
      },
      {
        name: 'Mumbai Web Development Professional',
        description: 'Advanced web solutions for growing Mumbai businesses',
        price: '120000',
        priceCurrency: 'INR',
      },
      {
        name: 'Mumbai Web Development Enterprise',
        description: 'Enterprise web solutions for large Mumbai organizations',
        price: '400000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.7',
      reviewCount: '180',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'Do you provide web development services in Mumbai?',
        answer: 'Yes, we provide comprehensive web development services in Mumbai. We work with businesses across Mumbai and can meet in person for consultations.',
      },
      {
        question: 'What types of websites do you build?',
        answer: 'We build all types of websites including business websites, ecommerce stores, web applications, portals, and custom solutions tailored to your needs.',
      },
      {
        question: 'How long does it take to build a website?',
        answer: 'Timeline depends on complexity. A simple business website takes 2-3 weeks, while complex ecommerce sites can take 6-12 weeks. We provide detailed timelines upfront.',
      },
      {
        question: 'Do you provide hosting and domain services?',
        answer: 'Yes, we can help you set up hosting and domain registration. We work with reliable hosting providers and can manage everything for you.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Web Development Mumbai', url: '/pages/web-development-mumbai' },
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

export default function WebDevelopmentMumbaiLayout({
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
