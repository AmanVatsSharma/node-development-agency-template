'use client';

/**
 * Mobile Floating CTA Component
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="flex gap-2">
            <a
              href="tel:+919963730111"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#0B1E39] to-[#FF7A00] text-white font-bold rounded-2xl shadow-2xl shadow-[#FF7A00]/40 active:scale-95 transition-transform"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>

            <a
              href="https://wa.me/919963730111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl shadow-2xl shadow-green-600/40 active:scale-95 transition-transform"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
