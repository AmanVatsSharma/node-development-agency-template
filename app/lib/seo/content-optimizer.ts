/**
 * @fileoverview SEO Content Optimizer
 * @description Utilities for optimizing page content with keywords
 * @version 1.0.0
 */

import { KeywordSet } from './keyword-research';

/**
 * Generates SEO-optimized H1 tag with primary keyword
 */
export function generateH1(primaryKeyword: string, serviceName: string): string {
  // Format: [Primary Keyword] | [Service Name]
  // Ensure it's natural and readable
  return `${primaryKeyword} | ${serviceName}`;
}

/**
 * Generates SEO-optimized H2 tags with secondary keywords
 */
export function generateH2s(keywords: KeywordSet, count: number = 3): string[] {
  const h2s: string[] = [];
  
  // Use primary keywords for main H2s
  keywords.primary.slice(0, Math.min(count, keywords.primary.length)).forEach(keyword => {
    h2s.push(keyword.charAt(0).toUpperCase() + keyword.slice(1));
  });
  
  // Fill with secondary keywords if needed
  if (h2s.length < count) {
    keywords.secondary.slice(0, count - h2s.length).forEach(keyword => {
      h2s.push(keyword.charAt(0).toUpperCase() + keyword.slice(1));
    });
  }
  
  return h2s;
}

/**
 * Generates SEO-optimized H3 tags with long-tail keywords
 */
export function generateH3s(keywords: KeywordSet, count: number = 5): string[] {
  const h3s: string[] = [];
  
  // Use long-tail keywords for H3s
  keywords.longTail.slice(0, Math.min(count, keywords.longTail.length)).forEach(keyword => {
    h3s.push(keyword.charAt(0).toUpperCase() + keyword.slice(1));
  });
  
  return h3s;
}

/**
 * Generates keyword-rich content snippets
 */
export function generateContentSnippets(keywords: KeywordSet): {
  intro: string;
  benefits: string[];
  features: string[];
} {
  const primaryKeyword = keywords.primary[0];
  const secondaryKeyword = keywords.secondary[0];
  
  return {
    intro: `Looking to ${primaryKeyword}? Our professional ${secondaryKeyword} services help businesses achieve exceptional results. We specialize in delivering high-quality solutions that drive real business growth.`,
    
    benefits: [
      `Expert ${keywords.primary[0]} with proven track record`,
      `Comprehensive ${keywords.secondary[0]} solutions`,
      `Customized approach for your business needs`,
      `Transparent reporting and regular updates`,
      `Dedicated support and ongoing optimization`,
    ],
    
    features: keywords.semantic.slice(0, 5).map(keyword => 
      `Advanced ${keyword} capabilities`
    ),
  };
}

/**
 * Generates internal linking suggestions
 */
export function generateInternalLinks(
  currentPage: string,
  allPages: string[]
): Array<{ text: string; url: string; keyword: string }> {
  const links: Array<{ text: string; url: string; keyword: string }> = [];
  
  // Related pages based on current page
  const relatedPages: Record<string, string[]> = {
    'google-ads-management': [
      'b2b-lead-generation-ads',
      'enterprise-google-ads-management',
      'ecommerce-google-ads-optimization',
      'seo-audit',
      'landing-page-optimization',
    ],
    'web-development': [
      'next-js-development',
      'reactjs-development',
      'business-website',
      'shopify-headless-migration',
      'seo-audit',
    ],
    'next-js-development': [
      'web-development',
      'reactjs-development',
      'shopify-headless-migration',
      'business-website',
    ],
    'shopify-headless-migration': [
      'shopify-product-page-customization',
      'shopify-store-setup',
      'ecommerce-google-ads-optimization',
      'web-development',
    ],
    'ai-chatbot-development': [
      'whatsapp-business-api',
      'ai-voice-agents',
      'crm',
    ],
    'crm': [
      'ai-chatbot-development',
      'whatsapp-business-api',
      'healthcare-software-development',
    ],
  };
  
  const related = relatedPages[currentPage] || [];
  
  related.forEach(page => {
    if (allPages.includes(page)) {
      links.push({
        text: page.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        url: `/pages/${page}`,
        keyword: page.replace(/-/g, ' '),
      });
    }
  });
  
  return links;
}

/**
 * Generates meta description with keywords
 */
export function generateMetaDescription(
  keywords: KeywordSet,
  serviceDescription: string,
  pricing?: string,
  cta: string = 'Get free consultation today!'
): string {
  const primaryKeyword = keywords.primary[0];
  const secondaryKeyword = keywords.secondary[0];
  
  let description = `${primaryKeyword}. ${serviceDescription} `;
  
  if (pricing) {
    description += `Starting from ${pricing}. `;
  }
  
  description += cta;
  
  // Ensure it's within 155-160 characters
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  return description;
}

/**
 * Generates alt text for images with keywords
 */
export function generateImageAlt(
  keywords: KeywordSet,
  imageDescription: string
): string {
  const primaryKeyword = keywords.primary[0];
  return `${primaryKeyword} - ${imageDescription}`;
}
