'use client';

/**
 * Mobile Floating CTA - Always-Visible Contact Buttons
 * Sticky bottom bar for easy access to CTAs on mobile
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

console.log('[Shopify-Headless] MobileFloatingCTA component loaded');

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('[Shopify-Headless] MobileFloatingCTA mounted');

    const handleScroll = () => {
      // Show after scrolling 300px
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('[Shopify-Headless] MobileFloatingCTA unmounted');
    };
  }, []);

  const handleWhatsAppClick = () => {
    console.log('[Shopify-Headless] Mobile floating WhatsApp clicked');
    
    const phoneNumber = '919876543210'; // Update with real number
    const message = encodeURIComponent('Hi! I\'m interested in Shopify Headless Migration services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        location: 'mobile_floating_cta',
        page_path: '/pages/shopify-headless-migration'
      });
    }
  };

  const handleCallClick = () => {
    console.log('[Shopify-Headless] Mobile floating call clicked');
    
    window.location.href = 'tel:+919876543210'; // Update with real number
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click', {
        location: 'mobile_floating_cta',
        page_path: '/pages/shopify-headless-migration'
      });
    }
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
          <div className="bg-gradient-to-r from-[#0F172A] to-[#1e293b] border-t-2 border-[#00E0B8] shadow-2xl backdrop-blur-xl">
            <div className="container mx-auto px-4 py-3">
              <div className="grid grid-cols-2 gap-3">
                
                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5B] text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </button>

                {/* Call Button */}
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#00E0B8] to-cyan-500 hover:from-[#00d4ad] hover:to-cyan-600 text-[#0F172A] font-bold rounded-xl shadow-lg active:scale-95 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
