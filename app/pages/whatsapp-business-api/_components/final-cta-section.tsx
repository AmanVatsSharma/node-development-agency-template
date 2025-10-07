'use client';

/**
 * @fileoverview Final CTA Section
 * @description Strong closing with urgency and multiple CTAs
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Phone, Calendar, Zap } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[FinalCTASection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const urgencyPoints = [
    '⚡ Limited slots for December 2025',
    '🎁 First 50 clients get 20% off setup',
    '🚀 48-hour express setup available',
    '💯 Money-back guarantee'
  ];

  const ctaOptions = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Chat on WhatsApp',
      description: 'Get instant answers',
      action: 'Start Chat',
      href: 'https://wa.me/919876543210?text=Hi!%20I%20want%20to%20know%20more%20about%20WhatsApp%20Business%20API%20integration',
      gradient: 'from-[#25D366] to-[#128C7E]',
      primary: true
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Schedule Demo',
      description: 'See it in action',
      action: 'Book Call',
      href: '#lead-form',
      gradient: 'from-[#FF7A00] to-[#FFB100]',
      primary: false
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us Now',
      description: 'Speak to an expert',
      action: 'Call Now',
      href: 'tel:+919876543210',
      gradient: 'from-[#075E54] to-[#128C7E]',
      primary: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      id="final-cta"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54]" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Heading */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-bold text-sm mb-6 border border-white/30">
              <Zap className="h-4 w-4" />
              Limited Time Offer
            </div>
            
            <h2 
              id="final-cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight"
            >
              Ready to Automate Your
              <br />
              <span className="text-[#FFB100]">
                WhatsApp Communication?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-semibold">
              Join 500+ businesses already saving time and increasing conversions with WhatsApp automation
            </p>

            {/* Urgency Points */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {urgencyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm md:text-base font-bold border border-white/20"
                >
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Options Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12"
          >
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl text-center ${
                  option.primary ? 'md:scale-105 ring-4 ring-white/30' : ''
                }`}
              >
                <div className={`inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${option.gradient} text-white mb-4 shadow-lg`}>
                  {option.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {option.description}
                </p>
                <Button
                  asChild
                  className={`w-full h-12 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-r ${option.gradient} text-white`}
                >
                  <a 
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {option.action} →
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Trust Section */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Your Brand Deserves to Be Where Your Customers Already Are
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                <span className="font-bold">On WhatsApp.</span> With 2 billion+ active users, it's the most direct way to reach customers.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-white">
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">500+</div>
                  <div className="text-sm opacity-90">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">10M+</div>
                  <div className="text-sm opacity-90">Messages Sent</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">98%</div>
                  <div className="text-sm opacity-90">Open Rate</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">48h</div>
                  <div className="text-sm opacity-90">Setup Time</div>
                </div>
              </div>

              <p className="text-sm text-white/70 mt-8">
                ✅ Official Meta Partner • ✅ GDPR Compliant • ✅ 24/7 Support • ✅ No Long-term Contracts
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] FinalCTASection component loaded');
