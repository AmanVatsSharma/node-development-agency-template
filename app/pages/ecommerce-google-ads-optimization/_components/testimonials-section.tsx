import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      position: "Founder, Fashion Forward",
      company: "Fashion E-commerce",
      content: "Rajapragya Bharat transformed our Google Shopping performance. We went from 2.1× ROAS to 8.2× ROAS in just 4 months. Our online sales increased by 300%!",
      rating: 5,
      image: "/testimonial-priya.jpg"
    },
    {
      name: "Rajesh Kumar",
      position: "CEO, ElectroMart",
      company: "Electronics",
      content: "Their product feed optimization and shopping campaign strategies are exceptional. Our conversion rate improved by 65% and cost-per-acquisition dropped by 40%.",
      rating: 5,
      image: "/testimonial-rajesh.jpg"
    },
    {
      name: "Anita Desai",
      position: "Marketing Director, Home & Garden Store",
      company: "Home & Garden",
      content: "The seasonal campaign management and audience targeting strategies helped us scale from ₹50L to ₹2.1Cr monthly revenue. Outstanding results!",
      rating: 5,
      image: "/testimonial-anita.jpg"
    },
    {
      name: "Vikram Singh",
      position: "Founder, Beauty Boutique",
      company: "Beauty & Cosmetics",
      content: "Their understanding of beauty industry trends and customer behavior is impressive. We achieved 7.8× ROAS while maintaining brand consistency.",
      rating: 5,
      image: "/testimonial-vikram.jpg"
    },
    {
      name: "Sneha Reddy",
      position: "Head of Marketing, Sports Gear Co",
      company: "Sports & Fitness",
      content: "The mobile-first optimization and dynamic remarketing strategies increased our mobile conversions by 80%. Highly recommended for e-commerce!",
      rating: 5,
      image: "/testimonial-sneha.jpg"
    },
    {
      name: "Amit Patel",
      position: "CEO, Pet Supplies Plus",
      company: "Pet Supplies",
      content: "Their product feed management and automated bidding strategies helped us reduce ad spend by 35% while increasing revenue by 45%. Amazing work!",
      rating: 5,
      image: "/testimonial-amit.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Client Success Stories with Hire Ecommerce Google Ads Expert
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what e-commerce business owners say about our Google Ads optimization.
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

              <Quote className="w-8 h-8 text-orange-100 mb-4" />

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-orange-600">{testimonial.company}</div>
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
          <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join 150+ E-commerce Success Stories
            </h3>
            <p className="text-orange-100 mb-6">
              Ready to boost your online sales? Let's discuss your e-commerce Google Ads needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-orange-100 mb-6">
              <span>✓ 6.8× Average ROAS</span>
              <span>✓ 95% Client Retention</span>
              <span>✓ 24/7 E-commerce Support</span>
              <span>✓ 30-Day Money-Back Guarantee</span>
            </div>
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300">
              Schedule E-commerce Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}