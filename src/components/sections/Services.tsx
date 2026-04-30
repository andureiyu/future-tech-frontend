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
} from "react-icons/ri";

const services = [
  {
    icon: RiComputerLine,
    title: "Workstations & PCs",
    description:
      "Custom-built desktop workstations, branded PCs, and high-performance computing setups tailored for professional workflows.",
  },
  {
    icon: RiServerLine,
    title: "Server Solutions",
    description:
      "Rack-mounted servers, NAS storage, and server infrastructure designed for business reliability, redundancy, and scalability.",
  },
  {
    icon: RiCameraLine,
    title: "CCTV & Security",
    description:
      "IP surveillance cameras, DVR/NVR systems, and access control solutions for complete site security and monitoring.",
  },
  {
    icon: RiWifiLine,
    title: "Network Infrastructure",
    description:
      "Routers, managed switches, structured cabling, and enterprise wireless networking for seamless connectivity.",
  },
  {
    icon: RiSmartphoneLine,
    title: "Gadgets & Peripherals",
    description:
      "Laptops, tablets, UPS systems, printers, and the latest accessories for your business or personal needs.",
  },
  {
    icon: RiToolsLine,
    title: "IT Support & Maintenance",
    description:
      "On-site and remote technical support, preventive maintenance schedules, and hardware repair services.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-px bg-accent" />
            <span
              className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              What We Offer
            </span>
          </div>
          <h2
            className="text-[38px] font-extrabold text-white tracking-tight mb-4 leading-tight"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Complete IT Solutions
            <br />
            for Every Need
          </h2>
          <p
            className="text-white/45 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            From hardware procurement to full network deployment, we cover all
            aspects of your technology infrastructure.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle/20 border border-border-subtle/20 rounded-lg overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-bg-primary p-8 group hover:bg-[#3d3d3d] transition-colors duration-300 cursor-default"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-[3px] flex items-center justify-center mb-5 group-hover:bg-accent/18 transition-colors">
                <service.icon className="text-accent" size={19} />
              </div>
              <h3
                className="text-[17px] font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold transition-all duration-200 hover:gap-3 border-b border-accent/30 pb-px hover:border-accent"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            View All Services
            <RiArrowRightLine size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
