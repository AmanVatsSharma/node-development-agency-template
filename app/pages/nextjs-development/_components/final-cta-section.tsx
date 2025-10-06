'use client';

/**
 * Final CTA Banner Section
 * Strong closing call-to-action with urgency
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';

console.log('[NextJS-Dev] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    console.log('[NextJS-Dev] FinalCTASection mounted');
    return () => console.log('[NextJS-Dev] FinalCTASection unmounted');
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden"
      id="final-cta"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Headline */}
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 text-white leading-tight"
          >
            Let's Build a Next-Gen Website
            <br className="hidden sm:block" />
            That <span className="text-yellow-300">Converts</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Fast. Secure. SEO-Friendly.
            <br className="hidden sm:block" />
            Built with <span className="font-bold">Next.js by Experts</span>.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-10"
          >
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg md:text-xl px-8 sm:px-12 py-6 sm:py-8 h-auto bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl font-bold transition-all hover:scale-110"
              onClick={() => console.log('[NextJS-Dev] Final CTA clicked')}
            >
              <a href="#lead-form" className="flex items-center gap-2 sm:gap-3">
                🚀 Get Your Free Quote Now
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </Button>
          </motion.div>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-white/80 mb-10 sm:mb-12"
          >
            ⏱️ Average delivery time: <span className="font-bold text-white">10-21 days</span>
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
          >
            {[
              {
                icon: Zap,
                text: '100/100 Performance',
                subtext: 'Lighthouse optimized'
              },
              {
                icon: Shield,
                text: '30-Day Warranty',
                subtext: 'Bug-free guarantee'
              },
              {
                icon: Rocket,
                text: 'Fast Delivery',
                subtext: '10-21 day timeline'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20"
                >
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-300 mx-auto mb-3" />
                  <div className="text-base sm:text-lg font-bold text-white mb-1">
                    {item.text}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">
                    {item.subtext}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 sm:mt-12"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                🔥 Limited Slots Available — Book Your Project Today!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
