/**
 * @fileoverview Advanced Keyword Research & Optimization System
 * @description High-intent, lead-generating keywords for each landing page
 * @version 2.0.0
 * 
 * KEYWORD STRATEGY:
 * - Primary: High-intent buyer keywords (e.g., "hire", "buy", "get")
 * - Secondary: Service-specific keywords with location
 * - Long-tail: Specific problem-solving keywords
 * - Semantic: Related terms and LSI keywords
 */

/**
 * Keyword categories for better organization
 */
export interface KeywordSet {
  primary: string[]; // High-intent, high-volume keywords
  secondary: string[]; // Medium-intent, service-specific
  longTail: string[]; // Low-competition, high-conversion
  semantic: string[]; // Related terms, LSI keywords
  local?: string[]; // Location-based keywords
  competitor?: string[]; // Competitor comparison keywords
}

/**
 * Google Ads Service Keywords - High Intent Lead Generation
 */
export const GOOGLE_ADS_KEYWORDS: KeywordSet = {
  primary: [
    'hire google ads expert',
    'hire google ads manager',
    'hire ppc specialist',
    'hire google ads agency',
    'best google ads agency',
    'top google ads management',
    'google ads management services',
    'professional google ads management',
  ],
  secondary: [
    'google ads management company',
    'google ads optimization service',
    'ppc management agency',
    'google ads consultant',
    'google ads expert india',
    'google ads management india',
    'certified google ads manager',
  ],
  longTail: [
    'hire google ads expert for ecommerce',
    'best google ads agency for small business',
    'google ads management service with guaranteed results',
    'hire google ads manager with proven track record',
    'professional google ads management for startups',
  ],
  semantic: [
    'paid search management',
    'search engine marketing',
    'adwords management',
    'google advertising',
    'ppc optimization',
    'campaign management',
    'advertising agency',
    'digital marketing services',
  ],
  local: [
    'google ads agency mumbai',
    'google ads expert delhi',
    'ppc management bangalore',
    'google ads consultant pune',
    'best google ads agency india',
  ],
};

/**
 * B2B Lead Generation Keywords
 */
export const B2B_LEAD_GENERATION_KEYWORDS: KeywordSet = {
  primary: [
    'hire b2b lead generation expert',
    'b2b lead generation services',
    'b2b lead generation agency',
    'b2b marketing services',
    'b2b lead gen company',
    'best b2b lead generation',
    'professional b2b lead generation',
  ],
  secondary: [
    'b2b lead generation india',
    'b2b marketing agency',
    'b2b lead generation consultant',
    'qualified b2b leads',
    'b2b sales leads',
    'b2b lead generation strategy',
  ],
  longTail: [
    'hire b2b lead generation expert for saas',
    'b2b lead generation service with crm integration',
    'best b2b lead generation agency for tech companies',
    'professional b2b lead generation with guaranteed quality',
  ],
  semantic: [
    'b2b marketing',
    'business lead generation',
    'b2b sales leads',
    'qualified business leads',
    'b2b demand generation',
    'account-based marketing',
  ],
};

/**
 * Web Development Keywords
 */
export const WEB_DEVELOPMENT_KEYWORDS: KeywordSet = {
  primary: [
    'hire web developer',
    'hire web development company',
    'custom web development services',
    'professional web development',
    'best web development company',
    'web development agency',
    'website development services',
  ],
  secondary: [
    'web development company india',
    'custom website development',
    'responsive web development',
    'web development services mumbai',
    'professional web developers',
    'web development experts',
  ],
  longTail: [
    'hire web developer for ecommerce website',
    'best web development company for startups',
    'custom web development service with seo',
    'professional web development with maintenance',
  ],
  semantic: [
    'website development',
    'web design and development',
    'custom web applications',
    'web development solutions',
    'frontend development',
    'backend development',
  ],
  local: [
    'web development company mumbai',
    'web developers delhi',
    'website development bangalore',
    'web development agency pune',
  ],
};

/**
 * Next.js Development Keywords
 */
