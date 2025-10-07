'use client';

/**
 * ResultsSection Component
 * 
 * Showcase client results and testimonials
 * Features:
 * - Animated stat cards
 * - Before/after metrics
 * - Client quotes
 * - Mobile-responsive carousel
 * 
 * @component
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, DollarSign, Sparkles, Quote } from 'lucide-react';

console.log('[ResultsSection] Component loaded');

interface CaseStudy {
  id: number;
  industry: string;
  metric: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    industry: 'D2C Skincare Brand',
    metric: 'Conversion Rate',
    value: '+42%',
    description: 'Through strategic CRO and UX improvements',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-[#00B894] to-emerald-500',
  },
  {
    id: 2,
    industry: 'Clothing Startup',
    metric: 'Revenue Growth',
    value: '3× in 60 days',
    description: 'With optimized product pages and checkout flow',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    industry: 'High-Traffic Store',
    metric: 'Load Speed',
    value: '<2s',
    description: 'Achieved perfect Lighthouse scores',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
  },
];

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'BloomBeauty',
    quote: 'The team transformed our Shopify store into a conversion machine. Our sales doubled in just 3 months!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'CEO',
    company: 'StyleHub',
    quote: 'Professional, fast, and incredibly knowledgeable. They understood our brand and delivered beyond expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anita Desai',
    role: 'Marketing Director',
    company: 'FitnessPro',
    quote: 'Best investment we made! The store looks amazing and the automation saves us hours every week.',
    rating: 5,
  },
];

const ResultsSection = () => {
  console.log('[ResultsSection] Rendering results section');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00B894] rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00B894]/10 to-emerald-500/10 border border-[#00B894]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#00B894]" />
            <span className="text-sm font-semibold text-gray-700">Proven Results</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real Results
            <span className="block mt-2 bg-gradient-to-r from-[#1C4E80] to-[#00B894] bg-clip-text text-transparent">
              Real Growth
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — see what we've achieved for our clients
          </p>
        </motion.div>

        {/* Case studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${study.color} text-white mb-6 shadow-lg`}
                  >
                    {study.icon}
                  </motion.div>

                  {/* Industry */}
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    {study.industry}
                  </p>

                  {/* Metric value */}
                  <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                    {study.value}
                  </div>

                  {/* Metric label */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{study.metric}</h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{study.description}</p>
                </div>

                {/* Decorative element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${study.color} rounded-full -mr-16 -mb-16 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 relative"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-[#00B894] opacity-20">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1C4E80] to-[#00B894] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
