'use client';

/**
 * @fileoverview Mobile Floating CTA
 * @description Always-visible contact button on mobile
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { fireConversion } from '@/utils/conversions';

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    console.log('[Market-Data-API] MobileFloatingCTA mounted');
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Only (below lg breakpoint) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
      >
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-3 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 space-y-2"
            >
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#00FF88] to-[#00CC70] rounded-xl text-[#0B1E39] font-bold hover:shadow-lg transition-all"
                onClick={() => {
                  console.log('[Market-Data-API] Call CTA clicked - Phone: +91-9876543210');
                  console.log('[Market-Data-API] Firing call_click conversion to Google Ads');
                  void fireConversion('nse_mcx_live_market_data_call_click');
                }}
              >
                <Phone className="h-5 w-5" />
                <span>Call: +91-9876543210</span>
              </a>
              <a
                href="#lead-form"
                onClick={() => setShowOptions(false)}
                className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-900 dark:text-white font-bold hover:shadow-lg transition-all"
              >
                <span>📝</span>
                <span>Request Demo Access</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowOptions(!showOptions)}
            className="flex-1 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-black py-4 px-6 rounded-xl shadow-2xl flex items-center justify-center gap-2"
          >
            <Phone className="h-5 w-5" />
            <span>Get API Access Now</span>
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVisible(false)}
            className="p-4 bg-gray-800 text-white rounded-xl shadow-lg"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

console.log('[Market-Data-API] MobileFloatingCTA loaded');