export const NEXTJS_KEYWORDS: KeywordSet = {
  primary: [
    'hire next.js developer',
    'next.js development services',
    'next.js development company',
    'best next.js developers',
    'professional next.js development',
    'next.js development agency',
  ],
  secondary: [
    'next.js developers india',
    'next.js development services india',
    'react next.js developers',
    'next.js experts',
    'next.js consulting',
  ],
  longTail: [
    'hire next.js developer for ecommerce',
    'next.js development service with seo optimization',
    'best next.js developers for startups',
    'professional next.js development with typescript',
  ],
  semantic: [
    'nextjs development',
    'react nextjs',
    'server-side rendering',
    'next.js framework',
    'next.js applications',
    'next.js migration',
  ],
};

/**
 * Shopify Development Keywords
 */
export const SHOPIFY_KEYWORDS: KeywordSet = {
  primary: [
    'hire shopify developer',
    'shopify development services',
    'shopify development company',
    'best shopify developers',
    'shopify expert',
    'shopify development agency',
  ],
  secondary: [
    'shopify developers india',
    'shopify store development',
    'shopify customization',
    'shopify plus developer',
    'shopify expert india',
  ],
  longTail: [
    'hire shopify developer for custom store',
    'shopify development service with migration',
    'best shopify developers for ecommerce',
    'professional shopify development with headless',
  ],
  semantic: [
    'shopify store setup',
    'shopify theme development',
    'shopify app development',
    'shopify integration',
    'ecommerce development',
  ],
};

/**
 * SEO Keywords
 */
export const SEO_KEYWORDS: KeywordSet = {
  primary: [
    'hire seo expert',
    'seo services',
    'seo agency',
    'best seo company',
    'professional seo services',
    'seo consultant',
    'seo optimization services',
  ],
  secondary: [
    'seo services india',
    'seo company india',
    'seo expert india',
    'local seo services',
    'technical seo',
    'seo audit services',
  ],
  longTail: [
    'hire seo expert for ecommerce',
    'best seo company for small business',
    'professional seo services with guaranteed results',
    'seo optimization service with monthly reports',
  ],
  semantic: [
    'search engine optimization',
    'organic seo',
    'on-page seo',
    'off-page seo',
    'seo marketing',
    'seo strategy',
  ],
  local: [
    'seo services mumbai',
    'seo company delhi',
    'seo expert bangalore',
    'local seo pune',
  ],
};

/**
 * AI Chatbot Keywords
 */
export const AI_CHATBOT_KEYWORDS: KeywordSet = {
  primary: [
    'hire chatbot developer',
    'ai chatbot development',
    'chatbot development services',
    'custom chatbot development',
    'ai chatbot company',
    'chatbot development agency',
  ],
  secondary: [
    'chatbot developers india',
    'ai chatbot services',
    'whatsapp chatbot development',
    'chatbot integration',
    'conversational ai',
  ],
  longTail: [
    'hire chatbot developer for website',
    'ai chatbot development with openai',
    'custom chatbot development for ecommerce',
    'chatbot development service with crm integration',
  ],
  semantic: [
    'ai chatbot',
    'virtual assistant',
    'chatbot builder',
    'conversational ai',
    'ai automation',
    'customer support chatbot',
  ],
};

/**
 * CRM Keywords
 */
export const CRM_KEYWORDS: KeywordSet = {
  primary: [
    'hire crm developer',
    'custom crm development',
    'crm development services',
    'crm software development',
    'best crm developers',
    'crm development company',
  ],
  secondary: [
    'crm developers india',
    'custom crm solution',
    'crm software company',
    'enterprise crm development',
    'crm integration services',
  ],
  longTail: [
    'hire crm developer for sales team',
    'custom crm development with automation',
    'best crm developers for small business',
    'crm software development with mobile app',
  ],
  semantic: [
    'customer relationship management',
    'crm system',
    'sales crm',
    'crm platform',
    'crm software',
    'crm integration',
  ],
};

/**
 * React.js Development Keywords
 */
