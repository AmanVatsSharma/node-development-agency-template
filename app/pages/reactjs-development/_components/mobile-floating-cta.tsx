'use client';

/**
 * Mobile Floating CTA Component
 * Always-visible contact buttons for mobile
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

console.log('[ReactJS-Dev] MobileFloatingCTA component loaded');

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[ReactJS-Dev] MobileFloatingCTA mounted');

    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('[ReactJS-Dev] MobileFloatingCTA unmounted');
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-0 right-0 z-50 px-4 lg:hidden"
        >
          <div className="flex gap-3 max-w-md mx-auto">
            <Button
              asChild
              size="lg"
              className="flex-1 text-base px-6 py-6 h-auto shadow-2xl bg-gradient-to-r from-[#61DAFB] to-[#00C897] hover:from-[#50c9ea] hover:to-[#00b786] text-[#1E1E1E] font-bold rounded-full"
              onClick={() => console.log('[ReactJS-Dev] Mobile CTA - Contact clicked')}
            >
              <a href="#lead-form" className="flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Get Quote
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              className="flex-1 text-base px-6 py-6 h-auto shadow-2xl bg-white dark:bg-gray-800 border-2 border-[#61DAFB] hover:bg-[#61DAFB]/10 font-bold rounded-full"
              onClick={() => console.log('[ReactJS-Dev] Mobile CTA - Call clicked')}
            >
              <a href="tel:+1234567890" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
