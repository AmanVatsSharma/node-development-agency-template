"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { mainNavigation, servicesMegaMenu } from "../data/navigation";
import EnhancedMobileMenu from "./EnhancedMobileMenu";
import { ServiceIcon, type ServiceIconKey } from "./ServiceIcon";

// ─── Vedpragya monogram ───────────────────────────────────────────────────────
function VedpragyaMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="30" height="30" rx="8" fill="#0C1B33" />
      <path d="M7 9L15 21L23 9" stroke="#D4870A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 9L15 15.5L19.5 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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

// ─── Mega Menu ────────────────────────────────────────────────────────────────
function MegaMenuDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-full mt-1 z-50" onMouseLeave={onClose}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0F1623] rounded-2xl border border-gray-100 dark:border-[#1E293B] shadow-[0_20px_60px_rgba(12,27,51,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-[#1E293B]">
            {servicesMegaMenu.sections.map((section, idx) => (
              <div key={idx} className="p-5 lg:p-6">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.12em] mb-3">
                  {section.title}
                </p>
                <ul className="space-y-0.5">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.link}
                        onClick={onClose}
                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-colors min-h-[44px]"
                      >
                        <ServiceIcon
                          iconKey={item.iconKey as ServiceIconKey | undefined}
                          emoji={item.icon}
                          size={17}
                          className="text-[#2563EB] dark:text-[#60A5FA] flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-[#0C1B33] dark:group-hover:text-white transition-colors truncate">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="shrink-0 text-[9px] px-1.5 py-0.5 rounded-full bg-[#0C1B33] dark:bg-[#1A3A6C] text-white font-semibold tracking-wide">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Featured panel */}
            {servicesMegaMenu.featured && (
              <div className="p-5 lg:p-6 bg-[#0C1B33] dark:bg-[#060A10]">
                <p className="text-[10px] font-bold text-[#D4870A] uppercase tracking-[0.12em] mb-3">
                  Featured
                </p>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {servicesMegaMenu.featured.title}
                </h3>
                <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                  {servicesMegaMenu.featured.description}
                </p>
                <Link
                  href={servicesMegaMenu.featured.link}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D4870A] hover:bg-[#F59E0B] text-white rounded-lg font-semibold text-sm transition-colors min-h-[44px]"
                >
                  Get Started
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Desktop nav ──────────────────────────────────────────────────────────────
function DesktopNav({ onMegaMenuToggle, isMegaMenuOpen }: { onMegaMenuToggle: () => void; isMegaMenuOpen: boolean }) {
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
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
    // Persist dismissal in sessionStorage
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
      {showAnnouncement && (
        <AnnouncementBar onDismiss={dismissAnnouncement} />
      )}

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
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <VedpragyaMark className="shrink-0 group-hover:scale-105 transition-transform duration-200" />
              <span
                className="font-bold text-[1.05rem] tracking-tight text-[#0C1B33] dark:text-white"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Vedpragya
              </span>
            </Link>

            {/* Desktop nav */}
            <DesktopNav
              onMegaMenuToggle={() => setIsMegaMenuOpen((v) => !v)}
              isMegaMenuOpen={isMegaMenuOpen}
            />

            {/* Right actions */}
            <div className="flex items-center gap-1.5">
              {/* Client login */}
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

              {/* CTA */}
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
