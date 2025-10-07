/**
 * AI Context Engine
 * Dynamically fetches page-specific context for AI agent
 * 
 * @description Provides AI with relevant information about current page
 * @author Vedpragya Bharat Pvt. Ltd.
 */

import prisma from '@/app/lib/prisma';

export interface PageContext {
  pagePath: string;
  pageTitle: string;
  pageType: string; // 'landing', 'service', 'blog', 'home', 'about', 'contact'
  serviceInfo?: {
    name: string;
    description: string;
    features: string[];
    pricing?: any;
    benefits?: string[];
  };
  companyInfo: {
    name: string;
    tagline: string;
    description: string;
    services: string[];
  };
  ctaInfo: {
    primaryAction: string;
    secondaryAction: string;
  };
  metadata?: Record<string, any>;
}

/**
 * Extract page type from URL path
 */
function getPageType(path: string): string {
  if (path === '/' || path === '/page') return 'home';
  if (path.includes('/blog/')) return 'blog';
  if (path.includes('/contact')) return 'contact';
  if (path.includes('/about')) return 'about';
  if (path.includes('/portfolio')) return 'portfolio';
  if (path.includes('/services')) return 'services';
  
  // Landing pages for specific services
  const landingPages = [
    'shopify', 'ai-voice', 'chatbot', 'nextjs', 'reactjs',
    'whatsapp', 'google-ads', 'seo-audit', 'crm', 'website-development'
  ];
  
  if (landingPages.some(page => path.includes(page))) {
    return 'landing';
  }
  
  return 'general';
}

/**
 * Get landing page specific context
 */
