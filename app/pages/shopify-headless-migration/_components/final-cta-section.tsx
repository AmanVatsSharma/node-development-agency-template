'use client';

/**
 * Final CTA Section - Strong Closing with WhatsApp Integration
 * Multiple conversion points with urgency and social proof
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { fireConversion } from '@/utils/conversions';

console.log('[Shopify-Headless] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleWhatsAppClick = () => {
    console.log('[Shopify-Headless] WhatsApp CTA clicked');
    console.log('[Shopify Headless Migration] WhatsApp click conversion fired');
    void fireConversion('shopify_headless_migration_whatsapp_click');
    
    if (typeof window !== 'undefined') {
      const phoneNumber = '919963730111';
      const message = encodeURIComponent('Hi! I\'m interested in your Shopify Headless Migration services. Can we discuss?');
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }
  };

  const handleDemoClick = () => {
    console.log('[Shopify-Headless] Demo CTA clicked');
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'demo_request', {
        location: 'final_cta',
        page_path: '/pages/shopify-headless-migration'
      });
    }
    
    // Scroll to contact form or open calendar
    window.location.hash = '#contact';
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] relative overflow-hidden"
      id="contact"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E0B8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E0B8]/20 border border-[#00E0B8]/30 rounded-full text-[#00E0B8] text-sm font-bold mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Limited Slots Available
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight"
            >
              Upgrade Your Shopify Store to
              <br />
              <span className="bg-gradient-to-r from-[#00E0B8] via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Next-Gen Headless Commerce
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Get blazing-fast performance, unmatched SEO, and complete design freedom.
              <br />
              <span className="text-[#00E0B8] font-bold">Transform your store in 2-8 weeks.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              {/* Primary CTA - Demo */}
              <Button
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-7 md:py-8 h-auto font-black rounded-xl bg-gradient-to-r from-[#00E0B8] to-cyan-500 hover:from-[#00d4ad] hover:to-cyan-600 text-[#0F172A] shadow-[0_0_40px_rgba(0,224,184,0.4)] hover:shadow-[0_0_60px_rgba(0,224,184,0.6)] transition-all active:scale-95"
                onClick={handleDemoClick}
              >
                <span className="flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  Book Free Headless Consultation
                  <ArrowRight className="h-6 w-6" />
                </span>
              </Button>

              {/* Secondary CTA - WhatsApp */}
              <Button
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-7 md:py-8 h-auto font-black rounded-xl bg-[#25D366] hover:bg-[#20BD5B] text-white shadow-lg hover:shadow-xl transition-all active:scale-95"
                onClick={handleWhatsAppClick}
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  Chat Now on WhatsApp
                </span>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00E0B8]" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00E0B8]" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00E0B8]" />
                <span>Response in 24 Hours</span>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-2">
                "The migration was seamless. Our page load times dropped by 60% and organic traffic increased by 35% within a month!"
              </p>
              <p className="text-sm text-gray-400">
                — Rahul Mehta, Founder @ UrbanHome Decor
              </p>
            </motion.div>

            {/* SEO Keywords (hidden) */}
            <div className="sr-only">
              headless shopify, nextjs shopify, shopify hydrogen migration, shopify plus developer, 
              shopify api integration, nextjs ecommerce, headless commerce agency, shopify headless cms,
              react shopify storefront, shopify graphql, shopify storefront api
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
