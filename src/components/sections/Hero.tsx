"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RiArrowRightLine, RiPhoneLine, RiCheckboxCircleLine } from "react-icons/ri";
import { SectionBadge } from "@/components/ui/section-badge";

const statusItems = [
  { label: "Network", status: "Online", pct: "100%", color: "bg-emerald-400" },
  { label: "Security", status: "Protected", pct: "98%", color: "bg-emerald-400" },
  { label: "Servers", status: "Active", pct: "100%", color: "bg-emerald-400" },
  { label: "Backup", status: "Synced", pct: "94%", color: "bg-accent" },
];

const metrics = [
  { value: "99.9%", label: "Uptime" },
  { value: "<2ms", label: "Response" },
  { value: "500+", label: "Clients" },
];

const techTags = ["Cisco", "HP", "Dell", "Hikvision", "TP-Link"];

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
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
            businesses and individuals across Mindanao — from workstations and
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

        {/* Right: IT Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]">

            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span
                  className="text-gray-500 text-[12px] font-medium"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Infrastructure Overview
                </span>
              </div>
              <span
                className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                ● Live
              </span>
            </div>

            {/* Status rows */}
            <div className="px-5 py-5 space-y-3.5">
              {statusItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.color}`} />
                  <span
                    className="text-gray-400 text-[12px] w-20 shrink-0"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.label}
                  </span>
                  <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.color} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={{ width: item.pct }}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span
                    className="text-gray-500 text-[11px] w-16 text-right shrink-0"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-gray-100" />

            {/* Metric cards */}
            <div className="px-5 py-5 grid grid-cols-3 gap-3">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + i * 0.07, duration: 0.4 }}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-3"
                >
                  <div
                    className="text-gray-900 text-xl font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {m.value}
                  </div>
                  <div
                    className="text-gray-400 text-[10px] mt-1.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="mx-5 h-px bg-gray-100" />

            {/* Tech brand tags */}
            <div className="px-5 py-4 flex flex-wrap gap-2">
              {techTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.05 + i * 0.05 }}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-accent/6 border border-accent/12 rounded text-accent/80 text-[10px] font-semibold tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <RiCheckboxCircleLine size={10} />
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Decorative offset border */}
          <div className="absolute -bottom-3 -right-3 w-32 h-32 border border-accent/15 rounded-lg -z-10" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
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
