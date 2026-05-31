"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  RiComputerLine,
  RiServerLine,
  RiCameraLine,
  RiWifiLine,
} from "react-icons/ri";

type Category = "All" | "Networking" | "Security" | "Servers" | "Hardware";

const projects = [
  {
    title: "Municipal Government LAN Deployment",
    category: "Networking" as Category,
    icon: RiWifiLine,
    description:
      "Full structured cabling and managed switch deployment for a 3-floor government building. 120+ workstations, VLAN segmentation, and fiber backbone.",
    tags: ["Structured Cabling", "Managed Switches", "VLAN", "Fiber"],
  },
  {
    title: "Private School Computer Laboratory",
    category: "Hardware" as Category,
    icon: RiComputerLine,
    description:
      "Assembly and deployment of 40 custom workstations for a school computer lab, including peripherals, KVM setup, and network integration.",
    tags: ["PC Assembly", "Lab Setup", "KVM", "Networking"],
  },
  {
    title: "Commercial Building CCTV System",
    category: "Security" as Category,
    icon: RiCameraLine,
    description:
      "32-camera IP CCTV installation covering a 4-story commercial building. DVR with remote access, night vision, and motion detection zones.",
    tags: ["IP Cameras", "DVR Setup", "Remote Access", "Motion Detection"],
  },
  {
    title: "Business Center Server Deployment",
    category: "Servers" as Category,
    icon: RiServerLine,
    description:
      "Rack-mounted NAS and file server deployment for a local business center. Includes RAID configuration, backup scheduling, and domain setup.",
    tags: ["NAS", "RAID", "Domain Setup", "Backup"],
  },
  {
    title: "Hospital Network Infrastructure",
    category: "Networking" as Category,
    icon: RiWifiLine,
    description:
      "Enterprise wireless deployment across a regional hospital. 50+ access points, centralized controller, and VLAN separation for admin/clinical/guest.",
    tags: ["Enterprise Wi-Fi", "Access Control", "Healthcare IT", "VLAN"],
  },
  {
    title: "Retail Store Surveillance Upgrade",
    category: "Security" as Category,
    icon: RiCameraLine,
    description:
      "Replacement and upgrade of legacy CCTV system to a 16-camera IP network. Cloud backup integration and mobile monitoring app setup.",
    tags: ["CCTV Upgrade", "Cloud Backup", "Mobile App", "IP Cameras"],
  },
];

const categories: Category[] = ["All", "Networking", "Security", "Servers", "Hardware"];

export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-bg-primary">
      {/* Page hero */}
      <section className="relative bg-bg-secondary pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(22,163,74,0.06) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute bottom-0 left-0 w-100 h-75 bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span
              className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Work
            </span>
          </div>
          <h1
            className="text-[48px] lg:text-[60px] font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Projects That
            <br />
            Speak for Themselves
          </h1>
          <p
            className="text-slate-500 text-lg leading-relaxed mt-5 max-w-xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A selection of deployments across government, healthcare, education,
            and commercial sectors throughout Surigao del Sur.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-[13px] font-semibold rounded-[3px] transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-accent text-white"
                    : "bg-white text-gray-500 border border-border-subtle hover:text-gray-900 hover:border-gray-300"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-border-subtle rounded-lg overflow-hidden group hover:shadow-sm hover:border-accent/20 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id={`grid-${i}`}
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 30 0 L 0 0 0 30"
                          fill="none"
                          stroke="rgba(0,0,0,0.04)"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center">
                      <project.icon
                        className="text-accent/50"
                        size={18}
                      />
                    </div>
                    <span
                      className="text-gray-400 text-[9px] tracking-[0.25em] uppercase"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Project Photo
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-accent text-[10px] font-semibold rounded-[3px] border border-accent/20"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-[15px] font-bold text-gray-900 mb-2.5 leading-snug"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-slate-500 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gray-50 text-gray-500 text-[11px] rounded-[3px] border border-gray-200"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
