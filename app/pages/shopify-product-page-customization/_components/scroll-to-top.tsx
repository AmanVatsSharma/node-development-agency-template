'use client';

/**
 * @fileoverview Scroll to Top Button Component
 * @description Smooth scroll to top functionality for better UX
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[Shopify-Product-Page] ScrollToTop component loaded');

/**
 * Scroll to Top Button
 * Appears after scrolling 50% of page
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[Shopify-Product-Page] ScrollToTop mounted');

    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after 50% scroll
      if (scrolled > windowHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    console.log('[Shopify-Product-Page] Scroll to top clicked');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-4 z-40 md:bottom-8 md:right-8"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full bg-[#FFB400] hover:bg-[#FFB400]/90 text-[#0A2540] shadow-2xl"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

console.log('[Shopify-Product-Page] ScrollToTop exported');
