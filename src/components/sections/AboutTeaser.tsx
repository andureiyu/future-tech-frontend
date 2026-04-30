"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";

const highlights = [
  "Locally owned and operated in Tandag, Surigao del Sur",
  "Authorized reseller of leading IT brands and manufacturers",
  "Certified technicians with hands-on industry experience",
  "Serving businesses, schools, and government agencies",
];

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-[#323232] border border-[#ffffff]/5">
              {/* Grid pattern */}
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="about-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#about-grid)" />
              </svg>

              {/* Placeholder indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 border border-[#ffffff]/8 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent/12 rounded-[3px]" />
                </div>
                <span
                  className="text-white/18 text-[10px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Team / Store Photo
                </span>
              </div>
            </div>

            {/* Offset decorative border */}
            <div className="absolute -bottom-3.5 -right-3.5 w-28 h-28 border border-accent/15 rounded-lg -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-accent" />
              <span
                className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                About Us
              </span>
            </div>

            <h2
              className="text-[38px] font-extrabold text-white tracking-tight mb-5 leading-tight"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Mindanao&apos;s Trusted
              <br />
              IT Partner
            </h2>

            <p
              className="text-white/48 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Founded with a mission to make quality technology accessible,
              Future Technologies has grown to become the go-to IT provider for
              organizations throughout Surigao del Sur and neighboring
              provinces — delivering solutions that are built to last.
            </p>

            <ul className="space-y-3.5 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 w-4.5 h-4.5 bg-accent/12 rounded-[3px] flex items-center justify-center shrink-0">
                    <RiCheckLine className="text-accent" size={11} />
                  </div>
                  <span
                    className="text-white/50 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-[#1a1a1a] font-bold text-sm rounded-[3px] hover:bg-accent-hover transition-all duration-200 hover:gap-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Learn Our Story
              <RiArrowRightLine size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
