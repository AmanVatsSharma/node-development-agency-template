import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "TechSolutions Inc",
      industry: "Software & Technology",
      challenge: "Low-quality leads with high cost-per-lead and poor conversion rates",
      solution: "Advanced B2B targeting, lead qualification, and nurturing strategies",
      results: {
        roas: "8.5×",
        revenue: "₹2.8Cr",
        costReduction: "45%",
        timeFrame: "5 months"
      },
      image: "/case-study-tech.jpg"
    },
    {
      company: "Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Complex B2B sales cycle with long lead times and poor lead quality",
      solution: "Sophisticated lead scoring, nurturing sequences, and decision-maker targeting",
      results: {
        roas: "7.8×",
        revenue: "₹4.2Cr",
        costReduction: "38%",
        timeFrame: "7 months"
      },
      image: "/case-study-manufacturing.jpg"
    },
    {
      company: "Professional Services Ltd",
      industry: "Professional Services",
      challenge: "High-value B2B leads with complex qualification requirements",
      solution: "Custom lead qualification, advanced targeting, and conversion optimization",
      results: {
        roas: "9.2×",
        revenue: "₹3.5Cr",
        costReduction: "42%",
        timeFrame: "6 months"
      },
      image: "/case-study-services.jpg"
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
            B2B Lead Generation Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped B2B businesses achieve exceptional lead generation results.
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
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">{study.company}</div>
                  <div className="text-green-100">{study.industry}</div>
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
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{study.results.roas}</div>
                    <div className="text-xs text-gray-600">ROAS</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{study.results.revenue}</div>
                    <div className="text-xs text-gray-600">Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{study.results.costReduction}</div>
                    <div className="text-xs text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{study.results.timeFrame}</div>
                    <div className="text-xs text-gray-600">Time Frame</div>
                  </div>
                </div>

                <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
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
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Generate High-Quality B2B Leads?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve similar results with our B2B lead generation strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                7.2× Average ROAS
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                120+ B2B Clients
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                ₹18Cr+ Revenue Generated
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-500" />
                92% Client Retention
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}