import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for React.js Development Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'React.js Development Services',
    serviceDescription: 'Expert React.js development services. Custom React applications, React Native mobile apps, component libraries, and modern web solutions.',
    serviceType: 'React.js Development',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'React.js Starter',
        description: 'Basic React.js application with essential features',
        price: '60000',
        priceCurrency: 'INR',
      },
      {
        name: 'React.js Professional',
        description: 'Advanced React.js application with custom features',
        price: '150000',
        priceCurrency: 'INR',
      },
      {
        name: 'React.js Enterprise',
        description: 'Enterprise React.js solution with full customization',
        price: '500000',
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
        question: 'What is React.js and why use it?',
        answer: 'React.js is a JavaScript library for building user interfaces. It offers component-based architecture, virtual DOM for performance, large ecosystem, and is ideal for building interactive web applications.',
      },
      {
        question: 'Do you build React Native mobile apps?',
        answer: 'Yes, we build React Native mobile applications for iOS and Android. React Native allows code sharing between platforms, reducing development time and cost.',
      },
      {
        question: 'What React.js features do you use?',
        answer: 'We use modern React features including hooks, context API, React Router, state management (Redux/Zustand), and popular React libraries for optimal development experience.',
      },
      {
        question: 'How do you ensure React.js performance?',
        answer: 'We optimize React.js applications through code splitting, lazy loading, memoization, virtual DOM optimization, and performance monitoring to ensure fast, responsive applications.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'React.js Development', url: '/pages/reactjs-development' },
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

export default function ReactJSDevelopmentLayout({
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
