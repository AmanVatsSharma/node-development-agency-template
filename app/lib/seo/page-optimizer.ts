/**
 * @fileoverview Page SEO Optimizer
 * @description Utilities for optimizing entire pages with SEO best practices
 * @version 1.0.0
 */

import { KeywordSet, getKeywordsForPage } from './keyword-research';
import { generateH1, generateH2s, generateH3s } from './content-optimizer';
import { getRelatedPages } from './internal-linking';

export interface PageSEOConfig {
  pageName: string;
  serviceName: string;
  customKeywords?: KeywordSet;
  includeBreadcrumbs?: boolean;
  includeRelatedServices?: boolean;
}

/**
 * Generates SEO recommendations for a page
 */
export function generateSEORecommendations(config: PageSEOConfig): {
  h1: string;
  h2s: string[];
  h3s: string[];
  relatedPages: string[];
  keywords: KeywordSet;
  recommendations: string[];
} {
  const keywords = config.customKeywords || getKeywordsForPage(config.pageName);
  const relatedPages = getRelatedPages(config.pageName);
  
  const h1 = generateH1(keywords.primary[0], config.serviceName);
  const h2s = generateH2s(keywords, 5);
  const h3s = generateH3s(keywords, 8);
  
  const recommendations: string[] = [];
  
  // Check H1
  if (!h1.toLowerCase().includes(keywords.primary[0].toLowerCase())) {
    recommendations.push(`H1 should include primary keyword: "${keywords.primary[0]}"`);
  }
  
  // Check H2 count
  if (h2s.length < 3) {
    recommendations.push('Add at least 3 H2 headings with secondary keywords');
  }
  
  // Check H3 count
  if (h3s.length < 5) {
    recommendations.push('Add at least 5 H3 headings with long-tail keywords');
  }
  
  // Check internal links
  if (relatedPages.length < 3) {
    recommendations.push('Add at least 3 internal links to related pages');
  }
  
  // Check content length
  recommendations.push('Ensure page content is at least 1000 words');
  recommendations.push('Include primary keyword in first 100 words');
  recommendations.push('Use semantic keywords naturally throughout content');
  recommendations.push('Add alt text to all images with keywords');
  
  return {
    h1,
    h2s,
    h3s,
    relatedPages,
    keywords,
    recommendations,
  };
}

/**
 * Validates page SEO
 */
export function validatePageSEO(
  pageName: string,
  h1Text: string,
  h2Count: number,
  h3Count: number,
  wordCount: number,
  internalLinksCount: number
): {
  score: number;
  issues: string[];
  suggestions: string[];
} {
  const keywords = getKeywordsForPage(pageName);
  const issues: string[] = [];
  const suggestions: string[] = [];
  let score = 100;
  
  // Check H1
  if (!h1Text.toLowerCase().includes(keywords.primary[0].toLowerCase())) {
    issues.push('H1 missing primary keyword');
    score -= 15;
  }
  
  // Check H2 count
  if (h2Count < 3) {
    issues.push(`Only ${h2Count} H2 tags (recommended: 3-5)`);
    score -= 10;
  }
  
  // Check H3 count
  if (h3Count < 5) {
    issues.push(`Only ${h3Count} H3 tags (recommended: 5-10)`);
    score -= 10;
  }
  
  // Check content length
  if (wordCount < 1000) {
    issues.push(`Content too short: ${wordCount} words (recommended: 1000+)`);
    score -= 20;
  }
  
  // Check internal links
  if (internalLinksCount < 3) {
    issues.push(`Only ${internalLinksCount} internal links (recommended: 3-5)`);
    score -= 10;
  }
  
  // Suggestions
  if (score < 90) {
    suggestions.push('Optimize H1 with primary keyword');
  }
  if (h2Count < 3) {
    suggestions.push('Add more H2 headings with secondary keywords');
  }
  if (h3Count < 5) {
    suggestions.push('Add more H3 headings with long-tail keywords');
  }
  if (wordCount < 1000) {
    suggestions.push('Expand content to at least 1000 words');
  }
  if (internalLinksCount < 3) {
    suggestions.push('Add internal links to related pages');
  }
  
  return {
    score: Math.max(0, score),
    issues,
    suggestions,
  };
}

/**
 * Generates SEO-friendly content structure
 */
export function generateContentStructure(keywords: KeywordSet): {
  introduction: string;
  sections: Array<{ heading: string; content: string; keywords: string[] }>;
  conclusion: string;
} {
  return {
    introduction: `Looking for professional ${keywords.primary[0]} services? Our expert team specializes in ${keywords.secondary[0]}, delivering exceptional results for businesses across industries. We combine cutting-edge strategies with proven methodologies to help you achieve your goals.`,
    
    sections: [
      {
        heading: keywords.primary[0],
        content: `Our ${keywords.primary[0]} services are designed to deliver measurable results. We understand the importance of ${keywords.semantic[0]} and ${keywords.semantic[1]}, which is why we take a comprehensive approach to every project.`,
        keywords: [keywords.primary[0], keywords.semantic[0], keywords.semantic[1]],
      },
      {
        heading: `Why Choose Our ${keywords.secondary[0]} Solutions`,
        content: `When it comes to ${keywords.secondary[0]}, we stand out from the competition. Our team brings years of experience and a track record of success. We focus on ${keywords.longTail[0]} and ${keywords.longTail[1]} to ensure optimal results.`,
        keywords: [keywords.secondary[0], keywords.longTail[0], keywords.longTail[1]],
      },
      {
        heading: `Our ${keywords.primary[0]} Process`,
        content: `We follow a systematic approach to ${keywords.primary[0]}. Starting with ${keywords.semantic[2]}, we move through ${keywords.semantic[3]} and ${keywords.semantic[4]} to deliver comprehensive solutions.`,
        keywords: [keywords.primary[0], keywords.semantic[2], keywords.semantic[3], keywords.semantic[4]],
      },
    ],
    
    conclusion: `Ready to get started with ${keywords.primary[0]}? Contact us today for a free consultation and discover how our ${keywords.secondary[0]} services can help your business grow.`,
  };
}
