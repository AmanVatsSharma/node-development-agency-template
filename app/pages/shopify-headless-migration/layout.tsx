import type { Metadata } from 'next';
import { metadata as pageMetadata, structuredData } from './metadata';
import { BreadcrumbStructuredData, FAQStructuredData } from '@/app/components/SEO/StructuredData';
import { SEO_SITE_URL } from '@/app/lib/seo/constants';

export const metadata: Metadata = pageMetadata;

const FAQ_QUESTIONS = [
  {
    question: 'What is headless Shopify and why should I migrate?',
    answer:
      'Headless Shopify separates the storefront (frontend) from the Shopify backend, using Shopify as a commerce engine while delivering the frontend via a custom Next.js or React app. This gives you full design freedom, faster performance, and better SEO compared to standard Shopify themes.',
  },
  {
    question: 'How long does a headless Shopify migration take?',
    answer:
      'A headless Shopify migration from a standard theme to Next.js typically takes 6–12 weeks depending on your catalog size, custom features, and integration complexity.',
  },
  {
    question: 'Will I lose SEO rankings after migrating to headless Shopify?',
    answer:
      'No — if done correctly. We implement all necessary 301 redirects, canonical URLs, structured data, and sitemap configuration to preserve your existing SEO authority during migration. We target zero ranking drop.',
  },
  {
    question: 'How much does headless Shopify migration cost?',
    answer:
      'Headless Shopify migration projects typically start from ₹1,50,000 for stores with standard functionality. Stores with complex custom features, apps, and integrations can range from ₹3,00,000 to ₹10,00,000+.',
  },
  {
    question: 'Which frontend framework do you use for headless Shopify?',
    answer:
      'We primarily use Next.js with the Shopify Storefront API and Hydrogen-compatible patterns. This combination delivers the best performance, SEO, and developer experience for headless commerce stores.',
  },
];

export default function ShopifyHeadlessMigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Services', url: `${SEO_SITE_URL}/pages/services` },
          { name: 'Shopify Headless Migration', url: `${SEO_SITE_URL}/pages/shopify-headless-migration` },
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
