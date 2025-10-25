import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Marketing Director, E-commerce Retailer",
      company: "E-commerce",
      content: "Rajapragya Bharat's audit transformed our Google Ads. We went from 2.1× ROAS to 5.8× ROAS in just 3 months. The strategic recommendations were game-changing!",
      rating: 5,
      image: "/testimonial-rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Founder, B2B Software Company",
      company: "Technology",
      content: "Their comprehensive audit and strategic roadmap are exceptional. Our cost-per-lead dropped by 50% while lead quality improved dramatically.",
      rating: 5,
      image: "/testimonial-priya.jpg"
    },
    {
      name: "Amit Patel",
      position: "Owner, Local Service Business",
      company: "Professional Services",
      content: "The audit revealed issues we never knew existed. We achieved 4.9× ROAS with 40% cost reduction. Highly recommended for any business!",
      rating: 5,
      image: "/testimonial-amit.jpg"
    },
    {
      name: "Sneha Reddy",
      position: "Head of Marketing, Healthcare",
      company: "Healthcare",
      content: "Their understanding of Google Ads optimization and strategic planning is impressive. We achieved 6.2× ROAS with better targeting.",
      rating: 5,
      image: "/testimonial-sneha.jpg"
    },
    {
      name: "Vikram Singh",
      position: "Marketing Manager, Finance",
      company: "Financial Services",
      content: "The audit process was thorough and professional. Our campaign performance improved by 60% with their strategic recommendations.",
      rating: 5,
      image: "/testimonial-vikram.jpg"
    },
    {
      name: "Anita Desai",
      position: "Founder, Consulting Firm",
      company: "Professional Services",
      content: "Their audit helped us identify and fix critical issues. We reduced costs by 45% while increasing conversions by 70%. Amazing results!",
      rating: 5,
      image: "/testimonial-anita.jpg"
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
            What Our Audit Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about our Google Ads audits and strategic recommendations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-teal-100 mb-4" />

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-teal-600">{testimonial.company}</div>
                </div>
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
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join 300+ Audit Success Stories
            </h3>
            <p className="text-teal-100 mb-6">
              Ready to optimize your Google Ads performance? Let's discuss your audit needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-teal-100 mb-6">
              <span>✓ 40%+ Average Improvement</span>
              <span>✓ 98% Client Satisfaction</span>
              <span>✓ 24/7 Audit Support</span>
              <span>✓ 30-Day Money-Back Guarantee</span>
            </div>
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-teal-600 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300">
              Schedule Audit Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}