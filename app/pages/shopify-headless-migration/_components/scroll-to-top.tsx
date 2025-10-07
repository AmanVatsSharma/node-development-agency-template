'use client';

/**
 * Scroll to Top Button
 * UX enhancement for easy navigation back to top
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

console.log('[Shopify-Headless] ScrollToTop component loaded');

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[Shopify-Headless] ScrollToTop mounted');

    const handleScroll = () => {
      // Show button after scrolling 500px
      const shouldShow = window.scrollY > 500;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('[Shopify-Headless] ScrollToTop unmounted');
    };
  }, []);

  const scrollToTop = () => {
    console.log('[Shopify-Headless] Scroll to top clicked');
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'scroll_to_top', {
        page_path: '/pages/shopify-headless-migration'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#00E0B8] to-cyan-500 hover:from-[#00d4ad] hover:to-cyan-600 text-[#0F172A] shadow-lg hover:shadow-2xl flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 md:h-7 md:w-7 group-hover:translate-y-[-2px] transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
