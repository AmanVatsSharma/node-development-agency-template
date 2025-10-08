"use client";

/**
 * Enhanced Mobile Menu with Expandable Cards
 * 
 * A beautiful, animated mobile menu with expandable service cards
 * Features smooth animations, backdrop overlay, and outside click detection
 * 
 * @module EnhancedMobileMenu
 * @author Enterprise Hero Development Team
 * @created 2025-10-06
 */

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import { mainNavigation, servicesMegaMenu } from "../data/navigation";
import { NavbarButton } from "./ui/resizable-navbar";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceCard {
  name: string;
  link: string;
  description?: string;
  icon?: string;
  iconKey?: string;
  badge?: string;
  category: string;
}

interface EnhancedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedMobileMenu({ isOpen, onClose }: EnhancedMobileMenuProps) {
  const [expandedCard, setExpandedCard] = useState<ServiceCard | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const id = useId();

  // Prepare all service cards with their categories
  const serviceCards: ServiceCard[] = servicesMegaMenu.sections.flatMap(section =>
    section.items.map(item => ({
      ...item,
      category: section.title,
    }))
  );

  // Handle escape key and body scroll lock
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (expandedCard) {
          setExpandedCard(null);
        } else {
          onClose();
        }
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, expandedCard, onClose]);

  // Close menu when clicking outside
  useOutsideClick(menuRef, () => {
    if (isOpen && !expandedCard) {
      onClose();
    }
  });

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => {
              if (!expandedCard) onClose();
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Container */}
      <motion.div
        ref={menuRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 z-50 shadow-2xl overflow-hidden"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Menu
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            {/* Main Navigation Links */}
            <div className="p-4 space-y-2">
              {mainNavigation.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.link}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20 transition-all group"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Services Section with Expandable Cards */}
            <div className="px-4 py-2">
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4 py-2 mb-2">
                Our Services
              </h3>
              <div className="space-y-2">
                {serviceCards.map((card, index) => (
                  <ServiceCardItem
                    key={index}
                    card={card}
                    isExpanded={expandedCard?.name === card.name}
                    onClick={() => setExpandedCard(card)}
                    onClose={() => setExpandedCard(null)}
                    onNavigate={onClose}
                    layoutId={`card-${card.name}-${id}`}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Client Dashboard */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 mt-4">
              <motion.a
                href="https://client.vedpragya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 text-blue-600 dark:text-blue-400" 
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
                <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Client Dashboard
                </span>
              </motion.a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <Link href="/pages/contact" onClick={onClose}>
              <NavbarButton variant="gradient" as="button" className="w-full text-center">
                Contact Us
              </NavbarButton>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {expandedCard && (
          <ExpandedCardModal
            card={expandedCard}
            onClose={() => setExpandedCard(null)}
            onNavigate={onClose}
            layoutId={`card-${expandedCard.name}-${id}`}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Service Card Item Component
 */
interface ServiceCardItemProps {
  card: ServiceCard;
  isExpanded: boolean;
  onClick: () => void;
  onClose: () => void;
  onNavigate: () => void;
  layoutId: string;
  index: number;
}

function ServiceCardItem({
  card,
  isExpanded,
  onClick,
  onNavigate,
  layoutId,
  index,
}: ServiceCardItemProps) {
  if (isExpanded) return null;

  return (
    <motion.div
      layoutId={layoutId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      onClick={onClick}
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 overflow-hidden group"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative flex items-center gap-4">
        {/* Icon */}
        <motion.div 
          className="flex-shrink-0 group-hover:scale-110 transition-transform"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <ServiceIcon iconKey={card.iconKey as any} emoji={card.icon} size={28} className="text-blue-600 dark:text-blue-400" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
              {card.name}
            </h4>
            {card.badge && (
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold whitespace-nowrap">
                {card.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
            {card.description}
          </p>
          <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-1">
            {card.category}
          </p>
        </div>

        {/* Arrow */}
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.div>
  );
}

/**
 * Expanded Card Modal Component
 */
interface ExpandedCardModalProps {
  card: ServiceCard;
  onClose: () => void;
  onNavigate: () => void;
  layoutId: string;
}

function ExpandedCardModal({ card, onClose, onNavigate, layoutId }: ExpandedCardModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, onClose);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
        onClick={onClose}
      />

      {/* Expanded Card */}
      <div className="fixed inset-0 grid place-items-center z-[70] p-4">
        <motion.div
          layoutId={layoutId}
          ref={ref}
          className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform z-10"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header with Icon */}
          <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 p-8 text-center">
            <motion.div
              className="mb-4"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <ServiceIcon iconKey={card.iconKey as any} emoji={card.icon} size={64} className="text-white" />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {card.name}
            </motion.h3>
            {card.badge && (
              <motion.span
                className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {card.badge}
              </motion.span>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {/* Category */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 dark:text-gray-400">Category:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {card.category}
                </span>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  About this service
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  What you get
                </h4>
                <div className="space-y-2">
                  {[
                    "Expert development team",
                    "Modern technology stack",
                    "Scalable architecture",
                    "Ongoing support & maintenance",
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 pt-4">
                <Link
                  href={card.link}
                  onClick={() => {
                    onClose();
                    onNavigate();
                  }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all text-center"
                >
                  Learn More
                </Link>
                <Link
                  href="/pages/contact"
                  onClick={() => {
                    onClose();
                    onNavigate();
                  }}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