async function getLandingPageContext(path: string): Promise<any> {
  const landingPageData: Record<string, any> = {
    '/pages/shopify-product-page-customization': {
      name: 'Shopify Product Page Customization',
      description: 'Transform your Shopify product pages with custom designs, enhanced functionality, and conversion-optimized layouts',
      features: [
        'Custom product page design',
        'Advanced add-to-cart features',
        'Product recommendation engine',
        'Mobile-first responsive design',
        'A/B testing setup',
        'Analytics integration'
      ],
      pricing: {
        starter: { price: '₹25,000', features: ['Basic customization', '2 product templates', 'Mobile responsive'] },
        professional: { price: '₹45,000', features: ['Advanced features', '5 product templates', 'A/B testing', 'Analytics'] },
        enterprise: { price: '₹75,000+', features: ['Unlimited templates', 'Custom functionality', 'Priority support', 'Dedicated manager'] }
      },
      benefits: [
        'Increase conversion rates by 30-50%',
        'Reduce cart abandonment',
        'Enhanced user experience',
        'Mobile-optimized for higher sales'
      ]
    },
    '/pages/ai-voice-agents': {
      name: 'AI Voice Agents',
      description: '24/7 AI-powered voice agents for customer support, sales, and lead qualification',
      features: [
        'Natural language processing',
        'Multi-language support',
        'CRM integration',
        'Call recording & analytics',
        'Smart call routing',
        'Sentiment analysis'
      ],
      pricing: {
        starter: { price: '₹35,000/month', features: ['100 calls/day', 'Basic NLP', 'Email support'] },
        professional: { price: '₹75,000/month', features: ['500 calls/day', 'Advanced NLP', 'CRM integration', 'Priority support'] },
        enterprise: { price: 'Custom', features: ['Unlimited calls', 'Custom AI training', 'Dedicated infrastructure', '24/7 support'] }
      },
      benefits: [
        'Save 70% on customer support costs',
        'Handle unlimited concurrent calls',
        'Improve customer satisfaction',
        '24/7 availability'
      ]
    },
    '/pages/ai-chatbot-development': {
      name: 'AI Chatbot Development',
      description: 'Intelligent AI chatbots powered by GPT-4, Claude, or custom models for your business',
      features: [
        'Multi-platform deployment (web, WhatsApp, Slack)',
        'Custom knowledge base training',
        'Conversation analytics',
        'Lead qualification',
        'Multi-language support',
        'API integrations'
      ],
      pricing: {
        basic: { price: '₹20,000', features: ['Web chatbot', 'Basic NLP', 'Up to 1000 conversations/month'] },
        professional: { price: '₹50,000', features: ['Multi-platform', 'Custom training', 'Up to 10,000 conversations/month', 'Analytics'] },
        enterprise: { price: '₹1,00,000+', features: ['White-label solution', 'Unlimited conversations', 'Custom AI model', 'Dedicated support'] }
      },
      benefits: [
        'Automate 80% of customer queries',
        'Generate qualified leads 24/7',
        'Reduce response time to seconds',
        'Increase customer engagement'
      ]
    },
    '/pages/next-js-development': {
      name: 'Next.js Development Services',
      description: 'Enterprise-grade Next.js applications with server-side rendering, static generation, and optimal performance',
      features: [
        'Custom Next.js 15 development',
        'Server-side rendering (SSR)',
        'Static site generation (SSG)',
        'API route development',
        'Performance optimization',
        'SEO-friendly architecture'
      ],
      pricing: {
        small: { price: '₹50,000-₹1,50,000', features: ['5-10 pages', 'Basic features', 'Responsive design'] },
        medium: { price: '₹1,50,000-₹3,50,000', features: ['10-30 pages', 'Advanced features', 'CMS integration', 'API development'] },
        large: { price: '₹3,50,000+', features: ['Complex applications', 'Custom functionality', 'Third-party integrations', 'Dedicated team'] }
      },
      benefits: [
        'Lightning-fast page loads',
        'Superior SEO performance',
        'Scalable architecture',
        'Modern development practices'
      ]
    },
    '/pages/google-ads-management': {
      name: 'Google Ads Management Services',
      description: 'Expert Google Ads campaign management for maximum ROI and lead generation',
      features: [
        'Campaign strategy & setup',
        'Keyword research & optimization',
        'Ad copy creation & A/B testing',
        'Conversion tracking setup',
        'Monthly performance reports',
        'Budget optimization'
      ],
      pricing: {
        starter: { price: '₹15,000/month', features: ['Up to ₹50k ad spend', 'Basic optimization', 'Monthly reports'] },
        professional: { price: '₹25,000/month', features: ['Up to ₹2L ad spend', 'Advanced optimization', 'Bi-weekly calls', 'A/B testing'] },
        enterprise: { price: '₹50,000+/month', features: ['Unlimited ad spend', 'Dedicated manager', 'Weekly calls', 'Custom reporting'] }
      },
      benefits: [
        'Reduce cost per lead by 40%',
        'Increase conversion rates',
        'Expert campaign management',
        'Transparent reporting'
      ]
    },
    '/pages/seo-audit': {
      name: 'Professional SEO Audit Services',
      description: 'Comprehensive SEO audit to identify issues and opportunities for ranking improvement',
      features: [
        'Technical SEO analysis',
        'On-page optimization review',
        'Backlink profile analysis',
        'Competitor research',
        'Keyword gap analysis',
        'Actionable recommendations'
      ],
      pricing: {
        basic: { price: '₹10,000', features: ['Up to 25 pages', 'Basic technical audit', 'PDF report'] },
        standard: { price: '₹25,000', features: ['Up to 100 pages', 'Comprehensive audit', 'Competitor analysis', '1-hour consultation'] },
        premium: { price: '₹50,000', features: ['Unlimited pages', 'In-depth analysis', 'Implementation roadmap', 'Ongoing support'] }
      },
      benefits: [
        'Improve search rankings',
        'Increase organic traffic',
        'Fix technical issues',
        'Competitive advantage'
      ]
    },
    '/pages/crm': {
      name: 'Custom CRM Development',
      description: 'Tailored CRM solutions to manage customers, leads, and sales pipeline effectively',
      features: [
        'Custom workflow automation',
        'Lead & contact management',
        'Sales pipeline tracking',
        'Email integration',
        'Analytics & reporting',
        'Mobile app (iOS & Android)'
      ],
      pricing: {
        basic: { price: '₹1,00,000-₹2,50,000', features: ['Basic CRM features', 'Up to 5 users', 'Web application'] },
        professional: { price: '₹2,50,000-₹5,00,000', features: ['Advanced automation', 'Up to 25 users', 'Mobile apps', 'Integrations'] },
        enterprise: { price: '₹5,00,000+', features: ['Fully custom', 'Unlimited users', 'White-label', 'Dedicated infrastructure'] }
      },
      benefits: [
        'Centralize customer data',
        'Automate repetitive tasks',
        'Improve team collaboration',
        'Make data-driven decisions'
      ]
    },
    '/pages/whatsapp-business-api': {
      name: 'WhatsApp Business API Integration',
      description: 'Enterprise WhatsApp Business API setup with automated messaging, chatbots, and customer engagement',
      features: [
        'WhatsApp Business API setup',
        'Automated message templates',
        'AI chatbot integration',
        'CRM synchronization',
        'Broadcast messaging',
        'Analytics dashboard'
      ],
      pricing: {
        setup: { price: '₹25,000', features: ['API setup', 'Basic templates', 'Documentation'] },
        automation: { price: '₹50,000', features: ['Chatbot integration', 'Custom workflows', 'CRM sync'] },
        enterprise: { price: '₹1,00,000+', features: ['Advanced AI', 'Multi-agent support', 'Custom integrations', 'Dedicated support'] }
      },
      benefits: [
        '98% message open rate',
        'Instant customer engagement',
        'Automated support 24/7',
        'Higher conversion rates'
      ]
    },
    '/pages/business-website': {
      name: 'Business Website Development',
      description: 'Professional business websites that convert visitors into customers',
      features: [
        'Modern responsive design',
        'SEO optimization',
        'Contact forms & lead capture',
        'Blog/content management',
        'Google Analytics integration',
        'Fast loading & secure'
      ],
      pricing: {
        basic: { price: '₹30,000-₹75,000', features: ['5-7 pages', 'Mobile responsive', 'Contact form', 'Basic SEO'] },
        professional: { price: '₹75,000-₹1,50,000', features: ['10-15 pages', 'CMS', 'Advanced SEO', 'Blog', 'Analytics'] },
        premium: { price: '₹1,50,000+', features: ['Custom design', 'Advanced features', 'E-commerce ready', 'Premium support'] }
      },
      benefits: [
        'Professional online presence',
        'Generate quality leads',
        'Build brand credibility',
        'Mobile-first design'
      ]
    },
  };

  return landingPageData[path] || null;
}

