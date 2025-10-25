import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, DollarSign, Target, ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "E-commerce Retailer",
      industry: "E-commerce",
      challenge: "Poor Google Ads performance with 2.1× ROAS and high cost-per-conversion across multiple campaigns",
      solution: "Comprehensive audit revealed keyword issues, poor targeting, and bidding problems. Implemented strategic recommendations.",
      results: {
        roas: "5.8×",
        revenue: "₹2.5Cr",
        costReduction: "45%",
        timeFrame: "3 months"
      },
      image: "/case-study-ecommerce-audit.jpg"
    },
    {
      company: "B2B Software Company",
      industry: "Technology",
      challenge: "Complex account structure with poor lead quality and high cost-per-lead across multiple campaigns",
      solution: "Detailed audit identified audience targeting issues and bidding strategy problems. Developed custom B2B strategy.",
      results: {
        roas: "6.2×",
        revenue: "₹1.8Cr",
        costReduction: "50%",
        timeFrame: "4 months"
      },
      image: "/case-study-b2b-audit.jpg"
    },
    {
      company: "Local Service Business",
      industry: "Professional Services",
      challenge: "Low local visibility and poor campaign performance with wasted budget on irrelevant keywords",
      solution: "Audit revealed poor local targeting and keyword selection. Implemented local-focused strategy with better targeting.",
      results: {
        roas: "4.9×",
        revenue: "₹95L",
        costReduction: "40%",
        timeFrame: "2 months"
      },
      image: "/case-study-local-audit.jpg"
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
            Google Ads Audit Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses achieve exceptional results with our Google Ads audits and strategic recommendations.
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
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">{study.company}</div>
                  <div className="text-teal-100">{study.industry}</div>
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
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">{study.results.roas}</div>
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

                <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300">
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
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Google Ads Performance?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve similar results with our comprehensive Google Ads audit and strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                40%+ Average Improvement
              </span>
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-teal-500" />
                300+ Audits Completed
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                ₹15Cr+ Revenue Generated
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" />
                98% Client Satisfaction
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}