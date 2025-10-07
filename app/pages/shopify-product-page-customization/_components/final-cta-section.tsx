'use client';

/**
 * @fileoverview Final CTA Section - Strong Closing Call to Action
 * @description Urgency-driven CTA with multiple contact options
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, MessageCircle, Phone, Calendar } from 'lucide-react';

console.log('[Shopify-Product-Page] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleWhatsApp = () => {
    console.log('[Shopify-Product-Page] Final CTA - WhatsApp clicked');
    window.open('https://wa.me/919999999999?text=Hi! I want to transform my Shopify product pages', '_blank');
  };

  const handleCall = () => {
    console.log('[Shopify-Product-Page] Final CTA - Call clicked');
    window.location.href = 'tel:+919999999999';
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0A2540]/90 relative overflow-hidden"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFB400]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB400]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Heading */}
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white"
          >
            Let's Transform Your Shopify Product Pages into{' '}
            <span className="text-[#FFB400]">Money Machines</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Stop losing sales to boring product pages. Start converting more visitors today.
          </p>

          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded-full mb-8"
          >
            <p className="text-white font-black text-sm sm:text-base">
              ⚡ Limited Slots Available — Only 3 Projects This Month
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-lg px-10 py-8 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,180,0,0.8)] transition-all active:scale-95 bg-gradient-to-r from-[#FFB400] via-[#FFB400] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFB400] text-[#0A2540] rounded-2xl font-black"
            >
              <a href="#lead-form" className="flex items-center justify-center gap-2">
                <Calendar className="h-6 w-6" />
                Book Free 20-Min Consultation
                <ArrowRight className="h-6 w-6" />
              </a>
            </Button>

            {/* WhatsApp CTA */}
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full sm:w-auto text-lg px-10 py-8 h-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-2xl font-black shadow-xl"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              WhatsApp Us → Chat Instantly
            </Button>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Or Call */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px bg-gray-600 w-20" />
              <span className="text-gray-400 text-sm font-semibold">OR</span>
              <div className="h-px bg-gray-600 w-20" />
            </div>

            <Button
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 h-auto bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:bg-white/20 text-white font-bold rounded-2xl"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us: +91 99999 99999
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>✓ 40+ Stores Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>✓ On-Time Delivery Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>✓ 100% Satisfaction Promise</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] FinalCTASection exported');
