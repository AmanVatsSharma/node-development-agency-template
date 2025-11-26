import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for AI Voice Agents Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'AI Voice Agent Development',
    serviceDescription: 'Automate your calls with AI Voice Agents that sound human. Handle 24×7 customer calls, qualify leads & book appointments.',
    serviceType: 'AI Voice Automation',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'Voice Agent Starter',
        description: 'Basic AI voice agent with essential call handling',
        price: '60000',
        priceCurrency: 'INR',
      },
      {
        name: 'Voice Agent Professional',
        description: 'Advanced voice agent with integrations and custom features',
        price: '150000',
        priceCurrency: 'INR',
      },
      {
        name: 'Voice Agent Enterprise',
        description: 'Enterprise voice agent with full customization and support',
        price: '400000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.7',
      reviewCount: '220',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'How do AI voice agents work?',
        answer: 'AI voice agents use natural language processing and speech recognition to understand callers, respond naturally, and handle calls 24/7. They can qualify leads, answer questions, and book appointments.',
      },
      {
        question: 'Do voice agents sound natural?',
        answer: 'Yes, our AI voice agents use advanced voice synthesis to sound natural and human-like. They can handle conversations naturally and adapt to different accents and languages.',
      },
      {
        question: 'What languages do you support?',
        answer: 'We support multiple languages including English, Hindi, and other Indian languages. We can customize voice agents for specific languages and regions.',
      },
      {
        question: 'Can voice agents integrate with CRM?',
        answer: 'Yes, voice agents can integrate with CRM systems, booking systems, and other business tools. They can update records, create leads, and sync data automatically.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'AI Voice Agents', url: '/pages/ai-voice-agents' },
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

export default function AIVoiceAgentsLayout({
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
