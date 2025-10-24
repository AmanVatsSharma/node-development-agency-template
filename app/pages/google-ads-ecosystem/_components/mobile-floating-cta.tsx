'use client';

/**
 * @fileoverview Mobile Floating CTA - Always accessible mobile CTAs
 * @description Floating action buttons for mobile users to maintain conversion opportunities
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Sticky mobile positioning
 * - Multiple CTA options
 * - Smooth animations
 * - Conversion tracking
 * - Mobile-optimized design
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  X, 
  ArrowRight,
  Calculator,
  Award
} from 'lucide-react';
import Link from 'next/link';

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = (ctaType: string) => {
    console.log(`[MobileFloatingCTA] CTA clicked: ${ctaType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'mobile_floating_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  const handlePhoneClick = () => {
    handleCTAClick('phone_call');
    window.location.href = 'tel:+919876543210';
  };

  const handleEmailClick = () => {
    handleCTAClick('email');
    window.location.href = 'mailto:info@rajapragyabharat.com';
  };

  const handleWhatsAppClick = () => {
    handleCTAClick('whatsapp');
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleCalculatorClick = () => {
    handleCTAClick('roi_calculator');
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 lg:hidden">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute bottom-16 right-0 space-y-3"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* ROI Calculator CTA */}
            <motion.button
              onClick={handleCalculatorClick}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-semibold">Calculate ROI</span>
            </motion.button>

            {/* Email CTA */}
            <motion.button
              onClick={handleEmailClick}
              className="flex items-center gap-3 bg-white text-gray-700 px-4 py-3 rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-semibold">Send Email</span>
            </motion.button>

            {/* WhatsApp CTA */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">WhatsApp</span>
            </motion.button>

            {/* Strategy Session CTA */}
            <Link
              href="#final-cta"
              onClick={() => handleCTAClick('strategy_session')}
            >
              <motion.button
                className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-3 rounded-xl shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Award className="w-5 h-5" />
                <span className="text-sm font-semibold">Free Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: isExpanded ? 0.9 : 1,
          rotate: isExpanded ? 45 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Phone className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulse Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default MobileFloatingCTA;