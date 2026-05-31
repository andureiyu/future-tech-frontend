"use client";

import { motion } from "framer-motion";
import { RiDoubleQuotesL, RiStarFill } from "react-icons/ri";

const testimonials = [
  {
    name: "Rene Abalos",
    role: "Business Owner · Tandag City",
    content:
      "Future Technologies helped us set up our entire office network from scratch. Fast, professional, and their after-sales support has been consistently excellent over the years.",
    initials: "RA",
  },
  {
    name: "Ma. Clara Santos",
    role: "IT Head · Municipal Government Office",
    content:
      "We've relied on them for server procurement and maintenance for years. Their depth of knowledge in enterprise systems is impressive — and response times are unmatched locally.",
    initials: "CS",
  },
  {
    name: "Jerome Delos Reyes",
    role: "Principal · Private Institution",
    content:
      "They installed our CCTV system and computer lab. The quality of products, cabling work, and the attention to detail during installation exceeded what we expected at this price point.",
    initials: "JD",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-lg mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-7 h-px bg-accent" />
            <span
              className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Testimonials
            </span>
            <div className="w-7 h-px bg-accent" />
          </div>
          <h2
            className="text-[38px] font-extrabold text-gray-900 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.11 }}
              className="bg-bg-primary border border-border-subtle rounded-lg p-7 relative flex flex-col shadow-sm"
            >
              {/* Quote icon */}
              <RiDoubleQuotesL
                className="text-accent/12 absolute top-6 right-6"
                size={36}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <RiStarFill key={j} className="text-accent" size={13} />
                ))}
              </div>

              <p
                className="text-slate-500 text-sm leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
                <div className="w-9 h-9 bg-accent/15 rounded-full flex items-center justify-center shrink-0">
                  <span
                    className="text-accent text-[11px] font-bold"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div
                    className="text-gray-900 text-[13px] font-semibold"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-gray-400 text-[11px] mt-0.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
