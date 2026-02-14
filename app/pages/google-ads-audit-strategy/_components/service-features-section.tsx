import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, BarChart3, TrendingUp, Users, Headphones, FileText, CheckCircle } from 'lucide-react';

export function ServiceFeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Comprehensive Account Audit",
      description: "Detailed analysis of account structure, keywords, targeting, and bidding strategies.",
      metric: "40%+ Improvement"
    },
    {
      icon: Target,
      title: "Strategic Recommendations",
      description: "Actionable recommendations for optimization with clear implementation priorities.",
      metric: "Expert Analysis"
    },
    {
      icon: BarChart3,
      title: "Performance Analysis",
      description: "Deep dive into campaign performance, ROAS, and conversion tracking analysis.",
      metric: "Data-Driven Insights"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Custom growth strategy with clear roadmap for scaling and optimization.",
      metric: "Proven Results"
    },
    {
      icon: Users,
      title: "Audience Analysis",
      description: "Comprehensive audience analysis and targeting optimization recommendations.",
      metric: "60% Better Targeting"
    },
    {
      icon: FileText,
      title: "Detailed Report",
      description: "Comprehensive audit report with actionable insights and implementation guide.",
      metric: "Professional Report"
    },
    {
      icon: Headphones,
      title: "Expert Consultation",
      description: "One-on-one consultation with Google Ads experts for strategy discussion.",
      metric: "24/7 Support"
    },
    {
      icon: CheckCircle,
      title: "Implementation Support",
      description: "Ongoing support for implementing audit recommendations and strategy execution.",
      metric: "Hands-on Support"
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
            Hire Google Ads Audit Expert Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Google Ads audit includes comprehensive analysis and strategic recommendations for maximum performance improvement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-teal-600 font-bold text-sm">{feature.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}