'use client';

/**
 * @fileoverview Mobile Floating CTA - EnterpriseHero CRM
 * @description Sticky bottom CTA button for mobile devices
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

console.log('[CRM] MobileFloatingCTA component loaded');

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    console.log('[CRM] MobileFloatingCTA listener attached');

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      console.log('[CRM] MobileFloatingCTA listener removed');
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent md:hidden"
        >
          <Button
            asChild
            size="lg"
            className="w-full text-base font-black py-6 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.8)] transition-all active:scale-95 bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#002F9E] rounded-2xl text-white"
            onClick={() => console.log('[CRM] Mobile Floating CTA clicked')}
          >
            <a href="/crm/demo" className="flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5" />
              Request Live Demo
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
