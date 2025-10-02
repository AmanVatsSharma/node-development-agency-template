'use client';

/**
 * Final CTA Section Component
 * Last conversion opportunity before footer
 * Strong, urgent call-to-action with multiple contact options
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Phone, MessageCircle, Mail, Rocket } from 'lucide-react';

console.log('[Business-Website] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Business-Website] FinalCTASection mounted');
    return () => console.log('[Business-Website] FinalCTASection unmounted');
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
      
      {/* Animated Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Rocket className="h-10 w-10 text-white" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="final-cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Ready to Grow Your Business Online?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Join 500+ successful Indian businesses. Get your professional website starting at just ₹13,999. 
            No hidden costs, delivered in 14-21 days!
          </motion.p>

          {/* Benefits Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              '✨ Fast Delivery',
              '💰 Affordable Pricing',
              '📱 Mobile-First',
              '🚀 SEO Optimized',
              '🛡️ Secure & Reliable'
            ].map((benefit, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm border border-white/30"
              >
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl text-base px-8 py-6 h-auto"
              onClick={() => console.log('[Business-Website] Final CTA - Get Quote clicked')}
            >
              <a href="#lead-form">
                Get Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-base px-8 py-6 h-auto"
              onClick={() => console.log('[Business-Website] Final CTA - Call clicked')}
            >
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: +91 98765 43210
              </a>
            </Button>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm"
          >
            <span className="font-semibold">Or reach us instantly:</span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
              onClick={() => console.log('[Business-Website] Final CTA - WhatsApp clicked')}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href="mailto:info@youragency.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
              onClick={() => console.log('[Business-Website] Final CTA - Email clicked')}
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/30"
          >
            <span className="text-white font-semibold">
              🔒 100% Secure | 💯 Money-Back Guarantee | ⚡ Quick Response
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

