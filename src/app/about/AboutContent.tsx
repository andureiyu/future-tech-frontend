"use client";

import { motion } from "framer-motion";
import { RiCheckLine, RiEyeLine, RiFocusLine, RiMapPinLine } from "react-icons/ri";
import dynamic from "next/dynamic";

const TandagMap = dynamic(() => import("@/components/TandagMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-85 rounded-lg bg-[#f0f4f8] animate-pulse" />
  ),
});

const values = [
  {
    title: "Integrity",
    description:
      "We are transparent in our pricing, honest in our assessments, and accountable for every project we take on.",
  },
  {
    title: "Excellence",
    description:
      "We refuse to cut corners. Every installation, deployment, and support call is handled with professional precision.",
  },
  {
    title: "Community",
    description:
      "As a local business, we're invested in the growth of Surigao del Sur. When local businesses thrive, we all thrive.",
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of technological trends so we can recommend solutions that are not just current — but future-proof.",
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

export default function AboutContent() {
  return (
    <div className="bg-bg-primary">
      {/* Page hero */}
      <section className="relative bg-bg-secondary pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,188,0,0.06) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 left-0 w-100 h-100 bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span
              className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Story
            </span>
          </div>
          <h1
            className="text-[48px] lg:text-[60px] font-extrabold text-white tracking-tight leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Built on Trust.
            <br />
            Driven by Technology.
          </h1>
          <p
            className="text-white/45 text-lg leading-relaxed mt-5 max-w-xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Since our founding, Future Technologies has been committed to one
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
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-lg overflow-hidden border border-white/10 relative shadow-[0_0_0_1px_rgba(255,188,0,0.08)]">
                <TandagMap />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-accent/12 rounded-lg -z-10" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2
                className="text-[32px] font-extrabold text-white tracking-tight mb-5 leading-tight"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                From Tandag to All of Mindanao
              </h2>
              <div
                className="space-y-4 text-white/48 text-base leading-relaxed"
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
                  full-service IT solutions provider — handling everything from
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

      {/* Mission & Vision */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-bg-primary border border-border-subtle/40 rounded-lg p-8"
            >
              <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <RiFocusLine className="text-accent" size={22} />
              </div>
              <h3
                className="text-xl font-extrabold text-white mb-4"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Our Mission
              </h3>
              <p
                className="text-white/45 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                To empower organizations in Mindanao with reliable, scalable, and
                cost-effective IT solutions — delivered with integrity, expertise,
                and genuine commitment to long-term client success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-bg-primary border border-border-subtle/40 rounded-lg p-8"
            >
              <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <RiEyeLine className="text-accent" size={22} />
              </div>
              <h3
                className="text-xl font-extrabold text-white mb-4"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Our Vision
              </h3>
              <p
                className="text-white/45 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                To be Mindanao&apos;s most trusted IT solutions company — recognized
                not just for the technology we deploy, but for the relationships
                we build and the communities we help grow.
              </p>
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
              className="text-[36px] font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-bg-secondary border border-border-subtle/40 rounded-lg p-7"
              >
                <div className="w-7 h-7 bg-accent/12 rounded-[3px] flex items-center justify-center mb-4">
                  <RiCheckLine className="text-accent" size={15} />
                </div>
                <h3
                  className="text-[15px] font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-white/38 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {value.description}
                </p>
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
              className="text-[36px] font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              The Technology
              <br />
              Ecosystem We Deploy
            </h2>
            <p
              className="text-white/38 text-sm leading-relaxed mt-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              We source and deploy from globally recognized manufacturers —
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
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-bg-primary border border-border-subtle/40 rounded-lg px-5 py-6 flex flex-col items-start gap-2"
              >
                <div className="w-7 h-7 bg-accent/12 rounded-[3px] flex items-center justify-center mb-1">
                  <RiCheckLine className="text-accent" size={15} />
                </div>
                <span
                  className="text-white/85 text-[14px] font-bold tracking-wide"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {partner.name}
                </span>
                <span
                  className="text-white/30 text-[11px]"
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
