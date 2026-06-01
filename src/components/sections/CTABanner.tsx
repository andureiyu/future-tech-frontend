"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const ctaWords = [
  { text: "Ready" },
  { text: "to" },
  { text: "Upgrade" },
  { text: "Your" },
  { text: "Tech?" },
];

export default function CTABanner() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      {/* Soft radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.08)_100%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterEffectSmooth
            words={ctaWords}
            className="justify-center mb-4"
          />
          <p
            className="text-white/70 text-lg mb-9 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Talk to our team and get a free consultation on the right IT
            solution for your business or institution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1a1a1a] text-white font-bold text-sm rounded-[3px] hover:bg-gray-800 transition-all duration-200 hover:gap-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Get a Free Quote
              <RiArrowRightLine size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-bold text-sm rounded-[3px] hover:border-white/60 transition-all duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Browse Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
