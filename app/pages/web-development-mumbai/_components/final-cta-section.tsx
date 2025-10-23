'use client';

/**
 * Final CTA Section Component - STRONG URGENCY & FOMO
 * Premium final call-to-action with urgency and FOMO elements
 * 
 * @version 2.0.0 - Production Ready Final CTA
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  ArrowRight, 
  Phone, 
  Clock, 
  Users, 
  Star, 
  Award,
  Zap,
  CheckCircle,
  Shield,
  TrendingUp
} from 'lucide-react';

console.log('[Mumbai-Web-Development] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] FinalCTASection mounted');
    return () => console.log('[Mumbai-Web-Development] FinalCTASection unmounted');
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden"
      id="final-cta"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Urgency Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full mb-8 text-sm font-bold shadow-xl animate-pulse"
          >
            <Zap className="h-5 w-5 mr-2" />
            ONLY 2 SLOTS LEFT THIS MONTH - BOOK NOW!
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            id="final-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Transform Your Mumbai Business?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Join 200+ successful Mumbai businesses who chose us for their web development needs. 
            Don't let your competitors get ahead - start your project today!
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <Users className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <div className="text-sm text-blue-200">Mumbai Clients</div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-sm text-blue-200">Average Rating</div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <Clock className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">14-21</div>
              <div className="text-sm text-blue-200">Days Delivery</div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <Award className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-blue-200">Satisfaction</div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              onClick={() => console.log('[Mumbai-Web-Development] Final CTA - Get Quote clicked')}
            >
              <a href="#lead-form" className="flex items-center">
                Get Free Quote Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold px-12 py-6 text-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => console.log('[Mumbai-Web-Development] Final CTA - Call Expert clicked')}
            >
              <a href="tel:+919963730111" className="flex items-center">
                <Phone className="mr-3 h-6 w-6" />
                Call Mumbai Expert
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 text-sm text-blue-200 mb-12"
          >
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>14-21 Days Delivery</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>200+ Happy Clients</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Money-Back Guarantee</span>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Limited Time Offer</h3>
            </div>
            <p className="text-lg text-yellow-100 mb-4">
              Book your free consultation this month and get{' '}
              <span className="font-bold text-yellow-300 text-2xl">₹10,000 off</span>{' '}
              your first project.
            </p>
            <p className="text-yellow-200 font-semibold">
              This offer expires in 7 days! Don't miss out on this exclusive Mumbai business opportunity.
            </p>
          </motion.div>

          {/* Mumbai Areas Served */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <p className="text-blue-200 mb-4 text-lg font-medium">
              Proudly serving all Mumbai areas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Bandra', 'Andheri', 'Powai', 'Thane', 'Malad', 'Goregaon', 'Juhu', 'Worli', 'Navi Mumbai', 'Borivali', 'Kandivali', 'Dadar'].map((area, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}