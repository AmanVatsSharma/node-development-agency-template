'use client';

/**
 * @fileoverview Enterprise-Grade Mobile-First Footer Component
 * @description Premium, modern footer with perfect mobile responsiveness
 * @author Development Agency
 * @version 3.0.0
 * 
 * DESIGN FEATURES:
 * - Mobile-first responsive design
 * - Collapsible sections on mobile for better UX
 * - Modern gradient backgrounds with glass morphism
 * - Touch-friendly interface (44px+ touch targets)
 * - Back to top button for mobile users
 * - Smooth animations and transitions
 * - Enterprise-grade professional aesthetics
 * 
 * RESPONSIVENESS:
 * - Mobile (< 640px): Single column, collapsible sections
 * - Tablet (640-1024px): Two columns with balanced layout
 * - Desktop (> 1024px): Full multi-column layout
 * 
 * ACCESSIBILITY:
 * - ARIA labels for all interactive elements
 * - Keyboard navigation support
 * - Screen reader friendly
 * - High contrast ratios
 */

import Link from "next/link";
import { useState, useEffect } from "react";
import NewsletterSignup from "./NewsletterSignup";

console.log('[Footer] Component loaded');

// Collapsible section for mobile
interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  console.log(`[Footer-CollapsibleSection] ${title} - isOpen:`, isOpen);

  return (
    <div className="border-b border-gray-800 md:border-none">
      {/* Mobile: Collapsible header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 md:cursor-default"
        aria-expanded={isOpen}
        aria-label={`Toggle ${title} section`}
      >
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 md:hidden ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content - collapsible on mobile, always visible on desktop */}
      <div
        className={`overflow-hidden transition-all duration-300 md:block ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-full'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  console.log('[Footer] Rendering footer');

  // Back to top button visibility logic
  useEffect(() => {
    console.log('[Footer] Setting up scroll listener');
    
    const handleScroll = () => {
      const shouldShow = window.scrollY > 500;
      if (shouldShow !== showBackToTop) {
        setShowBackToTop(shouldShow);
        console.log('[Footer] Back to top visibility:', shouldShow);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      console.log('[Footer] Cleanup scroll listener');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showBackToTop]);

  // Smooth scroll to top
  const scrollToTop = () => {
    console.log('[Footer] Scrolling to top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Company Info - Spans full width on mobile, 2 cols on large screens */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="mb-6">
              <Link href="/" className="inline-block group">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Enterprise<span className="text-white">Hero</span>
                </span>
                <div className="text-xs text-gray-400 mt-2 font-medium tracking-wide">
                  Vedpragya Bharat Private Limited
                </div>
              </Link>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Global enterprise-grade Node.js development and 3D solutions. Serving Fortune 500 companies across 6 countries with innovation and excellence.
            </p>
            
            {/* Company Legal Info - Compact on mobile */}
            <div className="space-y-2 mb-6 text-xs sm:text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-blue-400 font-semibold min-w-[40px]">CIN:</span>
                <span className="text-gray-400">U47912HR2025PTC131357</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-400 font-semibold min-w-[40px]">GST:</span>
                <span className="text-gray-400">06AALCV0051A1ZV</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-blue-400 font-semibold min-w-[40px]">REG:</span>
                <span className="text-gray-400">Haryana, India</span>
              </div>
            </div>

            {/* Social Media Icons - Large touch targets */}
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { name: 'Instagram', path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                { name: 'Twitter', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                { name: 'GitHub', path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                { name: 'YouTube', path: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-sm border border-gray-700/50 hover:border-transparent hover:scale-110 group"
                  aria-label={`Follow us on ${social.name}`}
                  onClick={() => console.log(`[Footer] ${social.name} clicked`)}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-2">
            <CollapsibleSection title="Quick Links">
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/pages/about', label: 'About Us' },
                  { href: '/pages/services', label: 'Services' },
                  { href: '/pages/portfolio', label: 'Portfolio' },
                  { href: '/pages/blog', label: 'Blog' },
                  { href: '/pages/resources', label: 'Resources' },
                  { href: '/pages/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm inline-flex items-center group"
                      onClick={() => console.log(`[Footer] Link clicked: ${link.label}`)}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleSection>
          </div>

          {/* Services */}
          <div className="sm:col-span-1 lg:col-span-2">
            <CollapsibleSection title="Our Services">
              <ul className="space-y-3">
                {[
                  'Node.js Development',
                  '3D Animations',
                  'Microservices Architecture',
                  'API Development',
                  'Enterprise Solutions',
                  'Technical Consulting',
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/pages/services"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm inline-flex items-center group"
                      onClick={() => console.log(`[Footer] Service clicked: ${service}`)}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleSection>
          </div>

          {/* Global Offices - Compact cards on mobile */}
          <div className="sm:col-span-2 lg:col-span-2">
            <CollapsibleSection title="Global Offices">
              <div className="space-y-4">
                {[
                  { flag: '🇮🇳', name: 'India (HQ)', location: 'Gurugram, Noida, Bangalore', tag: 'Headquarters' },
                  { flag: '🇦🇪', name: 'Dubai', location: 'Middle East Operations', tag: 'Regional Hub' },
                  { flag: '🇺🇸', name: 'California', location: 'Tech R&D', tag: 'Innovation' },
                  { flag: '🇨🇦', name: 'Toronto', location: 'North America Ops', tag: 'Canada Office' },
                  { flag: '🇨🇳', name: 'Shenzhen', location: 'Asia-Pacific', tag: 'APAC Center' },
                ].map((office) => (
                  <div
                    key={office.name}
                    className="group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-700/50"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl" role="img" aria-label={office.name}>
                        {office.flag}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-gray-300 font-semibold text-sm mb-1">
                          {office.name}
                        </div>
                        <div className="text-xs text-gray-500 leading-relaxed">
                          {office.location}
                        </div>
                        <span className="inline-block mt-1 text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                          {office.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>

          {/* Newsletter - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="lg:sticky lg:top-4">
              <NewsletterSignup />
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          {/* Powered By Section */}
          <div className="text-center mb-8 space-y-2">
            <p className="text-sm text-gray-500">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Enterprise<span className="text-white">Hero</span>
              </span>
              <span className="text-gray-500 mx-2 text-xs">powered by</span>
              <span className="text-lg font-bold text-white">VB</span>
            </p>
            <p className="text-xs text-gray-600">
              Vedpragya Bharat Private Limited
            </p>
          </div>

          {/* Copyright and Links - Stacked on mobile */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-center lg:text-left">
            <div className="text-gray-500 text-xs sm:text-sm space-y-2">
              <p>
                &copy; {currentYear} Vedpragya Bharat Private Limited (EnterpriseHero). All rights reserved.
              </p>
              <p className="text-[10px] sm:text-xs">
                CIN: U47912HR2025PTC131357 | GST: 06AALCV0051A1ZV | Registered in Haryana, India
              </p>
            </div>

            {/* Legal Links - Wrap on mobile */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-6">
              {[
                { href: '/legal/privacy-policy', label: 'Privacy' },
                { href: '/legal/terms-of-service', label: 'Terms' },
                { href: '/legal/company-info', label: 'Company' },
                { href: '/sitemap', label: 'Sitemap' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-200 hover:underline underline-offset-4"
                  onClick={() => console.log(`[Footer] Legal link clicked: ${link.label}`)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Fixed position, only visible on scroll */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
} 