export const REACTJS_KEYWORDS: KeywordSet = {
  primary: [
    'hire react developer',
    'react development services',
    'react development company',
    'best react developers',
    'professional react development',
    'react.js development agency',
  ],
  secondary: [
    'react developers india',
    'react.js development services',
    'react native developers',
    'react experts',
    'react consulting',
  ],
  longTail: [
    'hire react developer for web app',
    'react development service with redux',
    'best react developers for startups',
    'professional react development with typescript',
  ],
  semantic: [
    'reactjs development',
    'react frontend',
    'react components',
    'react applications',
    'react migration',
    'react hooks',
  ],
};

/**
 * Enterprise Google Ads Keywords
 */
export const ENTERPRISE_GOOGLE_ADS_KEYWORDS: KeywordSet = {
  primary: [
    'hire enterprise google ads manager',
    'enterprise google ads management',
    'enterprise ppc management',
    'enterprise google ads agency',
    'best enterprise google ads',
    'enterprise adwords management',
  ],
  secondary: [
    'enterprise google ads india',
    'enterprise ppc agency',
    'large scale google ads',
    'enterprise advertising management',
    'enterprise campaign management',
  ],
  longTail: [
    'hire enterprise google ads manager for saas',
    'enterprise google ads management with dedicated team',
    'best enterprise google ads agency for b2b',
  ],
  semantic: [
    'enterprise ppc',
    'large scale advertising',
    'enterprise marketing',
    'enterprise sem',
    'enterprise paid search',
  ],
};

/**
 * Ecommerce Google Ads Keywords
 */
export const ECOMMERCE_GOOGLE_ADS_KEYWORDS: KeywordSet = {
  primary: [
    'hire ecommerce google ads expert',
    'ecommerce google ads management',
    'ecommerce ppc management',
    'ecommerce google ads agency',
    'best ecommerce google ads',
    'shopify google ads management',
  ],
  secondary: [
    'ecommerce google ads india',
    'ecommerce ppc agency',
    'online store advertising',
    'ecommerce campaign management',
    'shopping ads management',
  ],
  longTail: [
    'hire ecommerce google ads expert for shopify',
    'ecommerce google ads management with conversion tracking',
    'best ecommerce google ads agency for dropshipping',
  ],
  semantic: [
    'ecommerce ppc',
    'shopping ads',
    'product listing ads',
    'ecommerce advertising',
    'online store marketing',
  ],
};

/**
 * Local Business Google Ads Keywords
 */
export const LOCAL_BUSINESS_GOOGLE_ADS_KEYWORDS: KeywordSet = {
  primary: [
    'hire local google ads expert',
    'local business google ads',
    'local google ads management',
    'local ppc management',
    'local google ads agency',
    'local business advertising',
  ],
  secondary: [
    'local google ads india',
    'local ppc agency',
    'local business marketing',
    'local campaign management',
    'near me advertising',
  ],
  longTail: [
    'hire local google ads expert for restaurant',
    'local business google ads management with location extensions',
    'best local google ads agency for retail',
  ],
  semantic: [
    'local ppc',
    'local search ads',
    'geo-targeted advertising',
    'local business marketing',
    'location-based ads',
  ],
  local: [
    'local google ads mumbai',
    'local business advertising delhi',
    'local ppc bangalore',
  ],
};

/**
 * Performance Max Campaigns Keywords
 */
export const PERFORMANCE_MAX_KEYWORDS: KeywordSet = {
  primary: [
    'hire performance max expert',
    'performance max campaign management',
    'performance max google ads',
    'performance max agency',
    'best performance max management',
    'performance max optimization',
  ],
  secondary: [
    'performance max india',
    'performance max consultant',
    'pmax campaign management',
    'performance max setup',
    'performance max strategy',
  ],
  longTail: [
    'hire performance max expert for ecommerce',
    'performance max campaign management with conversion goals',
    'best performance max agency for lead generation',
  ],
  semantic: [
    'pmax campaigns',
    'performance max ads',
    'google performance max',
    'automated campaign management',
    'smart bidding',
  ],
};

