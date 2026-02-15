import type { Metadata } from 'next';
import { companyProfile } from '@/app/data/companyProfile';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

export const metadata: Metadata = buildPageMetadata({
  title: 'Shopify Headless Migration Services | Next.js & Hydrogen Experts',
  description:
    'Transform your Shopify store with headless commerce. Faster pages, stronger SEO, and better conversion performance.',
  path: '/pages/shopify-headless-migration',
  keywords: [
    'shopify headless migration',
    'nextjs shopify development',
    'shopify hydrogen services',
    'headless ecommerce development',
    'shopify performance optimization',
  ],
});

/**
 * Structured Data (JSON-LD) for Rich Snippets
 * Add this to your page component
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Shopify Headless Migration",
  "description": "Professional Shopify to Next.js/Hydrogen headless migration services for enterprise e-commerce brands",
  "provider": {
    "@type": "Organization",
    "name": companyProfile.legalName,
    "url": companyProfile.websiteUrl,
    "logo": toAbsoluteSeoUrl('/logo.png'),
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "areaServed": "IN",
      "email": companyProfile.contactEmail,
      "availableLanguage": ["English", "Hindi"]
    }
  },
  "serviceType": "Web Development",
  "areaServed": {
    "@type": "Place",
    "name": "Global"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Headless",
      "description": "Basic headless migration for small brands",
      "priceCurrency": "INR",
      "price": "100000",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "100000",
        "maxPrice": "150000",
        "priceCurrency": "INR"
      },
      "deliveryLeadTime": {
        "@type": "QuantitativeValue",
        "value": "2",
        "unitCode": "WEE"
      }
    },
    {
      "@type": "Offer",
      "name": "Pro Next.js Storefront",
      "description": "Full Next.js migration with custom UX for D2C brands",
      "priceCurrency": "INR",
      "price": "275000",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "250000",
        "maxPrice": "300000",
        "priceCurrency": "INR"
      },
      "deliveryLeadTime": {
        "@type": "QuantitativeValue",
        "value": "4",
        "unitCode": "WEE"
      }
    },
    {
      "@type": "Offer",
      "name": "Enterprise Performance Suite",
      "description": "Complete enterprise headless solution with edge deployment",
      "priceCurrency": "INR",
      "price": "450000",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "400000",
        "priceCurrency": "INR"
      },
      "deliveryLeadTime": {
        "@type": "QuantitativeValue",
        "value": "6",
        "unitCode": "WEE"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
};
