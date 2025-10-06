'use client';

/**
 * Final CTA Section
 * The Future of Business Talks Back
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

console.log('[AI-Chatbot-Dev] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] FinalCTASection mounted');
    return () => console.log('[AI-Chatbot-Dev] FinalCTASection unmounted');
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0A2540]/90 relative overflow-hidden"
      id="final-cta"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFB100] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB100] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB100]/20 backdrop-blur-md rounded-full mb-8 border border-[#FFB100]/50"
          >
            <Sparkles className="h-5 w-5 text-[#FFB100]" />
            <span className="text-sm sm:text-base font-bold text-[#FFB100] uppercase tracking-wide">
              Limited Time Offer
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            id="final-cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 text-white"
          >
            The Future of Business
            <br />
            <span className="text-[#FFB100]">Talks Back</span>
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed"
          >
            Start chatting your way to growth.
            <br className="hidden sm:block" />
            Let us build your custom AI chatbot — trained on your business, your tone, your goals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-7 h-auto shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,177,0,0.6)] transition-all active:scale-95 bg-gradient-to-r from-[#FFB100] to-[#FFB100]/80 hover:from-[#FFB100]/90 hover:to-[#FFB100]/70 text-[#0A2540] rounded-2xl font-black"
              onClick={() => console.log('[AI-Chatbot-Dev] Final CTA - Book Free Consultation clicked')}
            >
              <a href="#lead-form" className="flex items-center justify-center gap-2">
                🚀 Book Free Consultation
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-7 h-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A2540] font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
              onClick={() => console.log('[AI-Chatbot-Dev] Final CTA - View Demo Bots clicked')}
            >
              <a href="#case-studies" className="flex items-center justify-center gap-2">
                <Play className="h-5 w-5" />
                View Demo Bots
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span>50+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span>7-15 Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