/**
 * Google Ads Audit Keywords
 */
export const GOOGLE_ADS_AUDIT_KEYWORDS: KeywordSet = {
  primary: [
    'hire google ads audit expert',
    'google ads audit service',
    'google ads account audit',
    'ppc audit service',
    'google ads audit agency',
    'professional google ads audit',
  ],
  secondary: [
    'google ads audit india',
    'ppc audit consultant',
    'google ads account review',
    'campaign audit service',
    'adwords audit',
  ],
  longTail: [
    'hire google ads audit expert for ecommerce account',
    'google ads audit service with optimization plan',
    'professional google ads audit with recommendations',
  ],
  semantic: [
    'ppc audit',
    'account audit',
    'campaign review',
    'adwords audit',
    'advertising audit',
  ],
};

/**
 * Landing Page Optimization Keywords
 */
export const LANDING_PAGE_OPTIMIZATION_KEYWORDS: KeywordSet = {
  primary: [
    'hire landing page optimization expert',
    'landing page optimization service',
    'landing page optimization agency',
    'best landing page optimization',
    'conversion rate optimization',
    'landing page cro',
  ],
  secondary: [
    'landing page optimization india',
    'cro services',
    'landing page consultant',
    'conversion optimization',
    'landing page testing',
  ],
  longTail: [
    'hire landing page optimization expert for google ads',
    'landing page optimization service with ab testing',
    'best landing page optimization agency for saas',
  ],
  semantic: [
    'conversion rate optimization',
    'landing page design',
    'cro testing',
    'landing page copywriting',
    'conversion optimization',
  ],
};

/**
 * YouTube Advertising Keywords
 */
export const YOUTUBE_ADS_KEYWORDS: KeywordSet = {
  primary: [
    'hire youtube ads expert',
    'youtube advertising management',
    'youtube ads management',
    'youtube ads agency',
    'best youtube ads management',
    'youtube video advertising',
  ],
  secondary: [
    'youtube ads india',
    'youtube ads consultant',
    'youtube campaign management',
    'video advertising agency',
    'youtube marketing',
  ],
  longTail: [
    'hire youtube ads expert for brand awareness',
    'youtube advertising management with targeting',
    'best youtube ads agency for b2b',
  ],
  semantic: [
    'youtube marketing',
    'video advertising',
    'youtube campaigns',
    'video ads',
    'youtube promotion',
  ],
};

/**
 * WhatsApp Business API Keywords
 */
export const WHATSAPP_BUSINESS_API_KEYWORDS: KeywordSet = {
  primary: [
    'hire whatsapp business api developer',
    'whatsapp business api integration',
    'whatsapp business api service',
    'whatsapp api development',
    'whatsapp business api agency',
    'whatsapp automation',
  ],
  secondary: [
    'whatsapp api india',
    'whatsapp business api consultant',
    'whatsapp chatbot development',
    'whatsapp marketing automation',
    'whatsapp api integration',
  ],
  longTail: [
    'hire whatsapp business api developer for ecommerce',
    'whatsapp business api integration with crm',
    'best whatsapp api agency for customer support',
  ],
  semantic: [
    'whatsapp marketing',
    'whatsapp chatbot',
    'whatsapp automation',
    'whatsapp integration',
    'whatsapp business',
  ],
};

/**
 * AI Voice Agents Keywords
 */
export const AI_VOICE_AGENTS_KEYWORDS: KeywordSet = {
  primary: [
    'hire ai voice agent developer',
    'ai voice agent development',
    'voice ai development',
    'ai voice assistant development',
    'voice bot development',
    'ai voice agent agency',
  ],
  secondary: [
    'ai voice agents india',
    'voice ai consultant',
    'voice assistant development',
    'conversational voice ai',
    'voice automation',
  ],
  longTail: [
    'hire ai voice agent developer for call center',
    'ai voice agent development with natural language',
    'best voice ai agency for customer service',
  ],
  semantic: [
    'voice ai',
    'voice assistant',
    'voice bot',
    'conversational ai',
    'voice automation',
  ],
};

