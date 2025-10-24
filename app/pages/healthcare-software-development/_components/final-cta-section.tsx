'use client';

/**
 * Final CTA Section Component - Healthcare Software Development
 * Strong Closing with Urgency
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  Shield, 
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] FinalCTASection component loaded');

export function FinalCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stats = [
    { number: '100+', label: 'Healthcare Providers', icon: Users },
    { number: '50,000+', label: 'Patients Served', icon: TrendingUp },
    { number: '₹10Cr+', label: 'Cost Savings', icon: Award },
    { number: '99%', label: 'Success Rate', icon: CheckCircle }
  ];

  const benefits = [
    'HIPAA Compliant Solutions',
    '24/7 Technical Support',
    'Custom Healthcare Workflows',
    'Real-time Analytics & Reporting',
    'Mobile-First Design',
    'Seamless Integration Capabilities'
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
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
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'grid-flow 20s linear infinite'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400">
              Healthcare Facility?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            Join 100+ healthcare providers who have already revolutionized their operations 
            with our cutting-edge software solutions. Don't let your competitors get ahead.
          </p>
          
          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-red-400" />
              <span className="text-lg font-semibold text-red-300">Limited Time Offer</span>
            </div>
            <p className="text-red-100">
              Get 20% off your first project when you sign up this month. 
              Plus, receive a free security audit worth ₹50,000.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              Get Free Consultation Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 backdrop-blur-sm">
            <span className="flex items-center justify-center gap-3">
              <MessageSquare className="w-6 h-6" />
              Start Live Chat
            </span>
          </button>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg font-semibold">{benefit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Our Healthcare Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-2xl font-bold mb-8">
            Trusted by Healthcare Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Apollo Hospitals</div>
            <div className="text-2xl font-bold">Fortis Healthcare</div>
            <div className="text-2xl font-bold">Max Healthcare</div>
            <div className="text-2xl font-bold">Manipal Hospitals</div>
            <div className="text-2xl font-bold">Medanta</div>
          </div>
        </motion.div>

        {/* Final Urgency CTA */}
        <motion.div 
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-yellow-300" />
            <h3 className="text-3xl font-bold">Don't Wait - Act Now!</h3>
          </div>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Every day you wait is a day your competitors get ahead. 
            Transform your healthcare facility today and start seeing results immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: +91 98765 43210
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Email: healthcare@vedpragyabharat.com
            </button>
          </div>
          <div className="mt-6 text-red-200 text-sm">
            ⚡ Limited spots available this month - Book your consultation today!
          </div>
        </motion.div>
      </div>
    </section>
  );
}