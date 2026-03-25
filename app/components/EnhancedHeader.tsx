"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { mainNavigation, servicesMegaMenu } from "../data/navigation";
import EnhancedMobileMenu from "./EnhancedMobileMenu";
import { ServiceIcon, type ServiceIconKey } from "./ServiceIcon";

// Vedpragya monogram SVG mark
function VedpragyaMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="7" fill="#0C1B33" />
      <path
        d="M7 8L14 20L21 8"
        stroke="#D4870A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8L14 14L18 8"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Mega menu dropdown
function MegaMenuDropdown({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full mt-1 z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0F1623] rounded-2xl border border-gray-100 dark:border-[#1E293B] shadow-[0_20px_60px_rgba(12,27,51,0.15)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-[#1E293B]">
            {servicesMegaMenu.sections.map((section, idx) => (
              <div key={idx} className="p-6">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.12em] mb-4">
                  {section.title}
                </p>
                <ul className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.link}
                        onClick={onClose}
                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-colors"
                      >
                        <ServiceIcon
                          iconKey={item.iconKey as ServiceIconKey | undefined}
                          emoji={item.icon}
                          size={18}
                          className="text-[#2563EB] dark:text-[#60A5FA] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
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

            {/* Featured CTA panel */}
            {servicesMegaMenu.featured && (
              <div className="p-6 bg-[#0C1B33] dark:bg-[#080C14]">
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D4870A] hover:bg-[#F59E0B] text-white rounded-lg font-semibold text-sm transition-colors"
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

// Desktop navigation
function DesktopNav({
  onMegaMenuToggle,
  isMegaMenuOpen,
}: {
  onMegaMenuToggle: () => void;
  isMegaMenuOpen: boolean;
}) {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {mainNavigation.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="relative px-3.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#0C1B33] dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-[#151C2B] transition-all"
        >
          {item.name}
        </Link>
      ))}

      {/* Services mega menu trigger */}
      <div className="relative" onMouseEnter={onMegaMenuToggle}>
        <button
          className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
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

export default function EnhancedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Main header bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#080C14]/95 backdrop-blur-md border-b border-gray-100 dark:border-[#1E293B] shadow-sm"
            : "bg-white/90 dark:bg-[#080C14]/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <VedpragyaMark className="shrink-0" />
              <span
                className="font-display font-bold text-[1.05rem] tracking-tight text-[#0C1B33] dark:text-white"
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
            <div className="flex items-center gap-2">
              {/* Client login — desktop only */}
              <a
                href="https://client.vedpragya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#0C1B33] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#151C2B] rounded-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden xl:inline">Client Login</span>
              </a>

              <ThemeToggle />

              {/* CTA — desktop */}
              <Link
                href="/pages/contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 bg-[#0C1B33] dark:bg-[#1A3A6C] hover:bg-[#1A3A6C] dark:hover:bg-[#2563EB] text-white font-semibold text-sm rounded-lg transition-all shadow-sm hover:shadow-md"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Start a Project
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 dark:hover:bg-[#151C2B] transition-colors"
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
      <MegaMenuDropdown
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <EnhancedMobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