/**
 * Healthcare Software Development Keywords
 */
export const HEALTHCARE_SOFTWARE_KEYWORDS: KeywordSet = {
  primary: [
    'hire healthcare software developer',
    'healthcare software development',
    'healthcare app development',
    'medical software development',
    'healthcare software company',
    'healthcare development agency',
  ],
  secondary: [
    'healthcare software india',
    'medical app developers',
    'healthcare it solutions',
    'ehr development',
    'healthcare software consultant',
  ],
  longTail: [
    'hire healthcare software developer for hospital',
    'healthcare software development with hipaa compliance',
    'best healthcare software company for clinics',
  ],
  semantic: [
    'healthcare it',
    'medical software',
    'ehr systems',
    'healthcare apps',
    'telemedicine development',
  ],
};

/**
 * Trading Software Keywords
 */
export const TRADING_SOFTWARE_KEYWORDS: KeywordSet = {
  primary: [
    'hire trading software developer',
    'trading software development',
    'trading platform development',
    'trading software company',
    'stock trading software',
    'trading system development',
  ],
  secondary: [
    'trading software india',
    'trading platform developers',
    'forex trading software',
    'crypto trading platform',
    'trading software consultant',
  ],
  longTail: [
    'hire trading software developer for broker',
    'trading platform development with real-time data',
    'best trading software company for exchanges',
  ],
  semantic: [
    'trading platform',
    'trading system',
    'stock trading',
    'forex platform',
    'trading technology',
  ],
};

/**
 * NSE MCX Live Market Data Keywords
 */
export const NSE_MCX_KEYWORDS: KeywordSet = {
  primary: [
    'hire nse mcx data developer',
    'nse mcx live data api',
    'stock market data api',
    'nse mcx data integration',
    'live market data service',
    'stock data api development',
  ],
  secondary: [
    'nse mcx data india',
    'stock market api',
    'real-time market data',
    'nse data integration',
    'mcx data api',
  ],
  longTail: [
    'hire nse mcx data developer for trading platform',
    'nse mcx live data api with websocket',
    'best stock market data api for brokers',
  ],
  semantic: [
    'stock market data',
    'market data api',
    'real-time quotes',
    'nse data',
    'mcx data',
  ],
};

/**
 * Business Website Keywords
 */
export const BUSINESS_WEBSITE_KEYWORDS: KeywordSet = {
  primary: [
    'hire business website developer',
    'business website development',
    'corporate website development',
    'business website company',
    'professional website development',
    'business website agency',
  ],
  secondary: [
    'business website india',
    'corporate website developers',
    'business website design',
    'company website development',
    'business website consultant',
  ],
  longTail: [
    'hire business website developer for small business',
    'business website development with cms',
    'best business website company for startups',
  ],
  semantic: [
    'corporate website',
    'business website',
    'company website',
    'professional website',
    'business web design',
  ],
  local: [
    'business website mumbai',
    'corporate website delhi',
    'business website bangalore',
  ],
};

/**
 * Web Development Mumbai Keywords
 */
export const WEB_DEVELOPMENT_MUMBAI_KEYWORDS: KeywordSet = {
  primary: [
    'hire web developer mumbai',
    'web development company mumbai',
    'website development mumbai',
    'web developers mumbai',
    'best web development mumbai',
    'web development agency mumbai',
  ],
  secondary: [
    'web development services mumbai',
    'website developers mumbai',
    'custom web development mumbai',
    'responsive web development mumbai',
    'web development experts mumbai',
  ],
  longTail: [
    'hire web developer mumbai for ecommerce',
    'web development company mumbai for startups',
    'best web developers mumbai with seo',
  ],
  semantic: [
    'website development mumbai',
    'web design mumbai',
    'web development mumbai',
    'mumbai web developers',
    'mumbai website company',
  ],
  local: [
    'web development mumbai',
    'website development mumbai',
    'web developers mumbai',
  ],
};

/**
 * Function to get keywords for a specific page
 */
