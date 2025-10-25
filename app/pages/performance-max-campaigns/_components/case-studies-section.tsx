import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, DollarSign, Target, ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "E-commerce Giant",
      industry: "E-commerce",
      challenge: "Complex multi-network campaigns with poor cross-platform performance and high management overhead",
      solution: "Performance Max automation with advanced cross-network optimization and unified reporting",
      results: {
        roas: "7.2×",
        revenue: "₹4.5Cr",
        costReduction: "50%",
        timeFrame: "6 months"
      },
      image: "/case-study-ecommerce.jpg"
    },
    {
      company: "Tech Startup",
      industry: "Technology",
      challenge: "Manual campaign management across Search, Display, and YouTube with inconsistent performance",
      solution: "Automated Performance Max campaigns with AI-powered optimization and cross-network targeting",
      results: {
        roas: "6.8×",
        revenue: "₹2.8Cr",
        costReduction: "45%",
        timeFrame: "4 months"
      },
      image: "/case-study-tech.jpg"
    },
    {
      company: "Fashion Brand",
      industry: "Fashion & Retail",
      challenge: "Poor performance across multiple Google networks with high cost-per-acquisition",
      solution: "Unified Performance Max strategy with automated bidding and cross-network creative optimization",
      results: {
        roas: "6.5×",
        revenue: "₹3.2Cr",
        costReduction: "42%",
        timeFrame: "5 months"
      },
      image: "/case-study-fashion.jpg"
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
            Performance Max Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses achieve exceptional results with our Performance Max campaigns.
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
              <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">{study.company}</div>
                  <div className="text-purple-100">{study.industry}</div>
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
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{study.results.roas}</div>
                    <div className="text-xs text-gray-600">ROAS</div>
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

                <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
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
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Maximize Performance Across All Networks?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve similar results with our Performance Max campaigns.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                6.5× Average ROAS
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-500" />
                160+ Performance Max Clients
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                ₹20Cr+ Revenue Generated
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" />
                96% Client Retention
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}