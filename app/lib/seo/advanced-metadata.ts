/**
 * @fileoverview Advanced SEO Metadata Generator
 * @description Optimized for high-intent, lead-generating keywords
 * @version 2.0.0
 */

import { Metadata } from 'next';
import { generateMetadata as baseGenerateMetadata, SEOConfig } from './metadata-generator';
import { KeywordSet, combineKeywords, generateOptimizedTitle, generateOptimizedDescription } from './keyword-research';

/**
 * Advanced metadata configuration with keyword optimization
 */
export interface AdvancedSEOConfig extends Omit<SEOConfig, 'keywords'> {
  keywords: KeywordSet;
  location?: string;
  serviceType?: string;
  pricing?: {
    startingPrice: string;
    currency?: string;
  };
  cta?: string;
}

/**
 * Generates advanced SEO metadata optimized for lead generation
 */
export function generateAdvancedMetadata(config: AdvancedSEOConfig): Metadata {
  const {
    keywords,
    location,
    pricing,
    cta = 'Get free consultation today!',
    ...baseConfig
  } = config;

  // Generate optimized title with primary keyword
  const optimizedTitle = generateOptimizedTitle(
    keywords.primary[0],
    baseConfig.title,
    location
  );

  // Generate optimized description with keywords
  const optimizedDescription = generateOptimizedDescription(
    keywords,
    baseConfig.description,
    location
  );

  // Combine all keywords
  const allKeywords = combineKeywords(keywords);

  // Add pricing to description if available
  let finalDescription = optimizedDescription;
  if (pricing) {
    finalDescription = finalDescription.replace(
      'Starting from ₹X',
      `Starting from ${pricing.currency || '₹'}${pricing.startingPrice}`
    );
  }
  if (cta && !finalDescription.includes(cta)) {
    finalDescription = `${finalDescription} ${cta}`;
  }

  // Ensure description is within limits
  if (finalDescription.length > 160) {
    finalDescription = finalDescription.substring(0, 157) + '...';
  }

  return baseGenerateMetadata({
    ...baseConfig,
    title: optimizedTitle,
    description: finalDescription,
    keywords: allKeywords,
  });
}

/**
 * Generates service metadata with advanced keyword optimization
 */
export function generateAdvancedServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  keywords: KeywordSet,
  canonicalPath: string,
  options?: {
    location?: string;
    pricing?: {
      startingPrice: string;
      currency?: string;
    };
    ogImage?: string;
    cta?: string;
  }
): Metadata {
  return generateAdvancedMetadata({
    title: serviceName,
    description: serviceDescription,
    canonicalUrl: canonicalPath,
    ogImage: options?.ogImage,
    keywords: keywords,
    location: options?.location,
    pricing: options?.pricing,
    cta: options?.cta,
  });
}
