import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShoppingCart, DollarSign, Target, ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "Fashion Forward",
      industry: "Fashion E-commerce",
      challenge: "Low Google Shopping visibility and high cost-per-click with poor conversion rates",
      solution: "Optimized product feeds, advanced shopping campaigns, and conversion-focused strategies",
      results: {
        roas: "8.2×",
        revenue: "₹1.8Cr",
        costReduction: "40%",
        timeFrame: "4 months"
      },
      image: "/case-study-fashion.jpg"
    },
    {
      company: "ElectroMart",
      industry: "Electronics",
      challenge: "Complex product catalog with poor shopping campaign performance and low ROAS",
      solution: "Dynamic product feed optimization, advanced bidding strategies, and mobile-first campaigns",
      results: {
        roas: "7.5×",
        revenue: "₹3.2Cr",
        costReduction: "35%",
        timeFrame: "6 months"
      },
      image: "/case-study-electronics.jpg"
    },
    {
      company: "Home & Garden Store",
      industry: "Home & Garden",
      challenge: "Seasonal campaign management with inconsistent performance and wasted budget",
      solution: "Seasonal optimization strategies, audience targeting, and automated bidding",
      results: {
        roas: "9.1×",
        revenue: "₹2.1Cr",
        costReduction: "45%",
        timeFrame: "8 months"
      },
      image: "/case-study-home.jpg"
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
            E-commerce Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped e-commerce businesses achieve exceptional results with our Google Shopping optimization.
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
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">{study.company}</div>
                  <div className="text-orange-100">{study.industry}</div>
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
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{study.results.roas}</div>
                    <div className="text-xs text-gray-600">ROAS</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{study.results.revenue}</div>
                    <div className="text-xs text-gray-600">Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{study.results.costReduction}</div>
                    <div className="text-xs text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{study.results.timeFrame}</div>
                    <div className="text-xs text-gray-600">Time Frame</div>
                  </div>
                </div>

                <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300">
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
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Boost Your E-commerce Sales?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve similar results with our e-commerce Google Ads optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                6.8× Average ROAS
              </span>
              <span className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-orange-500" />
                150+ E-commerce Clients
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                ₹25Cr+ Revenue Generated
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-500" />
                95% Client Retention
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}