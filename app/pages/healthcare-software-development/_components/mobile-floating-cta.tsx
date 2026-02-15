'use client';

/**
 * Mobile Floating CTA Component - Healthcare Software Development
 * Always Accessible Mobile CTA
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyProfile } from '@/app/data/companyProfile';
import { 
  Phone, 
  MessageSquare, 
  X, 
  ArrowUp, 
  Calendar,
  Mail,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] MobileFloatingCTA component loaded');
const CONTACT_EMAIL = companyProfile.contactEmail;

export function MobileFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showExpanded, setShowExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show CTA after scrolling 20% of the page
      if (scrollY > windowHeight * 0.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    console.log('[Healthcare-Software-Dev] Call button clicked');
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Mobile CTA',
        event_label: 'Call Button',
        value: 1
      });
    }
    window.open('tel:+919876543210', '_self');
  };

  const handleWhatsApp = () => {
    console.log('[Healthcare-Software-Dev] WhatsApp button clicked');
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Mobile CTA',
        event_label: 'WhatsApp Button',
        value: 1
      });
    }
    window.open('https://wa.me/919876543210?text=Hi, I am interested in healthcare software development services.', '_blank');
  };

  const handleEmail = () => {
    console.log('[Healthcare-Software-Dev] Email button clicked');
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Mobile CTA',
        event_label: 'Email Button',
        value: 1
      });
    }
    window.open(`mailto:${CONTACT_EMAIL}?subject=Healthcare Software Development Inquiry`, '_self');
  };

  const handleConsultation = () => {
    console.log('[Healthcare-Software-Dev] Consultation button clicked');
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Mobile CTA',
        event_label: 'Consultation Button',
        value: 1
      });
    }
    // Scroll to lead form
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 lg:hidden"
        >
          {!showExpanded ? (
            // Collapsed State
            <motion.button
              onClick={() => setShowExpanded(true)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
            </motion.button>
          ) : (
            // Expanded State
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 w-72 sm:w-80 border border-gray-200 dark:border-gray-700"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                  Get Free Consultation
                </h3>
                <button
                  onClick={() => setShowExpanded(false)}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Benefits */}
              <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                  <span>Free 30-min consultation</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                  <span>Response within 2 hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0" />
                  <span>HIPAA compliant solutions</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </button>
                
                <button
                  onClick={handleConsultation}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                </button>
                
                <button
                  onClick={handleEmail}
                  className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  <div>+91 98765 43210</div>
                  <div>{CONTACT_EMAIL}</div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}