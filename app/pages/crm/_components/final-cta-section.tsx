'use client';

/**
 * @fileoverview Final CTA Banner - EnterpriseHero CRM
 * @description Tricolor wave background with glowing BharatERP logo
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Database, Sparkles } from 'lucide-react';

console.log('[CRM] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="cta"
    >
      {/* Tricolor Wave Background - India Pride */}
      <div className="absolute inset-0">
        {/* Saffron Wave */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-r from-[#FF9933] via-[#FFB366] to-[#FF9933] opacity-20"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}
        />
        
        {/* White Wave */}
        <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
        
        {/* Green Wave */}
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-r from-[#138808] via-[#16A00D] to-[#138808] opacity-20"
          style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002F9E]/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center"
          >
            {/* Glowing BharatERP Logo/Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
              className="inline-block mb-12"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#002F9E] via-[#0041E2] to-[#00C897] flex items-center justify-center shadow-2xl">
                  <Database className="h-12 w-12 text-white" />
                </div>
                {/* Animated Glow */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-[#002F9E] via-[#FFD700] to-[#00C897] rounded-3xl blur-2xl -z-10"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Ready to{' '}
              <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">
                Own Your CRM?
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join the enterprises that have taken control of their data, workflows, and customer relationships.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto text-lg px-12 py-8 h-auto shadow-2xl hover:shadow-[0_20px_80px_-15px_rgba(255,215,0,0.8)] transition-all active:scale-95 bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#002F9E] hover:from-[#0041E2] hover:via-[#FFD700] hover:to-[#0041E2] rounded-2xl font-black text-white"
                onClick={() => console.log('[CRM] Final CTA - Request Demo clicked')}
              >
                <a href="/crm/demo" className="flex items-center justify-center gap-3">
                  <Sparkles className="h-6 w-6" />
                  Request Your Live Demo
                  <ArrowRight className="h-6 w-6" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg px-10 py-7 h-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-2 border-[#002F9E] dark:border-[#FFD700] hover:bg-[#002F9E]/10 dark:hover:bg-[#FFD700]/10 font-bold rounded-2xl shadow-lg active:scale-95 transition-all"
                onClick={() => console.log('[CRM] Final CTA - Talk to Expert clicked')}
              >
                <a href="/contact" className="flex items-center justify-center gap-2">
                  💬 Talk to an Expert
                </a>
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12 inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['👨‍💼', '👩‍💼', '👨‍💻', '👩‍💻'].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center border-2 border-white dark:border-gray-900 text-lg">
                      {emoji}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  12+ enterprises trust us
                </span>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                ⚡ 24-hour demo setup
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
