/**
 * @fileoverview H2/H3 Tag Optimization Script
 * @description Identifies and suggests optimized H2/H3 tags for all pages
 * @version 1.0.0
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

/**
 * Page to keyword mapping for H2 optimization
 */
const PAGE_KEYWORDS: Record<string, { primary: string; secondary: string }> = {
  'google-ads-management': { primary: 'Hire Google Ads Expert', secondary: 'Professional Google Ads Management' },
  'b2b-lead-generation-ads': { primary: 'Hire B2B Lead Generation Expert', secondary: 'B2B Lead Generation Services' },
  'enterprise-google-ads-management': { primary: 'Hire Enterprise Google Ads Expert', secondary: 'Enterprise Google Ads Management' },
  'ecommerce-google-ads-optimization': { primary: 'Hire Ecommerce Google Ads Expert', secondary: 'Ecommerce Google Ads Optimization' },
  'google-ads-audit-strategy': { primary: 'Hire Google Ads Audit Expert', secondary: 'Google Ads Audit & Strategy' },
  'local-business-google-ads': { primary: 'Hire Local Google Ads Expert', secondary: 'Local Business Google Ads' },
  'performance-max-campaigns': { primary: 'Hire Performance Max Expert', secondary: 'Performance Max Campaign Management' },
  'youtube-advertising-management': { primary: 'Hire YouTube Ads Expert', secondary: 'YouTube Advertising Management' },
  'google-ads-ecosystem': { primary: 'Hire Google Ads Ecosystem Expert', secondary: 'Google Ads Ecosystem Management' },
  'web-development': { primary: 'Hire Website Developer', secondary: 'Professional Website Development' },
  'next-js-development': { primary: 'Hire Next.js Developer', secondary: 'Next.js Development Services' },
  'reactjs-development': { primary: 'Hire React.js Developer', secondary: 'React.js Development Services' },
  'business-website': { primary: 'Hire Business Website Developer', secondary: 'Business Website Development' },
  'shopify-headless-migration': { primary: 'Hire Shopify Headless Expert', secondary: 'Shopify Headless Migration' },
  'shopify-product-page-customization': { primary: 'Hire Shopify Customization Expert', secondary: 'Shopify Product Page Customization' },
  'ai-chatbot-development': { primary: 'Hire AI Chatbot Developer', secondary: 'AI Chatbot Development' },
  'ai-voice-agents': { primary: 'Hire AI Voice Agent Developer', secondary: 'AI Voice Agents Development' },
  'whatsapp-business-api': { primary: 'Hire WhatsApp Business API Expert', secondary: 'WhatsApp Business API Integration' },
  'crm': { primary: 'Hire CRM Developer', secondary: 'CRM Development Services' },
  'healthcare-software-development': { primary: 'Hire Healthcare Software Developer', secondary: 'Healthcare Software Development' },
  'nse-mcx-live-market-data': { primary: 'Hire Trading Data Developer', secondary: 'NSE MCX Live Market Data' },
  'trading-software': { primary: 'Hire Trading Software Developer', secondary: 'Trading Software Development' },
  'seo-audit': { primary: 'Hire SEO Audit Expert', secondary: 'Professional SEO Audit' },
  'landing-page-optimization': { primary: 'Hire Landing Page Optimization Expert', secondary: 'Landing Page Optimization' },
  'web-development-mumbai': { primary: 'Hire Web Developer Mumbai', secondary: 'Web Development Mumbai' },
  'website-development': { primary: 'Hire Website Developer', secondary: 'Website Development Services' },
};

/**
 * H2 optimization templates by section type
 */
const H2_TEMPLATES: Record<string, (primary: string, secondary: string) => string> = {
  'why-choose': (p, s) => `Why Choose Our ${p}`,
  'services': (p, s) => `${p} Services We Offer`,
  'features': (p, s) => `Key Features of Our ${s}`,
  'process': (p, s) => `How Our ${p} Works`,
  'pricing': (p, s) => `${p} Pricing & Packages`,
  'faq': (p, s) => `Frequently Asked Questions About ${p}`,
  'testimonials': (p, s) => `Client Success Stories with ${p}`,
  'portfolio': (p, s) => `${p} Case Studies & Portfolio`,
  'benefits': (p, s) => `Benefits of ${p}`,
  'results': (p, s) => `${p} Results & ROI`,
  'dashboard': (p, s) => `Professional ${s} Reporting`,
  'problem': (p, s) => `Why You Need ${s}`,
  'integrations': (p, s) => `Advanced ${s} Tools & Integrations`,
};

/**
 * Detects section type from file name or content
 */
