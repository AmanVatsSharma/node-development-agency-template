'use client';

/**
 * Mobile Floating CTA Component - ALWAYS-VISIBLE CONTACT
 * Premium floating action buttons for mobile users
 * 
 * @version 2.0.0 - Production Ready Mobile CTA
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp, Mail } from 'lucide-react';

console.log('[Mumbai-Web-Development] MobileFloatingCTA component loaded');

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllButtons, setShowAllButtons] = useState(false);

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
    console.log('[Mumbai-Web-Development] Mobile CTA - Scroll to top clicked');
  };

  const handleCall = () => {
    console.log('[Mumbai-Web-Development] Mobile CTA - Call clicked');
    window.open('tel:+919963730111', '_self');
  };

  const handleWhatsApp = () => {
    console.log('[Mumbai-Web-Development] Mobile CTA - WhatsApp clicked');
    window.open('https://wa.me/919963730111', '_blank');
  };

  const handleEmail = () => {
    console.log('[Mumbai-Web-Development] Mobile CTA - Email clicked');
    window.open('mailto:hello@mumbaiwebdev.com', '_self');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          {/* Main CTA Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAllButtons(!showAllButtons)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            aria-label="Contact options"
          >
            <Phone className="h-6 w-6" />
          </motion.button>

          {/* Additional Contact Options */}
          <AnimatePresence>
            {showAllButtons && (
              <>
                <motion.button
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCall}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                  aria-label="Call Mumbai Expert"
                >
                  <Phone className="h-6 w-6" />
                </motion.button>

                <motion.button
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsApp}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
                  aria-label="WhatsApp us"
                >
                  <MessageCircle className="h-6 w-6" />
                </motion.button>

                <motion.button
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEmail}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                  aria-label="Email us"
                >
                  <Mail className="h-6 w-6" />
                </motion.button>

                <motion.button
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0, opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToTop}
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white p-4 rounded-full shadow-2xl hover:shadow-slate-500/25 transition-all duration-300"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-6 w-6" />
                </motion.button>
              </>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}