"use client";
/**
 * Enhanced Header Component
 * 
 * Modern, scroll-responsive navigation header with glassmorphic design
 * Built specifically for Enterprise Hero - Node.js Development Agency
 * 
 * Features:
 * - Scroll-responsive resizing and styling
 * - Glassmorphic effects
 * - Dark mode support with theme toggle
 * - Mobile-responsive design
 * - Smooth animations
 * - Proper accessibility
 * 
 * @module EnhancedHeader
 * @author Enterprise Hero Development Team
 * @created 2025-10-02
 * @see NAVBAR_DOCS.md for detailed documentation
 */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./ui/resizable-navbar";

// Console log for component initialization
console.log("🎨 [EnhancedHeader] Component module loaded");

/**
 * Navigation Items Configuration
 * Define all navigation menu items here for easy maintenance
 */
const navigationItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/pages/about" },
  { name: "Services", link: "/pages/services" },
  { name: "Portfolio", link: "/pages/portfolio" },
  { name: "Blog", link: "/pages/blog" },
  { name: "Resources", link: "/pages/resources" },
];

/**
 * Enhanced Header Component
 * 
 * Main navigation header with desktop and mobile views
 * Handles all navigation, theme switching, and responsive behavior
 * 
 * @returns {JSX.Element} Complete navigation header
 */
export default function EnhancedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

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

  /**
   * Handle mobile menu toggle
   * Closes menu and logs the action
   */
  const handleMobileMenuClose = () => {
    console.log("📱 [EnhancedHeader] Closing mobile menu via item click");
    setIsMobileMenuOpen(false);
  };

  /**
   * Handle navigation item click
   * Logs analytics data for tracking user navigation
   */
  const handleNavClick = (itemName: string) => {
    console.log(`🔗 [EnhancedHeader] Navigation clicked: ${itemName}`);
    // Analytics tracking can be added here
  };

  return (
    <div className="relative w-full">
      {/* Desktop Navigation */}
      <Navbar className="pt-4">
        <NavBody>
          {/* Logo Section - Text Only, No Image */}
          <NavbarLogo
            text="Enterprise Hero"
            href="/"
            logoAlt="Enterprise Hero Logo"
          />

          {/* Navigation Links */}
          <NavItems items={navigationItems} />

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
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
              <span className="hidden sm:inline">Client Login</span>
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
      </Navbar>

      {/* Mobile Navigation */}
      <Navbar className="pt-4">
        <MobileNav>
          <MobileNavHeader>
            {/* Mobile Logo - Text Only, No Image */}
            <NavbarLogo
              text="Enterprise Hero"
              href="/"
              logoAlt="Enterprise Hero Logo"
            />

            {/* Right Side Actions - Theme Toggle and Menu Button */}
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
            {navigationItems.map((item, idx) => (
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

            {/* Client Dashboard Login Button for Mobile */}
            <a
              href="https://client.vedpragya.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileMenuClose}
              className="w-full flex items-center gap-2 px-4 py-3 text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors font-medium"
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
              className="w-full mt-2"
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

