'use client';

/**
 * Final CTA Section Component
 * Strong closing call-to-action with urgency
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Download, Zap } from 'lucide-react';

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 relative overflow-hidden"
      id="cta"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.5))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <Zap className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-bold text-white uppercase tracking-wide">
              Limited Time Offer
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Boost Your Rankings and Traffic?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Join 500+ businesses that improved their SEO with our expert audits. 
            Start with a <strong>free 60-second scan</strong> or book a complete audit today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="text-lg px-8 py-7 h-auto bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl font-bold transition-all hover:scale-105"
              onClick={() => {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🚀 Run Free SEO Scan Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-7 h-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold transition-all hover:scale-105"
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              📊 View Pricing Packages
            </Button>
          </div>

          {/* Urgency Indicator */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="text-sm font-bold text-white">
              ⚡ Only 10 Professional audits left this month at ₹19,999
            </span>
          </div>

          {/* Microcommitment - Lead Magnet */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30 max-w-md mx-auto">
            <h3 className="text-white font-bold text-lg mb-3">
              Not Ready? Get Our Free Checklist
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Download our <strong>7-Point Quick-Fix SEO Checklist</strong> (PDF) — delivered instantly to your inbox.
            </p>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold"
              onClick={() => {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free Checklist
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              ✅ No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              🔒 100% Secure & Private
            </span>
            <span className="flex items-center gap-2">
              ⚡ Results in 60 Seconds
            </span>
            <span className="flex items-center gap-2">
              💯 7-Day Money-Back Guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
