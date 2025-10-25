'use client';

/**
 * @fileoverview Why Choose Us - Key differentiators and expertise showcase
 * @description Component highlighting unique value propositions and competitive advantages
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Target,
  TrendingUp,
  Users,
  Shield,
  Zap,
  BarChart3,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Headphones,
  ArrowRight,
  Play,
  Download
} from 'lucide-react';
import Link from 'next/link';

export function WhyChooseUsSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const differentiators = [
    {
      icon: Award,
      title: 'Google Partner Certified',
      description: 'Official Google Partner with advanced certifications and access to beta features',
      metrics: '10+ Years Experience',
      color: 'from-blue-600 to-blue-800',
      details: [
        'Google Ads Certified',
        'Google Analytics Certified',
        'Shopping Ads Certified',
        'Video Ads Certified',
        'Display Ads Certified'
      ]
    },
    {
      icon: Target,
      title: 'ROI-Obsessed Approach',
      description: 'We focus on profitable campaigns that deliver measurable returns, not vanity metrics',
      metrics: '6.5× Average ROAS',
      color: 'from-green-600 to-green-800',
      details: [
        'Revenue-focused optimization',
        'Cost-per-acquisition reduction',
        'Lifetime value maximization',
        'Profit margin improvement',
        'ROI tracking and reporting'
      ]
    },
    {
      icon: Users,
      title: 'Dedicated Account Teams',
      description: 'Each client gets a dedicated team of specialists with deep expertise in their industry',
      metrics: '24/7 Support',
      color: 'from-purple-600 to-purple-800',
      details: [
        'Dedicated account manager',
        'Specialized campaign managers',
        'Creative team support',
        'Analytics specialists',
        'Strategic consultants'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security and compliance with enterprise data protection standards',
      metrics: '100% Secure',
      color: 'from-indigo-600 to-indigo-800',
      details: [
        'SOC 2 Type II compliant',
        'GDPR compliant',
        'Data encryption at rest',
        'Secure API integrations',
        'Regular security audits'
      ]
    },
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms that continuously optimize campaigns for maximum performance',
      metrics: '95% Automated',
      color: 'from-yellow-600 to-yellow-800',
      details: [
        'Machine learning bidding',
        'Automated A/B testing',
        'Predictive analytics',
        'Smart audience targeting',
        'Dynamic ad optimization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Transparent Reporting',
      description: 'Real-time dashboards and detailed reports that show exactly how your campaigns are performing',
      metrics: 'Real-time Data',
      color: 'from-red-600 to-red-800',
      details: [
        'Real-time performance dashboards',
        'Custom reporting suite',
        'Automated alerts',
        'Executive summaries',
        'ROI attribution tracking'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Comprehensive analysis of your business, competitors, and market opportunities'
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Professional campaign creation with advanced targeting and optimization'
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'Campaign launch with 24/7 monitoring and immediate optimization'
    },
    {
      step: '04',
      title: 'Continuous Optimization',
      description: 'Ongoing optimization, testing, and scaling based on performance data and market changes'
    },
    {
      step: '05',
      title: 'Growth & Scaling',
      description: 'Strategic expansion and scaling of successful campaigns for maximum growth'
    }
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    console.log(`[WhyChooseUs] Feature selected: ${differentiators[index].title}`);
  };

  const handleCTAClick = (ctaType: string) => {
    console.log(`[WhyChooseUs] CTA clicked: ${ctaType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'why_choose_us_cta', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Rajapragya Bharat?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another Google Ads agency. We're your strategic partner in digital growth, 
            combining cutting-edge technology with deep industry expertise.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                activeFeature === index ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => handleFeatureClick(index)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.metrics}</p>
                </div>
              </div>
              <p className="text-white/90 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Proven 5-Step Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 500+ businesses who trust us with their Google Ads success. 
            Let's discuss how we can help you achieve your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919876543210"
              onClick={() => handleCTAClick('phone_call')}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <Phone className="w-5 h-5" />
              Call Our Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              onClick={() => handleCTAClick('schedule_consultation')}
              className="group inline-flex items-center gap-3 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}