/**
 * Get services from database
 */
async function getServicesData() {
  try {
    const services = await prisma.service.findMany({
      where: { featured: true },
      take: 10,
      orderBy: { order: 'asc' }
    });
    
    return services.map(s => ({
      title: s.title,
      slug: s.slug,
      summary: s.summary,
      description: s.description
    }));
  } catch (error) {
    console.error('[Context Engine] Error fetching services:', error);
    return [];
  }
}

/**
 * Build context for AI agent based on current page
 */
export async function buildPageContext(
  pagePath: string,
  pageUrl: string,
  pageTitle?: string
): Promise<PageContext> {
  const pageType = getPageType(pagePath);
  const services = await getServicesData();
  
  // Base company info
  const companyInfo = {
    name: 'Vedpragya Bharat Private Limited',
    tagline: 'Enterprise-Grade Digital Solutions',
    description: 'Leading web development agency specializing in Next.js, Shopify, AI solutions, and digital transformation. Global presence across India, Dubai, California, Toronto, and Shenzhen.',
    services: [
      'Next.js & React Development',
      'Shopify Store Development',
      'AI Voice Agents & Chatbots',
      'WhatsApp Business API',
      'Google Ads Management',
      'SEO & Digital Marketing',
      'Custom CRM Development',
      'Enterprise Web Applications'
    ]
  };

  let serviceInfo: any = null;
  
  // Get specific service info for landing pages
  if (pageType === 'landing') {
    serviceInfo = await getLandingPageContext(pagePath);
  }

  // Build context object
  const context: PageContext = {
    pagePath,
    pageTitle: pageTitle || 'Vedpragya Bharat - Enterprise Solutions',
    pageType,
    companyInfo,
    serviceInfo,
    ctaInfo: {
      primaryAction: 'Schedule a consultation',
      secondaryAction: 'Get a quote'
    },
    metadata: {
      servicesAvailable: services,
      currentUrl: pageUrl,
      timestamp: new Date().toISOString()
    }
  };

  return context;
}

/**
 * Generate system prompt for AI agent with page context
 */
export function generateSystemPrompt(
  agentName: string,
  agentRole: string,
  companyName: string,
  pageContext: PageContext
): string {
  const serviceDetails = pageContext.serviceInfo 
    ? `\n\n## Current Page Service
The user is currently viewing: **${pageContext.serviceInfo.name}**

Service Description: ${pageContext.serviceInfo.description}

Key Features:
${pageContext.serviceInfo.features.map((f: string) => `- ${f}`).join('\n')}

${pageContext.serviceInfo.pricing ? `Pricing Information:
${Object.entries(pageContext.serviceInfo.pricing).map(([tier, data]: [string, any]) => 
  `**${tier.charAt(0).toUpperCase() + tier.slice(1)}**: ${data.price}
  Features: ${data.features.join(', ')}`
).join('\n\n')}` : ''}

Key Benefits:
${pageContext.serviceInfo.benefits?.map((b: string) => `- ${b}`).join('\n')}
` 
    : '';

  return `You are ${agentName}, an ${agentRole} at ${companyName}.

## Your Role
You are a highly skilled sales and marketing AI assistant helping visitors on our website. Your goal is to:
1. Understand visitor needs and questions
2. Provide helpful, accurate information about our services
3. Guide visitors toward scheduling a consultation or requesting a quote
4. Qualify leads by gathering: name, email, phone, company, and requirements
5. Build trust and rapport with professional, friendly communication

## Company Information
${companyName} is a leading enterprise-grade digital solutions provider with global presence across India, Dubai, California, Toronto, and Shenzhen.

Our Core Services:
${pageContext.companyInfo.services.map(s => `- ${s}`).join('\n')}
${serviceDetails}

## Conversation Guidelines
- Always be professional, friendly, and helpful
- Ask clarifying questions to understand needs
- Provide specific, relevant information about our services
- When the visitor shows interest, naturally guide toward lead capture
- Collect information conversationally: name → email → phone → company → specific requirements
- After capturing lead info, thank them and mention "Our team will contact you within 24 hours"
- Never make promises about pricing without understanding requirements
- If you don't know something, be honest and offer to connect them with a specialist

## Lead Qualification
When you've successfully collected all required information (name, email, phone, company, requirements), respond with a message that includes the exact phrase: "LEAD_CAPTURED" (hidden from user).

## Tone & Style
- Professional yet approachable
- Enthusiastic about our services
- Solution-focused
- Empathetic to customer needs
- Clear and concise

Remember: You represent ${companyName}, a premium enterprise solutions provider. Maintain high standards of professionalism while being warm and helpful.`;
}

