'use client';

/**
 * @fileoverview Scroll to Top Button
 * @description Smooth scroll enhancement for UX
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 p-3 bg-gradient-to-r from-[#00FF88] to-[#00CC70] rounded-full shadow-2xl hover:shadow-[#00FF88]/50 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-[#0B1E39] group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

console.log('[Market-Data-API] ScrollToTop loaded');
