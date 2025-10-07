'use client';

/**
 * @fileoverview Mobile Floating CTA Component
 * @description Sticky bottom bar with Call and WhatsApp buttons
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[Shopify-Product-Page] MobileFloatingCTA component loaded');

/**
 * Mobile Floating CTA Bar
 * Sticky bottom bar for quick contact access
 * Hides when lead form is visible
 */
export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log('[Shopify-Product-Page] MobileFloatingCTA mounted');

    const handleScroll = () => {
      // Hide when lead form section is in view
      const leadFormSection = document.getElementById('lead-form');
      if (leadFormSection) {
        const rect = leadFormSection.getBoundingClientRect();
        const isFormVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(!isFormVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCallClick = () => {
    console.log('[Shopify-Product-Page] Call button clicked');
    window.location.href = 'tel:+919999999999'; // Replace with actual number
  };

  const handleWhatsAppClick = () => {
    console.log('[Shopify-Product-Page] WhatsApp button clicked');
    window.open('https://wa.me/919999999999?text=Hi! I want to customize my Shopify product pages', '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white dark:bg-gray-900 border-t-2 border-[#FFB400] shadow-2xl">
            <div className="container mx-auto px-4 py-3">
              <div className="grid grid-cols-2 gap-3">
                {/* Call Button */}
                <Button
                  onClick={handleCallClick}
                  size="lg"
                  className="w-full h-14 bg-[#0A2540] hover:bg-[#0A2540]/90 text-white font-bold text-base rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>

                {/* WhatsApp Button */}
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full h-14 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-base rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

console.log('[Shopify-Product-Page] MobileFloatingCTA exported');
