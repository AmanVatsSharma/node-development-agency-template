'use client';

/**
 * @fileoverview Final CTA Section
 * @description Strong closing call-to-action with urgency
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits = [
    '7-day free trial',
    'No credit card required',
    'Cancel anytime',
    'Full feature access',
    'Instant API keys',
    '24/7 support'
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-[#0B1E39] via-[#0a1929] to-[#050b14] relative overflow-hidden"
      id="final-cta"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00FF88 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Massive Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#00FF88]/30 via-[#FFD700]/20 to-[#00FF88]/30 rounded-full filter blur-[200px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF3366]/20 backdrop-blur-md rounded-full mb-6 border border-[#FF3366]/50">
            <Zap className="h-4 w-4 text-[#FF3366] animate-pulse" />
            <span className="text-[#FF3366] font-bold text-sm">LIMITED TIME: 50% OFF ON ANNUAL PLANS</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
            Start Trading with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] via-[#FFD700] to-[#00FF88]">
              Real-Time Data
            </span>
            {' '}Today
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join <span className="font-bold text-[#00FF88]">1000+ developers</span> building the future of trading.
            <br />
            Get instant access to <span className="font-bold text-[#FFD700]">ultra-fast market data</span> in minutes.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-2 text-white/90 text-sm md:text-base"
              >
                <CheckCircle2 className="h-5 w-5 text-[#00FF88] flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="#lead-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-black rounded-xl text-lg shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(0,255,136,0.8)] transition-all"
            >
              <Rocket className="h-6 w-6" />
              Start Free Trial Now
              <ArrowRight className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              View Pricing Plans
            </motion.a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#00FF88]" />
              <span>NSE Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#00FF88]" />
              <span>SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#00FF88]" />
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#00FF88]" />
              <span>99.99% Uptime</span>
            </div>
          </div>

          {/* Urgency Timer (Static) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-[#FFD700]/10 backdrop-blur-md rounded-full border border-[#FFD700]/30"
          >
            <span className="text-[#FFD700] text-sm font-bold">⏰ Offer ends soon!</span>
            <span className="text-white/70 text-sm">Join now to lock in your discount</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] FinalCTASection loaded');
