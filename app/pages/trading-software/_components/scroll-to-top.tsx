'use client';

/**
 * @fileoverview Scroll to Top Button
 * @description Shows after scrolling down, scrolls to top on click
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('[Scroll-to-Top] Component mounted');
    
    const handleScroll = () => {
      // Show after scrolling down 50vh
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (scrolled > viewportHeight * 0.5) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    console.log('[Scroll-to-Top] Button clicked');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00dd77] shadow-2xl flex items-center justify-center border-2 border-white/20 hidden md:flex"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-[#0A1628]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
