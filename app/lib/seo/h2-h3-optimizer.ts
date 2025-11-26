/**
 * @fileoverview H2/H3 Tag Optimizer
 * @description Utilities for optimizing H2 and H3 tags with keywords for better SEO
 * @version 1.0.0
 */

import { KeywordSet } from './keyword-research';

/**
 * Generates SEO-optimized H2 tag suggestions based on keywords
 * Format: [Action/Value] + [Primary/Secondary Keyword]
 */
export function generateOptimizedH2(
  keywords: KeywordSet,
  sectionType: 'why-choose' | 'services' | 'features' | 'process' | 'pricing' | 'faq' | 'testimonials' | 'portfolio' | 'benefits' | 'results'
): string {
  const primaryKeyword = keywords.primary[0];
  const secondaryKeyword = keywords.secondary[0];
  
  const templates: Record<string, string[]> = {
    'why-choose': [
      `Why Choose Our ${primaryKeyword}`,
      `Why Hire ${primaryKeyword}`,
      `Benefits of ${primaryKeyword}`,
      `Why We're the Best ${secondaryKeyword}`,
      `Why Choose Professional ${primaryKeyword}`,
    ],
    'services': [
      `${primaryKeyword} Services`,
      `Our ${primaryKeyword} Solutions`,
      `${primaryKeyword} We Offer`,
      `Comprehensive ${secondaryKeyword}`,
      `Professional ${primaryKeyword} Services`,
    ],
    'features': [
      `${primaryKeyword} Features`,
      `Key Features of Our ${secondaryKeyword}`,
      `What Makes Our ${primaryKeyword} Different`,
      `Advanced ${primaryKeyword} Capabilities`,
      `Core ${secondaryKeyword} Features`,
    ],
    'process': [
      `How Our ${primaryKeyword} Works`,
      `Our ${primaryKeyword} Process`,
      `Step-by-Step ${secondaryKeyword}`,
      `How We Deliver ${primaryKeyword}`,
      `Our Proven ${primaryKeyword} Methodology`,
    ],
    'pricing': [
      `${primaryKeyword} Pricing`,
      `Affordable ${primaryKeyword} Plans`,
      `${primaryKeyword} Cost & Packages`,
      `Transparent ${secondaryKeyword} Pricing`,
      `Best Value ${primaryKeyword}`,
    ],
    'faq': [
      `Frequently Asked Questions About ${primaryKeyword}`,
      `${primaryKeyword} FAQ`,
      `Common Questions on ${secondaryKeyword}`,
      `Everything You Need to Know About ${primaryKeyword}`,
    ],
    'testimonials': [
      `Client Success Stories with ${primaryKeyword}`,
      `What Our Clients Say About ${primaryKeyword}`,
      `${primaryKeyword} Reviews & Testimonials`,
      `Proven Results from ${primaryKeyword}`,
    ],
    'portfolio': [
      `${primaryKeyword} Case Studies`,
      `Our ${primaryKeyword} Portfolio`,
      `Successful ${primaryKeyword} Projects`,
      `Real Results from ${secondaryKeyword}`,
    ],
    'benefits': [
      `Benefits of ${primaryKeyword}`,
      `Why ${primaryKeyword} Matters`,
      `Key Advantages of ${secondaryKeyword}`,
      `How ${primaryKeyword} Helps Your Business`,
    ],
    'results': [
      `${primaryKeyword} Results & ROI`,
      `Proven ${primaryKeyword} Outcomes`,
      `Success Metrics from ${secondaryKeyword}`,
      `Real ${primaryKeyword} Results`,
    ],
  };
  
  const suggestions = templates[sectionType] || [`${primaryKeyword} ${sectionType}`];
  return suggestions[0]; // Return the most optimized one
}

/**
 * Generates SEO-optimized H3 tag suggestions based on long-tail keywords
 */
export function generateOptimizedH3(
  keywords: KeywordSet,
  context: string,
  index: number = 0
): string {
  const longTailKeywords = keywords.longTail;
  const semanticKeywords = keywords.semantic;
  
  // Use long-tail keywords for H3s
  if (longTailKeywords.length > index) {
    const keyword = longTailKeywords[index];
    // Capitalize and format
    return keyword
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Fallback to semantic keywords
  if (semanticKeywords.length > index) {
    const keyword = semanticKeywords[index];
    return keyword
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Final fallback
  return `${context} ${index + 1}`;
}

/**
 * Gets all H2 suggestions for a page based on its sections
 */
export function getAllH2Suggestions(
  keywords: KeywordSet,
  sections: Array<'why-choose' | 'services' | 'features' | 'process' | 'pricing' | 'faq' | 'testimonials' | 'portfolio' | 'benefits' | 'results'>
): Record<string, string> {
  const suggestions: Record<string, string> = {};
  
  sections.forEach(section => {
    suggestions[section] = generateOptimizedH2(keywords, section);
  });
  
  return suggestions;
}

/**
 * Generates multiple H3 suggestions for a section
 */
export function getH3Suggestions(
  keywords: KeywordSet,
  count: number = 5
): string[] {
  const suggestions: string[] = [];
  
  for (let i = 0; i < count && i < keywords.longTail.length; i++) {
    suggestions.push(generateOptimizedH3(keywords, '', i));
  }
  
  return suggestions;
}
