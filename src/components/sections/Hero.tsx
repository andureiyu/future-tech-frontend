"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RiArrowRightLine, RiPhoneLine } from "react-icons/ri";
import { SectionBadge } from "@/components/ui/section-badge";

const clientCards = [
  { name: "DMSF", sector: "Public Sector" },
  { name: "BARMM", sector: "Government" },
  { name: "Royal Mandaya Hotel", sector: "Hospitality" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-secondary overflow-hidden flex items-center">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(22,163,74,0.06) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-green-50/60 via-transparent to-transparent" />

      {/* Accent glow top-right */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow — SectionBadge */}
          <div className="mb-7">
            <SectionBadge>Tandag, Surigao del Sur</SectionBadge>
          </div>

          <h1
            className="text-[52px] lg:text-[64px] font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Innovate.
            <br />
            <span className="text-accent">Connect.</span>
            <br />
            Secure.
          </h1>

          <p
            className="text-slate-500 text-[17px] leading-relaxed max-w-120 mb-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Future Technologies delivers enterprise-grade IT solutions to
            businesses and individuals across Mindanao, from workstations and
            servers to advanced security systems and full network deployments.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-bold text-sm rounded-[3px] hover:bg-accent-hover transition-all duration-200 hover:gap-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore Services
              <RiArrowRightLine size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-600 font-semibold text-sm rounded-[3px] hover:border-accent/50 hover:text-gray-900 transition-all duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <RiPhoneLine size={15} />
              Get in Touch
            </Link>
          </div>

          {/* Trust bar */}
          <div
            className="mt-12 flex items-center gap-5 text-sm text-gray-400"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>7+ Years</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span>500+ Clients</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span>Mindanao-wide</span>
          </div>
        </motion.div>

        {/* Right: Client showcase */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative"
        >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_24px_80px_rgba(0,0,0,0.07)] overflow-hidden">

            {/* Header */}
            <div className="px-8 pt-8 pb-7 border-b border-gray-100">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                <span
                  className="text-accent text-[11px] font-bold tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Clients Include
                </span>
              </div>
              <p
                className="text-gray-400 text-[13px] leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Trusted by government agencies, institutions, and businesses
                across Mindanao.
              </p>
            </div>

            {/* Client rows */}
            <div>
              {clientCards.map((client, i) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between px-8 py-6 border-b border-gray-100 last:border-0 hover:bg-gray-50/60 transition-colors duration-200"
                >
                  <span
                    className="text-gray-900 font-extrabold text-[22px] leading-none"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {client.name}
                  </span>
                  <span
                    className="shrink-0 ml-6 text-accent text-[10px] font-bold tracking-[0.15em] uppercase bg-accent/6 border border-accent/15 px-2.5 py-1.5 rounded-[3px]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {client.sector}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex items-center gap-2.5"
            >
              <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0 block" />
              <span
                className="text-gray-400 text-[12px]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                ...and 500+ organizations served across Surigao del Sur &amp; Mindanao
              </span>
            </motion.div>

          </div>

          {/* Decorative accent corner */}
          <div className="absolute -bottom-3 -right-3 w-28 h-28 border border-accent/15 rounded-xl -z-10" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-px h-9 bg-linear-to-b from-accent/40 to-transparent" />
        <span
          className="text-gray-400 text-[9px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
