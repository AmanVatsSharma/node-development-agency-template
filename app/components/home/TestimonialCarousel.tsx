"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards";

const testimonialItems = [
  {
    quote: "Vedpragya transformed our legacy system into a modern, scalable platform. Their engineering depth is rare — they caught architectural problems we didn't even know we had. Delivered on every commitment.",
    name: "Rajesh Kumar",
    title: "CTO, TechVision India",
  },
  {
    quote: "The Shopify headless solution they built increased our conversion rate by 35%. The team communicated clearly throughout — no surprises, no excuses. They just delivered.",
    name: "Sarah Johnson",
    title: "Product Manager, GlobalShop Inc.",
  },
  {
    quote: "Our AI voice agent now handles 10x the call volume with better quality. ROI was visible in month one. Vedpragya treats your product like their own — that attitude shows in the output.",
    name: "Ahmed Al-Rashid",
    title: "Founder & CEO, Dubai Logistics Hub",
  },
  {
    quote: "Security and compliance are non-negotiable in fintech. Vedpragya delivered a fully compliant platform with bank-grade security. Their global team meant we had support whenever we needed it.",
    name: "Jennifer Chen",
    title: "VP Engineering, FinanceFlow Canada",
  },
  {
    quote: "The telemedicine platform is exceptional — clean architecture, excellent UX, seamless integrations. Our patient satisfaction scores improved by 40%. Would not hesitate to work with Vedpragya again.",
    name: "Michael Schmidt",
    title: "Director of IT, MediCare Solutions",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="compact-main-section bg-white dark:bg-[#080C14] relative overflow-hidden content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1B33] dark:text-white mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Results speak louder than promises.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling cards — full width */}
      <InfiniteMovingCards
        items={testimonialItems}
        direction="left"
        speed="slow"
        pauseOnHover={true}
        className="mx-auto"
      />
    </section>
  );
}
