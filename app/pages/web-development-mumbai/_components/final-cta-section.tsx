'use client';

/**
 * Final CTA Section Component - STRONG URGENCY & FOMO
 * Final call-to-action with urgency and FOMO elements
 * 
 * @version 1.0.0 - Final CTA
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Phone, Clock, Users, Star } from 'lucide-react';

console.log('[Mumbai-Web-Development] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] FinalCTASection mounted');
    return () => console.log('[Mumbai-Web-Development] FinalCTASection unmounted');
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
      id="final-cta"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          {/* Urgency Badge */}
          <div className="inline-block px-4 sm:px-6 py-2 bg-red-500 text-white rounded-full mb-6 text-sm font-bold animate-pulse">
            ⚡ ONLY 2 SLOTS LEFT THIS MONTH - BOOK NOW!
          </div>

          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Ready to Transform Your Mumbai Business?
          </h2>

          <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Join 200+ successful Mumbai businesses who chose us for their web development needs. 
            Don't let your competitors get ahead - start your project today!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-sm text-indigo-200">Mumbai Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-sm text-indigo-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">14-21</div>
              <div className="text-sm text-indigo-200">Days Delivery</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => console.log('[Mumbai-Web-Development] Final CTA - Get Quote clicked')}
            >
              <a href="#lead-form" className="flex items-center">
                Get Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-bold px-8 py-4 text-lg"
              onClick={() => console.log('[Mumbai-Web-Development] Final CTA - Call Expert clicked')}
            >
              <a href="tel:+919963730111" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Mumbai Expert
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-indigo-200">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>14-21 Days Delivery</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>200+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-indigo-100">
              <strong>Limited Time Offer:</strong> Book your free consultation this month and get 
              <span className="font-bold text-yellow-300"> ₹10,000 off</span> your first project. 
              This offer expires in 7 days!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}