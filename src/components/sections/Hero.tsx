"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiPhoneLine } from "react-icons/ri";
import { SectionBadge } from "@/components/ui/section-badge";

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

      {/* Logo watermark — bottom-right, behind content */}
      <div
        className="hidden md:block absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{ width: "780px", height: "780px", zIndex: 0, bottom: "-260px", right: "-160px" }}
      >
        <Image
          src="/assets/images/logobetter.jpg"
          alt=""
          width={780}
          height={780}
          className="w-full h-full object-contain opacity-[0.055] grayscale"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-[132px] pb-16 md:pt-[168px] md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full" style={{ zIndex: 1 }}>
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          {/* Eyebrow — SectionBadge */}
          <div className="mb-7 flex justify-center lg:justify-start">
            <SectionBadge>Tandag, Surigao del Sur</SectionBadge>
          </div>

          <h1
            className="text-[36px] sm:text-[46px] lg:text-[64px] font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Innovate.
            <br />
            <span className="text-accent">Connect.</span>
            <br />
            Secure.
          </h1>

          <p
            className="text-slate-500 text-[17px] leading-relaxed max-w-120 mb-10 mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Future Technologies delivers enterprise-grade IT solutions to
            businesses and individuals across Mindanao, from workstations and
            servers to advanced security systems and full network deployments.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>7+ Years</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span>500+ Clients</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span>Mindanao-wide</span>
          </div>
        </motion.div>

        {/* Right: Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex relative items-center justify-center py-10"
        >
          {/* Ambient glow behind laptop */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%)" }}
          />

          {/* Laptop + badges positioning context */}
          <div className="relative">

            {/* ═══════════════════ LAPTOP ═══════════════════ */}
            <div
              style={{
                transform: "perspective(1400px) rotateY(-12deg) rotateX(3deg)",
                transformStyle: "preserve-3d",
                display: "inline-block",
                filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
              }}
            >
              {/* ── SCREEN LID (Space Gray anodized aluminum) ── */}
              <div
                className="relative"
                style={{
                  width: "420px",
                  height: "272px",
                  /* Multi-stop Space Gray gradient — catches light on edges */
                  background:
                    "linear-gradient(160deg, #4a4a4c 0%, #38383a 18%, #2c2c2e 50%, #242426 80%, #1c1c1e 100%)",
                  borderRadius: "14px 14px 0 0",
                  boxShadow:
                    "inset 1.5px 0 0 rgba(255,255,255,0.09),"
                    + "inset -1.5px 0 0 rgba(0,0,0,0.3),"
                    + "inset 0 1.5px 0 rgba(255,255,255,0.13),"
                    + "inset 0 -2px 0 rgba(0,0,0,0.28)",
                }}
              >
                {/* Polished top-edge chamfer */}
                <div
                  className="absolute top-0 left-[14px] right-[14px] pointer-events-none"
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.28) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.28) 70%, transparent 100%)",
                  }}
                />
                {/* Left-edge chamfer */}
                <div
                  className="absolute left-0 top-[14px] bottom-0 pointer-events-none"
                  style={{ width: "1px", background: "linear-gradient(to bottom, rgba(255,255,255,0.14), transparent)" }}
                />
                {/* Right-edge chamfer */}
                <div
                  className="absolute right-0 top-[14px] bottom-0 pointer-events-none"
                  style={{ width: "1px", background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.06))" }}
                />

                {/* Camera housing pill (MacBook notch-area) */}
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{ top: "8px", display: "flex", alignItems: "center", gap: "5px" }}
                >
                  {/* Camera lens */}
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle at 35% 35%, #3c3c3e, #1a1a1c)",
                      border: "1px solid #505052",
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.08)",
                    }}
                  />
                  {/* Green indicator LED */}
                  <div
                    style={{
                      width: "3.5px",
                      height: "3.5px",
                      borderRadius: "50%",
                      background: "#16a34a",
                      boxShadow: "0 0 6px rgba(22,163,74,0.9), 0 0 12px rgba(22,163,74,0.4)",
                    }}
                  />
                </div>

                {/* ── Inner Screen (bright white, like macOS) ── */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    top: "18px",
                    left: "14px",
                    right: "14px",
                    bottom: "0",
                    borderRadius: "8px 8px 0 0",
                    background: "#ffffff",
                    /* Subtle inner shadow for depth / screen recess */
                    boxShadow:
                      "inset 2px 2px 6px rgba(0,0,0,0.06),"
                      + "inset -1px 0 3px rgba(0,0,0,0.04),"
                      + "inset 0 0 0 1px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* ── macOS menu bar ── */}
                  <div
                    style={{
                      height: "20px",
                      background: "linear-gradient(to bottom, #f0f0f2, #ebebed)",
                      borderBottom: "1px solid #d8d8da",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 8px",
                      gap: "6px",
                    }}
                  >
                    {/* Apple logo placeholder */}
                    <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#c8c8ca" }} />
                    {[36, 28, 24, 28].map((w, i) => (
                      <div key={i} style={{ width: `${w}px`, height: "5px", borderRadius: "2px", background: "#d4d4d6" }} />
                    ))}
                    <div style={{ flex: 1 }} />
                    {[22, 16, 14, 18].map((w, i) => (
                      <div key={i} style={{ width: `${w}px`, height: "5px", borderRadius: "2px", background: "#d4d4d6" }} />
                    ))}
                  </div>

                  {/* ── Browser window ── */}
                  <div style={{ height: "19px", background: "#f7f7f9", borderBottom: "1px solid #e4e4e6", display: "flex", alignItems: "center", padding: "0 7px", gap: "4px" }}>
                    {/* Traffic lights */}
                    <div style={{ display: "flex", gap: "3px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff5f57", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.15)" }} />
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#febc2e", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.15)" }} />
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#28c840", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.15)" }} />
                    </div>
                    {/* URL bar */}
                    <div style={{ flex: 1, height: "8px", borderRadius: "4px", background: "#e8e8ea", margin: "0 6px" }} />
                    <div style={{ width: "14px", height: "8px", borderRadius: "3px", background: "#e8e8ea" }} />
                  </div>

                  {/* ── Website content inside screen ── */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 14px 0", gap: "9px" }}>
                    {/* Logo */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 3px 12px rgba(22,163,74,0.2), 0 1px 3px rgba(0,0,0,0.08)",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src="/assets/images/logobetter.jpg"
                        alt="Future Technologies"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Brand name */}
                    <div style={{ textAlign: "center" }}>
                      <p style={{ fontFamily: "var(--font-nunito)", fontWeight: 800, fontSize: "9px", color: "#111827", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>
                        Future Technologies
                      </p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "6.5px", color: "#16a34a", marginTop: "2px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                        IT Solutions · Mindanao
                      </p>
                    </div>

                    {/* Divider */}
                    <div style={{ width: "85%", height: "1px", background: "linear-gradient(to right, transparent, #e5e7eb, transparent)" }} />

                    {/* Stat chips row */}
                    <div style={{ display: "flex", gap: "5px" }}>
                      {[
                        { n: "7+", l: "Years" },
                        { n: "500+", l: "Clients" },
                        { n: "99.9%", l: "Uptime" },
                      ].map(({ n, l }) => (
                        <div key={l} style={{ background: "#f8fafc", border: "1px solid #e9ecef", borderRadius: "6px", padding: "3px 6px", textAlign: "center" }}>
                          <p style={{ fontFamily: "var(--font-nunito)", fontSize: "8px", fontWeight: 800, color: "#16a34a", margin: 0 }}>{n}</p>
                          <p style={{ fontFamily: "var(--font-inter)", fontSize: "5.5px", color: "#9ca3af", margin: 0 }}>{l}</p>
                        </div>
                      ))}
                    </div>

                    {/* Service rows */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
                      {[
                        { label: "Network Infrastructure", val: "Live", color: "#16a34a", bg: "#f0fdf4" },
                        { label: "Security Systems", val: "Active", color: "#16a34a", bg: "#f0fdf4" },
                        { label: "Cloud Services", val: "99.9%", color: "#0ea5e9", bg: "#f0f9ff" },
                      ].map(({ label, val, color, bg }) => (
                        <div key={label} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "3px 6px", background: bg, borderRadius: "5px", border: `1px solid ${color}22` }}>
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: color, flexShrink: 0, boxShadow: `0 0 4px ${color}` }} />
                          <span style={{ fontFamily: "var(--font-inter)", fontSize: "6.5px", color: "#6b7280", flex: 1 }}>{label}</span>
                          <span style={{ fontFamily: "var(--font-inter)", fontSize: "6.5px", fontWeight: 700, color }}>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screen top-left glare streak */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(128deg, rgba(255,255,255,0.45) 0%, transparent 38%)" }}
                  />
                </div>

                {/* Magnetic latch line at bottom of lid */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  style={{
                    width: "48px",
                    height: "2px",
                    background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)",
                  }}
                />
              </div>

              {/* ── HINGE (dual-barrel, like MacBook Pro) ── */}
              <div
                className="relative"
                style={{
                  width: "420px",
                  height: "8px",
                  background: "linear-gradient(to bottom, #2e2e30 0%, #484849 40%, #404042 100%)",
                }}
              >
                {/* Left barrel */}
                <div
                  style={{
                    position: "absolute",
                    top: "1px",
                    left: "28px",
                    width: "52px",
                    height: "6px",
                    borderRadius: "3px",
                    background: "linear-gradient(to bottom, #606062 0%, #484849 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                  }}
                />
                {/* Right barrel */}
                <div
                  style={{
                    position: "absolute",
                    top: "1px",
                    right: "28px",
                    width: "52px",
                    height: "6px",
                    borderRadius: "3px",
                    background: "linear-gradient(to bottom, #606062 0%, #484849 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                  }}
                />
              </div>

              {/* ── KEYBOARD BASE (unibody) ── */}
              <div
                className="relative"
                style={{
                  width: "420px",
                  height: "106px",
                  background:
                    "linear-gradient(180deg, #e0e0e2 0%, #d4d4d6 30%, #c8c8ca 70%, #bcbcbe 100%)",
                  boxShadow:
                    "inset 0 1.5px 0 rgba(255,255,255,0.9),"
                    + "inset 1.5px 0 0 rgba(255,255,255,0.55),"
                    + "inset -1.5px 0 0 rgba(0,0,0,0.08)",
                }}
              >
                {/* Keyboard content shifted left to align with screen perspective */}
                <div style={{ transform: "translateX(-16px)" }}>

                {/* Function row (Touch Bar style — thin strip) */}
                <div style={{ display: "flex", gap: "2px", padding: "7px 16px 0", justifyContent: "center" }}>
                  {/* Esc */}
                  <div style={{ width: "20px", height: "5px", borderRadius: "2px", background: "rgba(0,0,0,0.13)", boxShadow: "0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.08)" }} />
                  {/* F1–F12 */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} style={{ width: i === 3 || i === 7 ? "3px" : "20px", height: "5px", borderRadius: i === 3 || i === 7 ? "0" : "2px", background: i === 3 || i === 7 ? "transparent" : "rgba(0,0,0,0.11)", boxShadow: i === 3 || i === 7 ? "none" : "0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.08)" }} />
                  ))}
                  {/* Touch ID */}
                  <div style={{ width: "18px", height: "5px", borderRadius: "2px", background: "rgba(0,0,0,0.16)", boxShadow: "0 1px 0 rgba(255,255,255,0.55), inset 0 0 0 1px rgba(0,0,0,0.12)" }} />
                </div>

                {/* Number row */}
                <div style={{ display: "flex", gap: "2.5px", padding: "3.5px 12px 0", justifyContent: "center" }}>
                  {[22, ...Array(11).fill(22), 34].map((w, i) => (
                    <div key={i} style={{ width: `${w}px`, height: "8px", borderRadius: "2.5px", background: "rgba(0,0,0,0.12)", boxShadow: "0 1.5px 0 rgba(255,255,255,0.62), inset 0 -1px 0 rgba(0,0,0,0.09)" }} />
                  ))}
                </div>

                {/* QWERTY row */}
                <div style={{ display: "flex", gap: "2.5px", padding: "2.5px 12px 0", justifyContent: "center" }}>
                  {[30, ...Array(11).fill(22), 24].map((w, i) => (
                    <div key={i} style={{ width: `${w}px`, height: "8px", borderRadius: "2.5px", background: "rgba(0,0,0,0.12)", boxShadow: "0 1.5px 0 rgba(255,255,255,0.62), inset 0 -1px 0 rgba(0,0,0,0.09)" }} />
                  ))}
                </div>

                {/* ASDF row */}
                <div style={{ display: "flex", gap: "2.5px", padding: "2.5px 12px 0", justifyContent: "center" }}>
                  {[36, ...Array(10).fill(22), 38].map((w, i) => (
                    <div key={i} style={{ width: `${w}px`, height: "8px", borderRadius: "2.5px", background: "rgba(0,0,0,0.12)", boxShadow: "0 1.5px 0 rgba(255,255,255,0.62), inset 0 -1px 0 rgba(0,0,0,0.09)" }} />
                  ))}
                </div>

                {/* Space bar row */}
                <div style={{ display: "flex", gap: "2.5px", padding: "2.5px 12px 0", justifyContent: "center" }}>
                  {[28, 22, 22, 130, 22, 22, 22, 22].map((w, i) => (
                    <div key={i} style={{ width: `${w}px`, height: "8px", borderRadius: "2.5px", background: "rgba(0,0,0,0.12)", boxShadow: "0 1.5px 0 rgba(255,255,255,0.62), inset 0 -1px 0 rgba(0,0,0,0.09)" }} />
                  ))}
                </div>

                {/* Close keyboard shift wrapper */}
                </div>

                {/* Glass trackpad — offset left to match keyboard shift */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "calc(50% - 16px)",
                    transform: "translateX(-50%)",
                    width: "120px",
                    height: "19px",
                    borderRadius: "6px",
                    background: "linear-gradient(160deg, #d6d6d8 0%, #c6c6c8 100%)",
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.75) inset,"
                      + "0 -1px 0 rgba(0,0,0,0.06) inset,"
                      + "0 0 0 0.5px rgba(0,0,0,0.1)",
                  }}
                />

                {/* Base left edge shine */}
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.55)", pointerEvents: "none" }} />
                {/* Base right edge shadow */}
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "1px", background: "rgba(0,0,0,0.1)", pointerEvents: "none" }} />
              </div>

              {/* ── FRONT EDGE / LIP (L-shape bottom depth) ── */}
              <div
                style={{
                  width: "420px",
                  height: "16px",
                  background:
                    "linear-gradient(to bottom, #b2b2b4 0%, #a4a4a6 45%, #969698 100%)",
                  borderRadius: "0 0 10px 10px",
                  boxShadow:
                    "inset 1px 0 0 rgba(255,255,255,0.45),"
                    + "inset -1px 0 0 rgba(0,0,0,0.12),"
                    + "0 4px 18px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.12)",
                  position: "relative",
                }}
              >
                {/* Bottom chamfer shine */}
                <div style={{ position: "absolute", bottom: "0", left: "10px", right: "10px", height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.22), transparent)", borderRadius: "0 0 10px 10px" }} />
                {/* Rubber feet — 4 corners */}
                {([["left", "28px"], ["right", "28px"]] as [string, string][]).map(([side, val]) => (
                  <div
                    key={side}
                    style={{
                      position: "absolute",
                      bottom: "3px",
                      [side]: val,
                      width: "20px",
                      height: "5px",
                      borderRadius: "3px",
                      background: "rgba(0,0,0,0.32)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </div>

              {/* Surface cast shadow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "360px",
                  height: "24px",
                  background: "rgba(0,0,0,0.18)",
                  filter: "blur(18px)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* ═══════════════════ FLOATING BADGES ═══════════════════ */}

            {/* DMSF — top-left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 -left-14 top-10 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl pl-[7px] pr-4 py-[7px] shadow-[0_4px_16px_rgba(22,163,74,0.10)] border-2 border-accent/30"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-accent/10 shrink-0">
                <span className="w-[7px] h-[7px] rounded-full bg-accent block" />
              </span>
              <span className="text-gray-800 font-bold text-[11px] tracking-tight">DMSF</span>
              <span className="text-[9px] text-accent font-semibold bg-accent/10 px-2 py-[3px] rounded-md border border-accent/15">Public</span>
            </motion.div>

            {/* BARMM — top-right */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute z-20 -right-16 top-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl pl-[7px] pr-4 py-[7px] shadow-[0_4px_16px_rgba(14,165,233,0.10)] border-2 border-sky-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-sky-50 shrink-0">
                <span className="w-[7px] h-[7px] rounded-full bg-sky-400 block" />
              </span>
              <span className="text-gray-800 font-bold text-[11px] tracking-tight">BARMM</span>
              <span className="text-[9px] text-sky-500 font-semibold bg-sky-50 px-2 py-[3px] rounded-md border border-sky-100">Gov&apos;t</span>
            </motion.div>

            {/* Royal Mandaya Hotel — mid-left */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute z-20 -left-[76px] top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl pl-[7px] pr-4 py-[7px] shadow-[0_4px_16px_rgba(245,158,11,0.10)] border-2 border-amber-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-amber-50 shrink-0">
                <span className="w-[7px] h-[7px] rounded-full bg-amber-400 block" />
              </span>
              <span className="text-gray-800 font-bold text-[11px] tracking-tight">Royal Mandaya</span>
              <span className="text-[9px] text-amber-600 font-semibold bg-amber-50 px-2 py-[3px] rounded-md border border-amber-100">Hotel</span>
            </motion.div>

            {/* 500+ Clients — bottom-right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute z-20 -right-14 bottom-16 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl pl-[7px] pr-4 py-[7px] shadow-[0_4px_16px_rgba(22,163,74,0.12)] border-2 border-green-400/50"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-green-50 shrink-0">
                <span className="w-[7px] h-[7px] rounded-full bg-accent block" />
              </span>
              <span className="text-gray-800 font-bold text-[11px] tracking-tight">500+ Clients</span>
            </motion.div>

            {/* Mindanao-wide — bottom-left */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
              className="absolute z-20 -left-10 bottom-10 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-2xl pl-[7px] pr-4 py-[7px] shadow-[0_4px_16px_rgba(22,163,74,0.10)] border-2 border-accent/30"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-accent/10 shrink-0">
                <span className="w-[7px] h-[7px] rounded-full bg-accent block" />
              </span>
              <span className="text-gray-800 font-bold text-[11px] tracking-tight">Mindanao-wide</span>
            </motion.div>




          </div>
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
