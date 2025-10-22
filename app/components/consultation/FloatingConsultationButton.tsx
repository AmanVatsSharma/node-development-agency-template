/**
 * @fileoverview Floating Consultation Button Component
 * @description Sticky floating button for consultation booking with pulse animation
 * @module components/consultation/FloatingConsultationButton
 * 
 * Features:
 * - Sticky positioning (always visible while scrolling)
 * - TOP-RIGHT position to avoid AI chatbot conflict
 * - Premium pulse animation
 * - Mobile responsive (bottom bar on mobile)
 * - Opens consultation modal on click
 * - Console logging for debugging
 * 
 * Built by: Vedpragya Bharat Private Limited
 */

"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ConsultationModal from './ConsultationModal';
import ConsultationErrorBoundary from './ErrorBoundary';

// Console log for debugging
console.log('[FloatingConsultationButton] Component loaded');

export default function FloatingConsultationButton() {
  console.log('[FloatingConsultationButton] Rendering');
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    console.log('[FloatingConsultationButton] Button clicked, opening modal');
    setIsModalOpen(true);
    
    // Track click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log('[FloatingConsultationButton] Tracking button click event');
      (window as any).gtag('event', 'click', {
        'event_category': 'Consultation',
        'event_label': 'Floating Button Click',
      });
    }
  };

  return (
    <>
      {/* Floating Button - Desktop (TOP-RIGHT to avoid AI chatbot) */}
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        className="hidden md:flex fixed top-24 right-8 z-40 items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Book free consultation"
      >
        {/* Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-20 animate-ping"></span>
        
        {/* Icon */}
        <div className="relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
        </div>

        {/* Text */}
        <span className="text-base">Free Consultation</span>

        {/* Arrow */}
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </motion.button>

      {/* Floating Button - Mobile (Bottom Sticky Bar) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t-2 border-cyan-500/30 shadow-2xl"
      >
        <button
          onClick={handleClick}
          className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book Free Consultation</span>
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        </button>
      </motion.div>

      {/* Consultation Modal with Error Boundary */}
      <ConsultationErrorBoundary>
        <ConsultationModal 
          isOpen={isModalOpen} 
          onClose={() => {
            console.log('[FloatingConsultationButton] Closing modal');
            setIsModalOpen(false);
          }} 
        />
      </ConsultationErrorBoundary>
    </>
  );
}
