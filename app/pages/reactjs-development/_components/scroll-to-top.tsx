'use client';

/**
 * Scroll To Top Component
 * UX enhancement for easy navigation back to top
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowUp } from 'lucide-react';

console.log('[ReactJS-Dev] ScrollToTop component loaded');

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[ReactJS-Dev] ScrollToTop mounted');

    const handleScroll = () => {
      // Show button after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('[ReactJS-Dev] ScrollToTop unmounted');
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log('[ReactJS-Dev] Scroll to top clicked');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40"
        >
          <Button
            size="lg"
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full shadow-2xl bg-gradient-to-r from-[#61DAFB] to-[#00C897] hover:from-[#50c9ea] hover:to-[#00b786] text-white p-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
