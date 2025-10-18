/**
 * @fileoverview Production Services Data
 * @description All services from landing pages - ready for database seeding
 * 
 * SERVICES INCLUDED (15):
 * - AI Chatbot Development
 * - Shopify Headless Migration
 * - Shopify Product Page Customization
 * - Shopify Store Setup
 * - WhatsApp Business API
 * - Google Ads Management
 * - SEO Audit Services
 * - React.js Development
 * - Next.js Development
 * - AI Voice Agents
 * - Business Website Development
 * - Trading Software Development
 * - NSE/MCX Live Market Data
 * - CRM Development
 * - Web Development
 */

export const servicesData = [
  // ===== AI & AUTOMATION SERVICES =====
  {
    title: 'AI Chatbot Development',
    slug: 'ai-chatbot-development',
    summary: 'Turn conversations into conversions with intelligent AI chatbots powered by GPT-4, Claude, and Gemini.',
    description: `Transform your customer engagement with enterprise-grade AI chatbots that understand context, qualify leads, and convert visitors 24/7.

Our AI chatbots are built with cutting-edge technology:
- Multi-provider AI support (OpenAI GPT-4, Anthropic Claude, Google Gemini)
- Real-time lead qualification and scoring
- Seamless CRM integration (Zoho, HubSpot, Salesforce)
- Context-aware conversations with page intelligence
- Multilingual support for global reach
- Advanced analytics and conversation insights

Perfect for e-commerce, SaaS, healthcare, education, and service businesses looking to automate customer support and boost conversions.`,
    icon: 'bot',
    imageUrl: '/images/services/ai-chatbot-development.jpg',
    order: 1,
    featured: true,
  },
  
  {
    title: 'AI Voice Agents',
    slug: 'ai-voice-agents',
    summary: 'Intelligent voice AI agents for customer support, sales, and appointment scheduling.',
    description: `Deploy AI-powered voice agents that handle phone calls with human-like conversations, perfect for customer support, lead qualification, and appointment booking.

Key Features:
- Natural language understanding and speech recognition
- Multi-language voice support
- Call routing and escalation logic
- Real-time transcription and analytics
- Integration with telephony systems (Twilio, Vonage)
- Sentiment analysis and quality monitoring
- Automated follow-ups and CRM sync

Ideal for call centers, healthcare clinics, real estate agencies, and service businesses.`,
    icon: 'phone',
    imageUrl: '/images/services/ai-voice-agents.jpg',
    order: 2,
    featured: true,
  },

  // ===== E-COMMERCE & SHOPIFY SERVICES =====
  {
    title: 'Shopify Headless Migration',
    slug: 'shopify-headless-migration',
    summary: 'Transform your Shopify store with Next.js or Hydrogen for 2-4× faster performance and unlimited customization.',
    description: `Go headless, go limitless. Migrate your Shopify store to a modern headless architecture with Next.js or Shopify Hydrogen for blazing-fast performance and complete design freedom.

What You Get:
- 2-4× faster page load times (95+ Lighthouse scores)
- Unlimited design customization with React/Next.js
- Best-in-class SEO with server-side rendering
- Native mobile app experience on web
- Seamless Shopify API integration
- Advanced filtering and search capabilities
- Custom checkout flows and upsells

Perfect for ambitious D2C brands, Shopify Plus merchants, and growing e-commerce businesses.

Starting from ₹1,00,000 for full migration.`,
    icon: 'shopify',
    imageUrl: '/images/services/shopify-headless-migration.jpg',
    order: 3,
    featured: true,
  },

  {
    title: 'Shopify Product Page Customization',
    slug: 'shopify-product-page-customization',
    summary: 'Custom product pages that convert visitors into customers with stunning design and advanced features.',
    description: `Create high-converting product pages with custom layouts, 3D product viewers, advanced variant selectors, and conversion-optimized designs.

Features:
- Custom product page templates
- 3D product visualization with Three.js
- Advanced variant selection (color, size, material)
- Dynamic bundle builders
- Smart recommendations engine
- Video and interactive media galleries
- Trust badges and social proof
- Mobile-optimized checkout

Boost your conversion rates by 30-50% with optimized product pages.`,
    icon: 'layout',
    imageUrl: '/images/services/shopify-product-customization.jpg',
    order: 4,
    featured: false,
  },

  {
    title: 'Shopify Store Setup',
    slug: 'shopify-store-setup',
    summary: 'Complete Shopify store setup from theme customization to payment integration and launch.',
    description: `Launch your Shopify store with confidence. We handle everything from theme selection to payment setup, product uploads, and marketing integrations.

Complete Setup Includes:
- Premium theme selection and customization
- Product catalog setup with SEO optimization
- Payment gateway integration (Razorpay, PayPal, Stripe)
- Shipping and tax configuration
- Marketing tools setup (Google Ads, Facebook Pixel)
- Email marketing integration (Klaviyo, Mailchimp)
- Analytics and conversion tracking
- Mobile optimization and testing

Get your store live in 2-3 weeks with full training included.`,
    icon: 'shopping-cart',
    imageUrl: '/images/services/shopify-store-setup.jpg',
    order: 5,
    featured: false,
  },

  // ===== MARKETING & COMMUNICATION SERVICES =====
  {
    title: 'WhatsApp Business API',
    slug: 'whatsapp-business-api',
    summary: 'Reach 2 billion customers with official WhatsApp Business API integration and automation.',
    description: `Connect with customers where they are - WhatsApp. Get official WhatsApp Business API integration with automated messaging, chatbot support, and broadcast campaigns.

Complete Solution:
- Official WhatsApp Business API setup
- Green tick verification assistance
- Automated message workflows
- AI-powered chatbot for WhatsApp
- Broadcast campaigns and bulk messaging
- Order notifications and updates
- Customer support automation
- CRM and e-commerce integration
- Analytics and message templates

98% open rate - higher than email! Perfect for e-commerce, restaurants, service businesses, and D2C brands.`,
    icon: 'message-circle',
    imageUrl: '/images/services/whatsapp-business-api.jpg',
    order: 6,
    featured: true,
  },

  {
    title: 'Google Ads Management',
    slug: 'google-ads-management',
    summary: 'ROI-focused Google Ads campaigns managed by certified experts. Drive qualified leads at lower cost.',
    description: `Stop wasting money on Google Ads. Our certified Google Ads experts create, manage, and optimize campaigns that deliver real ROI.

Complete Campaign Management:
- Search Ads (Google Search Network)
- Display Ads (Google Display Network)
- Shopping Ads (Google Merchant Center)
- YouTube Ads (Video campaigns)
- Performance Max campaigns
- Conversion tracking and analytics
- Landing page optimization
- A/B testing and optimization
- Monthly reporting and strategy calls

Average Results: 3-5× ROAS, 40-60% reduction in CPC, 2-3× increase in qualified leads.

Monthly retainers starting from ₹25,000.`,
    icon: 'trending-up',
    imageUrl: '/images/services/google-ads-management.jpg',
    order: 7,
    featured: false,
  },

  {
    title: 'SEO Audit Services',
    slug: 'seo-audit',
    summary: 'Comprehensive SEO audits that uncover hidden issues and opportunities to boost organic traffic.',
    description: `Get a complete SEO health check with actionable recommendations to improve rankings, traffic, and conversions.

Comprehensive Audit Includes:
- Technical SEO analysis (crawlability, indexing, site speed)
- On-page SEO review (content, keywords, meta tags)
- Off-page SEO analysis (backlinks, authority, citations)
- Competitor analysis and gap identification
- Content optimization recommendations
- Mobile and Core Web Vitals assessment
- Local SEO audit (Google Business Profile)
- International SEO review (hreflang, geo-targeting)
- Conversion rate optimization suggestions
- Detailed PDF report with priority fixes

3 Packages: Starter (₹6,999), Professional (₹19,999), Enterprise (₹49,999)`,
    icon: 'search',
    imageUrl: '/images/services/seo-audit.jpg',
    order: 8,
    featured: false,
  },

  // ===== WEB DEVELOPMENT SERVICES =====
  {
    title: 'React.js Development',
    slug: 'reactjs-development',
    summary: 'Build lightning-fast, interactive web applications with React.js and modern JavaScript.',
    description: `Create stunning, performant web applications with React.js. Perfect for single-page applications, dashboards, and interactive user interfaces.

Our React.js Expertise:
- Custom React application development
- Component-based architecture design
- State management (Redux, Zustand, Context API)
- React Hooks and modern patterns
- Performance optimization and lazy loading
- API integration and data management
- Progressive Web Apps (PWA)
- Testing with Jest and React Testing Library
- TypeScript integration
- Responsive design with Tailwind CSS

Perfect for SaaS platforms, enterprise dashboards, real-time applications, and modern web experiences.`,
    icon: 'code',
    imageUrl: '/images/services/reactjs-development.jpg',
    order: 9,
    featured: false,
  },

  {
    title: 'Next.js Development',
    slug: 'next-js-development',
    summary: 'Enterprise-grade Next.js applications with server-side rendering and optimal SEO performance.',
    description: `Build production-ready Next.js applications with server-side rendering, static generation, and the latest App Router features.

Next.js Solutions:
- Full-stack Next.js applications
- Server-side rendering (SSR) for SEO
- Static site generation (SSG) for performance
- API routes and serverless functions
- App Router with React Server Components
- Database integration (Prisma, MongoDB)
- Authentication and authorization
- Payment gateway integration
- Edge computing and middleware
- Deployment optimization (Vercel, AWS)

Ideal for e-commerce platforms, content websites, SaaS applications, and marketing sites that need both performance and SEO.`,
    icon: 'zap',
    imageUrl: '/images/services/nextjs-development.jpg',
    order: 10,
    featured: true,
  },

  {
    title: 'Business Website Development',
    slug: 'business-website',
    summary: 'Professional business websites that establish credibility and generate leads.',
    description: `Launch a stunning business website that showcases your services, builds trust, and converts visitors into customers.

Complete Website Package:
- Custom responsive design (mobile-first)
- 5-10 professional pages (Home, About, Services, Portfolio, Contact)
- CMS integration for easy updates
- Contact forms with lead capture
- Google Maps integration
- Social media integration
- Blog section for content marketing
- SEO optimization (meta tags, sitemap, schema markup)
- Analytics setup (Google Analytics 4)
- Fast hosting and SSL certificate
- 30 days post-launch support

Perfect for consultants, agencies, service providers, and small businesses.

Starting from ₹49,999.`,
    icon: 'briefcase',
    imageUrl: '/images/services/business-website.jpg',
    order: 11,
    featured: false,
  },

  {
    title: 'Web Development',
    slug: 'web-development',
    summary: 'Custom web development solutions tailored to your unique business needs.',
    description: `From simple landing pages to complex web applications, we build custom solutions that solve your business challenges.

Our Web Development Services:
- Custom website development
- Web application development
- Content management systems (CMS)
- E-commerce platforms
- Progressive Web Apps (PWA)
- API development and integration
- Database design and optimization
- Cloud hosting and deployment
- Maintenance and support
- Legacy system modernization

Technology Stack: React, Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, MongoDB, AWS, Vercel.

We work with businesses of all sizes from startups to enterprises.`,
    icon: 'globe',
    imageUrl: '/images/services/web-development.jpg',
    order: 12,
    featured: false,
  },

  // ===== SPECIALIZED BUSINESS APPLICATIONS =====
  {
    title: 'Trading Software Development',
    slug: 'trading-software',
    summary: 'Real-time trading platforms with charting, order execution, and market data integration.',
    description: `Build powerful trading platforms with real-time market data, advanced charting, and automated trading capabilities.

Trading Platform Features:
- Real-time market data feeds (NSE, BSE, MCX, Forex)
- Advanced charting with TradingView integration
- Multi-exchange order execution
- Portfolio management and tracking
- Automated trading strategies (algo trading)
- Risk management and stop-loss automation
- Options chain and analysis tools
- Technical indicators and backtesting
- Multi-user support with role-based access
- Mobile app with real-time notifications

Perfect for brokers, trading firms, and fintech startups.`,
    icon: 'bar-chart',
    imageUrl: '/images/services/trading-software.jpg',
    order: 13,
    featured: false,
  },

  {
    title: 'NSE/MCX Live Market Data',
    slug: 'nse-mcx-live-market-data',
    summary: 'Real-time market data integration from NSE, BSE, MCX, and global exchanges.',
    description: `Get live market data feeds with millisecond latency for stocks, commodities, currencies, and derivatives.

Market Data Solutions:
- Real-time price feeds (NSE, BSE, MCX, Forex)
- Historical data access and analysis
- WebSocket streaming for real-time updates
- Market depth and order book data
- Corporate actions and events
- Options chain data
- Commodity futures and spot prices
- Custom data APIs and webhooks
- Data normalization and cleaning
- Cloud infrastructure for high availability

Perfect for trading platforms, investment apps, and financial analytics tools.`,
    icon: 'activity',
    imageUrl: '/images/services/market-data.jpg',
    order: 14,
    featured: false,
  },

  {
    title: 'CRM Development',
    slug: 'crm',
    summary: 'Custom CRM solutions to manage customers, leads, and sales pipeline effectively.',
    description: `Build a custom CRM tailored to your sales process, with lead management, pipeline tracking, and automation.

Custom CRM Features:
- Lead capture and qualification
- Contact and company management
- Sales pipeline visualization
- Task and activity tracking
- Email integration and tracking
- Document management
- Reporting and analytics
- Mobile app for field sales
- Integration with marketing tools
- Automation workflows
- Role-based access control
- Custom fields and modules

Perfect for sales teams, agencies, and service businesses that need more than off-the-shelf CRM solutions.`,
    icon: 'users',
    imageUrl: '/images/services/crm-development.jpg',
    order: 15,
    featured: false,
  },
];

console.log('[Seed Data] Services data loaded:', servicesData.length, 'services');
