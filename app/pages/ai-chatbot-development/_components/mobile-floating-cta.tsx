'use client';

/**
 * Mobile Floating CTA
 * Always visible CTA buttons on mobile
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';

console.log('[AI-Chatbot-Dev] MobileFloatingCTA component loaded');

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] MobileFloatingCTA mounted');

    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      console.log('[AI-Chatbot-Dev] MobileFloatingCTA unmounted');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-[#FFB100] p-3 flex gap-3">
            <a
              href="#lead-form"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 text-white font-bold py-3 px-4 rounded-xl active:scale-95 transition-all"
              onClick={() => console.log('[AI-Chatbot-Dev] Mobile CTA - Contact clicked')}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm">Get Started</span>
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFB100] to-[#FFB100]/80 text-[#0A2540] font-bold py-3 px-4 rounded-xl active:scale-95 transition-all"
              onClick={() => console.log('[AI-Chatbot-Dev] Mobile CTA - Call clicked')}
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
