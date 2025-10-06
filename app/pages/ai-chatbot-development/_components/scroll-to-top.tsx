'use client';

/**
 * Scroll to Top Button
 * Appears when user scrolls down
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

console.log('[AI-Chatbot-Dev] ScrollToTop component loaded');

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] ScrollToTop mounted');

    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log('[AI-Chatbot-Dev] ScrollToTop unmounted');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    console.log('[AI-Chatbot-Dev] Scroll to top clicked');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
