"use client";
/**
 * Enhanced Header Component with Mega Menu
 * 
 * Modern, scroll-responsive navigation header with glassmorphic design and mega menu
 * Built specifically for Enterprise Hero - Node.js Development Agency
 * 
 * Features:
 * - Beautiful mega menu with categorized services
 * - Scroll-responsive resizing and styling
 * - Glassmorphic effects
 * - Dark mode support with theme toggle
 * - Mobile-responsive design with collapsible sections
 * - Smooth animations
 * - Proper accessibility
 * 
 * @module EnhancedHeader
 * @author Enterprise Hero Development Team
 * @created 2025-10-02
 * @updated 2025-10-06 - Added Mega Menu
 */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./ui/resizable-navbar";
import { mainNavigation, servicesMegaMenu } from "../data/navigation";

// Console log for component initialization
console.log("🎨 [EnhancedHeader] Component module loaded with Mega Menu");

/**
 * Mega Menu Dropdown Component
 */
interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MegaMenuDropdown({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full mt-2 z-50"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden backdrop-blur-xl bg-opacity-95 dark:bg-opacity-95">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 lg:p-8">
            {/* Services Sections */}
            {servicesMegaMenu.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.link}
                        onClick={onClose}
                        className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20 transition-all duration-200"
                      >
                        {item.icon && (
                          <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </span>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
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

            {/* Featured Section */}
            {servicesMegaMenu.featured && (
              <div className="lg:col-span-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-3">
                  {servicesMegaMenu.featured.title}
                </h3>
                <p className="text-sm text-blue-50 mb-4 leading-relaxed">
                  {servicesMegaMenu.featured.description}
                </p>
                <Link
                  href={servicesMegaMenu.featured.link}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105"
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
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

/**
 * Desktop Navigation Items with Mega Menu
 */
function DesktopNavigation({ onMegaMenuToggle, isMegaMenuOpen }: {
  onMegaMenuToggle: () => void;
  isMegaMenuOpen: boolean;
}) {
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {mainNavigation.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all"
        >
          {item.name}
        </Link>
      ))}
      
      {/* Services with Mega Menu */}
      <div
        className="relative"
        onMouseEnter={onMegaMenuToggle}
      >
        <button
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
            isMegaMenuOpen
              ? "text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-neutral-800"
              : "text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-neutral-800"
          }`}
        >
          Services
          <svg
            className={`w-4 h-4 transition-transform ${isMegaMenuOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

/**
 * Enhanced Header Component
 * 
 * Main navigation header with desktop mega menu and mobile views
 * Handles all navigation, theme switching, and responsive behavior
 * 
 * @returns {JSX.Element} Complete navigation header
 */
export default function EnhancedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  // Log component lifecycle
  useEffect(() => {
    console.log("✅ [EnhancedHeader] Component mounted");
    return () => {
      console.log("🔴 [EnhancedHeader] Component unmounted");
    };
  }, []);

  // Log mobile menu state changes
  useEffect(() => {
    console.log(`📱 [EnhancedHeader] Mobile menu ${isMobileMenuOpen ? "opened" : "closed"}`);
  }, [isMobileMenuOpen]);

  // Log mega menu state changes
  useEffect(() => {
    console.log(`🎯 [EnhancedHeader] Mega menu ${isMegaMenuOpen ? "opened" : "closed"}`);
  }, [isMegaMenuOpen]);

  /**
   * Handle mobile menu toggle
   */
  const handleMobileMenuClose = () => {
    console.log("📱 [EnhancedHeader] Closing mobile menu");
    setIsMobileMenuOpen(false);
    setExpandedMobileSection(null);
  };

  /**
   * Handle mega menu toggle
   */
  const handleMegaMenuToggle = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  /**
   * Handle navigation item click
   */
  const handleNavClick = (itemName: string) => {
    console.log(`🔗 [EnhancedHeader] Navigation clicked: ${itemName}`);
  };

  /**
   * Toggle mobile section
   */
  const toggleMobileSection = (sectionTitle: string) => {
    setExpandedMobileSection(expandedMobileSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <div className="relative w-full">
      {/* Desktop Navigation */}
      <Navbar className="pt-4">
        <NavBody>
          {/* Logo Section */}
          <NavbarLogo
            text="Enterprise Hero"
            href="/"
            logoAlt="Enterprise Hero Logo"
          />

          {/* Desktop Navigation Links with Mega Menu */}
          <DesktopNavigation
            onMegaMenuToggle={handleMegaMenuToggle}
            isMegaMenuOpen={isMegaMenuOpen}
          />

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Client Dashboard Login Button */}
            <a
              href="https://client.vedpragya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
              onClick={() => console.log("🔐 [Header] Client Dashboard clicked")}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg>
              <span className="hidden xl:inline">Client Login</span>
            </a>

            {/* Theme Toggle for Desktop */}
            <ThemeToggle />
            
            {/* Contact CTA Button */}
            <Link href="/pages/contact">
              <NavbarButton variant="gradient" as="button">
                Contact Us
              </NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mega Menu Dropdown */}
        <MegaMenuDropdown
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </Navbar>

      {/* Mobile Navigation */}
      <Navbar className="pt-4">
        <MobileNav>
          <MobileNavHeader>
            {/* Mobile Logo */}
            <NavbarLogo
              text="Enterprise Hero"
              href="/"
              logoAlt="Enterprise Hero Logo"
            />

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle for Mobile */}
              <ThemeToggle />
              
              {/* Mobile Menu Toggle */}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          {/* Mobile Menu Dropdown */}
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
          >
            {/* Mobile Navigation Links */}
            {mainNavigation.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => {
                  handleNavClick(item.name);
                  handleMobileMenuClose();
                }}
                className="w-full text-left px-4 py-3 text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
              <button
                onClick={() => toggleMobileSection("services")}
                className="w-full flex items-center justify-between px-4 py-3 text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium"
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    expandedMobileSection === "services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Expanded Services */}
              {expandedMobileSection === "services" && (
                <div className="pl-4 space-y-1 mt-2">
                  {servicesMegaMenu.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="mb-4">
                      <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4 py-2">
                        {section.title}
                      </h4>
                      {section.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.link}
                          onClick={handleMobileMenuClose}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                        >
                          {item.icon && <span className="text-lg">{item.icon}</span>}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{item.name}</span>
                              {item.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Client Dashboard Login Button for Mobile */}
            <a
              href="https://client.vedpragya.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileMenuClose}
              className="w-full flex items-center gap-2 px-4 py-3 text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium border-t border-gray-200 dark:border-gray-700 mt-2 pt-4"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg>
              Client Dashboard Login
            </a>

            {/* Mobile Contact Button */}
            <Link
              href="/pages/contact"
              onClick={handleMobileMenuClose}
              className="w-full mt-4"
            >
              <NavbarButton
                variant="gradient"
                as="button"
                className="w-full text-center"
              >
                Contact Us
              </NavbarButton>
            </Link>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
