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
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
      
      {/* Animated Overlay - Hidden on small mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Icon - Smaller on mobile */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4 sm:mb-6 md:mb-8"
          >
            <Rocket className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
          </motion.div>

          {/* Headline - CONVERSION OPTIMIZED */}
          <motion.h2
            id="final-cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 md:mb-7 leading-tight px-2"
          >
            Don't Let Competitors Win Your Customers!
          </motion.h2>

          {/* Subheadline - URGENCY FOCUSED */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-4 font-semibold max-w-3xl mx-auto leading-snug sm:leading-relaxed px-2"
          >
            🚀 Join 500+ Growing Businesses | 💰 From ₹9,999 (40% OFF!) | ⚡ Ready in 14-21 Days
          </motion.p>

          {/* URGENCY INDICATOR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-red-500/90 backdrop-blur-sm rounded-full border-2 border-white/50 shadow-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                ⏰ Only 3 Slots Left This Month - Act Fast!
              </span>
            </div>
          </motion.div>

          {/* Benefits Pills - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 mb-6 sm:mb-8 md:mb-12 px-2"
          >
            {[
              '✨ Fast',
              '💰 Affordable',
              '📱 Mobile',
              '🚀 SEO',
              '🛡️ Secure'
            ].map((benefit, index) => (
              <div
                key={index}
                className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-xs sm:text-sm border border-white/30 whitespace-nowrap"
              >
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - CONVERSION OPTIMIZED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 sm:mb-8 md:mb-12 max-w-md sm:max-w-none mx-auto px-2"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-50 shadow-2xl hover:shadow-white/50 text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 md:py-7 h-auto w-full sm:w-auto font-extrabold transition-all hover:scale-105"
              onClick={() => console.log('[Business-Website] Final CTA - Claim My Spot clicked')}
            >
              <a href="#lead-form" className="flex items-center justify-center">
                🎯 Claim My Spot Now (3 Left!)
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-3 border-white text-white hover:bg-white hover:text-indigo-600 backdrop-blur-sm text-sm sm:text-base md:text-lg px-6 sm:px-10 py-4 sm:py-5 md:py-6 h-auto w-full sm:w-auto font-bold transition-all hover:scale-105"
              onClick={() => console.log('[Business-Website] Final CTA - Speak with Expert clicked')}
            >
              <a href="tel:+919963730111" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                📞 Speak with Expert (Free Call)
              </a>
            </Button>
          </motion.div>

          {/* Quick Contact Options - Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 text-white/80 text-xs sm:text-sm px-2"
          >
            <span className="font-semibold">Or reach instantly:</span>
            <a
              href="https://wa.me/919963730111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors"
              onClick={() => console.log('[Business-Website] Final CTA - WhatsApp clicked')}
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp
            </a>
            <a
              href="mailto:support@vedpragya.com"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors"
              onClick={() => console.log('[Business-Website] Final CTA - Email clicked')}
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              Email
            </a>
          </motion.div>

          {/* Trust Badge - Compact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 sm:mt-8 md:mt-12 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/30"
          >
            <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm text-center">
              🔒 Secure | 💯 Money-Back | ⚡ Quick
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

