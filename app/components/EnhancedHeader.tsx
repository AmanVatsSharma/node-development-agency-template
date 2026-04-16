"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { mainNavigation } from "../data/navigation";
import EnhancedMobileMenu from "./EnhancedMobileMenu";

// ─── Mega Menu Data ────────────────────────────────────────────────────────────
const megaMenuColumns = [
  {
    title: "Web & Dev",
    items: [
      { name: "Next.js Development", href: "/pages/next-js-development", badge: "Popular" },
      { name: "React.js Development", href: "/pages/reactjs-development", badge: "Hot" },
      { name: "Web Development", href: "/pages/web-development" },
      { name: "Website Development", href: "/pages/website-development" },
      { name: "Mumbai Web Development", href: "/pages/web-development-mumbai", badge: "Mumbai" },
      { name: "Business Websites", href: "/pages/business-website" },
      { name: "Website Services", href: "/pages/website-services" },
    ],
  },
  {
    title: "AI & Automation",
    items: [
      { name: "AI Chatbot Development", href: "/pages/ai-chatbot-development", badge: "AI" },
      { name: "AI Voice Agents", href: "/pages/ai-voice-agents", badge: "New" },
      { name: "WhatsApp Business API", href: "/pages/whatsapp-business-api" },
      { name: "CRM Solutions", href: "/pages/crm" },
    ],
  },
  {
    title: "E-Commerce",
    items: [
      { name: "Shopify Headless Migration", href: "/pages/shopify-headless-migration", badge: "New" },
      { name: "Product Page Customization", href: "/pages/shopify-product-page-customization" },
      { name: "Shopify Store Setup", href: "/pages/shopify-store-setup" },
      { name: "E-Commerce Google Ads", href: "/pages/ecommerce-google-ads-optimization" },
    ],
  },
  {
    title: "Marketing & Ads",
    items: [
      { name: "Google Ads Management", href: "/pages/google-ads-management", badge: "Premium" },
      { name: "Enterprise Google Ads", href: "/pages/enterprise-google-ads-management" },
      { name: "B2B Lead Generation", href: "/pages/b2b-lead-generation-ads" },
      { name: "Local Business Ads", href: "/pages/local-business-google-ads" },
      { name: "Landing Page Optimization", href: "/pages/landing-page-optimization" },
      { name: "SEO Audit", href: "/pages/seo-audit", badge: "Free" },
    ],
  },
  {
    title: "Specialty",
    items: [
      { name: "Trading Software", href: "/pages/trading-software", badge: "New" },
      { name: "Live Market Data API", href: "/pages/nse-mcx-live-market-data", badge: "Live" },
      { name: "Healthcare Software", href: "/pages/healthcare-software-development" },
    ],
  },
];

// ─── Mega Menu Dropdown ───────────────────────────────────────────────────────
function MegaMenuDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full mt-1 z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0B1220] rounded-2xl border border-gray-100 dark:border-[#1E293B] shadow-[0_24px_80px_rgba(12,27,51,0.18)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="grid grid-cols-5 divide-x divide-gray-100 dark:divide-[#1E293B]">
            {megaMenuColumns.map((col) => (
              <div key={col.title} className="p-5">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500 mb-3"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {col.title}
                </p>
                <ul className="space-y-0.5 mb-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-colors min-h-[36px]"
                      >
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#0C1B33] dark:group-hover:text-white transition-colors leading-tight">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="shrink-0 text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide bg-gray-900 dark:bg-gray-700 text-white">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pages/services"
                  onClick={onClose}
                  className="flex items-center gap-1 px-2.5 text-[10px] font-semibold text-gray-400 dark:text-gray-600 hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
                >
                  See all
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export default function EnhancedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "px-3.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C1B33] dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-all min-h-[44px] flex items-center";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-500 ${isScrolled ? "py-2" : "py-2"}`}>
        <AnimatePresence initial={false}>
          {isScrolled ? (
            /* ── SCROLLED: Floating pill ── */
            <motion.div
              key="pill"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="bg-white/95 dark:bg-[#080C14]/95 backdrop-blur-[24px] border border-gray-200/60 dark:border-white/[0.08] shadow-[0_8px_40px_rgba(12,27,51,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] rounded-2xl px-5">
                <div className="flex items-center justify-between h-14">
                  <Link href="/" className="flex items-center shrink-0 group" aria-label="Vedpragya – Home">
                    <Image
                      src="/logo.png"
                      alt="Vedpragya"
                      width={770}
                      height={459}
                      sizes="140px"
                      className="h-7 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90 dark:brightness-0 dark:invert"
                      priority
                    />
                  </Link>

                  <nav className="hidden lg:flex items-center gap-0.5">
                    {mainNavigation.map((item, idx) => (
                      <Link key={idx} href={item.link} className={navLinkClass}>
                        {item.name}
                      </Link>
                    ))}
                    <div className="relative" onMouseEnter={() => setIsMegaMenuOpen(true)}>
                      <button
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all min-h-[44px] ${
                          isMegaMenuOpen
                            ? "text-[#0C1B33] dark:text-white bg-gray-50 dark:bg-[#151C2B]"
                            : navLinkClass
                        }`}
                      >
                        Services
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </nav>

                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://client.vedpragya.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#151C2B] rounded-lg transition-all min-h-[40px]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      Client Dashboard
                    </a>
                    <Link
                      href="/pages/contact"
                      className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-lg transition-all shadow-[0_2px_8px_rgba(37,99,235,0.30)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.40)] min-h-[40px]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      Start a Project
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen((v) => !v)}
                      className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-[#151C2B] transition-colors"
                      aria-label="Toggle menu"
                    >
                      <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen
                          ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ── TOP: Pure white bar ── */
            <motion.div
              key="white-bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="bg-white dark:bg-[#080C14] border border-gray-100 dark:border-[#1E293B] shadow-[0_2px_20px_rgba(12,27,51,0.08)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.4)] rounded-2xl px-5">
                <div className="flex items-center justify-between h-14 sm:h-[58px]">
                  <Link href="/" className="flex items-center shrink-0 group" aria-label="Vedpragya – Home">
                    <Image
                      src="/logo.png"
                      alt="Vedpragya"
                      width={770}
                      height={459}
                      sizes="140px"
                      className="h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90 dark:brightness-0 dark:invert"
                      priority
                    />
                  </Link>

                  <nav className="hidden lg:flex items-center gap-0.5">
                    {mainNavigation.map((item, idx) => (
                      <Link key={idx} href={item.link} className={navLinkClass}>
                        {item.name}
                      </Link>
                    ))}
                    <div className="relative" onMouseEnter={() => setIsMegaMenuOpen(true)}>
                      <button
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all min-h-[44px] ${
                          isMegaMenuOpen
                            ? "text-[#0C1B33] dark:text-white bg-gray-50 dark:bg-[#151C2B]"
                            : navLinkClass
                        }`}
                      >
                        Services
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </nav>

                  <div className="flex items-center gap-1.5">
                    <a
                      href="https://client.vedpragya.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#151C2B] rounded-lg transition-all min-h-[44px]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      Client Dashboard
                    </a>
                    <Link
                      href="/pages/contact"
                      className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-lg transition-all shadow-[0_2px_8px_rgba(37,99,235,0.30)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.40)] min-h-[44px]"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      Start a Project
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen((v) => !v)}
                      className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-[#151C2B] transition-colors"
                      aria-label="Toggle menu"
                    >
                      <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen
                          ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        }
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mega menu */}
      <MegaMenuDropdown isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <EnhancedMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
