'use client';

/**
 * Mobile Floating CTA Component
 * Always-visible contact buttons on mobile
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

console.log('[Google-Ads] MobileFloatingCTA component loaded');

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[Google-Ads] MobileFloatingCTA mounted');
    
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial state

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleCallClick = () => {
    console.log('[Google-Ads] Mobile CTA - Call clicked');
    window.location.href = 'tel:+919876543210';
  };

  const handleFormClick = () => {
    console.log('[Google-Ads] Mobile CTA - Contact Form clicked');
    window.location.href = '#lead-form';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-900 border-t-4 border-blue-600 shadow-2xl p-3"
        >
          <div className="flex gap-3">
            <button
              onClick={handleCallClick}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-4 rounded-xl shadow-lg active:scale-95 transition-all"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </button>
            <button
              onClick={handleFormClick}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold py-4 px-4 rounded-xl shadow-lg active:scale-95 transition-all"
            >
              <Mail className="h-5 w-5" />
              <span>Get Audit</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
