/**
 * @fileoverview Structured Data (JSON-LD) Generator Utility
 * @description Reusable functions for generating Schema.org structured data
 * @version 1.0.0
 */

/**
 * Base organization data
 */
const ORGANIZATION = {
  name: 'Vedpragya Bharat Private Limited',
  url: 'https://enterprisehero.com',
  logo: 'https://enterprisehero.com/logo.png',
  address: {
    streetAddress: '123 Tech Street',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400001',
    addressCountry: 'IN',
  },
  contactPoint: {
    telephone: '+91-XXXXX-XXXXX',
    contactType: 'customer service',
    email: 'contact@enterprisehero.com',
  },
  sameAs: [
    'https://twitter.com/enterprisehero',
    'https://linkedin.com/company/enterprisehero',
    'https://github.com/enterprisehero',
  ],
};

/**
 * Interface for Service Schema
 */
export interface ServiceSchemaConfig {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  areaServed?: string | string[];
  offers?: Array<{
    name: string;
    description: string;
    price: string;
    priceCurrency?: string;
  }>;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

/**
 * Generates Service Schema (JSON-LD)
 */
export function generateServiceSchema(config: ServiceSchemaConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.serviceName,
    description: config.serviceDescription,
    serviceType: config.serviceType,
    provider: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
    },
    ...(config.areaServed && {
      areaServed: Array.isArray(config.areaServed)
        ? config.areaServed.map(area => ({
            '@type': 'Country',
            name: area,
          }))
        : {
            '@type': 'Country',
            name: config.areaServed,
          },
    }),
    ...(config.offers && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${config.serviceName} Packages`,
        itemListElement: config.offers.map(offer => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: offer.name,
            description: offer.description,
          },
          price: offer.price,
          priceCurrency: offer.priceCurrency || 'INR',
        })),
      },
    }),
    ...(config.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: config.aggregateRating.ratingValue,
        reviewCount: config.aggregateRating.reviewCount,
      },
    }),
  };
}

/**
 * Interface for FAQ Schema
 */
export interface FAQSchemaConfig {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * Generates FAQ Schema (JSON-LD)
 */
export function generateFAQSchema(config: FAQSchemaConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

/**
 * Interface for Breadcrumb Schema
 */
export interface BreadcrumbSchemaConfig {
  items: Array<{
    name: string;
    url: string;
  }>;
}

/**
 * Generates Breadcrumb Schema (JSON-LD)
 */
export function generateBreadcrumbSchema(config: BreadcrumbSchemaConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: config.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${ORGANIZATION.url}${item.url}`,
    })),
  };
}

/**
 * Interface for Organization Schema
 */
export interface OrganizationSchemaConfig {
  name?: string;
  url?: string;
  logo?: string;
  address?: typeof ORGANIZATION.address;
  contactPoint?: typeof ORGANIZATION.contactPoint;
  sameAs?: string[];
}

/**
 * Generates Organization Schema (JSON-LD)
 */
export function generateOrganizationSchema(config: OrganizationSchemaConfig = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name || ORGANIZATION.name,
    url: config.url || ORGANIZATION.url,
    logo: config.logo || ORGANIZATION.logo,
    address: {
      '@type': 'PostalAddress',
      ...(config.address || ORGANIZATION.address),
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...(config.contactPoint || ORGANIZATION.contactPoint),
    },
    sameAs: config.sameAs || ORGANIZATION.sameAs,
  };
}

/**
 * Interface for Review Schema
 */
export interface ReviewSchemaConfig {
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  worstRating?: string;
}

/**
 * Generates Aggregate Rating Schema (JSON-LD)
 */
export function generateReviewSchema(config: ReviewSchemaConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: config.ratingValue,
    reviewCount: config.reviewCount,
    ...(config.bestRating && { bestRating: config.bestRating }),
    ...(config.worstRating && { worstRating: config.worstRating }),
  };
}

/**
 * Interface for Article Schema
 */
export interface ArticleSchemaConfig {
  headline: string;
  description?: string;
  image: string | string[];
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
  url?: string;
}

/**
 * Generates Article Schema (JSON-LD)
 */
export function generateArticleSchema(config: ArticleSchemaConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.headline,
    ...(config.description && { description: config.description }),
    image: Array.isArray(config.image) ? config.image : [config.image],
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    author: {
      '@type': 'Person',
      name: config.author.name,
      ...(config.author.url && { url: config.author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: config.publisher?.name || ORGANIZATION.name,
      ...(config.publisher?.logo && {
        logo: {
          '@type': 'ImageObject',
          url: config.publisher.logo,
        },
      }),
    },
    ...(config.url && { url: config.url }),
  };
}

/**
 * React component to render structured data
 */
export function StructuredDataScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Console log helper for structured data debugging
 */
export function logStructuredData(schema: object, schemaType: string) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Structured Data] ${schemaType}:`, JSON.stringify(schema, null, 2));
  }
}
