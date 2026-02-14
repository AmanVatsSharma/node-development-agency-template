/**
 * @fileoverview SEO Metadata Generator Utility
 * @description Centralized utility functions for generating consistent SEO metadata across all landing pages
 * @version 1.0.0
 */

import { Metadata } from 'next';

/**
 * Base site configuration
 */
const SITE_CONFIG = {
  name: 'Enterprise Hero | Vedpragya Bharat Private Limited',
  url: 'https://enterprisehero.com',
  description: 'Leading enterprise-grade Node.js development and 3D solutions by Vedpragya Bharat Private Limited. Global presence across India, Dubai, California, Toronto, and Shenzhen.',
  author: 'Aman Kumar Sharma - Founder, Vedpragya Bharat Private Limited',
  locale: 'en_US',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@enterprisehero',
};

/**
 * Interface for SEO metadata input
 */
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

/**
 * Generates comprehensive SEO metadata for a page
 * 
 * @param config - SEO configuration object
 * @returns Next.js Metadata object
 * 
 * @example
 * ```ts
 * export const metadata = generateMetadata({
 *   title: 'Google Ads Management Service',
 *   description: 'Hire top Google Ads experts...',
 *   keywords: ['google ads', 'ppc management'],
 *   canonicalUrl: '/pages/google-ads-management'
 * });
 * ```
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage = SITE_CONFIG.defaultImage,
    ogType = 'website',
    noindex = false,
    nofollow = false,
    author = SITE_CONFIG.author,
    publishedTime,
    modifiedTime,
    section,
    tags = [],
  } = config;

  // Construct full URL
  const fullUrl = canonicalUrl 
    ? `${SITE_CONFIG.url}${canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`}`
    : SITE_CONFIG.url;

  // Construct full OG image URL
  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `${SITE_CONFIG.url}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  // Full title with site name
  const fullTitle = title.includes(SITE_CONFIG.name) 
    ? title 
    : `${title} | ${SITE_CONFIG.name}`;

  // Base metadata
  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: author }],
    creator: author,
    publisher: SITE_CONFIG.name,
    
    // Open Graph
    openGraph: {
      type: ogType,
      locale: SITE_CONFIG.locale,
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullOgImage],
      creator: SITE_CONFIG.twitterHandle,
    },

    // Robots
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },

    // Verification (add your codes)
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
      other: {
        'facebook-domain-verification': process.env.NEXT_PUBLIC_FACEBOOK_VERIFICATION || '',
      },
    },
  };

  return metadata;
}

/**
 * Generates metadata for service pages
 * 
 * @param serviceName - Name of the service
 * @param serviceDescription - Description of the service
 * @param serviceKeywords - Keywords related to the service
 * @param canonicalPath - Canonical path (e.g., '/pages/google-ads-management')
 * @param ogImage - Open Graph image path
 * @returns Next.js Metadata object
 */
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  serviceKeywords: string[],
  canonicalPath: string,
  ogImage?: string
): Metadata {
  return generateMetadata({
    title: `${serviceName} | Professional Services`,
    description: serviceDescription,
    keywords: serviceKeywords,
    canonicalUrl: canonicalPath,
    ogImage,
    ogType: 'website',
  });
}

/**
 * Generates metadata for blog posts
 * 
 * @param postTitle - Blog post title
 * @param postDescription - Blog post description
 * @param postSlug - Blog post slug
 * @param publishedTime - Publication date (ISO string)
 * @param modifiedTime - Last modified date (ISO string)
 * @param tags - Post tags
 * @param ogImage - Open Graph image path
 * @returns Next.js Metadata object
 */
export function generateBlogMetadata(
  postTitle: string,
  postDescription: string,
  postSlug: string,
  publishedTime: string,
  modifiedTime?: string,
  tags: string[] = [],
  ogImage?: string
): Metadata {
  return generateMetadata({
    title: postTitle,
    description: postDescription,
    canonicalUrl: `/pages/blog/${postSlug}`,
    ogImage,
    ogType: 'article',
    publishedTime,
    modifiedTime,
    tags,
  });
}

/**
 * Common keyword sets for different service categories
 */
export const KEYWORD_SETS = {
  googleAds: [
    'google ads agency',
    'ppc management',
    'google ads service',
    'lead generation ads',
    'ppc agency india',
    'google ads expert',
    'google ads management',
    'performance marketing agency',
    'google ads consultant',
    'paid search marketing',
  ],
  webDevelopment: [
    'web development services',
    'website development',
    'custom web development',
    'responsive web design',
    'web development company',
    'next.js development',
    'react development',
    'full stack development',
  ],
  seo: [
    'SEO services',
    'SEO audit',
    'search engine optimization',
    'SEO consultant',
    'technical SEO',
    'on-page SEO',
    'off-page SEO',
    'local SEO',
  ],
  shopify: [
    'shopify development',
    'shopify store setup',
    'shopify customization',
    'shopify headless',
    'shopify migration',
    'ecommerce development',
  ],
};

/**
 * Console log helper for SEO debugging
 */
export function logSEOConfig(config: SEOConfig, pageName: string) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[SEO] ${pageName} metadata:`, {
      title: config.title,
      description: config.description.substring(0, 100) + '...',
      keywords: config.keywords?.length || 0,
      canonical: config.canonicalUrl,
    });
  }
}
