"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { mainNavigation } from "../data/navigation";

// Same 5-category structure as the desktop mega menu — all 29 links present
const mobileServiceCategories = [
  {
    title: "Web & Dev",
    accent: "#2563EB",
    items: [
      { name: "Next.js Development", href: "/pages/next-js-development", badge: "Popular" },
      { name: "React.js Development", href: "/pages/reactjs-development", badge: "Hot" },
      { name: "Web Development", href: "/pages/web-development" },
      { name: "Website Development", href: "/pages/website-development" },
      { name: "Mumbai Web Development", href: "/pages/web-development-mumbai" },
      { name: "Business Websites", href: "/pages/business-website" },
      { name: "Website Services", href: "/pages/website-services" },
    ],
  },
  {
    title: "AI & Automation",
    accent: "#7C3AED",
    items: [
      { name: "AI Chatbot Development", href: "/pages/ai-chatbot-development", badge: "AI" },
      { name: "AI Voice Agents", href: "/pages/ai-voice-agents", badge: "New" },
      { name: "WhatsApp Business API", href: "/pages/whatsapp-business-api" },
      { name: "CRM Solutions", href: "/pages/crm" },
    ],
  },
  {
    title: "E-Commerce",
    accent: "#059669",
    items: [
      { name: "Shopify Headless Migration", href: "/pages/shopify-headless-migration", badge: "New" },
      { name: "Product Page Customization", href: "/pages/shopify-product-page-customization" },
      { name: "Shopify Store Setup", href: "/pages/shopify-store-setup" },
      { name: "E-Commerce Google Ads", href: "/pages/ecommerce-google-ads-optimization" },
    ],
  },
  {
    title: "Marketing & Ads",
    accent: "#DC2626",
    items: [
      { name: "Google Ads Ecosystem", href: "/pages/google-ads-ecosystem", badge: "Master" },
      { name: "Google Ads Management", href: "/pages/google-ads-management" },
      { name: "Enterprise Google Ads", href: "/pages/enterprise-google-ads-management" },
      { name: "B2B Lead Generation", href: "/pages/b2b-lead-generation-ads" },
      { name: "Local Business Ads", href: "/pages/local-business-google-ads" },
      { name: "YouTube Advertising", href: "/pages/youtube-advertising-management" },
      { name: "Performance Max", href: "/pages/performance-max-campaigns" },
      { name: "Google Ads Audit", href: "/pages/google-ads-audit-strategy" },
      { name: "Landing Page Optimization", href: "/pages/landing-page-optimization" },
      { name: "SEO Audit", href: "/pages/seo-audit", badge: "Free" },
    ],
  },
  {
    title: "Specialty",
    accent: "#D97706",
    items: [
      { name: "Trading Software", href: "/pages/trading-software" },
      { name: "Live Market Data API", href: "/pages/nse-mcx-live-market-data" },
      { name: "Healthcare Software", href: "/pages/healthcare-software-development" },
    ],
  },
];

interface EnhancedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedMobileMenu({ isOpen, onClose }: EnhancedMobileMenuProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Escape key + body scroll lock
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleCategory = (title: string) =>
    setOpenCategory((prev) => (prev === title ? null : title));

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <motion.div
        ref={menuRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 220, mass: 0.8 }}
        className="fixed right-0 top-0 h-full w-full sm:w-[22rem] bg-white dark:bg-[#080C14] z-50 shadow-[−24px_0_80px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-[#1E293B] shrink-0">
          <div className="flex items-center gap-2.5">
            {/* Vedpragya mark */}
            <svg width="26" height="26" viewBox="0 0 30 30" fill="none" aria-hidden="true">
              <rect width="30" height="30" rx="8" fill="#0C1B33" />
              <path d="M7 9L15 21L23 9" stroke="#D4870A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 9L15 15.5L19.5 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="font-bold text-sm text-[#0C1B33] dark:text-white"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Vedpragya
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-[#151C2B] transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">

          {/* Main nav links */}
          <div className="px-3 pt-4 pb-2">
            {mainNavigation.map((item, idx) => (
              <motion.div
                key={item.link}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={item.link}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-all min-h-[44px]"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-5 border-t border-gray-100 dark:border-[#1E293B] my-1" />

          {/* Services — accordion by category */}
          <div className="px-3 pt-2 pb-3">
            <p
              className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.14em] px-3 mb-2"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Services
            </p>

            {mobileServiceCategories.map((cat, catIdx) => {
              const isOpen = openCategory === cat.title;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + catIdx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Category toggle button */}
                  <button
                    onClick={() => toggleCategory(cat.title)}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-colors min-h-[44px] group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: cat.accent }}
                      />
                      <span
                        className="text-sm font-semibold text-[#0C1B33] dark:text-white"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        {cat.title}
                      </span>
                      <span className="text-[10px] text-gray-400 dark:text-gray-600">
                        {cat.items.length}
                      </span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-400 dark:text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanded items */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-1 pb-1 space-y-0.5">
                          {cat.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-all min-h-[40px] group"
                            >
                              <span className="group-hover:translate-x-0.5 transition-transform">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span
                                  className="shrink-0 text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide text-white ml-2"
                                  style={{ backgroundColor: cat.accent }}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* View all services */}
            <Link
              href="/pages/services"
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-3 mt-1 rounded-xl text-sm font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:bg-blue-50 dark:hover:bg-[#151C2B] transition-all min-h-[44px]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
              </svg>
              View all 20+ services
            </Link>
          </div>

          {/* Divider */}
          <div className="mx-5 border-t border-gray-100 dark:border-[#1E293B] my-1" />

          {/* Client login */}
          <div className="px-3 py-2">
            <a
              href="https://client.vedpragya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-all min-h-[44px]"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Client Login
            </a>
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div className="px-5 py-4 border-t border-gray-100 dark:border-[#1E293B] shrink-0">
          <Link
            href="/pages/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#0C1B33] dark:bg-[#1A3A6C] hover:bg-[#1A3A6C] dark:hover:bg-[#2563EB] text-white font-bold text-sm rounded-xl transition-all min-h-[52px]"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