function detectSectionType(fileName: string, content: string): string | null {
  const lowerFileName = fileName.toLowerCase();
  const lowerContent = content.toLowerCase();
  
  if (lowerFileName.includes('why-choose') || lowerContent.includes('why choose')) return 'why-choose';
  if (lowerFileName.includes('service') && !lowerFileName.includes('hero')) return 'services';
  if (lowerFileName.includes('feature')) return 'features';
  if (lowerFileName.includes('process') || lowerFileName.includes('how')) return 'process';
  if (lowerFileName.includes('pricing')) return 'pricing';
  if (lowerFileName.includes('faq')) return 'faq';
  if (lowerFileName.includes('testimonial')) return 'testimonials';
  if (lowerFileName.includes('portfolio') || lowerFileName.includes('case-study')) return 'portfolio';
  if (lowerFileName.includes('benefit')) return 'benefits';
  if (lowerFileName.includes('result') || lowerFileName.includes('roi')) return 'results';
  if (lowerFileName.includes('dashboard')) return 'dashboard';
  if (lowerFileName.includes('problem')) return 'problem';
  if (lowerFileName.includes('integration')) return 'integrations';
  
  return null;
}

/**
 * Finds H2 tags in content
 */
function findH2Tags(content: string): Array<{ line: number; text: string; fullMatch: string }> {
  const h2Regex = /<h2[^>]*>([^<]+)<\/h2>/gi;
  const motionH2Regex = /<motion\.h2[^>]*>([^<]+)<\/motion\.h2>/gi;
  const lines = content.split('\n');
  const matches: Array<{ line: number; text: string; fullMatch: string }> = [];
  
  // Find regular h2 tags
  let match;
  while ((match = h2Regex.exec(content)) !== null) {
    const lineNum = content.substring(0, match.index).split('\n').length;
    matches.push({
      line: lineNum,
      text: match[1].trim(),
      fullMatch: match[0],
    });
  }
  
  // Find motion.h2 tags
  while ((match = motionH2Regex.exec(content)) !== null) {
    const lineNum = content.substring(0, match.index).split('\n').length;
    matches.push({
      line: lineNum,
      text: match[1].trim(),
      fullMatch: match[0],
    });
  }
  
  return matches;
}

/**
 * Main optimization function
 */
function optimizeH2Tags() {
  const pagesDir = join(process.cwd(), 'app', 'pages');
  const results: Array<{
    page: string;
    file: string;
    currentH2: string;
    suggestedH2: string;
    sectionType: string;
  }> = [];
  
  // Iterate through all pages
  const pages = readdirSync(pagesDir, { withFileTypes: true });
  
  for (const page of pages) {
    if (!page.isDirectory()) continue;
    
    const pageName = page.name;
    const keywords = PAGE_KEYWORDS[pageName];
    
    if (!keywords) {
      console.log(`⚠️  No keywords found for page: ${pageName}`);
      continue;
    }
    
    const componentsDir = join(pagesDir, pageName, '_components');
    
    if (!statSync(componentsDir).isDirectory()) continue;
    
    const files = readdirSync(componentsDir);
    
    for (const file of files) {
      if (!file.endsWith('.tsx') || !file.includes('section')) continue;
      
      const filePath = join(componentsDir, file);
      const content = readFileSync(filePath, 'utf-8');
      
      const sectionType = detectSectionType(file, content);
      if (!sectionType) continue;
      
      const h2Tags = findH2Tags(content);
      
      for (const h2 of h2Tags) {
        const template = H2_TEMPLATES[sectionType];
        if (!template) continue;
        
        const suggestedH2 = template(keywords.primary, keywords.secondary);
        
        // Only suggest if different from current
        if (h2.text.toLowerCase() !== suggestedH2.toLowerCase()) {
          results.push({
            page: pageName,
            file: file,
            currentH2: h2.text,
            suggestedH2: suggestedH2,
            sectionType: sectionType,
          });
        }
      }
    }
  }
  
  // Write results to file
  const outputPath = join(process.cwd(), 'H2_OPTIMIZATION_REPORT.md');
  let report = '# H2 Tag Optimization Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `Total H2 tags to optimize: ${results.length}\n\n`;
  
  // Group by page
  const byPage: Record<string, typeof results> = {};
  for (const result of results) {
    if (!byPage[result.page]) byPage[result.page] = [];
    byPage[result.page].push(result);
  }
  
  for (const [page, pageResults] of Object.entries(byPage)) {
    report += `## ${page}\n\n`;
    for (const result of pageResults) {
      report += `### ${result.file} (${result.sectionType})\n`;
      report += `- **Current:** ${result.currentH2}\n`;
      report += `- **Suggested:** ${result.suggestedH2}\n\n`;
    }
  }
  
  writeFileSync(outputPath, report);
  console.log(`✅ Report generated: ${outputPath}`);
  console.log(`📊 Found ${results.length} H2 tags to optimize`);
}

// Run if executed directly
if (require.main === module) {
  optimizeH2Tags();
}

export { optimizeH2Tags };