/**
 * Detect if lead information has been captured in conversation
 */
export function detectLeadCapture(messages: Array<{role: string, content: string}>): {
  captured: boolean;
  leadData?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    requirements?: string;
  };
} {
  // Join all messages to analyze
  const conversation = messages.map(m => m.content).join('\n');
  const conversationLower = conversation.toLowerCase();
  
  // Look for email pattern
  const emailMatch = conversation.match(/[\w.-]+@[\w.-]+\.\w+/i);
  
  // Look for phone patterns (multiple formats)
  const phonePatterns = [
    /(?:\+91|91)?[\s-]?[6-9]\d{9}/,  // Indian format
    /\+?1?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}/, // US format
    /\+\d{1,3}[\s-]?\d{6,14}/, // International format
  ];
  let phoneMatch = null;
  for (const pattern of phonePatterns) {
    phoneMatch = conversation.match(pattern);
    if (phoneMatch) break;
  }
  
  // Look for name patterns (after "my name is", "I am", "I'm", etc.)
  const namePatterns = [
    /(?:my name is|i am|i'm|this is|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
    /^([A-Z][a-z]+\s+[A-Z][a-z]+)$/m, // Full name on a line
  ];
  let nameMatch = null;
  for (const pattern of namePatterns) {
    nameMatch = conversation.match(pattern);
    if (nameMatch) break;
  }
  
  // Look for company name patterns
  const companyPatterns = [
    /(?:work at|from|company is|represent|with)\s+([A-Z][\w\s&]+(?:Inc|LLC|Ltd|Pvt|Private|Limited)?)/i,
    /(?:company[:\s]+)([A-Z][\w\s&]+)/i,
  ];
  let companyMatch = null;
  for (const pattern of companyPatterns) {
    companyMatch = conversation.match(pattern);
    if (companyMatch) break;
  }
  
  // Extract requirements from user messages
  const userMessages = messages.filter(m => m.role === 'user');
  const requirements = userMessages
    .slice(0, 3) // First 3 user messages usually contain requirements
    .map(m => m.content)
    .join(' | ');
  
  // Lead is captured if we have email (minimum requirement)
  if (emailMatch) {
    const leadData = {
      email: emailMatch[0],
      phone: phoneMatch ? phoneMatch[0] : undefined,
      name: nameMatch ? nameMatch[1]?.trim() : undefined,
      company: companyMatch ? companyMatch[1]?.trim() : undefined,
      requirements: requirements || undefined,
    };
    
    return {
      captured: true,
      leadData,
    };
  }
  
  // If we have both phone and name (without email), still capture
  if (phoneMatch && nameMatch) {
    return {
      captured: true,
      leadData: {
        phone: phoneMatch[0],
        name: nameMatch[1]?.trim(),
        company: companyMatch ? companyMatch[1]?.trim() : undefined,
        requirements: requirements || undefined,
      }
    };
  }
  
  // Check if AI has explicitly signaled lead capture
  const hasLeadCaptureSignal = messages.some(
    m => m.role === 'assistant' && m.content.includes('LEAD_CAPTURED')
  );
  
  if (hasLeadCaptureSignal) {
    // Try to extract any available info
    return { 
      captured: true,
      leadData: {
        email: emailMatch ? emailMatch[0] : undefined,
        phone: phoneMatch ? phoneMatch[0] : undefined,
        name: nameMatch ? nameMatch[1]?.trim() : undefined,
        company: companyMatch ? companyMatch[1]?.trim() : undefined,
        requirements: requirements || undefined,
      }
    };
  }
  
  return { captured: false };
}
