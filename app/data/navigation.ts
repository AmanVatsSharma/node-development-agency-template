/**
 * Navigation Data Configuration
 * Centralized navigation structure for mega menu, mobile menu, and footer
 */

export interface NavigationItem {
  name: string;
  link: string;
  description?: string;
  icon?: string;
  iconKey?: string;
  badge?: string;
}

export interface MegaMenuSection {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenuCategory {
  name: string;
  sections: MegaMenuSection[];
  featured?: {
    title: string;
    description: string;
    link: string;
    image?: string;
  };
}

// Main Navigation Items (Top Level)
export const mainNavigation: NavigationItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/pages/about" },
  { name: "Portfolio", link: "/pages/portfolio" },
  { name: "Blog", link: "/pages/blog" },
  { name: "Resources", link: "/pages/resources" },
];

// Services Mega Menu Configuration
export const servicesMegaMenu: MegaMenuCategory = {
  name: "Services",
  sections: [
    {
      title: "Web Development",
      items: [
        {
          name: "Next.js Development",
          link: "/pages/next-js-development",
          description: "Enterprise-grade Next.js applications",
          icon: "⚛️",
          iconKey: "nextjs",
          badge: "Popular",
        },
        {
          name: "React.js Development",
          link: "/pages/reactjs-development",
          description: "Modern React solutions",
          icon: "⚛️",
          iconKey: "react",
          badge: "Hot",
        },
        {
          name: "Web Development",
          link: "/pages/web-development",
          description: "Custom web applications",
          icon: "🌐",
          iconKey: "world",
        },
        {
          name: "Mumbai Web Development",
          link: "/pages/web-development-mumbai",
          description: "Mumbai's #1 Web Development Company",
          icon: "🏙️",
          iconKey: "city",
          badge: "Mumbai",
        },
        {
          name: "Website Development",
          link: "/pages/website-development",
          description: "Professional websites",
          icon: "💻",
          iconKey: "desktop",
        },
        {
          name: "Business Websites",
          link: "/pages/business-website",
          description: "Complete business solutions",
          icon: "🏢",
          iconKey: "building",
        },
        {
          name: "Website Services",
          link: "/pages/website-services",
          description: "Comprehensive web services",
          icon: "🚀",
          iconKey: "rocket",
        },
      ],
    },
    {
      title: "E-Commerce Solutions",
      items: [
        {
          name: "Shopify Headless Migration",
          link: "/pages/shopify-headless-migration",
          description: "Modern headless commerce",
          icon: "🛒",
          iconKey: "shoppingCart",
          badge: "New",
        },
        {
          name: "Shopify Product Pages",
          link: "/pages/shopify-product-page-customization",
          description: "Custom product experiences",
          icon: "📦",
          iconKey: "package",
        },
        {
          name: "Shopify Store Setup",
          link: "/pages/shopify-store-setup",
          description: "Complete store solutions",
          icon: "🏪",
          iconKey: "store",
        },
      ],
    },
    {
      title: "AI & Automation",
      items: [
        {
          name: "AI Chatbot Development",
          link: "/pages/ai-chatbot-development",
          description: "Intelligent conversational AI",
          icon: "🤖",
          iconKey: "robot",
          badge: "AI",
        },
        {
          name: "AI Voice Agents",
          link: "/pages/ai-voice-agents",
          description: "Advanced voice AI solutions",
          icon: "🎙️",
          iconKey: "microphone",
          badge: "AI",
        },
        {
          name: "WhatsApp Business API",
          link: "/pages/whatsapp-business-api",
          description: "Business automation via WhatsApp",
          icon: "💬",
          iconKey: "whatsapp",
        },
        {
          name: "CRM Solutions",
          link: "/pages/crm",
          description: "Customer relationship management",
          icon: "📊",
          iconKey: "chartBar",
        },
      ],
    },
    {
      title: "Healthcare Solutions",
      items: [
        {
          name: "Healthcare Software Development",
          link: "/pages/healthcare-software-development",
          description: "HIPAA-compliant healthcare solutions",
          icon: "🏥",
          iconKey: "hospital",
          badge: "New",
        },
      ],
    },
    {
      title: "Trading & Finance",
      items: [
        {
          name: "Trading Software for Brokers",
          link: "/pages/trading-software",
          description: "Enterprise trading platform",
          icon: "📊",
          iconKey: "chartLine",
          badge: "New",
        },
        {
          name: "Live Market Data API",
          link: "/pages/nse-mcx-live-market-data",
          description: "NSE, BSE, MCX real-time data",
          icon: "📈",
          iconKey: "trendingUp",
          badge: "Live",
        },
      ],
    },
    {
      title: "Google Ads Ecosystem",
      items: [
        {
          name: "Google Ads Ecosystem",
          link: "/pages/google-ads-ecosystem",
          description: "Complete PPC services ecosystem",
          icon: "🎯",
          iconKey: "target",
          badge: "Master",
        },
        {
          name: "Enterprise Google Ads",
          link: "/pages/enterprise-google-ads-management",
          description: "Dedicated team management",
          icon: "🏢",
          iconKey: "building",
          badge: "Tier 1",
        },
        {
          name: "E-commerce Google Ads",
          link: "/pages/ecommerce-google-ads-optimization",
          description: "E-commerce campaign optimization",
          icon: "🛒",
          iconKey: "shoppingCart",
          badge: "Tier 1",
        },
        {
          name: "B2B Lead Generation",
          link: "/pages/b2b-lead-generation-ads",
          description: "High-quality B2B leads",
          icon: "👥",
          iconKey: "users",
          badge: "Tier 1",
        },
        {
          name: "Local Business Google Ads",
          link: "/pages/local-business-google-ads",
          description: "Local-focused campaigns",
          icon: "📍",
          iconKey: "mapPin",
          badge: "Tier 2",
        },
        {
          name: "YouTube Advertising",
          link: "/pages/youtube-advertising-management",
          description: "Video advertising management",
          icon: "📺",
          iconKey: "tv",
          badge: "Tier 2",
        },
        {
          name: "Performance Max Campaigns",
          link: "/pages/performance-max-campaigns",
          description: "AI-powered multi-network campaigns",
          icon: "⚡",
          iconKey: "zap",
          badge: "Tier 2",
        },
        {
          name: "Google Ads Audit",
          link: "/pages/google-ads-audit-strategy",
          description: "Comprehensive audit & strategy",
          icon: "🔍",
          iconKey: "search",
          badge: "Tier 3",
        },
        {
          name: "Landing Page Optimization",
          link: "/pages/landing-page-optimization",
          description: "Conversion-focused landing pages",
          icon: "📄",
          iconKey: "fileText",
          badge: "Tier 3",
        },
      ],
    },
    {
      title: "Marketing & Growth",
      items: [
        {
          name: "Google Ads Management",
          link: "/pages/google-ads-management",
          description: "ROI-focused ad campaigns",
          icon: "📈",
          iconKey: "chartLine",
          badge: "Premium",
        },
        {
          name: "SEO Audit",
          link: "/pages/seo-audit",
          description: "Free SEO analysis & insights",
          icon: "🔍",
          iconKey: "search",
          badge: "Free",
        },
        {
          name: "All Services",
          link: "/pages/services",
          description: "View complete service catalog",
          icon: "📋",
          iconKey: "list",
        },
      ],
    },
  ],
  featured: {
    title: "Featured: Google Ads Ecosystem",
    description: "Master-level Google Ads ecosystem with 8+ specialized services. Enterprise management, e-commerce optimization, B2B lead generation, and more. 98% client retention, 7.2× average ROAS.",
    link: "/pages/google-ads-ecosystem",
  },
};

