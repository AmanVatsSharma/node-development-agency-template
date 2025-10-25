import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Founder, E-commerce Store",
      company: "E-commerce",
      content: "Rajapragya Bharat's landing page optimization transformed our business. We went from 1.2% to 4.8% conversion rate in just 3 months. The results were incredible!",
      rating: 5,
      image: "/testimonial-rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Marketing Director, B2B SaaS Company",
      company: "Technology",
      content: "Their landing page design and conversion optimization are exceptional. Our lead generation increased by 5.2× while reducing cost-per-lead by 48%.",
      rating: 5,
      image: "/testimonial-priya.jpg"
    },
    {
      name: "Amit Patel",
      position: "Owner, Local Service Business",
      company: "Professional Services",
      content: "The mobile-first redesign and local optimization helped us reach more customers. We achieved 3.9× conversion rate with 42% cost reduction!",
      rating: 5,
      image: "/testimonial-amit.jpg"
    },
    {
      name: "Sneha Reddy",
      position: "Head of Marketing, Healthcare",
      company: "Healthcare",
      content: "Their understanding of user experience and conversion optimization is impressive. We achieved 4.2× conversion rate with better patient engagement.",
      rating: 5,
      image: "/testimonial-sneha.jpg"
    },
    {
      name: "Vikram Singh",
      position: "Founder, Finance Company",
      company: "Financial Services",
      content: "The landing page optimization increased our conversions by 4.5× while improving user experience. Highly recommended for any business!",
      rating: 5,
      image: "/testimonial-vikram.jpg"
    },
    {
      name: "Anita Desai",
      position: "Marketing Manager, Consulting Firm",
      company: "Professional Services",
      content: "Their landing page strategies helped us reduce bounce rate by 60% and increase leads by 4.8×. Amazing optimization results!",
      rating: 5,
      image: "/testimonial-anita.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Landing Page Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners say about our landing page optimization strategies.
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

              <Quote className="w-8 h-8 text-yellow-100 mb-4" />

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-yellow-600">{testimonial.company}</div>
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
          <div className="bg-gradient-to-r from-yellow-600 to-orange-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join 250+ Landing Page Success Stories
            </h3>
            <p className="text-yellow-100 mb-6">
              Ready to optimize your landing page performance? Let's discuss your optimization needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-yellow-100 mb-6">
              <span>✓ 3.5× Average Conversion Rate</span>
              <span>✓ 97% Client Satisfaction</span>
              <span>✓ 24/7 Landing Page Support</span>
              <span>✓ 30-Day Money-Back Guarantee</span>
            </div>
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-yellow-600 rounded-xl font-semibold hover:bg-yellow-50 transition-all duration-300">
              Schedule Landing Page Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}