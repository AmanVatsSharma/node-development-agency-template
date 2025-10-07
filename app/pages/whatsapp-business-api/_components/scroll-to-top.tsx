'use client';

/**
 * @fileoverview Scroll to Top Button Component
 * @description Smooth scroll-to-top button that appears after scrolling down
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

/**
 * Scroll To Top Button
 * Appears when user scrolls down 400px
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[ScrollToTop] Component mounted');

    const toggleVisibility = () => {
      const shouldShow = window.scrollY > 400;
      setIsVisible(shouldShow);
      
      if (shouldShow) {
        console.log('[ScrollToTop] Button visible at scroll:', window.scrollY);
      }
    };

    // Check on mount
    toggleVisibility();

    // Listen to scroll events
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      console.log('[ScrollToTop] Component unmounted');
    };
  }, []);

  const scrollToTop = () => {
    console.log('[ScrollToTop] Scrolling to top');
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'scroll_to_top_clicked', {
        event_category: 'UX',
        event_label: 'Scroll To Top Button'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#128C7E] text-white border-2 border-white/20 backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

console.log('[WhatsApp-API] ScrollToTop component loaded');