// Footer Navigation Configuration
export const footerNavigation = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/pages/about", label: "About Us" },
    { href: "/pages/portfolio", label: "Portfolio" },
    { href: "/pages/blog", label: "Blog" },
    { href: "/pages/resources", label: "Resources" },
    { href: "/pages/contact", label: "Contact" },
  ],
  developmentServices: [
    { href: "/pages/next-js-development", label: "Next.js Development" },
    { href: "/pages/reactjs-development", label: "React.js Development" },
    { href: "/pages/web-development", label: "Web Development" },
    { href: "/pages/web-development-mumbai", label: "Mumbai Web Development" },
    { href: "/pages/website-development", label: "Website Development" },
    { href: "/pages/business-website", label: "Business Websites" },
    { href: "/pages/website-services", label: "Website Services" },
    { href: "/pages/healthcare-software-development", label: "Healthcare Software Development" },
  ],
  googleAdsEcosystem: [
    { href: "/pages/google-ads-ecosystem", label: "Google Ads Ecosystem" },
    { href: "/pages/enterprise-google-ads-management", label: "Enterprise Google Ads" },
    { href: "/pages/ecommerce-google-ads-optimization", label: "E-commerce Google Ads" },
    { href: "/pages/b2b-lead-generation-ads", label: "B2B Lead Generation" },
    { href: "/pages/local-business-google-ads", label: "Local Business Google Ads" },
    { href: "/pages/youtube-advertising-management", label: "YouTube Advertising" },
    { href: "/pages/performance-max-campaigns", label: "Performance Max Campaigns" },
    { href: "/pages/google-ads-audit-strategy", label: "Google Ads Audit" },
    { href: "/pages/landing-page-optimization", label: "Landing Page Optimization" },
  ],
  businessSolutions: [
    { href: "/pages/ai-chatbot-development", label: "AI Chatbot Development" },
    { href: "/pages/ai-voice-agents", label: "AI Voice Agents" },
    { href: "/pages/whatsapp-business-api", label: "WhatsApp Business API" },
    { href: "/pages/crm", label: "CRM Solutions" },
    { href: "/pages/healthcare-software-development", label: "Healthcare Software Development" },
    { href: "/pages/google-ads-management", label: "Google Ads Management" },
    { href: "/pages/seo-audit", label: "SEO Audit (Free)" },
  ],
  tradingFinance: [
    { href: "/pages/trading-software", label: "Trading Software for Brokers" },
    { href: "/pages/nse-mcx-live-market-data", label: "Live Market Data API" },
  ],
  ecommerceSolutions: [
    { href: "/pages/shopify-headless-migration", label: "Shopify Headless Migration" },
    { href: "/pages/shopify-product-page-customization", label: "Shopify Product Pages" },
    { href: "/pages/shopify-store-setup", label: "Shopify Store Setup" },
    { href: "/pages/services", label: "All Services" },
  ],
  legal: [
    { href: "/pages/legal/privacy-policy", label: "Privacy Policy" },
    { href: "/pages/legal/terms-of-service", label: "Terms of Service" },
    { href: "/pages/legal/cancellations-refunds", label: "Cancellations & Refunds" },
    { href: "/pages/legal/shipping-policy", label: "Shipping Policy" },
    { href: "/pages/legal/company-info", label: "Company Info" },
    { href: "/sitemap.xml", label: "Sitemap" },
  ],
};

export default {
  mainNavigation,
  servicesMegaMenu,
  footerNavigation,
};
