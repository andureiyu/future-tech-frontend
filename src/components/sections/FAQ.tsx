"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { SectionBadge } from "@/components/ui/section-badge";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Tandag, Surigao del Sur and primarily serve businesses, government offices, and individuals across Mindanao. For large-scale deployments, we can coordinate with clients in other regions as well.",
  },
  {
    question: "Do you offer on-site installation and setup?",
    answer:
      "Yes. Our technicians handle full on-site delivery, installation, and configuration for all products and systems — including workstations, servers, CCTV, and network infrastructure. We also provide training for your staff where needed.",
  },
  {
    question: "Can you build a custom PC or workstation to my specifications?",
    answer:
      "Absolutely. We assemble custom desktops and workstations based on your workload requirements — whether for design, engineering, gaming, or business use. We source certified components and back every build with warranty and after-sales support.",
  },
  {
    question: "Do you carry products from major brands?",
    answer:
      "Yes. We are an authorized reseller for leading brands including Acer, HP, Lenovo, Dell, Cisco, D-Link, TP-Link, Hikvision, Dahua, Fortinet, Seagate, and Western Digital, among others.",
  },
  {
    question: "What kind of support is available after purchase?",
    answer:
      "We offer dedicated after-sales support including hardware diagnostics, remote assistance, on-site visits, and annual service contracts. Our team is reachable during business hours and responds quickly to service requests.",
  },
  {
    question: "Can you handle network deployments for large offices or institutions?",
    answer:
      "Yes. We design and deploy enterprise-grade network infrastructure for offices, schools, government agencies, and commercial buildings — including structured cabling, managed switches, enterprise Wi-Fi, VLANs, and firewall configuration.",
  },
  {
    question: "How do I request a quote or consultation?",
    answer:
      "You can reach us through our Contact page, call us directly, or visit our office in Tandag. We'll assess your requirements and provide a detailed, no-obligation proposal tailored to your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center mb-4">
            <SectionBadge>FAQ</SectionBadge>
          </div>
          <h2
            className="text-[38px] font-extrabold text-white tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Frequently Asked
            <br />
            Questions
          </h2>
          <p
            className="text-white/45 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Everything you need to know about our services, products, and how
            we can help your business.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div
                  className={`rounded-[4px] border transition-colors duration-200 ${
                    isOpen
                      ? "bg-bg-card border-accent/30"
                      : "bg-bg-card border-border-subtle hover:border-accent/20"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-accent" : "text-white group-hover:text-accent/80"
                      }`}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-accent border-accent text-bg-dark"
                          : "bg-transparent border-border-subtle text-white/50 group-hover:border-accent/40 group-hover:text-accent/60"
                      }`}
                    >
                      {isOpen ? (
                        <RiSubtractLine size={14} />
                      ) : (
                        <RiAddLine size={14} />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-border-subtle/60 pt-4">
                          <p
                            className="text-white/55 text-[14.5px] leading-relaxed"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
