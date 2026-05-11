"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  RiComputerLine,
  RiServerLine,
  RiCameraLine,
  RiWifiLine,
  RiSmartphoneLine,
  RiToolsLine,
  RiArrowRightLine,
  RiCheckLine,
} from "react-icons/ri";
import FAQ from "@/components/sections/FAQ";

const services = [
  {
    icon: RiComputerLine,
    title: "Workstations & PCs",
    description:
      "From entry-level desktops to high-performance workstations, we supply, assemble, and configure systems optimized for your specific workload — whether design, engineering, data processing, or general business use.",
    features: [
      "Custom PC assembly & branded units",
      "Processor, RAM, and storage upgrades",
      "OS installation and software setup",
      "Warranty and after-sales support",
    ],
  },
  {
    icon: RiServerLine,
    title: "Server Solutions",
    description:
      "We design and deploy server environments that give your business the reliability and scalability it needs — from small NAS setups to full rack-mounted enterprise configurations.",
    features: [
      "NAS, tower, and rack-mounted servers",
      "RAID storage configuration",
      "Server OS and virtualization setup",
      "Remote management & monitoring",
    ],
  },
  {
    icon: RiCameraLine,
    title: "CCTV & Security Systems",
    description:
      "Comprehensive surveillance solutions for offices, retail, warehouses, schools, and government facilities. We handle everything from site survey to full system commissioning.",
    features: [
      "IP and analog CCTV installation",
      "DVR/NVR configuration and setup",
      "Remote viewing and mobile access",
      "Access control and door locks",
    ],
  },
  {
    icon: RiWifiLine,
    title: "Network Infrastructure",
    description:
      "Reliable, secure, and high-performance network solutions — structured cabling, enterprise Wi-Fi, VLANs, and firewall configuration for any scale of deployment.",
    features: [
      "Structured cabling and patch panels",
      "Managed switches and routers",
      "Enterprise Wi-Fi deployment",
      "VPN and firewall configuration",
    ],
  },
  {
    icon: RiSmartphoneLine,
    title: "Gadgets & Peripherals",
    description:
      "We carry a curated selection of laptops, tablets, printers, UPS systems, and accessories from trusted brands — with competitive pricing and after-sales assurance.",
    features: [
      "Laptops and tablets (major brands)",
      "Inkjet, laser, and label printers",
      "UPS / AVR power protection",
      "Keyboards, mice, monitors, headsets",
    ],
  },
  {
    icon: RiToolsLine,
    title: "IT Support & Maintenance",
    description:
      "Preventive and corrective technical support for your entire IT environment. Our technicians are available for on-site visits and remote assistance.",
    features: [
      "Scheduled preventive maintenance",
      "Hardware diagnostics and repair",
      "On-site and remote support",
      "Annual service contracts",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function ServicesContent() {
  return (
    <div className="bg-bg-primary">
      {/* Page hero */}
      <section className="relative bg-bg-secondary pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,188,0,0.06) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-100 h-100 bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span
              className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              What We Offer
            </span>
          </div>
          <h1
            className="text-[48px] lg:text-[60px] font-extrabold text-white tracking-tight leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            IT Solutions Built
            <br />
            for Real Business
          </h1>
          <p
            className="text-white/45 text-lg leading-relaxed mt-5 max-w-xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Every service we offer is backed by certified professionals, genuine
            parts, and a commitment to getting it right the first time.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="bg-bg-secondary border border-border-subtle/40 rounded-lg p-8 lg:p-10 hover:border-border-subtle/70 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start">
                  {/* Left */}
                  <div>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                      <service.icon className="text-accent" size={23} />
                    </div>
                    <h2
                      className="text-2xl font-extrabold text-white mb-4 leading-tight"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {service.title}
                    </h2>
                    <p
                      className="text-white/45 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Features */}
                  <div>
                    <p
                      className="text-[11px] font-semibold text-white/30 tracking-[0.18em] uppercase mb-4"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      What&apos;s Included
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3">
                          <div className="w-4.5 h-4.5 bg-accent/12 rounded-[3px] flex items-center justify-center shrink-0">
                            <RiCheckLine className="text-accent" size={11} />
                          </div>
                          <span
                            className="text-white/55 text-sm"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p
              className="text-white/35 text-sm mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Have a specific requirement? We&apos;d love to help you find the right
              solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-[#1a1a1a] font-bold text-sm rounded-[3px] hover:bg-accent-hover transition-all duration-200 hover:gap-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Request a Quote
              <RiArrowRightLine size={14} />
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
