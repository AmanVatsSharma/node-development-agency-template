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
      title: "Development Services",
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
      ],
    },
    {
      title: "Business Solutions",
      items: [
        {
          name: "Business Websites",
          link: "/pages/business-website",
          description: "Complete business solutions",
          icon: "🏢",
          badge: "Premium",
        },
        {
          name: "Website Services",
          link: "/pages/website-services",
          description: "Comprehensive web services",
          icon: "🚀",
        },
        {
          name: "All Services",
          link: "/pages/services",
          description: "View all our services",
          icon: "📋",
        },
      ],
    },
    {
      title: "Marketing & SEO",
      items: [
        {
          name: "SEO Audit",
          link: "/pages/seo-audit",
          description: "Free SEO analysis",
          icon: "🔍",
          badge: "Free",
        },
      ],
    },
  ],
  featured: {
    title: "🌟 Featured Service",
    description: "Get a comprehensive SEO audit for your website - completely free! Discover optimization opportunities.",
    link: "/pages/seo-audit",
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
  ],
  businessSolutions: [
    { href: "/pages/business-website", label: "Business Websites" },
    { href: "/pages/website-services", label: "Website Services" },
    { href: "/pages/services", label: "All Services" },
    { href: "/pages/seo-audit", label: "SEO Audit (Free)" },
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
