/**
 * SEO Metadata Configuration for Shopify Headless Migration Page
 * 
 * USAGE:
 * Import this in your layout.tsx or use generateMetadata function
 * 
 * For static metadata:
 * import { shopifyHeadlessMetadata } from './metadata';
 * export const metadata = shopifyHeadlessMetadata;
 * 
 * For dynamic metadata:
 * export async function generateMetadata(): Promise<Metadata> {
 *   return shopifyHeadlessMetadata;
 * }
 */

import { Metadata } from 'next';
import { generateAdvancedServiceMetadata } from '@/app/lib/seo/advanced-metadata';
import { SHOPIFY_KEYWORDS } from '@/app/lib/seo/keyword-research';

/**
 * SEO Metadata for Shopify Headless Migration Landing Page
 * Optimized for high-intent, lead-generating keywords
 * 
 * KEYWORD STRATEGY:
 * - Primary: "hire shopify developer" (high buyer intent)
 * - Secondary: Service-specific Shopify development keywords
 * - Long-tail: Migration-specific Shopify keywords
 * - Semantic: Related ecommerce and Shopify terms
 */

export const shopifyHeadlessMetadata: Metadata = generateAdvancedServiceMetadata(
  'Hire Shopify Developer | Shopify Headless Migration Services',
  'Transform your Shopify store with headless commerce. 2-4× faster page loads, 95+ Lighthouse scores. Next.js/Hydrogen migration.',
  SHOPIFY_KEYWORDS,
  '/pages/shopify-headless-migration',
  {
    pricing: {
      startingPrice: '100,000',
      currency: '₹',
    },
    ogImage: '/og-image-shopify-headless.jpg',
    cta: 'Get free consultation today!',
  }
);

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
    "name": "Vedpragya Bharat",
    "url": "https://vedpragyabharat.com",
    "logo": "https://vedpragyabharat.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "Sales",
      "areaServed": "IN",
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
