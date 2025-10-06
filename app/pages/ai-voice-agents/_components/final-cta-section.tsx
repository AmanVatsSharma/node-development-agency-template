'use client';

/**
 * Final CTA Section
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0B1E39] via-[#0B1E39] to-[#1a2f4f] relative overflow-hidden"
      id="final-cta"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF7A00]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF7A00]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-6 py-2 bg-[#FF7A00]/20 backdrop-blur-md rounded-full mb-6 border border-[#FF7A00]/50">
            <span className="font-bold text-[#FF7A00] uppercase tracking-wide text-sm">
              The Voice of Your Business Goes AI
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            Automate Every Call.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] via-[#ff9933] to-[#FF7A00]">
              Delight Every Customer.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Bring AI Voice Agents to your business and cut response times to zero.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-8 h-auto bg-gradient-to-r from-[#FF7A00] to-[#ff9933] hover:from-[#ff9933] hover:to-[#FF7A00] shadow-2xl shadow-[#FF7A00]/40 font-black rounded-2xl"
            >
              <a href="#lead-form" className="flex items-center gap-2">
                <Phone className="h-6 w-6" />
                Request Free Demo Call Now
                <ArrowRight className="h-6 w-6" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-10 py-7 h-auto bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:bg-white/20 font-bold rounded-2xl text-white"
            >
              <a href="#pricing">
                Get Custom Quote
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 text-sm text-white/80">
            {[
              '✅ 24/7 AI Availability',
              '✅ 99% Accuracy',
              '✅ Multi-Language Support',
              '✅ TRAI Compliant'
            ].map((badge, i) => (
              <div key={i} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
