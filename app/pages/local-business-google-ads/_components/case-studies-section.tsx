import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MapPin, DollarSign, Target, ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      company: "City Dental Clinic",
      industry: "Healthcare",
      challenge: "Low local visibility and competition from chain dental clinics",
      solution: "Advanced local targeting, Google My Business optimization, and location-specific campaigns",
      results: {
        roas: "6.2×",
        revenue: "₹45L",
        costReduction: "35%",
        timeFrame: "4 months"
      },
      image: "/case-study-dental.jpg"
    },
    {
      company: "Neighborhood Restaurant",
      industry: "Food & Beverage",
      challenge: "Struggling to compete with food delivery apps and chain restaurants",
      solution: "Local keyword optimization, call extensions, and community-focused campaigns",
      results: {
        roas: "5.8×",
        revenue: "₹32L",
        costReduction: "40%",
        timeFrame: "3 months"
      },
      image: "/case-study-restaurant.jpg"
    },
    {
      company: "Local Auto Repair",
      industry: "Automotive",
      challenge: "High competition from franchise auto shops and low online visibility",
      solution: "Local service area targeting, emergency service campaigns, and review management",
      results: {
        roas: "7.1×",
        revenue: "₹28L",
        costReduction: "45%",
        timeFrame: "5 months"
      },
      image: "/case-study-automotive.jpg"
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
            Local Business Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped local businesses dominate their markets with our Google Ads strategies.
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
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">{study.company}</div>
                  <div className="text-blue-100">{study.industry}</div>
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
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{study.results.roas}</div>
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
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{study.results.timeFrame}</div>
                    <div className="text-xs text-gray-600">Time Frame</div>
                  </div>
                </div>

                <button className="w-full group inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Dominate Your Local Market?
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you achieve similar results with our local business Google Ads strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                5.8× Average ROAS
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                200+ Local Businesses
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-500" />
                ₹15Cr+ Revenue Generated
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