import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PricingSection() {
  const handleCTAClick = (plan: string) => {
    console.log(`[Google-Ads-Audit-Pricing] CTA clicked: ${plan}`);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'google_ads_audit_pricing_cta_click', {
        plan: plan,
        page_location: window.location.pathname
      });
    }
  };

  const plans = [
    {
      name: "Basic Audit",
      price: "₹25K",
      period: "one-time",
      description: "Perfect for small businesses with basic Google Ads needs",
      features: [
        "Account Structure Analysis",
        "Keyword Performance Review",
        "Basic Recommendations",
        "Performance Report",
        "Email Support",
        "30-Day Follow-up",
        "Implementation Guide",
        "Priority Actions"
      ],
      cta: "Start Basic Audit",
      popular: false
    },
    {
      name: "Professional Audit",
      price: "₹50K",
      period: "one-time",
      description: "For growing businesses with complex Google Ads accounts",
      features: [
        "Everything in Basic",
        "Advanced Performance Analysis",
        "Competitor Analysis",
        "Audience Analysis",
        "Bidding Strategy Review",
        "Priority Support",
        "Strategic Roadmap",
        "Implementation Support",
        "90-Day Follow-up",
        "Custom Recommendations"
      ],
      cta: "Start Professional Audit",
      popular: true
    },
    {
      name: "Enterprise Audit",
      price: "₹75K+",
      period: "one-time",
      description: "For large businesses with extensive Google Ads operations",
      features: [
        "Everything in Professional",
        "Multi-Account Analysis",
        "Advanced Analytics",
        "Custom Strategy Development",
        "Executive Presentation",
        "Dedicated Consultant",
        "6-Month Follow-up",
        "White-label Reports",
        "API Integration",
        "Custom Development"
      ],
      cta: "Contact for Custom Audit",
      popular: false
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Google Ads Audit & Strategy Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect audit plan for your Google Ads account. All plans include our 40%+ improvement guarantee.
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
                  ? 'bg-gradient-to-br from-teal-600 to-cyan-700 text-white shadow-2xl scale-105'
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
                <p className={`text-sm mb-4 ${plan.popular ? 'text-teal-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-teal-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-green-400' : 'text-teal-600'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-teal-100' : 'text-gray-600'}`}>
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
                    ? 'bg-white text-teal-600 hover:bg-teal-50 hover:scale-105'
                    : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700 hover:scale-105'
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
            All plans include our 40%+ improvement guarantee and 30-day money-back guarantee.
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