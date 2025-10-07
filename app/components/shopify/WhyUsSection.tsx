'use client';

/**
 * WhyUsSection Component
 * 
 * Highlight unique value propositions
 * Features:
 * - Animated benefit cards
 * - Checkmark icons
 * - Quote/tagline
 * - Mobile-responsive
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Users, Clock, TrendingUp, Shield, Sparkles } from 'lucide-react';

console.log('[WhyUsSection] Component loaded');

interface Benefit {
  id: number;
  text: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    id: 1,
    text: '10+ Years combined e-commerce experience',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 2,
    text: 'Data-driven design with psychological CRO',
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    id: 3,
    text: '2× Faster delivery than typical agencies',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 4,
    text: '100% transparent process + reporting',
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: 5,
    text: 'Dedicated success manager',
    icon: <Clock className="w-5 h-5" />,
  },
];

const WhyUsSection = () => {
  console.log('[WhyUsSection] Rendering why us section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white via-[#1C4E80]/5 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00B894] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#1C4E80] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1C4E80]/10 to-[#00B894]/10 border border-[#1C4E80]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1C4E80]" />
            <span className="text-sm font-semibold text-gray-700">Why Choose Us</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why
            <span className="block mt-2 bg-gradient-to-r from-[#1C4E80] to-[#00B894] bg-clip-text text-transparent">
              Vedpragya Bharat
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another agency — we're your growth partners
          </p>
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00B894] to-transparent rounded-full -mr-32 -mt-32 opacity-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#1C4E80] to-transparent rounded-full -ml-32 -mb-32 opacity-10" />

            <div className="relative z-10">
              {/* Benefits list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B894] to-emerald-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow"
                    >
                      {benefit.icon}
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1 pt-2">
                      <p className="text-gray-800 font-medium text-lg leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <div className="inline-block">
                  <div className="bg-gradient-to-r from-[#1C4E80] to-[#00B894] rounded-2xl p-8 shadow-xl">
                    <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white italic">
                      "We don't just design stores —
                      <br />
                      <span className="text-cyan-300">we engineer revenue."</span>
                    </blockquote>
                  </div>
                  
                  {/* Arrow decoration */}
                  <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#00B894] mx-auto" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
        >
          {[
            { value: '100+', label: 'Happy Clients' },
            { value: '500K+', label: 'Orders Processed' },
            { value: '95%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-[#1C4E80] to-[#00B894] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
