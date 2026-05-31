"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import { SectionBadge } from "@/components/ui/section-badge";

const slides = [
  { src: "/assets/images/teamphotos.jpg", alt: "Future Technologies team" },
  { src: "/assets/images/photo2.jpg", alt: "Future Technologies team photo 2" },
  { src: "/assets/images/photo3.jpg", alt: "Future Technologies team photo 3" },
  { src: "/assets/images/photo4.jpg", alt: "Future Technologies team photo 4" },
  { src: "/assets/images/photo5.jpg", alt: "Future Technologies team photo 5" },
];

const highlights = [
  "Locally owned and operated in Tandag, Surigao del Sur",
  "Authorized reseller of leading IT brands and manufacturers",
  "Certified technicians with hands-on industry experience",
  "Serving businesses, schools, and government agencies",
];

export default function AboutTeaser() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-gray-200">
              <AnimatePresence mode="sync">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={current === 0}
                  />
                </motion.div>
              </AnimatePresence>
              {/* Subtle dark gradient at bottom for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === current ? "w-5 bg-accent" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
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
              <SectionBadge>About Us</SectionBadge>
            </div>

            <h2
              className="text-[38px] font-extrabold text-gray-900 tracking-tight mb-5 leading-tight"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Mindanao&apos;s Trusted
              <br />
              IT Partner
            </h2>

            <p
              className="text-slate-500 text-base leading-relaxed mb-8"
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
                    className="text-slate-500 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-bold text-sm rounded-sm hover:bg-accent-hover transition-all duration-200 hover:gap-3"
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
