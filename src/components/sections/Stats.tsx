"use client";

import { motion } from "framer-motion";
import { RiTrophyLine, RiGroupLine, RiComputerLine, RiTimeLine } from "react-icons/ri";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { icon: RiTrophyLine, value: 10, suffix: "+", label: "Years in Business" },
  { icon: RiGroupLine, value: 500, suffix: "+", label: "Clients Served" },
  { icon: RiComputerLine, value: 1000, suffix: "+", label: "Projects Completed" },
  { icon: RiTimeLine, value: null, display: "24/7", label: "Technical Support" },
];

export default function Stats() {
  return (
    <section className="bg-[#262626] border-y border-border-subtle/30 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-[3px] flex items-center justify-center shrink-0">
                <stat.icon className="text-accent" size={19} />
              </div>
              <div>
                <div
                  className="text-2xl font-extrabold text-white leading-none"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {stat.value !== null ? (
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.display
                  )}
                </div>
                <div
                  className="text-white/35 text-xs mt-1"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
