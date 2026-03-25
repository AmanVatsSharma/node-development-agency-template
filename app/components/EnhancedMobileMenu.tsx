"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { mainNavigation } from "../data/navigation";

// All 29 service links in 5 categories — matching the desktop mega menu
const mobileServiceCategories = [
  {
    title: "Web & Dev",
    accent: "#2563EB",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-900/40",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
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
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-950/20",
    borderColor: "border-violet-200 dark:border-violet-900/40",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
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
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-900/40",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
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
    bgLight: "bg-rose-50",
    bgDark: "dark:bg-rose-950/20",
    borderColor: "border-rose-200 dark:border-rose-900/40",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
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
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/20",
    borderColor: "border-amber-200 dark:border-amber-900/40",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    items: [
      { name: "Trading Software", href: "/pages/trading-software" },
      { name: "Live Market Data API", href: "/pages/nse-mcx-live-market-data" },
      { name: "Healthcare Software", href: "/pages/healthcare-software-development" },
    ],
  },
];

// Nav page items with icons
const navIcons: Record<string, JSX.Element> = {
  Home: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  About: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Portfolio: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Blog: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
    </svg>
  ),
  Resources: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
};

interface EnhancedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedMobileMenu({ isOpen, onClose }: EnhancedMobileMenuProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
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
        transition={{ duration: 0.18 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <motion.div
        ref={menuRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 240, mass: 0.75 }}
        className="fixed right-0 top-0 h-full w-full sm:w-[22rem] z-50 flex flex-col overflow-hidden"
        style={{ boxShadow: "-24px 0 80px rgba(0,0,0,0.35)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Inner surface — subtle gradient */}
        <div className="absolute inset-0 bg-white dark:bg-[#080C14]" />
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 60%)",
          }}
        />

        {/* ── Header ── */}
        <div className="relative z-10 flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-[#1E293B] shrink-0">
          <Link href="/" onClick={onClose} aria-label="Vedpragya – Home">
            <Image
              src="/logo.png"
              alt="Vedpragya"
              width={770}
              height={459}
              className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 dark:bg-[#151C2B] hover:bg-gray-200 dark:hover:bg-[#1E293B] transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="relative z-10 flex-1 overflow-y-auto overscroll-contain">

          {/* ── Main nav pages ── */}
          <div className="px-4 pt-5 pb-3">
            <p
              className="text-[9px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.16em] px-2 mb-2"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {mainNavigation.map((item, idx) => (
                <motion.div
                  key={item.link}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.link}
                    onClick={onClose}
                    className="flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#0C1B33] dark:hover:text-white bg-gray-50 dark:bg-[#0F1623] hover:bg-gray-100 dark:hover:bg-[#151C2B] border border-gray-100 dark:border-[#1E293B] transition-all min-h-[48px]"
                  >
                    <span className="text-gray-400 dark:text-gray-500 shrink-0">
                      {navIcons[item.name]}
                    </span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="mx-5 my-2 border-t border-gray-100 dark:border-[#1E293B]" />

          {/* ── Services accordion ── */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between px-2 mb-3">
              <p
                className="text-[9px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.16em]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Services
              </p>
              <span className="text-[9px] text-gray-400 dark:text-gray-600 font-medium">
                29 services · 5 areas
              </span>
            </div>

            <div className="space-y-1.5">
              {mobileServiceCategories.map((cat, catIdx) => {
                const expanded = openCategory === cat.title;
                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + catIdx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-xl overflow-hidden border border-gray-100 dark:border-[#1E293B]"
                  >
                    {/* Category header button */}
                    <button
                      onClick={() => toggleCategory(cat.title)}
                      className={`w-full flex items-center justify-between px-3.5 py-3 transition-colors min-h-[52px] ${
                        expanded
                          ? `${cat.bgLight} ${cat.bgDark} ${cat.borderColor}`
                          : "bg-white dark:bg-[#0F1623] hover:bg-gray-50 dark:hover:bg-[#151C2B]"
                      }`}
                      aria-expanded={expanded}
                    >
                      <div className="flex items-center gap-3">
                        {/* Category icon with accent bg */}
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: expanded ? cat.accent : "transparent",
                            border: `1.5px solid ${cat.accent}${expanded ? "FF" : "55"}`,
                            color: expanded ? "#fff" : cat.accent,
                            transition: "all 0.2s ease",
                          }}
                        >
                          {cat.icon}
                        </div>
                        <div className="text-left">
                          <span
                            className={`block text-sm font-semibold transition-colors ${
                              expanded ? "text-[#0C1B33] dark:text-white" : "text-gray-700 dark:text-gray-300"
                            }`}
                            style={{ fontFamily: "var(--font-sora), sans-serif" }}
                          >
                            {cat.title}
                          </span>
                          <span className="block text-[10px] text-gray-400 dark:text-gray-600">
                            {cat.items.length} services
                          </span>
                        </div>
                      </div>

                      {/* Chevron */}
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors"
                        style={{
                          backgroundColor: expanded ? `${cat.accent}22` : "transparent",
                          color: expanded ? cat.accent : "#9CA3AF",
                        }}
                      >
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Expanded items */}
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-3 pb-3 pt-1 border-t"
                            style={{ borderColor: `${cat.accent}22` }}
                          >
                            {cat.items.map((item, itemIdx) => (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -4 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIdx * 0.03 }}
                              >
                                <Link
                                  href={item.href}
                                  onClick={onClose}
                                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-[#0C1B33] dark:hover:text-white hover:bg-white dark:hover:bg-[#151C2B] transition-all min-h-[40px] group"
                                >
                                  <div className="flex items-center gap-2">
                                    <span
                                      className="w-1 h-1 rounded-full shrink-0 opacity-60"
                                      style={{ backgroundColor: cat.accent }}
                                    />
                                    <span className="group-hover:translate-x-0.5 transition-transform">
                                      {item.name}
                                    </span>
                                  </div>
                                  {"badge" in item && item.badge && (
                                    <span
                                      className="shrink-0 text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide text-white ml-2"
                                      style={{ backgroundColor: cat.accent }}
                                    >
                                      {item.badge}
                                    </span>
                                  )}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* View all services */}
            <Link
              href="/pages/services"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full mt-3 px-4 py-3 rounded-xl border border-[#2563EB]/25 dark:border-[#2563EB]/20 bg-blue-50/60 dark:bg-[#0C1B33]/40 text-sm font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:bg-blue-100/60 dark:hover:bg-[#1A3A6C]/30 transition-all min-h-[48px]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
              </svg>
              View all 20+ services
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* ── Divider ── */}
          <div className="mx-5 my-1 border-t border-gray-100 dark:border-[#1E293B]" />

          {/* ── Client login ── */}
          <div className="px-4 py-3">
            <a
              href="https://client.vedpragya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#151C2B] border border-transparent hover:border-gray-100 dark:hover:border-[#1E293B] transition-all min-h-[48px]"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-[#151C2B] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm leading-tight">
                  Client Login
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-600">
                  client.vedpragya.com
                </p>
              </div>
              <svg className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Sticky footer CTA ── */}
        <div className="relative z-10 px-4 py-4 border-t border-gray-100 dark:border-[#1E293B] shrink-0 bg-white dark:bg-[#080C14]">
          {/* Trust micro-strip */}
          <div className="flex items-center justify-center gap-4 mb-3">
            {["500+ Projects", "200+ Clients", "5 Offices"].map((t) => (
              <span key={t} className="text-[9px] text-gray-400 dark:text-gray-600 font-medium">
                {t}
              </span>
            ))}
          </div>
          <Link
            href="/pages/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#0C1B33] dark:bg-[#1A3A6C] hover:bg-[#1A3A6C] dark:hover:bg-[#2563EB] text-white font-bold text-sm rounded-xl transition-all min-h-[52px] shadow-[0_4px_16px_rgba(12,27,51,0.25)]"
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
