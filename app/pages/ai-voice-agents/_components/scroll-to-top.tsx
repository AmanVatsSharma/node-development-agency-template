'use client';

/**
 * Scroll to Top Button Component
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0B1E39] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#ff9933] shadow-2xl shadow-[#FF7A00]/40"
          >
            <ArrowUp className="h-6 w-6 text-white" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