export function getKeywordsForPage(pageName: string): KeywordSet {
  const keywordMap: Record<string, KeywordSet> = {
    // Google Ads Services
    'google-ads-management': GOOGLE_ADS_KEYWORDS,
    'b2b-lead-generation-ads': B2B_LEAD_GENERATION_KEYWORDS,
    'enterprise-google-ads-management': ENTERPRISE_GOOGLE_ADS_KEYWORDS,
    'ecommerce-google-ads-optimization': ECOMMERCE_GOOGLE_ADS_KEYWORDS,
    'local-business-google-ads': LOCAL_BUSINESS_GOOGLE_ADS_KEYWORDS,
    'performance-max-campaigns': PERFORMANCE_MAX_KEYWORDS,
    'google-ads-audit-strategy': GOOGLE_ADS_AUDIT_KEYWORDS,
    'google-ads-ecosystem': GOOGLE_ADS_KEYWORDS,
    'youtube-advertising-management': YOUTUBE_ADS_KEYWORDS,
    
    // Web Development Services
    'web-development': WEB_DEVELOPMENT_KEYWORDS,
    'web-development-mumbai': WEB_DEVELOPMENT_MUMBAI_KEYWORDS,
    'next-js-development': NEXTJS_KEYWORDS,
    'reactjs-development': REACTJS_KEYWORDS,
    'business-website': BUSINESS_WEBSITE_KEYWORDS,
    'website-development': WEB_DEVELOPMENT_KEYWORDS,
    'website-services': WEB_DEVELOPMENT_KEYWORDS,
    
    // Shopify Services
    'shopify-headless-migration': SHOPIFY_KEYWORDS,
    'shopify-product-page-customization': SHOPIFY_KEYWORDS,
    'shopify-store-setup': SHOPIFY_KEYWORDS,
    
    // SEO Services
    'seo-audit': SEO_KEYWORDS,
    'landing-page-optimization': LANDING_PAGE_OPTIMIZATION_KEYWORDS,
    
    // AI & Automation Services
    'ai-chatbot-development': AI_CHATBOT_KEYWORDS,
    'ai-voice-agents': AI_VOICE_AGENTS_KEYWORDS,
    'whatsapp-business-api': WHATSAPP_BUSINESS_API_KEYWORDS,
    
    // Software Development Services
    'crm': CRM_KEYWORDS,
    'healthcare-software-development': HEALTHCARE_SOFTWARE_KEYWORDS,
    'trading-software': TRADING_SOFTWARE_KEYWORDS,
    'nse-mcx-live-market-data': NSE_MCX_KEYWORDS,
  };

  return keywordMap[pageName] || WEB_DEVELOPMENT_KEYWORDS;
}

/**
 * Function to generate optimized title with primary keyword
 */
export function generateOptimizedTitle(
  primaryKeyword: string,
  serviceName: string,
  location?: string
): string {
  const title = location
    ? `${primaryKeyword} ${location} | ${serviceName}`
    : `${primaryKeyword} | ${serviceName}`;
  
  // Ensure title is 60-70 characters
  return title.length > 70 ? title.substring(0, 67) + '...' : title;
}

/**
 * Function to generate optimized description with keywords
 */
export function generateOptimizedDescription(
  keywords: KeywordSet,
  serviceDescription: string,
  location?: string
): string {
  const primaryKeyword = keywords.primary[0];
  const locationText = location ? ` in ${location}` : '';
  const description = `${primaryKeyword}${locationText}. ${serviceDescription} Starting from ₹X. Get free consultation today!`;
  
  // Ensure description is 150-160 characters
  return description.length > 160 ? description.substring(0, 157) + '...' : description;
}

/**
 * Function to combine all keywords for metadata
 */
export function combineKeywords(keywords: KeywordSet): string[] {
  return [
    ...keywords.primary,
    ...keywords.secondary,
    ...keywords.longTail.slice(0, 5), // Limit long-tail
    ...keywords.semantic.slice(0, 5), // Limit semantic
    ...(keywords.local || []),
  ];
}
