import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "VP Sales, TechSolutions Inc",
      company: "Software & Technology",
      content: "Rajapragya Bharat transformed our B2B lead generation. We went from 2.1× ROAS to 8.5× ROAS in just 5 months. Lead quality improved dramatically!",
      rating: 5,
      image: "/testimonial-rajesh.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Marketing Director, Manufacturing Corp",
      company: "Manufacturing",
      content: "Their B2B targeting and lead qualification strategies are exceptional. Our cost-per-lead dropped by 45% while lead quality increased by 60%.",
      rating: 5,
      image: "/testimonial-priya.jpg"
    },
    {
      name: "Amit Patel",
      position: "CEO, Professional Services Ltd",
      company: "Professional Services",
      content: "The advanced lead nurturing and scoring systems helped us scale from ₹50L to ₹3.5Cr monthly revenue. Outstanding B2B expertise!",
      rating: 5,
      image: "/testimonial-amit.jpg"
    },
    {
      name: "Sneha Reddy",
      position: "Head of Marketing, Finance Corp",
      company: "Financial Services",
      content: "Their understanding of B2B sales cycles and decision-maker targeting is impressive. We achieved 7.8× ROAS with high-value leads.",
      rating: 5,
      image: "/testimonial-sneha.jpg"
    },
    {
      name: "Vikram Singh",
      position: "Sales Director, Healthcare Plus",
      company: "Healthcare",
      content: "The lead qualification and nurturing strategies increased our conversion rate by 55%. Highly recommended for B2B lead generation!",
      rating: 5,
      image: "/testimonial-vikram.jpg"
    },
    {
      name: "Anita Desai",
      position: "Founder, Consulting Group",
      company: "Consulting",
      content: "Their B2B lead generation strategies helped us reduce acquisition costs by 40% while increasing qualified leads by 70%. Amazing results!",
      rating: 5,
      image: "/testimonial-anita.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our B2B Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what B2B business leaders say about our lead generation strategies.
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

              <Quote className="w-8 h-8 text-green-100 mb-4" />

              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-green-600">{testimonial.company}</div>
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join 120+ B2B Success Stories
            </h3>
            <p className="text-green-100 mb-6">
              Ready to generate high-quality B2B leads? Let's discuss your lead generation needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-green-100 mb-6">
              <span>✓ 7.2× Average ROAS</span>
              <span>✓ 92% Client Retention</span>
              <span>✓ 24/7 B2B Support</span>
              <span>✓ 30-Day Money-Back Guarantee</span>
            </div>
            <button className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300">
              Schedule B2B Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}