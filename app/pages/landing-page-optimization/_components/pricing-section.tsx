import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PricingSection() {
  const handleCTAClick = (plan: string) => {
    console.log(`[Landing-Page-Pricing] CTA clicked: ${plan}`);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'landing_page_pricing_cta_click', {
        plan: plan,
        page_location: window.location.pathname
      });
    }
  };

  const plans = [
    {
      name: "Basic Optimization",
      price: "₹30K",
      period: "one-time",
      description: "Perfect for small businesses with basic landing page needs",
      features: [
        "Landing Page Analysis",
        "Basic Design Improvements",
        "Mobile Optimization",
        "Speed Optimization",
        "Conversion Tracking Setup",
        "Email Support",
        "30-Day Follow-up",
        "Implementation Guide"
      ],
      cta: "Start Basic Optimization",
      popular: false
    },
    {
      name: "Professional Optimization",
      price: "₹60K",
      period: "one-time",
      description: "For growing businesses with complex landing page requirements",
      features: [
        "Everything in Basic",
        "Advanced Design & UX",
        "A/B Testing Setup",
        "Conversion Rate Optimization",
        "Analytics Integration",
        "Priority Support",
        "90-Day Follow-up",
        "Custom Recommendations",
        "Performance Monitoring",
        "Strategic Roadmap"
      ],
      cta: "Start Professional Optimization",
      popular: true
    },
    {
      name: "Enterprise Optimization",
      price: "₹1L+",
      period: "one-time",
      description: "For large businesses with extensive landing page operations",
      features: [
        "Everything in Professional",
        "Multi-Page Optimization",
        "Advanced A/B Testing",
        "Custom Development",
        "Dedicated Consultant",
        "6-Month Follow-up",
        "White-label Solutions",
        "API Integration",
        "Custom Analytics",
        "Strategic Consulting"
      ],
      cta: "Contact for Custom Optimization",
      popular: false
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Landing Page Optimization Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect landing page optimization plan for your business. All plans include our 3.5× conversion rate guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-yellow-600 to-orange-700 text-white shadow-2xl scale-105'
                  : 'bg-white text-gray-900 shadow-lg border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-yellow-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-yellow-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-green-400' : 'text-yellow-600'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-yellow-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="tel:+919876543210"
                onClick={() => handleCTAClick(plan.name)}
                className={`w-full group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-yellow-600 hover:bg-yellow-50 hover:scale-105'
                    : 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-700 hover:to-orange-700 hover:scale-105'
                }`}
              >
                <Zap className="w-5 h-5" />
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            All plans include our 3.5× conversion rate guarantee and 30-day money-back guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
            <span>✓ Free consultation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}