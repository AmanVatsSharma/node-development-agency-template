'use client';

/**
 * Scroll To Top Button Component
 * Appears after scrolling down, positioned at middle-right
 * Smooth scroll animation to top of page
 * 
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

console.log('[Business-Website] ScrollToTop component loaded');

/**
 * Scroll To Top Button - Smooth rectangle at middle-right
 * POSITION: Fixed middle-right, above mobile CTA
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[Business-Website] ScrollToTop mounted');

    // Show button after scrolling down
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showThreshold = 400; // Show after 400px scroll
      
      if (scrollPosition > showThreshold && !isVisible) {
        console.log('[Business-Website] Scroll to top button activated');
        setIsVisible(true);
      } else if (scrollPosition <= showThreshold && isVisible) {
        setIsVisible(false);
      }
    };

    // Throttle scroll event for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      console.log('[Business-Website] ScrollToTop unmounted');
    };
  }, [isVisible]);

  // Smooth scroll to top
  const scrollToTop = () => {
    console.log('[Business-Website] Scroll to top clicked');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed top-1/2 -translate-y-1/2 right-0 z-40 bg-gradient-to-l from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-3 py-6 rounded-l-2xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:px-4 group"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <div className="flex flex-col items-center gap-1">
            <ArrowUp className="h-5 w-5 animate-bounce" />
            <span className="text-[10px] font-bold uppercase tracking-wider rotate-0 writing-mode-vertical hidden sm:block">
              Top
            </span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

