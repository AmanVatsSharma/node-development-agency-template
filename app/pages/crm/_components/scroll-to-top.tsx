'use client';

/**
 * @fileoverview Scroll to Top Button - EnterpriseHero CRM
 * @description Floating button to scroll back to top
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

console.log('[CRM] ScrollToTop component loaded');

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    console.log('[CRM] ScrollToTop listener attached');

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      console.log('[CRM] ScrollToTop listener removed');
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log('[CRM] ScrollToTop clicked');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-[#002F9E] to-[#FFD700] text-white shadow-2xl hover:shadow-[0_10px_40px_-10px_rgba(255,215,0,0.8)] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
