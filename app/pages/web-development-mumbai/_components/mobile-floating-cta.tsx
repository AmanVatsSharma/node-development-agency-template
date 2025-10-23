'use client';

/**
 * Mobile Floating CTA Component - ALWAYS-VISIBLE CONTACT
 * Floating action buttons for mobile users
 * 
 * @version 1.0.0 - Mobile Floating CTA
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

console.log('[Mumbai-Web-Development] MobileFloatingCTA component loaded');

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[Mumbai-Web-Development] MobileFloatingCTA mounted');
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('[Mumbai-Web-Development] MobileFloatingCTA unmounted');
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          {/* Call Button */}
          <motion.a
            href="tel:+919963730111"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => console.log('[Mumbai-Web-Development] Mobile CTA - Call clicked')}
          >
            <Phone className="h-6 w-6" />
          </motion.a>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/919963730111"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => console.log('[Mumbai-Web-Development] Mobile CTA - WhatsApp clicked')}
          >
            <MessageCircle className="h-6 w-6" />
          </motion.a>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => console.log('[Mumbai-Web-Development] Mobile CTA - Scroll to top clicked')}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}