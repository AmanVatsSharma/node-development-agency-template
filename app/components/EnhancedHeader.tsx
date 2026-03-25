"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { mainNavigation } from "../data/navigation";
import EnhancedMobileMenu from "./EnhancedMobileMenu";

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="vp-announcement-bar">
      <Link
        href="/pages/ai-voice-agents"
        className="flex items-center gap-2 group min-h-[44px] py-0"
        aria-label="Learn about AI Voice Agents"
      >
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#D4870A]/20 border border-[#D4870A]/30 text-[#D4870A] text-[10px] font-bold uppercase tracking-widest shrink-0">
          New
        </span>
        <span className="text-white/90 text-xs sm:text-sm font-medium truncate">
          Vedpragya now offers AI Voice Agents — 10× your call capacity
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 text-[#D4870A] text-xs font-bold shrink-0 group-hover:gap-2 transition-all">
          Learn more
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </Link>
      <button
        onClick={onDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-lg hover:bg-white/10 transition-colors shrink-0"
        aria-label="Dismiss announcement"
      >
        <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

// ─── Mega Menu Data (consolidated from 7 → 5 service columns) ────────────────
const megaMenuColumns = [
  {
    title: "Web & Dev",
    accent: "#2563EB",
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
    accent: "#D97706",
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

          {/* Service columns + featured — single row, everything visible */}
          <div className="grid grid-cols-6 divide-x divide-gray-100 dark:divide-[#1E293B]">

            {/* 5 service columns */}
            {megaMenuColumns.map((col) => (
              <div key={col.title} className="p-5">
                {/* Column header */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: col.accent }}
                  />
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {col.title}
                  </p>
                </div>

                {/* Items — no descriptions, just name + optional badge */}
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
                          <span
                            className="shrink-0 text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide text-white"
                            style={{ backgroundColor: col.accent }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* "See all" footer link */}
                <Link
                  href="/pages/services"
                  onClick={onClose}
                  className="flex items-center gap-1 px-2.5 text-[10px] font-semibold text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  style={{ color: col.accent + "99" }}
                >
                  See all
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}

            {/* Featured panel — navy bg */}
            <div className="p-5 bg-[#0C1B33] dark:bg-[#060A10]">
              <p className="text-[10px] font-bold text-[#D4870A] uppercase tracking-[0.14em] mb-3"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                Featured
              </p>
              <div className="mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4870A]/20 border border-[#D4870A]/30 flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-[#D4870A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3
                  className="text-sm font-bold text-white mb-1.5 leading-snug"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Google Ads Ecosystem
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-1">
                  8+ specialized services. 98% client retention. 7.2× avg ROAS.
                </p>
              </div>
              <Link
                href="/pages/google-ads-ecosystem"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#D4870A] hover:bg-[#F59E0B] text-white rounded-lg font-semibold text-xs transition-colors min-h-[36px]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Get Started
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom strip — quick access shortcuts */}
          <div className="px-5 py-3 border-t border-gray-100 dark:border-[#1E293B] bg-gray-50/60 dark:bg-[#080C14]/60 flex items-center justify-between">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-[10px] text-gray-400 dark:text-gray-600 mr-2">Also:</span>
              {[
                { label: "Google Ads Ecosystem", href: "/pages/google-ads-ecosystem" },
                { label: "YouTube Advertising", href: "/pages/youtube-advertising-management" },
                { label: "Performance Max", href: "/pages/performance-max-campaigns" },
                { label: "Google Ads Audit", href: "/pages/google-ads-audit-strategy" },
                { label: "All Services →", href: "/pages/services" },
              ].map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  onClick={onClose}
                  className="px-2.5 py-1 text-[10px] font-medium text-gray-500 dark:text-gray-500 hover:text-[#0C1B33] dark:hover:text-white hover:bg-white dark:hover:bg-[#151C2B] rounded-md transition-colors border border-transparent hover:border-gray-200 dark:hover:border-[#1E293B]"
                >
                  {q.label}
                </Link>
              ))}
            </div>
            <Link
              href="/pages/services"
              onClick={onClose}
              className="text-[10px] font-bold text-[#2563EB] dark:text-[#60A5FA] hover:underline shrink-0"
            >
              View all 20+ services →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Desktop nav ──────────────────────────────────────────────────────────────
function DesktopNav({
  onMegaMenuToggle,
  isMegaMenuOpen,
}: {
  onMegaMenuToggle: () => void;
  isMegaMenuOpen: boolean;
}) {
  return (
    <nav className="hidden lg:flex items-center gap-0.5">
      {mainNavigation.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="px-3.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C1B33] dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-all min-h-[44px] flex items-center"
        >
          {item.name}
        </Link>
      ))}

      {/* Services trigger */}
      <div className="relative" onMouseEnter={onMegaMenuToggle}>
        <button
          className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all min-h-[44px] ${
            isMegaMenuOpen
              ? "text-[#0C1B33] dark:text-white bg-gray-50 dark:bg-[#151C2B]"
              : "text-gray-600 dark:text-gray-300 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#151C2B]"
          }`}
        >
          Services
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export default function EnhancedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("vp-announce-dismissed");
    if (dismissed) setShowAnnouncement(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
    sessionStorage.setItem("vp-announce-dismissed", "1");
  };

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      {showAnnouncement && <AnnouncementBar onDismiss={dismissAnnouncement} />}

      {/* Main nav bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#080C14]/95 backdrop-blur-[18px] [backdrop-filter:saturate(180%)_blur(18px)] border-b border-gray-100 dark:border-[#1E293B] shadow-[0_1px_20px_rgba(12,27,51,0.07)] dark:shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
            : "bg-white/85 dark:bg-[#080C14]/85 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 group" aria-label="Vedpragya – Home">
              <Image
                src="/logo.png"
                alt="Vedpragya"
                width={770}
                height={459}
                className="h-8 sm:h-9 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200 dark:brightness-0 dark:invert"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <DesktopNav
              onMegaMenuToggle={() => setIsMegaMenuOpen((v) => !v)}
              isMegaMenuOpen={isMegaMenuOpen}
            />

            {/* Right actions */}
            <div className="flex items-center gap-1.5">
              <a
                href="https://client.vedpragya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#151C2B] rounded-lg transition-all min-h-[44px]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden xl:inline">Client Login</span>
              </a>

              <ThemeToggle />

              <Link
                href="/pages/contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-[#0C1B33] dark:bg-[#1A3A6C] hover:bg-[#1A3A6C] dark:hover:bg-[#2563EB] text-white font-semibold text-sm rounded-lg transition-all shadow-sm hover:shadow-md min-h-[44px]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Start a Project
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-[#151C2B] transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
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
