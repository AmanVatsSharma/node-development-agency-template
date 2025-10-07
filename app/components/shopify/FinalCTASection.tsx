'use client';

/**
 * FinalCTASection Component
 * 
 * Final call-to-action with WhatsApp and demo call options
 * Features:
 * - Eye-catching animated design
 * - WhatsApp integration
 * - Calendar scheduling link
 * - Urgency elements
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MessageCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

console.log('[FinalCTASection] Component loaded');

const FinalCTASection = () => {
  console.log('[FinalCTASection] Rendering final CTA section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleWhatsApp = () => {
    console.log('[FinalCTASection] WhatsApp button clicked');
    // Replace with actual WhatsApp number
    const phoneNumber = '919876543210'; // Example number
    const message = encodeURIComponent('Hi! I\'m interested in your Shopify Store Setup services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleScheduleCall = () => {
    console.log('[FinalCTASection] Schedule Call button clicked');
    // Replace with actual Calendly or calendar link
    // window.open('https://calendly.com/yourlink', '_blank');
    
    // For now, scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00B894] via-purple-500 to-[#1C4E80] rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main CTA card */}
          <div className="relative bg-gradient-to-br from-[#1C4E80] via-[#0A2647] to-[#000814] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B894] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#00B894]" />
                <span className="text-sm font-semibold text-white">Limited Slots Available</span>
                <Zap className="w-4 h-4 text-yellow-400" />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Ready to Launch Your
                <br />
                <span className="bg-gradient-to-r from-[#00B894] to-cyan-400 bg-clip-text text-transparent">
                  Shopify Brand?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                Let's design, optimize, and automate your dream store.
                Book your free consultation now!
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                {/* Schedule Call Button */}
                <Button
                  onClick={handleScheduleCall}
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#00B894] to-emerald-500 hover:from-[#00B894]/90 hover:to-emerald-500/90 text-white font-bold px-10 py-7 rounded-2xl text-lg shadow-2xl hover:shadow-[#00B894]/50 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Schedule Free 30-Min Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>

                {/* WhatsApp Button */}
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="group bg-white hover:bg-gray-50 text-gray-900 font-bold px-10 py-7 rounded-2xl text-lg shadow-xl w-full sm:w-auto border-2 border-white/20"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                    Chat on WhatsApp
                  </span>
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00B894]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00B894]" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00B894]" />
                  <span>Quick response time</span>
                </div>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#00B894] to-emerald-500 rounded-2xl opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"
            />
          </div>

          {/* SEO Keywords section (subtle) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 text-center"
          >
            <p className="text-xs text-gray-400 italic max-w-4xl mx-auto leading-relaxed">
              Shopify store setup • Shopify development agency • Custom Shopify design • 
              Shopify conversion optimization • Shopify expert India • D2C store setup • 
              E-commerce solutions • Online store development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
