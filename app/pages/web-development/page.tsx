import type { Metadata } from "next";
import React from "react";
import { SectionErrorBoundary } from "@/app/components/common/SectionErrorBoundary";
import { RelatedBlogPosts } from "@/app/components/RelatedBlogPosts";
import { RelatedServicesStrip } from "@/app/components/RelatedServicesStrip";
import { FAQStructuredData } from "@/app/components/SEO/StructuredData";
import { HeroSection as WDHero } from "@/app/pages/website-development/_components/hero-section";
import { ServicesGridSection } from "@/app/pages/web-development/_components/services-grid-section";
import { ServicesSection as WDServices } from "@/app/pages/website-development/_components/services-section";
import { PortfolioSection as WDPortfolio } from "@/app/pages/website-development/_components/portfolio-section";
import { TestimonialsSection as WDTestimonials } from "@/app/pages/website-development/_components/testimonials-section";
import { PricingSection } from "@/app/pages/web-development/_components/pricing-section";
import { FAQSection as WDFAQ } from "@/app/pages/website-development/_components/faq-section";
import { AnimatedBannerCta as WDBannerCta } from "@/app/pages/website-development/_components/animated-banner-cta";
import { ContactSection as WDContact } from "@/app/pages/website-development/_components/contact-section";

export const metadata: Metadata = {
  title: 'Web Development Company India | Custom Websites & Web Apps — Vedpragya',
  description: 'Vedpragya is a web development company in India specialising in Next.js, React, Node.js, SaaS apps, e-commerce, and enterprise web solutions. 500+ projects delivered. Free consultation in 24 h.',
  keywords: 'web development company india, web development services, hire web developer india, next.js development, react development, node.js development, custom web app development, saas development india, web development agency',
  alternates: {
    canonical: '/pages/web-development',
  },
  openGraph: {
    title: 'Web Development Company India | Vedpragya',
    description: 'Custom websites, web apps, SaaS platforms, and e-commerce solutions — enterprise-grade web development from India. 500+ projects delivered.',
    url: 'https://vedpragya.com/pages/web-development',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company India | Vedpragya',
    description: 'Custom websites, web apps, SaaS platforms, and e-commerce — 500+ projects delivered from India.',
  },
};

const faqQuestions = [
  {
    question: "What services does your web development agency offer?",
    answer: "We offer a comprehensive range of web development services including custom website design, e-commerce development, web application development, CMS implementation, responsive design, UI/UX design, website maintenance, and performance optimization.",
  },
  {
    question: "How long does it typically take to complete a website project?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 1–2 weeks, while more complex projects with custom functionality can take 2–3 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
  },
  {
    question: "What is your pricing structure for web development projects?",
    answer: "Our pricing is project-based and depends on the complexity, features, and timeline. We provide detailed quotes after understanding your requirements, typically with a deposit to begin work and milestone payments throughout the project.",
  },
  {
    question: "Do you provide ongoing support after the website is launched?",
    answer: "Yes, we offer various maintenance and support packages to keep your website secure, updated, and performing optimally — including regular updates, security monitoring, content updates, performance optimisation, and technical support.",
  },
];

function WebDevelopmentPage() {
  return (
    <>
      <FAQStructuredData questions={faqQuestions} />

      {/* Hero */}
      <SectionErrorBoundary name="Hero">
        <WDHero />
      </SectionErrorBoundary>

      {/* Services Grid (icons-first, compressed info) */}
      <SectionErrorBoundary name="ServicesGrid">
        <ServicesGridSection />
      </SectionErrorBoundary>

      {/* Extended Services (bento) */}
      <SectionErrorBoundary name="Services">
        <WDServices />
      </SectionErrorBoundary>

      {/* Portfolio / Case Studies */}
      <SectionErrorBoundary name="Portfolio">
        <WDPortfolio />
      </SectionErrorBoundary>

      {/* Testimonials */}
      <SectionErrorBoundary name="Testimonials">
        <WDTestimonials />
      </SectionErrorBoundary>

      {/* Pricing */}
      <SectionErrorBoundary name="Pricing">
        <PricingSection />
      </SectionErrorBoundary>

      {/* FAQ */}
      <SectionErrorBoundary name="FAQ">
        <WDFAQ />
      </SectionErrorBoundary>

      {/* CTA Banner */}
      <SectionErrorBoundary name="BannerCTA">
        <WDBannerCta />
      </SectionErrorBoundary>

      {/* Contact */}
      <SectionErrorBoundary name="Contact">
        <WDContact />
      </SectionErrorBoundary>

      {/* Related blog posts — internal linking to topical content */}
      <RelatedBlogPosts category="web-development" />

      {/* Related services — internal linking */}
      <RelatedServicesStrip
        heading="Explore related services"
        services={[
          { label: 'SaaS Website Design', href: '/pages/saas-website-design' },
          { label: 'Next.js Development', href: '/pages/next-js-development' },
          { label: 'ReactJS Development', href: '/pages/reactjs-development' },
          { label: 'Node.js Development', href: '/pages/nodejs-development' },
          { label: 'Shopify Store Setup', href: '/pages/shopify-store-setup' },
          { label: 'AI Chatbot Development', href: '/pages/ai-chatbot-development' },
        ]}
      />
    </>
  );
}

export default WebDevelopmentPage;
