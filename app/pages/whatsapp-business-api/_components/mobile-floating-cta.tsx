'use client';

/**
 * @fileoverview Mobile Floating CTA Component
 * @description Always-visible floating CTA bar for mobile devices
 * @version 1.0.0
 * 
 * CONVERSION OPTIMIZED:
 * - Sticky bottom bar on mobile
 * - WhatsApp direct link
 * - High-contrast CTA button
 * - Non-intrusive on desktop
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

/**
 * Mobile Floating CTA
 * Shows WhatsApp and Call buttons on mobile devices
 */
export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    console.log('[MobileFloatingCTA] Component mounted');

    const handleScroll = () => {
      // Show after scrolling 200px down
      const shouldShow = window.scrollY > 200 && !isDismissed;
      setIsVisible(shouldShow);
    };

    // Check on mount
    handleScroll();

    // Listen to scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('[MobileFloatingCTA] Component unmounted');
    };
  }, [isDismissed]);

  const handleWhatsAppClick = () => {
    console.log('[MobileFloatingCTA] WhatsApp button clicked');
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_cta_clicked', {
        event_category: 'Conversion',
        event_label: 'Mobile Floating CTA',
        value: 1
      });
    }

    // Open WhatsApp with pre-filled message
    const phoneNumber = '919876543210'; // Replace with actual number
    const message = encodeURIComponent('Hi! I want to know more about WhatsApp Business API integration services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    console.log('[MobileFloatingCTA] Call button clicked');
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_cta_clicked', {
        event_category: 'Conversion',
        event_label: 'Mobile Floating CTA',
        value: 1
      });
    }

    window.location.href = 'tel:+919876543210'; // Replace with actual number
  };

  const handleDismiss = () => {
    console.log('[MobileFloatingCTA] Dismissed by user');
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] backdrop-blur-lg border-t-2 border-white/20 shadow-2xl">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center gap-2">
                {/* WhatsApp CTA Button */}
                <Button
                  onClick={handleWhatsAppClick}
                  className="flex-1 h-12 text-base font-bold bg-white text-[#25D366] hover:bg-gray-100 shadow-lg rounded-xl"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </Button>

                {/* Call Button */}
                <Button
                  onClick={handleCallClick}
                  variant="outline"
                  className="h-12 px-4 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white rounded-xl"
                  aria-label="Call us"
                >
                  <Phone className="h-5 w-5" />
                </Button>

                {/* Dismiss Button */}
                <button
                  onClick={handleDismiss}
                  className="h-12 w-12 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

console.log('[WhatsApp-API] MobileFloatingCTA component loaded');
