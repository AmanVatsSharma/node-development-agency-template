'use client';

/**
 * @fileoverview Final CTA Section
 * @description Strong closing with urgency element
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock, Shield, Star } from 'lucide-react';

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  console.log('[Final-CTA] Component rendered');

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0A1628] via-[#0d1b2e] to-[#0A1628] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-8 border-2 border-red-500/30"
          >
            <Clock className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="font-black text-red-400 uppercase tracking-wide text-sm">
              Limited Slots for Q4 2025 Implementation
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight"
          >
            Ready to Transform{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] via-[#FFD700] to-[#00FF88]">
              Your Brokerage?
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Join 50+ leading brokerages already using Vedpragya trading platform. 
            <span className="font-bold text-[#00FF88]"> Start your 2-4 week implementation today.</span>
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
          >
            {[
              { icon: Shield, text: '99.99% Uptime Guarantee', color: 'from-[#00FF88] to-[#00dd77]' },
              { icon: Clock, text: '2-4 Week Launch', color: 'from-blue-500 to-cyan-500' },
              { icon: Star, text: '4.9/5 Client Rating', color: 'from-yellow-500 to-amber-500' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-xl p-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 mx-auto`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-bold text-white">{item.text}</p>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 px-10 py-6 bg-gradient-to-r from-[#00FF88] to-[#00dd77] text-[#0A1628] font-black text-lg rounded-xl hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all active:scale-95"
            >
              📊 Schedule Free Demo Now
              <ArrowRight className="h-6 w-6" />
            </a>

            <a
              href="tel:+919963730111"
              className="inline-flex items-center justify-center gap-2 px-10 py-6 bg-white/10 backdrop-blur-md text-white font-black text-lg rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all active:scale-95"
            >
              📞 Call +91 9963730111
            </a>
          </motion.div>

          {/* Client Logos Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-16"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-6">
              Trusted by Leading Brokerages
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="w-24 h-12 bg-white/5 rounded-lg border border-white/10"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
