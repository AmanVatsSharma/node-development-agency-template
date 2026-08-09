/**
 * @fileoverview Free Consultation Modal Component
 * @description Premium modal popup for consultation booking with glassmorphism design
 * @module components/consultation/ConsultationModal
 * 
 * Features:
 * - Premium glassmorphism design matching website theme
 * - Smooth animations with framer-motion
 * - Click outside to close functionality
 * - Escape key to close
 * - Full responsive design
 * - Console logging for debugging
 * 
 * Built by: Vedpragya Bharat Private Limited
 */

"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ConsultationForm from './ConsultationForm';

// Console log for debugging
console.log('[ConsultationModal] Component loaded');

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  console.log('[ConsultationModal] Rendering with isOpen:', isOpen);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        console.log('[ConsultationModal] Escape key pressed, closing modal');
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      console.log('[ConsultationModal] Modal opened, preventing body scroll');
      document.body.style.overflow = 'hidden';
    } else {
      console.log('[ConsultationModal] Modal closed, restoring body scroll');
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle successful submission
  const handleSuccess = () => {
    console.log('[ConsultationModal] Consultation submitted successfully');
    // Modal will auto-close after showing success message
    setTimeout(() => {
      console.log('[ConsultationModal] Auto-closing modal after success');
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              console.log('[ConsultationModal] Backdrop clicked, closing modal');
              onClose();
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              onClick={(e) => {
                // Prevent closing when clicking inside modal
                e.stopPropagation();
              }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Premium Glass Card */}
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50">
                {/* Header */}
                <div className="relative px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-gray-200 dark:border-gray-700/50">
                  {/* Premium Glow Effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => {
                      console.log('[ConsultationModal] Close button clicked');
                      onClose();
                    }}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Title */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
                        Book Your Free Consultation
                      </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                      Get expert advice on your project - 30 minutes, completely free
                    </p>
                  </div>
                </div>

                {/* Form Content */}
                <div className="px-6 sm:px-8 py-6">
                  <ConsultationForm 
                    onSuccess={handleSuccess}
                    compact={false}
                  />
                </div>

                {/* Footer */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm text-blue-600 dark:text-blue-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Your information is secure and confidential</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
