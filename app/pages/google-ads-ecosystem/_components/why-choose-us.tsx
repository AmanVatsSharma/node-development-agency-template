'use client';

/**
 * @fileoverview Why Choose Us - Key differentiators and expertise showcase
 * @description Component highlighting unique value propositions and competitive advantages
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Key differentiators showcase
 * - Expertise and credentials display
 * - Trust signals and certifications
 * - Interactive elements and animations
 * - Mobile-optimized responsive design
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

export function WhyChooseUs() {
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
      metrics: '8.5× Average ROAS',
      color: 'from-green-600 to-green-800',
      details: [
        'Revenue-focused optimization',
        'Cost per acquisition tracking',
        'Lifetime value analysis',
        'Profit margin optimization',
        'ROI reporting and analysis'
      ]
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Optimization',
      description: 'We review and optimize your campaigns every 48 hours for maximum performance',
      metrics: '48-Hour Turnaround',
      color: 'from-yellow-600 to-orange-600',
      details: [
        'Daily performance monitoring',
        'Bi-weekly optimization cycles',
        'Real-time bid adjustments',
        'A/B testing implementation',
        'Rapid response to market changes'
      ]
    },
    {
      icon: BarChart3,
      title: 'AI + Automation Built In',
      description: 'Advanced automation and AI tools ensure your campaigns run at peak efficiency',
      metrics: '95% Automation',
      color: 'from-purple-600 to-purple-800',
      details: [
        'Smart bidding strategies',
        'Automated bid adjustments',
        'AI-powered ad copy testing',
        'Predictive analytics',
        'Machine learning optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Complete Transparency',
      description: 'You own your data, accounts, and have full visibility into every aspect of your campaigns',
      metrics: '100% Transparent',
      color: 'from-indigo-600 to-indigo-800',
      details: [
        'Full account access',
        'Real-time reporting dashboard',
        'Data ownership guarantee',
        'Transparent pricing',
        'No hidden fees or contracts'
      ]
    }
  ];

  const credentials = [
    {
      title: 'Google Partner',
      description: 'Official Google Partner with advanced certifications',
      icon: Award,
      verified: true
    },
    {
      title: '10+ Years Experience',
      description: 'Over a decade of Google Ads expertise',
      icon: Clock,
      verified: true
    },
    {
      title: '500+ Campaigns',
      description: 'Successfully managed campaigns across industries',
      icon: Target,
      verified: true
    },
    {
      title: '98% Client Retention',
      description: 'Long-term partnerships with satisfied clients',
      icon: Users,
      verified: true
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock campaign monitoring and support',
      icon: Headphones,
      verified: true
    },
    {
      title: 'Global Reach',
      description: 'Serving clients across India and internationally',
      icon: Globe,
      verified: true
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Deep Analysis',
      description: 'Comprehensive audit of your current campaigns, competitors, and market opportunities'
    },
    {
      step: '02',
      title: 'Strategic Planning',
      description: 'Custom strategy development based on your business goals and industry best practices'
    },
    {
      step: '03',
      title: 'Campaign Launch',
      description: 'Expert implementation with advanced tracking, optimization, and monitoring setup'
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Google Ads Ecosystem?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another Google Ads agency. We're your strategic partner in digital growth, 
            with the expertise, tools, and commitment to deliver exceptional results.
          </p>
        </motion.div>

        {/* Key Differentiators */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Features List */}
          <div className="space-y-6">
            {differentiators.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
                onClick={() => handleFeatureClick(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <div className="text-sm font-semibold text-blue-600">{feature.metrics}</div>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${
                    activeFeature === index ? 'rotate-90' : ''
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Active Feature Details */}
          <motion.div
            key={activeFeature}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className={`w-20 h-20 bg-gradient-to-r ${differentiators[activeFeature].color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <differentiators[activeFeature].icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {differentiators[activeFeature].title}
              </h3>
              <p className="text-gray-600 mb-4">
                {differentiators[activeFeature].description}
              </p>
              <div className="text-3xl font-bold text-blue-600">
                {differentiators[activeFeature].metrics}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 mb-4">What This Means for You:</h4>
              {differentiators[activeFeature].details.map((detail, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Credentials & Certifications */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Credentials & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <credential.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{credential.title}</h4>
                    {credential.verified && (
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Verified
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{credential.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Proven 5-Step Process
          </h3>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses who trust us with their Google Ads campaigns. 
            Let's discuss how we can help you achieve your growth goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#roi-calculator"
              onClick={() => handleCTAClick('roi_calculator')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Calculate My ROI
            </Link>
            
            <Link
              href="tel:+919876543210"
              onClick={() => handleCTAClick('phone_call')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 border border-white/30"
            >
              <Play className="w-5 h-5" />
              Schedule Call
            </Link>
            
            <Link
              href="#final-cta"
              onClick={() => handleCTAClick('get_started')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Get Started Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;