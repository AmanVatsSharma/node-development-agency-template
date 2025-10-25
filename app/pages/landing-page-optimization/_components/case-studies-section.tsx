import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Monitor, DollarSign, Target, ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "E-commerce Store",
      industry: "E-commerce",
      challenge: "Low conversion rate of 1.2% with poor user experience and mobile optimization issues",
      solution: "Complete landing page redesign with mobile-first approach, A/B testing, and conversion optimization",
      results: {
        conversion: "4.8×",
        revenue: "₹3.2Cr",
        costReduction: "55%",
        timeFrame: "3 months"
      },
      image: "/case-study-ecommerce-landing.jpg"
    },
    {
      company: "B2B SaaS Company",
      industry: "Technology",
      challenge: "Poor lead generation with 0.8% conversion rate and confusing user journey",
      solution: "Strategic landing page optimization with clear value proposition, social proof, and streamlined forms",
      results: {
        conversion: "5.2×",
        revenue: "₹2.1Cr",
        costReduction: "48%",
        timeFrame: "4 months"
      },
      image: "/case-study-saas-landing.jpg"
    },
    {
      company: "Local Service Business",
      industry: "Professional Services",
      challenge: "High bounce rate of 75% with poor mobile experience and unclear messaging",
      solution: "Mobile-first redesign with local optimization, trust signals, and clear call-to-actions",
      results: {
        conversion: "3.9×",
        revenue: "₹1.5Cr",
        costReduction: "42%",
        timeFrame: "2 months"
      },
      image: "/case-study-local-landing.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Landing Page Optimization Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses achieve exceptional results with our landing page optimization strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">{study.company}</div>
                  <div className="text-yellow-100">{study.industry}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{study.results.conversion}</div>
                    <div className="text-xs text-gray-600">Conversion Rate</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{study.results.revenue}</div>
                    <div className="text-xs text-gray-600">Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{study.results.costReduction}</div>
                    <div className="text-xs text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{study.results.timeFrame}</div>
                    <div className="text-xs text-gray-600">Time Frame</div>
                  </div>
                </div>

                <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
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
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Landing Page Performance?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve similar results with our landing page optimization strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                3.5× Average Conversion Rate
              </span>
              <span className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-yellow-500" />
                250+ Landing Pages Optimized
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                ₹18Cr+ Revenue Generated
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" />
                97% Client Satisfaction
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}