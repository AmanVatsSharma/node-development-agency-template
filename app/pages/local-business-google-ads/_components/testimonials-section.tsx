import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Owner, City Dental Clinic",
      company: "Healthcare",
      content: "Rajapragya Bharat transformed our local visibility. We went from 2.1× ROAS to 6.2× ROAS in just 4 months. Our patient base increased by 60%!",
      rating: 5,
      image: "/testimonial-rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Manager, Neighborhood Restaurant",
      company: "Food & Beverage",
      content: "Their local targeting and Google My Business optimization are exceptional. Our foot traffic increased by 45% and online orders by 80%.",
      rating: 5,
      image: "/testimonial-priya.jpg"
    },
    {
      name: "Amit Patel",
      position: "Owner, Local Auto Repair",
      company: "Automotive",
      content: "The local service area targeting and emergency service campaigns helped us compete with franchise shops. We achieved 7.1× ROAS!",
      rating: 5,
      image: "/testimonial-amit.jpg"
    },
    {
      name: "Sneha Reddy",
      position: "Founder, Beauty Salon",
      company: "Beauty & Wellness",
      content: "Their understanding of local market dynamics and community-focused strategies is impressive. We achieved 5.8× ROAS while building local brand awareness.",
      rating: 5,
      image: "/testimonial-sneha.jpg"
    },
    {
      name: "Vikram Singh",
      position: "Owner, Local Gym",
      company: "Fitness",
      content: "The local keyword optimization and call extensions increased our membership sign-ups by 70%. Highly recommended for local businesses!",
      rating: 5,
      image: "/testimonial-vikram.jpg"
    },
    {
      name: "Anita Desai",
      position: "Manager, Local Pharmacy",
      company: "Healthcare",
      content: "Their local business expertise and community-focused campaigns helped us increase prescription orders by 55%. Amazing local results!",
      rating: 5,
      image: "/testimonial-anita.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Local Business Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what local business owners say about our Google Ads strategies.
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

              <Quote className="w-8 h-8 text-blue-100 mb-4" />

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-blue-600">{testimonial.company}</div>
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join 200+ Local Business Success Stories
            </h3>
            <p className="text-blue-100 mb-6">
              Ready to dominate your local market? Let's discuss your local business Google Ads needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-100 mb-6">
              <span>✓ 5.8× Average ROAS</span>
              <span>✓ 95% Client Retention</span>
              <span>✓ 24/7 Local Support</span>
              <span>✓ 30-Day Money-Back Guarantee</span>
            </div>
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
              Schedule Local Business Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}