"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RiArrowRightLine, RiPhoneLine } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-secondary overflow-hidden flex items-center">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,188,0,0.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Directional gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#2a2a2a] via-bg-secondary/80 to-bg-primary" />

      {/* Accent glow top-right */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-7 h-px bg-accent" />
            <span
              className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Tandag, Surigao del Sur
            </span>
          </div>

          <h1
            className="text-[52px] lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Innovate.
            <br />
            <span className="text-accent">Connect.</span>
            <br />
            Secure.
          </h1>

          <p
            className="text-white/55 text-[17px] leading-relaxed max-w-120 mb-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Future Technologies delivers enterprise-grade IT solutions to
            businesses and individuals across Mindanao — from workstations and
            servers to advanced security systems and full network deployments.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-[#1a1a1a] font-bold text-sm rounded-[3px] hover:bg-accent-hover transition-all duration-200 hover:gap-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore Services
              <RiArrowRightLine size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/80 font-semibold text-sm rounded-[3px] hover:border-accent/50 hover:text-white transition-all duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <RiPhoneLine size={15} />
              Get in Touch
            </Link>
          </div>

          {/* Trust bar */}
          <div
            className="mt-12 flex items-center gap-5 text-sm text-white/30"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>10+ Years</span>
            <span className="w-1 h-1 bg-white/15 rounded-full" />
            <span>500+ Clients</span>
            <span className="w-1 h-1 bg-white/15 rounded-full" />
            <span>Mindanao-wide</span>
          </div>
        </motion.div>

        {/* Right: Hero visual placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-[4/3.2] rounded-lg overflow-hidden border border-[#ffffff]/6">
            {/* Base */}
            <div className="absolute inset-0 bg-[#323232]" />

            {/* Grid lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="hero-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255,188,0,0.06)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>

            {/* Placeholder label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border border-[#ffffff]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-7 h-7 bg-accent/15 rounded-[3px]" />
                </div>
                <span
                  className="text-white/20 text-[10px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Hero Image
                </span>
              </div>
            </div>

            {/* Floating card — clients */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-6 left-6 bg-[#2a2a2a]/90 backdrop-blur-sm border border-[#ffffff]/7 rounded-lg px-4 py-3.5"
            >
              <div
                className="text-accent text-2xl font-extrabold leading-none"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                500+
              </div>
              <div
                className="text-white/45 text-[11px] mt-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Satisfied clients
              </div>
            </motion.div>

            {/* Floating card — established */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute top-6 right-6 bg-accent rounded-lg px-3.5 py-3"
            >
              <div
                className="text-[#1a1a1a] text-xs font-black leading-none"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                EST. 2014
              </div>
              <div
                className="text-[#1a1a1a]/60 text-[10px] mt-0.5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Trusted IT Partner
              </div>
            </motion.div>
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
          className="text-white/20 text-[9px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
