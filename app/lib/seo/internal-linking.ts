/**
 * @fileoverview Internal Linking System for SEO
 * @description Creates keyword-rich internal links between related pages
 * @version 1.0.0
 */

import { KeywordSet, getKeywordsForPage } from './keyword-research';

/**
 * Internal linking structure for the website
 */
export const INTERNAL_LINKS: Record<string, {
  related: string[];
  parent?: string;
  children?: string[];
  keywords: string[];
}> = {
  // Google Ads Services
  'google-ads-management': {
    related: [
      'b2b-lead-generation-ads',
      'enterprise-google-ads-management',
      'ecommerce-google-ads-optimization',
      'local-business-google-ads',
      'performance-max-campaigns',
      'google-ads-audit-strategy',
      'seo-audit',
      'landing-page-optimization',
    ],
    parent: 'services',
    keywords: ['google ads', 'ppc management', 'paid search'],
  },
  
  'b2b-lead-generation-ads': {
    related: [
      'google-ads-management',
      'enterprise-google-ads-management',
      'crm',
      'landing-page-optimization',
    ],
    parent: 'google-ads-management',
    keywords: ['b2b lead generation', 'b2b marketing', 'lead generation'],
  },
  
  'enterprise-google-ads-management': {
    related: [
      'google-ads-management',
      'b2b-lead-generation-ads',
      'crm',
    ],
    parent: 'google-ads-management',
    keywords: ['enterprise google ads', 'enterprise ppc', 'large scale advertising'],
  },
  
  'ecommerce-google-ads-optimization': {
    related: [
      'google-ads-management',
      'shopify-headless-migration',
      'shopify-product-page-customization',
      'landing-page-optimization',
    ],
    parent: 'google-ads-management',
    keywords: ['ecommerce google ads', 'shopping ads', 'ecommerce ppc'],
  },
  
  // Web Development Services
  'web-development': {
    related: [
      'next-js-development',
      'reactjs-development',
      'business-website',
      'website-development',
      'shopify-headless-migration',
      'seo-audit',
    ],
    parent: 'services',
    keywords: ['web development', 'website development', 'custom web development'],
  },
  
  'next-js-development': {
    related: [
      'web-development',
      'reactjs-development',
      'shopify-headless-migration',
      'business-website',
    ],
    parent: 'web-development',
    keywords: ['next.js development', 'nextjs', 'react nextjs'],
  },
  
  'reactjs-development': {
    related: [
      'web-development',
      'next-js-development',
      'business-website',
    ],
    parent: 'web-development',
    keywords: ['react development', 'reactjs', 'react developer'],
  },
  
  'business-website': {
    related: [
      'web-development',
      'website-development',
      'next-js-development',
      'seo-audit',
    ],
    parent: 'web-development',
    keywords: ['business website', 'corporate website', 'company website'],
  },
  
  // Shopify Services
  'shopify-headless-migration': {
    related: [
      'shopify-product-page-customization',
      'shopify-store-setup',
      'ecommerce-google-ads-optimization',
      'web-development',
      'next-js-development',
    ],
    parent: 'services',
    keywords: ['shopify headless', 'headless commerce', 'shopify migration'],
  },
  
  'shopify-product-page-customization': {
    related: [
      'shopify-headless-migration',
      'shopify-store-setup',
      'ecommerce-google-ads-optimization',
      'landing-page-optimization',
    ],
    parent: 'shopify-headless-migration',
    keywords: ['shopify customization', 'product page', 'shopify design'],
  },
  
  // AI & Automation Services
  'ai-chatbot-development': {
    related: [
      'whatsapp-business-api',
      'ai-voice-agents',
      'crm',
      'landing-page-optimization',
    ],
    parent: 'services',
    keywords: ['ai chatbot', 'chatbot development', 'conversational ai'],
  },
  
  'whatsapp-business-api': {
    related: [
      'ai-chatbot-development',
      'ai-voice-agents',
      'crm',
    ],
    parent: 'ai-chatbot-development',
    keywords: ['whatsapp api', 'whatsapp automation', 'whatsapp business'],
  },
  
  'ai-voice-agents': {
    related: [
      'ai-chatbot-development',
      'whatsapp-business-api',
    ],
    parent: 'ai-chatbot-development',
    keywords: ['ai voice agent', 'voice ai', 'call automation'],
  },
  
  // Software Development
  'crm': {
    related: [
      'ai-chatbot-development',
      'whatsapp-business-api',
      'healthcare-software-development',
    ],
    parent: 'services',
    keywords: ['crm development', 'custom crm', 'crm software'],
  },
  
  'healthcare-software-development': {
    related: [
      'crm',
      'trading-software',
    ],
    parent: 'services',
    keywords: ['healthcare software', 'hospital management', 'ehr software'],
  },
  
  'trading-software': {
    related: [
      'nse-mcx-live-market-data',
      'healthcare-software-development',
    ],
    parent: 'services',
    keywords: ['trading software', 'trading platform', 'broker software'],
  },
  
  // SEO Services
  'seo-audit': {
    related: [
      'google-ads-management',
      'landing-page-optimization',
      'web-development',
    ],
    parent: 'services',
    keywords: ['seo audit', 'seo services', 'seo optimization'],
  },
  
  'landing-page-optimization': {
    related: [
      'seo-audit',
      'google-ads-management',
      'ecommerce-google-ads-optimization',
    ],
    parent: 'seo-audit',
    keywords: ['landing page optimization', 'cro', 'conversion optimization'],
  },
};

/**
 * Gets related pages for internal linking
 */
export function getRelatedPages(pageName: string): string[] {
  return INTERNAL_LINKS[pageName]?.related || [];
}

/**
 * Gets parent page for breadcrumb navigation
 */
export function getParentPage(pageName: string): string | undefined {
  return INTERNAL_LINKS[pageName]?.parent;
}

/**
 * Generates internal link component props
 */
export function generateInternalLinkProps(
  pageName: string,
  linkText?: string
): { href: string; text: string; keywords: string[] } | null {
  const linkConfig = INTERNAL_LINKS[pageName];
  if (!linkConfig) return null;
  
  const keywords = getKeywordsForPage(pageName);
  
  return {
    href: `/pages/${pageName}`,
    text: linkText || pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    keywords: linkConfig.keywords || keywords.primary.slice(0, 3),
  };
}

/**
 * Generates related services section content
 */
export function generateRelatedServicesSection(
  currentPage: string
): Array<{ title: string; description: string; href: string; keywords: string[] }> {
  const related = getRelatedPages(currentPage);
  const services: Array<{ title: string; description: string; href: string; keywords: string[] }> = [];
  
  related.slice(0, 4).forEach(page => {
    const keywords = getKeywordsForPage(page);
    const linkConfig = INTERNAL_LINKS[page];
    
    services.push({
      title: page.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: `Professional ${keywords.primary[0]} services. ${keywords.secondary[0]} solutions tailored to your business needs.`,
      href: `/pages/${page}`,
      keywords: linkConfig?.keywords || keywords.primary.slice(0, 2),
    });
  });
  
  return services;
}
