'use client';

/**
 * Pricing Section Component - MUMBAI WEB DEVELOPMENT PRICING
 * Premium pricing section with transparent INR pricing
 * 
 * @version 2.0.0 - Production Ready Pricing
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { 
  CheckCircle2, 
  IndianRupee, 
  Sparkles, 
  ArrowRight, 
  Phone,
  Star,
  Clock,
  Shield,
  Zap,
  Users,
  Award
} from 'lucide-react';

console.log('[Mumbai-Web-Development] PricingSection component loaded');

export function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    console.log('[Mumbai-Web-Development] PricingSection mounted');
    return () => console.log('[Mumbai-Web-Development] PricingSection unmounted');
  }, []);

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small Mumbai businesses getting started online",
      price: "15,999",
      originalPrice: "24,999",
      discount: "36% OFF",
      period: "One-time payment",
      popular: false,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      features: [
        "5-7 Page Website",
        "Mobile-Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Google Analytics Setup",
        "SSL Certificate",
        "1 Month Free Support",
        "Mumbai Local SEO"
      ],
      notIncluded: [
        "E-commerce Functionality",
        "Advanced Customization",
        "Priority Support"
      ]
    },
    {
      name: "Professional",
      description: "Most popular choice for growing Mumbai businesses",
      price: "49,999",
      originalPrice: "79,999",
      discount: "38% OFF",
      period: "One-time payment",
      popular: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      features: [
        "10-15 Page Website",
        "Advanced Mobile Design",
        "Complete SEO Optimization",
        "E-commerce Integration",
        "Payment Gateway Setup",
        "Admin Dashboard",
        "3 Months Free Support",
        "Mumbai Local SEO + Google My Business",
        "Social Media Integration",
        "Performance Optimization",
        "Content Management System",
        "Priority Support"
      ],
      notIncluded: [
        "Custom Mobile App",
        "Advanced Analytics Dashboard"
      ]
    },
    {
      name: "Enterprise",
      description: "Complete solution for large Mumbai businesses and corporations",
      price: "95,000",
      originalPrice: "1,50,000",
      discount: "37% OFF",
      period: "One-time payment",
      popular: false,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      features: [
        "Unlimited Pages",
        "Custom Design & Development",
        "Advanced E-commerce Platform",
        "Multi-language Support",
        "Custom Integrations",
        "Advanced Analytics Dashboard",
        "6 Months Free Support",
        "Complete Mumbai Local SEO Strategy",
        "Social Media Management Setup",
        "Email Marketing Integration",
        "Custom Mobile App (Basic)",
        "Dedicated Project Manager",
        "24/7 Priority Support",
        "Monthly Performance Reports"
      ],
      notIncluded: [
        "Ongoing Content Creation",
        "Advanced Mobile App Features"
      ]
    }
  ];

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
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-slate-900"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Hire Web Developer Mumbai Pricing & Packages
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            No hidden costs, no recurring fees. Choose the perfect plan for your Mumbai business and get started today.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative p-8 rounded-2xl border-2 ${
                plan.popular 
                  ? 'border-purple-500 shadow-2xl scale-105' 
                  : 'border-slate-200 dark:border-slate-700 shadow-lg'
              } bg-white dark:bg-slate-800 hover:shadow-2xl transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{plan.description}</p>
                
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <IndianRupee className="h-8 w-8 text-slate-900 dark:text-white" />
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-slate-400 line-through">₹{plan.originalPrice}</span>
                    <span className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs font-bold">
                      {plan.discount}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{plan.period}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-slate-900 dark:text-white flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  What's Included
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                    : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white'
                } font-semibold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                onClick={() => console.log(`[Mumbai-Web-Development] Pricing CTA - ${plan.name} clicked`)}
              >
                <a href="#lead-form" className="flex items-center justify-center">
                  Choose {plan.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No Hidden Costs</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Transparent pricing with no surprise charges</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">14-21 Days Delivery</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Fast turnaround time for your project</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Money-Back Guarantee</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">100% satisfaction guarantee or your money back</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Mumbai Support</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Local team with Mumbai market expertise</p>
            </div>
          </div>
        </motion.div>

        {/* Custom Quote CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeInUp}
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Every Mumbai business is unique. Let us create a custom web solution tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => console.log('[Mumbai-Web-Development] Custom Quote CTA clicked')}
            >
              <a href="#lead-form" className="flex items-center">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg"
              onClick={() => console.log('[Mumbai-Web-Development] Call Expert CTA clicked')}
            >
              <a href="tel:+919963730111" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Mumbai Expert
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}