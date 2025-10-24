'use client';

/**
 * @fileoverview Industry Focus - Industry-specific service recommendations
 * @description Component showcasing industry expertise and specialized service offerings
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Interactive industry selection
 * - Industry-specific service recommendations
 * - Success metrics by industry
 * - Case studies and testimonials
 * - Mobile-optimized responsive design
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home,
  Heart,
  ShoppingCart,
  Building2,
  Laptop,
  GraduationCap,
  Car,
  Globe,
  Target,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

interface Industry {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  description: string;
  clients: number;
  avgROAS: string;
  avgCPC: string;
  topServices: string[];
  caseStudy: {
    company: string;
    result: string;
    metric: string;
    description: string;
  };
  challenges: string[];
  solutions: string[];
}

interface IndustryFocusProps {
  selectedIndustry: string;
  onIndustryChange: (industry: string) => void;
}

const industries: Industry[] = [
  {
    id: 'Real Estate',
    name: 'Real Estate',
    icon: Home,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    description: 'Drive qualified leads and property inquiries with targeted Google Ads campaigns',
    clients: 25,
    avgROAS: '12.5×',
    avgCPC: '₹45',
    topServices: ['Local Business Ads', 'Lead Generation', 'YouTube Advertising'],
    caseStudy: {
      company: 'Premium Properties, Gurugram',
      result: '₹1.8L → ₹18L revenue',
      metric: '10× ROAS',
      description: 'Generated 150+ qualified leads in 45 days'
    },
    challenges: [
      'High competition for property keywords',
      'Seasonal demand fluctuations',
      'Long sales cycles',
      'Lead quality verification'
    ],
    solutions: [
      'Long-tail keyword targeting',
      'Remarketing for warm leads',
      'Call tracking and lead scoring',
      'CRM integration for follow-up'
    ]
  },
  {
    id: 'Healthcare',
    name: 'Healthcare',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    description: 'Compliant healthcare advertising that drives patient appointments and inquiries',
    clients: 30,
    avgROAS: '8.2×',
    avgCPC: '₹35',
    topServices: ['Local Business Ads', 'Google Ads Audit', 'Landing Page Optimization'],
    caseStudy: {
      company: 'MediCare Plus, Delhi',
      result: '300% increase in appointments',
      metric: '8.2× ROAS',
      description: 'Reduced cost per appointment by 60%'
    },
    challenges: [
      'Strict advertising policies',
      'Patient privacy concerns',
      'High competition for medical terms',
      'Seasonal health trends'
    ],
    solutions: [
      'Compliant ad copy and landing pages',
      'Local targeting for nearby patients',
      'Educational content marketing',
      'Appointment booking optimization'
    ]
  },
  {
    id: 'E-commerce',
    name: 'E-commerce',
    icon: ShoppingCart,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    description: 'Maximize online sales with optimized shopping campaigns and conversion funnels',
    clients: 40,
    avgROAS: '6.8×',
    avgCPC: '₹25',
    topServices: ['E-commerce Optimization', 'Performance Max', 'YouTube Advertising'],
    caseStudy: {
      company: 'StyleHub Fashion, Mumbai',
      result: '320% increase in sales',
      metric: '6.8× ROAS',
      description: 'Optimized product feeds and dynamic remarketing'
    },
    challenges: [
      'High cart abandonment rates',
      'Seasonal shopping patterns',
      'Competitive pricing pressure',
      'Product feed optimization'
    ],
    solutions: [
      'Dynamic remarketing campaigns',
      'Shopping campaign optimization',
      'Landing page conversion optimization',
      'Cross-platform retargeting'
    ]
  },
  {
    id: 'B2B Services',
    name: 'B2B Services',
    icon: Building2,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    description: 'Generate high-quality B2B leads with targeted campaigns and lead nurturing',
    clients: 35,
    avgROAS: '9.5×',
    avgCPC: '₹55',
    topServices: ['B2B Lead Generation', 'Enterprise Management', 'Google Ads Audit'],
    caseStudy: {
      company: 'TechSolutions, Bangalore',
      result: '500+ qualified leads',
      metric: '9.5× ROAS',
      description: 'Reduced cost per lead by 40% in 30 days'
    },
    challenges: [
      'Long sales cycles',
      'Complex decision-making process',
      'High-value, low-volume leads',
      'Lead qualification and scoring'
    ],
    solutions: [
      'Account-based marketing strategies',
      'LinkedIn and Google Ads integration',
      'Lead scoring and qualification',
      'CRM integration and nurturing'
    ]
  },
  {
    id: 'SaaS',
    name: 'SaaS',
    icon: Laptop,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    description: 'Drive trial signups and paid conversions with targeted SaaS marketing campaigns',
    clients: 20,
    avgROAS: '7.2×',
    avgCPC: '₹40',
    topServices: ['B2B Lead Generation', 'Performance Max', 'Landing Page Optimization'],
    caseStudy: {
      company: 'CloudTech Solutions',
      result: '200% increase in trials',
      metric: '7.2× ROAS',
      description: 'Optimized trial-to-paid conversion funnel'
    },
    challenges: [
      'High customer acquisition costs',
      'Trial-to-paid conversion rates',
      'Competitive SaaS landscape',
      'Feature differentiation'
    ],
    solutions: [
      'Free trial optimization campaigns',
      'Feature-focused ad copy',
      'Competitive analysis and positioning',
      'Conversion funnel optimization'
    ]
  },
  {
    id: 'Education',
    name: 'Education',
    icon: GraduationCap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    description: 'Drive course enrollments and student inquiries with education-focused campaigns',
    clients: 15,
    avgROAS: '5.5×',
    avgCPC: '₹30',
    topServices: ['YouTube Advertising', 'Local Business Ads', 'Performance Max'],
    caseStudy: {
      company: 'EduTech Academy',
      result: '150% increase in enrollments',
      metric: '5.5× ROAS',
      description: 'Video campaigns driving course signups'
    },
    challenges: [
      'Seasonal enrollment patterns',
      'High competition for education keywords',
      'Long consideration periods',
      'Trust and credibility building'
    ],
    solutions: [
      'Video marketing campaigns',
      'Testimonial and social proof',
      'Free course previews',
      'Email nurturing sequences'
    ]
  },
  {
    id: 'Automotive',
    name: 'Automotive',
    icon: Car,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    description: 'Drive showroom visits and vehicle inquiries with automotive-focused campaigns',
    clients: 10,
    avgROAS: '6.2×',
    avgCPC: '₹50',
    topServices: ['Local Business Ads', 'YouTube Advertising', 'Google Ads Audit'],
    caseStudy: {
      company: 'AutoMax Dealership',
      result: '180% increase in showroom visits',
      metric: '6.2× ROAS',
      description: 'Local campaigns driving foot traffic'
    },
    challenges: [
      'High-value, long consideration cycles',
      'Local competition',
      'Seasonal buying patterns',
      'Test drive and showroom visits'
    ],
    solutions: [
      'Local targeting and extensions',
      'Vehicle-specific landing pages',
      'Test drive booking optimization',
      'Seasonal campaign adjustments'
    ]
  },
  {
    id: 'Technology',
    name: 'Technology',
    icon: Globe,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    description: 'Drive tech product sales and service inquiries with technology-focused campaigns',
    clients: 25,
    avgROAS: '8.8×',
    avgCPC: '₹45',
    topServices: ['E-commerce Optimization', 'B2B Lead Generation', 'Performance Max'],
    caseStudy: {
      company: 'TechGear Solutions',
      result: '250% increase in product sales',
      metric: '8.8× ROAS',
      description: 'Product-specific campaigns and remarketing'
    },
    challenges: [
      'Rapid technology changes',
      'High competition for tech keywords',
      'Complex product specifications',
      'Technical audience targeting'
    ],
    solutions: [
      'Product-specific campaigns',
      'Technical keyword targeting',
      'Comparison and feature ads',
      'Technical content marketing'
    ]
  }
];

export function IndustryFocus({ selectedIndustry, onIndustryChange }: IndustryFocusProps) {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const currentIndustry = industries.find(industry => industry.id === selectedIndustry) || industries[0];

  const handleIndustryClick = (industryId: string) => {
    onIndustryChange(industryId);
    console.log(`[IndustryFocus] Industry selected: ${industryId}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'industry_selection', {
        selected_industry: industryId,
        page_location: window.location.pathname
      });
    }
  };

  const handleServiceClick = (serviceName: string, industryName: string) => {
    console.log(`[IndustryFocus] Service clicked: ${serviceName} for ${industryName}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'industry_service_click', {
        service_name: serviceName,
        industry_name: industryName,
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Industry Expertise
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Specialized Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our deep industry knowledge ensures your Google Ads campaigns are perfectly 
            tailored to your sector's unique challenges and opportunities.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
          {industries.map((industry, index) => (
            <motion.button
              key={industry.id}
              onClick={() => handleIndustryClick(industry.id)}
              onHoverStart={() => setHoveredIndustry(industry.id)}
              onHoverEnd={() => setHoveredIndustry(null)}
              className={`relative p-4 rounded-xl transition-all duration-300 ${
                selectedIndustry === industry.id
                  ? 'bg-white shadow-lg scale-105'
                  : 'bg-white/50 hover:bg-white hover:shadow-md'
              }`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                <div className={`w-12 h-12 ${industry.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  selectedIndustry === industry.id ? 'scale-110' : ''
                } transition-transform duration-300`}>
                  <industry.icon className={`w-6 h-6 ${industry.color}`} />
                </div>
                <div className={`text-sm font-medium ${
                  selectedIndustry === industry.id ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {industry.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {industry.clients} clients
                </div>
              </div>

              {/* Selection Indicator */}
              {selectedIndustry === industry.id && (
                <motion.div
                  className="absolute inset-0 border-2 border-blue-500 rounded-xl"
                  layoutId="selectedIndustry"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Industry Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry}
            className="grid lg:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Column - Industry Info */}
            <div className="space-y-8">
              {/* Industry Overview */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${currentIndustry.bgColor} rounded-xl flex items-center justify-center`}>
                    <currentIndustry.icon className={`w-8 h-8 ${currentIndustry.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentIndustry.name}</h3>
                    <p className="text-gray-600">{currentIndustry.description}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{currentIndustry.avgROAS}</div>
                    <div className="text-sm text-gray-600">Average ROAS</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">₹{currentIndustry.avgCPC}</div>
                    <div className="text-sm text-gray-600">Average CPC</div>
                  </div>
                </div>

                {/* Case Study */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Success Story</h4>
                  <div className="text-lg font-bold text-blue-600 mb-2">
                    {currentIndustry.caseStudy.result}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {currentIndustry.caseStudy.company} - {currentIndustry.caseStudy.metric}
                  </div>
                  <div className="text-sm text-gray-700">
                    {currentIndustry.caseStudy.description}
                  </div>
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-red-600 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Common Challenges
                  </h4>
                  <ul className="space-y-2">
                    {currentIndustry.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-green-600 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Our Solutions
                  </h4>
                  <ul className="space-y-2">
                    {currentIndustry.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Recommended Services */}
            <div className="space-y-6">
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Recommended Services for {currentIndustry.name}
                </h3>

                <div className="space-y-4">
                  {currentIndustry.topServices.map((service, index) => (
                    <motion.div
                      key={service}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-900">{service}</span>
                      </div>
                      <Link
                        href={`/pages/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => handleServiceClick(service, currentIndustry.name)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Get Industry-Specific Strategy</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our experts understand {currentIndustry.name.toLowerCase()} challenges and can create 
                    a customized Google Ads strategy for your business.
                  </p>
                  <Link
                    href="#roi-calculator"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <Award className="w-4 h-4" />
                    Get Free Consultation
                  </Link>
                </div>
              </motion.div>

              {/* Industry Stats */}
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">Industry Performance</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{currentIndustry.clients}+</div>
                    <div className="text-blue-100">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{currentIndustry.avgROAS}</div>
                    <div className="text-blue-100">Average ROAS</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default IndustryFocus;