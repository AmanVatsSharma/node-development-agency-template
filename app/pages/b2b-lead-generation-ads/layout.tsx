import { metadata } from './metadata';
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from '@/app/lib/seo/structured-data';

export { metadata };

/**
 * Structured Data (JSON-LD) for B2B Lead Generation Ads Page
 */
function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'B2B Lead Generation Ads',
    serviceDescription: 'Generate high-quality B2B leads with targeted Google Ads campaigns. Advanced lead qualification, CRM integration, and ROI-focused strategies.',
    serviceType: 'B2B Lead Generation & Marketing',
    areaServed: ['India', 'United States', 'United Kingdom', 'Canada', 'Australia'],
    offers: [
      {
        name: 'B2B Lead Starter',
        description: 'Perfect for small to medium B2B businesses. Up to ₹8L monthly ad spend.',
        price: '60000',
        priceCurrency: 'INR',
      },
      {
        name: 'B2B Lead Professional',
        description: 'For growing B2B companies. Up to ₹20L monthly ad spend.',
        price: '100000',
        priceCurrency: 'INR',
      },
      {
        name: 'B2B Lead Enterprise',
        description: 'For large B2B organizations. Custom ad spend limits.',
        price: '200000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '350',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'How do you ensure B2B lead quality?',
        answer: 'We use advanced lead qualification systems including lead scoring, intent data analysis, and behavioral tracking. Our multi-step qualification process ensures only high-intent prospects reach your sales team, typically achieving 85% qualified lead rates.',
      },
      {
        question: "What's the typical ROAS for B2B lead generation?",
        answer: 'Most B2B clients see 3-4× ROAS improvement within the first month, with full optimization reaching 7.2×+ ROAS within 4-6 months. Our average client achieves 7.2× ROAS, with some reaching 10×+ ROAS depending on their industry and sales cycle.',
      },
      {
        question: 'Do you work with complex B2B sales cycles?',
        answer: 'Yes, we specialize in complex B2B sales cycles including long-term nurturing, multiple decision-makers, and high-value transactions. Our strategies are designed for B2B sales cycles ranging from 3-12 months with sophisticated lead nurturing sequences.',
      },
      {
        question: 'How do you target B2B decision-makers?',
        answer: 'We use advanced B2B targeting including job title targeting, company size filtering, industry-specific audiences, and intent data. Our approach targets C-level executives, VPs, directors, and other key decision-makers in your target companies.',
      },
      {
        question: 'What kind of reporting do you provide for B2B leads?',
        answer: 'We provide comprehensive B2B reporting including lead quality metrics, conversion rates by industry and company size, cost-per-lead analysis, sales pipeline impact, and ROI tracking. Reports include detailed lead scoring and qualification insights.',
      },
      {
        question: 'Can you integrate with our CRM system?',
        answer: 'Absolutely. We integrate with all major CRM systems including Salesforce, HubSpot, Pipedrive, and custom solutions. This includes automated lead scoring, lead assignment, and seamless data flow between our campaigns and your sales team.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'B2B Lead Generation Ads', url: '/pages/b2b-lead-generation-ads' },
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

export default function B2BLeadGenerationLayout({
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
