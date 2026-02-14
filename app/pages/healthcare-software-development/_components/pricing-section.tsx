'use client';

/**
 * Pricing Section Component - Healthcare Software Development
 * Transparent INR Packages
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  Building2,
  Smartphone,
  Database,
  Headphones,
  Award,
  DollarSign
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] PricingSection component loaded');

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [billingCycle, setBillingCycle] = useState('one-time');

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Clinic Management',
      description: 'Perfect for small clinics and individual practitioners',
      price: {
        oneTime: 250000,
        monthly: 25000
      },
      duration: '2-3 months',
      features: [
        'Patient Registration & Records',
        'Appointment Scheduling',
        'Basic Billing System',
        'Prescription Management',
        'Staff Management (up to 10)',
        'Basic Reporting',
        'Mobile App Access',
        'Email Support'
      ],
      notIncluded: [
        'Advanced Analytics',
        'Multi-location Support',
        'API Integrations',
        'Custom Modules'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      icon: Building2
    },
    {
      id: 'professional',
      name: 'Hospital Management',
      description: 'Comprehensive solution for hospitals and multi-specialty clinics',
      price: {
        oneTime: 500000,
        monthly: 50000
      },
      duration: '4-6 months',
      features: [
        'Complete Patient Management',
        'Advanced Appointment System',
        'Comprehensive Billing & Insurance',
        'Inventory Management',
        'Staff Management (unlimited)',
        'Advanced Analytics Dashboard',
        'Multi-location Support',
        'API Integrations',
        'Custom Workflows',
        'Priority Support',
        'Training & Onboarding',
        'Data Migration'
      ],
      notIncluded: [
        'AI-powered Features',
        'Advanced Telemedicine',
        'Custom Mobile Apps'
      ],
      popular: true,
      color: 'from-green-500 to-emerald-500',
      icon: Building2
    },
    {
      id: 'enterprise',
      name: 'Healthcare Ecosystem',
      description: 'Complete healthcare solution with AI and advanced features',
      price: {
        oneTime: 1000000,
        monthly: 100000
      },
      duration: '6-12 months',
      features: [
        'All Professional Features',
        'AI-powered Analytics',
        'Advanced Telemedicine Platform',
        'Custom Mobile Applications',
        'IoT Device Integration',
        'Predictive Analytics',
        'Advanced Security Features',
        'White-label Solutions',
        'Dedicated Support Team',
        'Custom Development',
        '24/7 Support',
        'SLA Guarantee'
      ],
      notIncluded: [],
      popular: false,
      color: 'from-purple-500 to-pink-500',
      icon: Building2
    }
  ];

  const addOns = [
    {
      name: 'EHR Integration',
      price: 50000,
      description: 'Seamless integration with existing EHR systems'
    },
    {
      name: 'Payment Gateway',
      price: 25000,
      description: 'Multiple payment options integration'
    },
    {
      name: 'SMS/WhatsApp Notifications',
      price: 15000,
      description: 'Automated patient communication'
    },
    {
      name: 'Advanced Reporting',
      price: 30000,
      description: 'Custom reports and analytics'
    },
    {
      name: 'Multi-language Support',
      price: 20000,
      description: 'Support for regional languages'
    },
    {
      name: 'Cloud Hosting (Annual)',
      price: 60000,
      description: 'Secure cloud hosting and maintenance'
    }
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Hire Healthcare Software Developer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Pricing & Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your healthcare facility. 
            All prices are in INR with no hidden costs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === 'one-time' ? 'text-gray-800 dark:text-white' : 'text-gray-500'}`}>
              One-time Payment
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'one-time' ? 'monthly' : 'one-time')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'monthly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-800 dark:text-white' : 'text-gray-500'}`}>
              Monthly Subscription
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
              variants={fadeInUp}
              whileHover={{ scale: plan.popular ? 1.03 : 1.01, y: -2 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${plan.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                  <plan.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  {plan.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Duration: {plan.duration}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                  {formatPrice(plan.price[billingCycle as keyof typeof plan.price])}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {billingCycle === 'one-time' ? 'One-time payment' : 'Per month'}
                </div>
                {billingCycle === 'monthly' && (
                  <div className="text-xs sm:text-sm text-green-600 dark:text-green-400 mt-2">
                    Save 20% with annual billing
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  What's Included:
                </h4>
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Included */}
              {plan.notIncluded.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Not Included:
                  </h4>
                  <div className="space-y-3">
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg transform hover:scale-105'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg'
              }`}>
                Get Started
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-ons Section */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {addon.name}
                  </h4>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {formatPrice(addon.price)}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Choose Our Pricing?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">No Hidden Costs</h4>
              <p className="text-blue-100">
                Transparent pricing with no surprise charges or hidden fees.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quick ROI</h4>
              <p className="text-blue-100">
                Most clients see return on investment within 6-12 months.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p className="text-blue-100">
                Round-the-clock support to ensure your system runs smoothly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us for a free consultation and custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <DollarSign className="w-5 h-5" />
              Get Free Quote
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}