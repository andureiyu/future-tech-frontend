"use client";

import type React from "react";
import { useId } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  RiCheckLine,
  RiMapPinLine,
  RiShieldCheckLine,
  RiTrophyLine,
  RiGroupLine,
  RiLightbulbFlashLine,
} from "react-icons/ri";
import dynamic from "next/dynamic";

const TandagMap = dynamic(() => import("@/components/TandagMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-85 rounded-lg bg-[#f0f4f8] animate-pulse" />
  ),
});

const values = [
  {
    icon: RiShieldCheckLine,
    title: "Integrity",
    description:
      "We are transparent in our pricing, honest in our assessments, and accountable for every project we take on.",
    pattern: [[8, 2], [10, 4], [7, 1], [9, 5], [8, 3]] as number[][],
  },
  {
    icon: RiTrophyLine,
    title: "Excellence",
    description:
      "We refuse to cut corners. Every installation, deployment, and support call is handled with professional precision.",
    pattern: [[10, 3], [7, 6], [9, 1], [8, 4], [10, 2]] as number[][],
  },
  {
    icon: RiGroupLine,
    title: "Community",
    description:
      "As a local business, we're invested in the growth of Surigao del Sur. When local businesses thrive, we all thrive.",
    pattern: [[7, 5], [9, 2], [8, 6], [10, 1], [7, 3]] as number[][],
  },
  {
    icon: RiLightbulbFlashLine,
    title: "Innovation",
    description:
      "We stay ahead of technological trends so we can recommend solutions that are not just current, but future-proof.",
    pattern: [[9, 4], [7, 2], [10, 5], [8, 1], [9, 6]] as number[][],
  },
];

const techPartners = [
  { name: "Acer", category: "Workstations & Laptops" },
  { name: "HP", category: "Workstations & Printers" },
  { name: "Lenovo", category: "Workstations & Servers" },
  { name: "Dell", category: "Servers & Workstations" },
  { name: "Cisco", category: "Networking" },
  { name: "D-Link", category: "Networking" },
  { name: "TP-Link", category: "Networking" },
  { name: "Hikvision", category: "CCTV & Security" },
  { name: "Dahua", category: "CCTV & Security" },
  { name: "Fortinet", category: "Network Security" },
  { name: "Seagate", category: "Storage Solutions" },
  { name: "Western Digital", category: "Storage Solutions" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = useId();
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default function AboutContent() {
  return (
    <div className="bg-bg-primary">
      {/* Page hero */}
      <section className="relative bg-bg-secondary pt-[180px] pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(22,163,74,0.06) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-0 w-100 h-100 bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

        {/* Logo watermark */}
        <div
          className="hidden md:block absolute bottom-0 right-0 pointer-events-none select-none"
          aria-hidden="true"
          style={{ width: "480px", height: "480px" }}
        >
          <Image
            src="/assets/images/logobetter.jpg"
            alt=""
            width={480}
            height={480}
            className="w-full h-full object-contain opacity-[0.05] grayscale"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
            <div className="hidden md:block w-7 h-px bg-accent" />
            <span
              className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Story
            </span>
          </div>
          <h1
            className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl text-center md:text-left"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Built on Trust.
            <br />
            Driven by Technology.
          </h1>
          <p
            className="text-slate-500 text-lg leading-relaxed mt-5 max-w-xl text-center md:text-left"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Since our founding in 2019, Future Technologies has been committed to one
            thing: making enterprise-quality IT accessible to every business in
            Surigao del Sur and across Mindanao.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-lg overflow-hidden border border-gray-200 relative shadow-sm">
                <TandagMap />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-accent/12 rounded-lg -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2
                className="text-[32px] font-extrabold text-gray-900 tracking-tight mb-5 leading-tight"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                From Tandag to All of Mindanao
              </h2>
              <div
                className="space-y-4 text-slate-500 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <p>
                  Future Technologies was founded in Tandag City with a simple
                  belief: that quality IT infrastructure shouldn&apos;t be
                  limited to large urban centers. Local businesses, government
                  units, and educational institutions deserve the same
                  technology advantages as those in the country&apos;s capitals.
                </p>
                <p>
                  Over the years, we&apos;ve grown from a small computer shop to a
                  full-service IT solutions provider, handling everything from
                  workstation assembly and network deployment to CCTV
                  installation and enterprise server management.
                </p>
                <p>
                  Today, our team of certified technicians serves clients across
                  Surigao del Sur and neighboring provinces, with a track record
                  built on reliability, transparency, and results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-lg mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-7 h-px bg-accent" />
              <span
                className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our Values
              </span>
              <div className="w-7 h-px bg-accent" />
            </div>
            <h2
              className="text-[36px] font-extrabold text-gray-900 tracking-tight"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border-subtle rounded-xl overflow-hidden shadow-sm">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="relative overflow-hidden p-7 bg-white border-b border-r border-border-subtle last:border-b-0 md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0 lg:[&:nth-child(4)]:border-r-0 group hover:bg-gray-50/60 transition-colors duration-300"
              >
                {/* Grid pattern overlay */}
                <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-gray-900/[0.01] [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                    <GridPattern
                      width={20}
                      height={20}
                      x="-12"
                      y="4"
                      squares={value.pattern}
                      className="fill-gray-900/[0.06] stroke-gray-900/20 absolute inset-0 h-full w-full mix-blend-overlay"
                    />
                  </div>
                </div>

                {/* Accent glow on hover */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-accent/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="relative z-10 w-10 h-10 bg-accent/10 group-hover:bg-accent/15 rounded-lg flex items-center justify-center mb-auto transition-colors duration-300">
                  <value.icon className="text-accent" size={19} />
                </div>

                {/* Title */}
                <h3
                  className="relative z-10 mt-10 text-[15px] font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p
                  className="relative z-20 mt-2 text-slate-500 text-sm leading-relaxed font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {value.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent/50 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "45%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-7 h-px bg-accent" />
              <span
                className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Trusted Brands
              </span>
              <div className="w-7 h-px bg-accent" />
            </div>
            <h2
              className="text-[36px] font-extrabold text-gray-900 tracking-tight"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              The Technology
              <br />
              Ecosystem We Deploy
            </h2>
            <p
              className="text-slate-500 text-sm leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              We source and deploy from globally recognized manufacturers,
              ensuring every build, installation, and deployment meets
              enterprise-grade standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-bg-primary border border-border-subtle rounded-lg px-5 py-6 flex flex-col items-start gap-2"
              >
                <div className="w-7 h-7 bg-accent/12 rounded-[3px] flex items-center justify-center mb-1">
                  <RiCheckLine className="text-accent" size={15} />
                </div>
                <span
                  className="text-gray-900 text-[14px] font-bold tracking-wide"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {partner.name}
                </span>
                <span
                  className="text-gray-400 text-[11px]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {partner.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
