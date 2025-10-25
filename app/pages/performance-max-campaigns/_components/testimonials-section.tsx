import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Marketing Director, E-commerce Giant",
      company: "E-commerce",
      content: "Rajapragya Bharat transformed our multi-network campaigns. We went from 3.2× ROAS to 7.2× ROAS in just 6 months. Campaign management became effortless!",
      rating: 5,
      image: "/testimonial-rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Founder, Tech Startup",
      company: "Technology",
      content: "Their Performance Max automation and cross-network optimization are exceptional. Our cost-per-acquisition dropped by 45% while revenue increased by 80%.",
      rating: 5,
      image: "/testimonial-priya.jpg"
    },
    {
      name: "Amit Patel",
      position: "CEO, Fashion Brand",
      company: "Fashion & Retail",
      content: "The unified Performance Max strategy helped us manage all Google networks seamlessly. We achieved 6.5× ROAS with 50% less management time!",
      rating: 5,
      image: "/testimonial-amit.jpg"
    },
    {
      name: "Sneha Reddy",
      position: "Head of Marketing, SaaS Company",
      company: "Software",
      content: "Their understanding of Performance Max automation and cross-network targeting is impressive. We achieved 6.8× ROAS with minimal manual intervention.",
      rating: 5,
      image: "/testimonial-sneha.jpg"
    },
    {
      name: "Vikram Singh",
      position: "Marketing Manager, Healthcare",
      company: "Healthcare",
      content: "The automated optimization and cross-network performance increased our conversions by 60%. Highly recommended for Performance Max campaigns!",
      rating: 5,
      image: "/testimonial-vikram.jpg"
    },
    {
      name: "Anita Desai",
      position: "Founder, Consulting Firm",
      company: "Professional Services",
      content: "Their Performance Max strategies helped us reduce campaign management time by 70% while increasing ROI by 65%. Amazing automation results!",
      rating: 5,
      image: "/testimonial-anita.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Performance Max Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Performance Max marketers say about our automation strategies.
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

              <Quote className="w-8 h-8 text-purple-100 mb-4" />

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-purple-600">{testimonial.company}</div>
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join 160+ Performance Max Success Stories
            </h3>
            <p className="text-purple-100 mb-6">
              Ready to maximize performance across all Google networks? Let's discuss your Performance Max needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-purple-100 mb-6">
              <span>✓ 6.5× Average ROAS</span>
              <span>✓ 96% Client Retention</span>
              <span>✓ 24/7 Performance Max Support</span>
              <span>✓ 30-Day Money-Back Guarantee</span>
            </div>
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300">
              Schedule Performance Max Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}