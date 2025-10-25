import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show CTA when user has scrolled 50% of the page
      if (scrollPosition > (documentHeight - windowHeight) * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = (ctaType: string) => {
    console.log(`[Mobile-Floating-CTA] CTA clicked: ${ctaType}`);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'mobile_floating_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-4 shadow-2xl border border-orange-500/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">E-commerce Google Ads</div>
                  <div className="text-orange-100 text-xs">6.8× ROAS Guarantee</div>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex gap-2">
              <Link
                href="tel:+919876543210"
                onClick={() => handleCTAClick('phone_call')}
                className="flex-1 bg-white text-orange-600 px-4 py-3 rounded-xl font-semibold text-sm text-center hover:bg-orange-50 transition-colors"
              >
                Call Now
              </Link>
              <Link
                href="#contact"
                onClick={() => handleCTAClick('schedule_consultation')}
                className="flex-1 bg-white/20 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center hover:bg-white/30 transition-colors flex items-center justify-center gap-1"
              >
                Schedule
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}