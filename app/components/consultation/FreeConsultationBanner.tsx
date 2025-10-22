/**
 * @fileoverview Free Consultation Banner Section Component
 * @description Premium banner section for landing page promoting free consultations
 * @module components/consultation/FreeConsultationBanner
 * 
 * Features:
 * - Eye-catching gradient design
 * - Premium animations
 * - Benefits list with icons
 * - Opens consultation modal
 * - Full responsive design
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
console.log('[FreeConsultationBanner] Component loaded');

export default function FreeConsultationBanner() {
  console.log('[FreeConsultationBanner] Rendering');
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('[FreeConsultationBanner] Opening consultation modal');
    setIsModalOpen(true);
    
    // Track click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log('[FreeConsultationBanner] Tracking banner click event');
      (window as any).gtag('event', 'click', {
        'event_category': 'Consultation',
        'event_label': 'Banner CTA Click',
      });
    }
  };

  // Benefits list
  const benefits = [
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom recommendations for your specific needs'
    },
    {
      icon: '💡',
      title: 'Expert Guidance',
      description: 'Learn from experienced enterprise consultants'
    },
    {
      icon: '🚀',
      title: 'Quick Start',
      description: 'Get actionable insights to begin immediately'
    },
    {
      icon: '✅',
      title: 'No Commitment',
      description: 'Free consultation with absolutely no obligations'
    }
  ];

  return (
    <>
      <section 
        data-consultation-banner
        className="relative py-16 lg:py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 text-white overflow-hidden"
      >
        {/* Console log for section render */}
        {console.log('[FreeConsultationBanner] Rendering banner section')}
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Premium Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-wide uppercase border border-white/30 shadow-lg">
                  🎁 Limited Time Offer
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Get a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">Free 30-Minute</span> Consultation
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Talk to our enterprise experts and discover how we can transform your business with cutting-edge Node.js solutions
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/80">{benefit.description}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <button
                onClick={handleOpenModal}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 hover:bg-gray-100 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Schedule Your Free Consultation</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>30-minute session</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Expert enterprise consultant</span>
                </div>
              </div>

              {/* Additional Info */}
              <p className="mt-6 text-base text-white/70 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who started with a free consultation. 
                Available across our global offices in India, Dubai, California, Toronto, and Shenzhen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Modal with Error Boundary */}
      <ConsultationErrorBoundary>
        <ConsultationModal 
          isOpen={isModalOpen} 
          onClose={() => {
            console.log('[FreeConsultationBanner] Closing modal');
            setIsModalOpen(false);
          }} 
        />
      </ConsultationErrorBoundary>
    </>
  );
}
