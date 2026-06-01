"use client";

import { motion } from "framer-motion";
import {
  RiTrophyLine,
  RiGroupLine,
  RiComputerLine,
  RiCustomerService2Line,
} from "react-icons/ri";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const stats = [
  {
    icon: RiTrophyLine,
    value: "7+",
    label: "Years in Business",
    subLabel: null,
    delay: 0,
    accentColor: "#16a34a",
  },
  {
    icon: RiGroupLine,
    value: "500+",
    label: "Clients Served",
    subLabel: "DMSF · BARMM · Royal Mandaya",
    delay: 1.5,
    accentColor: "#16a34a",
  },
  {
    icon: RiComputerLine,
    value: "1,000+",
    label: "Projects Completed",
    subLabel: null,
    delay: 3.0,
    accentColor: "#16a34a",
  },
  {
    icon: RiCustomerService2Line,
    value: "Serves",
    label: "Technical Support",
    subLabel: "Always here when you need us",
    delay: 4.5,
    accentColor: "#16a34a",
  },
];

export default function TabletStats() {
  return (
    <section className="bg-bg-secondary overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-4">
            <span
              className="inline-block text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Impact
            </span>
            <h2
              className="text-4xl md:text-[52px] font-extrabold text-gray-900 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Numbers That{" "}
              <span className="text-accent">Define Us</span>
            </h2>
            <p
              className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Years of trusted service across Mindanao, from government agencies
              to public sectors.
            </p>
          </div>
        }
      >
        {/* ── Tablet screen ── */}
        <div className="relative h-full w-full bg-white overflow-hidden flex flex-col">
          {/* Dot-grid background */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(22,163,74,0.18) 1px, transparent 1px)`,
              backgroundSize: "22px 22px",
            }}
          />

          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/8 rounded-full blur-[90px] pointer-events-none" />

          {/* Status bar */}
          <div className="relative z-10 flex items-center justify-between px-4 pt-3 pb-1 shrink-0">
            <span
              className="text-[10px] font-semibold text-gray-400 tracking-wider"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Future Technologies
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-1.5 rounded-sm bg-accent/70" />
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="w-1 h-1 rounded-full bg-gray-300" />
            </div>
          </div>

          {/* Divider */}
          <div className="relative z-10 h-px bg-gray-100 mx-4 shrink-0" />

          {/* Stats grid */}
          <div className="relative z-10 flex-1 grid grid-cols-2 gap-2.5 md:gap-4 p-3 md:p-6 overflow-hidden">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.65,
                  delay: stat.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative bg-gray-50 hover:bg-green-50/60 border border-gray-100 hover:border-accent/20 rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col gap-1.5 group transition-colors duration-300 overflow-hidden"
              >
                {/* Corner accent streak */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="w-7 h-7 md:w-9 md:h-9 bg-accent/15 rounded-lg flex items-center justify-center shrink-0">
                  <stat.icon className="text-accent" size={15} />
                </div>

                {/* Value */}
                <div
                  className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-none mt-1"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  className="text-gray-500 text-[11px] md:text-xs font-semibold uppercase tracking-wide leading-snug"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </div>

                {/* Sub-label */}
                {stat.subLabel && (
                  <div
                    className="text-accent/60 text-[9px] md:text-[10px] font-medium leading-tight"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {stat.subLabel}
                  </div>
                )}

                {/* Bottom-left accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent/60 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: stat.delay + 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Home bar */}
          <div className="relative z-10 flex justify-center pb-2 shrink-0">
            <div className="w-20 h-1 bg-gray-200 rounded-full" />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
