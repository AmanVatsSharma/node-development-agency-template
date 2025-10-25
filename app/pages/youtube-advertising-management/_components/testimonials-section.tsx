import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Founder, TechTutorials Channel",
      company: "Education & Technology",
      content: "Rajapragya Bharat transformed our YouTube presence. We went from 2.1× ROAS to 7.5× ROAS in just 6 months. Our subscriber base increased by 300%!",
      rating: 5,
      image: "/testimonial-rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Marketing Director, Fashion Forward Brand",
      company: "Fashion & Lifestyle",
      content: "Their YouTube advertising and video production strategies are exceptional. Our video engagement increased by 60% and sales by 80%.",
      rating: 5,
      image: "/testimonial-priya.jpg"
    },
    {
      name: "Amit Patel",
      position: "Owner, Local Restaurant Chain",
      company: "Food & Beverage",
      content: "The local video targeting and food-focused content strategy helped us reach new customers. We achieved 5.9× ROAS with amazing brand awareness!",
      rating: 5,
      image: "/testimonial-amit.jpg"
    },
    {
      name: "Sneha Reddy",
      position: "CEO, Beauty Brand",
      company: "Beauty & Cosmetics",
      content: "Their understanding of YouTube algorithms and video marketing is impressive. We achieved 6.8× ROAS while building a loyal subscriber base.",
      rating: 5,
      image: "/testimonial-sneha.jpg"
    },
    {
      name: "Vikram Singh",
      position: "Founder, Fitness Channel",
      company: "Health & Fitness",
      content: "The video ad optimization and audience targeting increased our views by 150%. Highly recommended for YouTube marketing!",
      rating: 5,
      image: "/testimonial-vikram.jpg"
    },
    {
      name: "Anita Desai",
      position: "Marketing Manager, E-learning Platform",
      company: "Education",
      content: "Their YouTube advertising strategies helped us increase course enrollments by 70%. Amazing video marketing results!",
      rating: 5,
      image: "/testimonial-anita.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our YouTube Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what YouTube marketers say about our advertising strategies.
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

              <Quote className="w-8 h-8 text-red-100 mb-4" />

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-red-600">{testimonial.company}</div>
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
          <div className="bg-gradient-to-r from-red-600 to-pink-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join 180+ YouTube Success Stories
            </h3>
            <p className="text-red-100 mb-6">
              Ready to dominate YouTube advertising? Let's discuss your video marketing needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-red-100 mb-6">
              <span>✓ 6.2× Average ROAS</span>
              <span>✓ 94% Client Retention</span>
              <span>✓ 24/7 YouTube Support</span>
              <span>✓ 30-Day Money-Back Guarantee</span>
            </div>
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300">
              Schedule YouTube Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}