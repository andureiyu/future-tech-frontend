"use client";

import { motion } from "framer-motion";
import {
  RiShieldCheckLine,
  RiMapPinLine,
  RiCustomerServiceLine,
  RiPriceTag3Line,
} from "react-icons/ri";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionBadge } from "@/components/ui/section-badge";

const reasons = [
  {
    icon: RiShieldCheckLine,
    title: "Certified Professionals",
    description:
      "Our technicians hold industry certifications and continuously train to stay current with evolving technologies.",
  },
  {
    icon: RiMapPinLine,
    title: "Local Expertise",
    description:
      "We understand the unique needs of businesses in Surigao del Sur with fast, reliable on-site response times.",
  },
  {
    icon: RiCustomerServiceLine,
    title: "Reliable After-Sales",
    description:
      "Dedicated support programs and maintenance contracts that keep your systems running at peak performance.",
  },
  {
    icon: RiPriceTag3Line,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. Quality IT solutions accessible to businesses and institutions of all sizes.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-lg mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <SectionBadge>Why Choose Us</SectionBadge>
          </div>
          <h2
            className="text-[28px] lg:text-[38px] font-extrabold text-gray-900 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            The Future Technologies
            <br />
            Difference
          </h2>
          <p
            className="text-slate-500 text-base leading-relaxed mt-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            We don&apos;t just sell products, we build long-term technology
            partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <GlowCard className="bg-white border border-border-subtle rounded-lg p-7 hover:border-accent/25 transition-colors duration-300 group h-full shadow-sm">
                <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/18 transition-colors">
                  <reason.icon className="text-accent" size={21} />
                </div>
                <h3
                  className="text-[15px] font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {reason.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
