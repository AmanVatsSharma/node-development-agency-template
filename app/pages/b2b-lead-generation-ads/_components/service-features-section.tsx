import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, BarChart3, Zap, TrendingUp, Shield, Headphones, CheckCircle } from 'lucide-react';

export function ServiceFeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "B2B Audience Targeting",
      description: "Advanced targeting strategies for decision-makers and high-value prospects in your industry.",
      metric: "85% Qualified Leads"
    },
    {
      icon: Target,
      title: "Lead Qualification",
      description: "Sophisticated lead scoring and qualification systems to ensure high-intent prospects.",
      metric: "7.2× ROAS"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive reporting and analytics with detailed lead quality metrics and ROI tracking.",
      metric: "Real-time Data"
    },
    {
      icon: Zap,
      title: "Automated Lead Nurturing",
      description: "AI-powered lead nurturing sequences and follow-up automation for maximum conversion.",
      metric: "95% Automated"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Proven strategies that consistently increase qualified leads and sales pipeline.",
      metric: "45% Growth"
    },
    {
      icon: Shield,
      title: "Lead Quality Assurance",
      description: "Rigorous lead validation and quality checks to ensure only high-value prospects.",
      metric: "98% Quality"
    },
    {
      icon: Headphones,
      title: "B2B Support",
      description: "Specialized support team with deep B2B marketing and lead generation expertise.",
      metric: "24/7 Support"
    },
    {
      icon: CheckCircle,
      title: "Conversion Optimization",
      description: "Continuous optimization of landing pages, forms, and conversion funnels for maximum results.",
      metric: "40% Higher Conversion"
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
            Hire B2B Lead Generation Expert Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our B2B lead generation includes specialized features designed for high-quality prospect acquisition and conversion.
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
              className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-green-600 font-bold text-sm">{feature.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}