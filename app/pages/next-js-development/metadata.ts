import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { NEXTJS_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Next.js Web Development Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire next.js developer" (high buyer intent)
 * - Secondary: Service-specific Next.js development keywords
 * - Long-tail: Technology-specific development keywords
 * - Semantic: Related React and Next.js terms
 */

export const metadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Next.js Developer | Professional Next.js Development Services',
  'We build super-fast websites using Next.js + Tailwind CSS + NestJS. SEO-ready, secure & scalable.',
  NEXTJS_KEYWORDS,
  '/pages/next-js-development',
  {
    pricing: {
      startingPrice: '14,999',
      currency: '₹',
    },
    ogImage: '/og-nextjs-development.jpg',
    cta: 'Get free consultation today!',
  }
);

/**
 * Structured Data (JSON-LD) for SEO
 * Includes Organization, Product, Service, and FAQ schemas
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization Schema
    {
      '@type': 'Organization',
      '@id': 'https://yourdomain.com/#organization',
      name: 'Next.js Development Agency',
      url: 'https://yourdomain.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourdomain.com/logo.png',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://twitter.com/youragency',
        'https://www.linkedin.com/company/youragency',
        'https://github.com/youragency',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-99637-30111',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    },
    // Service Schema
    {
      '@type': 'Service',
      '@id': 'https://yourdomain.com/pages/next-js-development#service',
      serviceType: 'Next.js Web Development',
      provider: {
        '@id': 'https://yourdomain.com/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Next.js Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Next.js Website Development',
              description: 'End-to-end Next.js website development from design to deployment',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Next.js + Headless CMS Integration',
              description: 'Integration with Strapi, Sanity, Contentful for content management',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Next.js eCommerce Development',
              description: 'E-commerce solutions with Shopify, Medusa, or custom cart systems',
            },
          },
        ],
      },
    },
    // Product Schema - Starter Package
    {
      '@type': 'Product',
      name: 'Next.js Website - Starter Package',
      description: 'Professional Next.js website with 3 pages, responsive design, and SEO optimization',
      offers: {
        '@type': 'Offer',
        price: '14999',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        seller: {
          '@id': 'https://yourdomain.com/#organization',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
      },
    },
    // Product Schema - Professional Package
    {
      '@type': 'Product',
      name: 'Next.js Website - Professional Package',
      description: 'Advanced Next.js website with 6-8 pages, CMS integration, and comprehensive SEO',
      offers: {
        '@type': 'Offer',
        price: '49999',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        seller: {
          '@id': 'https://yourdomain.com/#organization',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
      },
    },
    // FAQ Schema
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you offer design services too?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We provide complete design services including custom UI/UX design with Figma prototypes, design systems with Tailwind CSS, and mobile-first responsive layouts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What about hosting and domain setup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We handle everything! We set up your site on Vercel or AWS, configure your custom domain, set up SSL certificates, and provide complete documentation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it SEO-ready out of the box?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! Every site includes optimized meta tags, structured data, Open Graph tags, XML sitemaps, and Lighthouse optimization.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you maintain my site monthly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer ongoing maintenance plans starting at ₹9,999/month including security updates, content updates, and priority support.',
          },
        },
      ],
    },
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://yourdomain.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://yourdomain.com/pages/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Next.js Development',
          item: 'https://yourdomain.com/pages/next-js-development',
        },
      ],
    },
  ],
};
