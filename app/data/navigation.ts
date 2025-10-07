/**
 * Navigation Data Configuration
 * Centralized navigation structure for mega menu, mobile menu, and footer
 */

export interface NavigationItem {
  name: string;
  link: string;
  description?: string;
  icon?: string;
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
          badge: "Popular",
        },
        {
          name: "React.js Development",
          link: "/pages/reactjs-development",
          description: "Modern React solutions",
          icon: "⚛️",
          badge: "Hot",
        },
        {
          name: "Web Development",
          link: "/pages/web-development",
          description: "Custom web applications",
          icon: "🌐",
        },
        {
          name: "Website Development",
          link: "/pages/website-development",
          description: "Professional websites",
          icon: "💻",
        },
        {
          name: "Business Websites",
          link: "/pages/business-website",
          description: "Complete business solutions",
          icon: "🏢",
        },
        {
          name: "Website Services",
          link: "/pages/website-services",
          description: "Comprehensive web services",
          icon: "🚀",
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
          badge: "New",
        },
        {
          name: "Shopify Product Pages",
          link: "/pages/shopify-product-page-customization",
          description: "Custom product experiences",
          icon: "📦",
        },
        {
          name: "Shopify Store Setup",
          link: "/pages/shopify-store-setup",
          description: "Complete store solutions",
          icon: "🏪",
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
          badge: "AI",
        },
        {
          name: "AI Voice Agents",
          link: "/pages/ai-voice-agents",
          description: "Advanced voice AI solutions",
          icon: "🎙️",
          badge: "AI",
        },
        {
          name: "WhatsApp Business API",
          link: "/pages/whatsapp-business-api",
          description: "Business automation via WhatsApp",
          icon: "💬",
        },
        {
          name: "CRM Solutions",
          link: "/pages/crm",
          description: "Customer relationship management",
          icon: "📊",
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
          badge: "Premium",
        },
        {
          name: "SEO Audit",
          link: "/pages/seo-audit",
          description: "Free SEO analysis & insights",
          icon: "🔍",
          badge: "Free",
        },
        {
          name: "All Services",
          link: "/pages/services",
          description: "View complete service catalog",
          icon: "📋",
        },
      ],
    },
  ],
  featured: {
    title: "🌟 Featured: AI Voice Agents",
    description: "Transform customer engagement with cutting-edge AI voice technology. Automate calls, support, and sales with natural conversations.",
    link: "/pages/ai-voice-agents",
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
    { href: "/pages/website-development", label: "Website Development" },
    { href: "/pages/business-website", label: "Business Websites" },
    { href: "/pages/website-services", label: "Website Services" },
  ],
  businessSolutions: [
    { href: "/pages/ai-chatbot-development", label: "AI Chatbot Development" },
    { href: "/pages/ai-voice-agents", label: "AI Voice Agents" },
    { href: "/pages/whatsapp-business-api", label: "WhatsApp Business API" },
    { href: "/pages/crm", label: "CRM Solutions" },
    { href: "/pages/google-ads-management", label: "Google Ads Management" },
    { href: "/pages/seo-audit", label: "SEO Audit (Free)" },
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
    { href: "/pages/legal/company-info", label: "Company Info" },
    { href: "/sitemap", label: "Sitemap" },
  ],
};

export default {
  mainNavigation,
  servicesMegaMenu,
  footerNavigation,
};
