"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  RiMapPinLine,
  RiFacebookBoxFill,
  RiTimeLine,
  RiArrowRightLine,
} from "react-icons/ri";

const serviceOptions = [
  "Workstations & PCs",
  "Server Solutions",
  "CCTV & Security",
  "Network Infrastructure",
  "Gadgets & Peripherals",
  "IT Support & Maintenance",
  "Other / Not sure",
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to NestJS backend — POST /inquiries
    setSubmitted(true);
  };

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
        <div className="absolute top-0 right-0 w-100 h-100 bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-accent" />
            <span
              className="text-accent text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Get in Touch
            </span>
          </div>
          <h1
            className="text-[48px] lg:text-[60px] font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Let&apos;s Talk
            <br />
            <span className="text-accent">IT Solutions.</span>
          </h1>
          <p
            className="text-slate-500 text-lg leading-relaxed mt-5 max-w-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Send us your inquiry and our team will get back to you as soon as
            possible. Free consultation, no pressure.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="bg-bg-secondary border border-accent/25 rounded-lg p-10 text-center">
                  <div className="w-14 h-14 bg-accent/12 rounded-full flex items-center justify-center mx-auto mb-5">
                    <div className="w-6 h-6 bg-accent/40 rounded-full" />
                  </div>
                  <h3
                    className="text-2xl font-extrabold text-gray-900 mb-3"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Inquiry Received
                  </h3>
                  <p
                    className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Thank you for reaching out! Our team will review your message
                    and get back to you shortly.
                  </p>
                  <p
                    className="text-gray-400 text-xs mt-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Note: Backend integration pending — form submissions will be
                    handled via NestJS + Supabase.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[12px] font-semibold text-gray-500 mb-2 tracking-wide uppercase"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Juan dela Cruz"
                        className="w-full bg-white border border-border-subtle rounded-[3px] px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-accent/50 transition-colors"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[12px] font-semibold text-gray-500 mb-2 tracking-wide uppercase"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="juan@example.com"
                        className="w-full bg-white border border-border-subtle rounded-[3px] px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-accent/50 transition-colors"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[12px] font-semibold text-gray-500 mb-2 tracking-wide uppercase"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+63 9xx xxx xxxx"
                        className="w-full bg-white border border-border-subtle rounded-[3px] px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-accent/50 transition-colors"
                        style={{ fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-[12px] font-semibold text-gray-500 mb-2 tracking-wide uppercase"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-white border border-border-subtle rounded-[3px] px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none"
                        style={{
                          fontFamily: "var(--font-inter)",
                          color: form.service ? "#111827" : "#9ca3af",
                        }}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            style={{ color: "#111827", background: "white" }}
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[12px] font-semibold text-gray-500 mb-2 tracking-wide uppercase"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, requirements, or questions..."
                      className="w-full bg-white border border-border-subtle rounded-[3px] px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-bold text-sm rounded-[3px] hover:bg-accent-hover transition-all duration-200 hover:gap-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Send Inquiry
                    <RiArrowRightLine size={14} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              {/* Location */}
              <div className="bg-white border border-border-subtle rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-accent/10 rounded-[3px] flex items-center justify-center shrink-0 mt-0.5">
                    <RiMapPinLine className="text-accent" size={17} />
                  </div>
                  <div>
                    <h4
                      className="text-gray-900 text-[13px] font-bold mb-1.5"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      Location
                    </h4>
                    <p
                      className="text-slate-500 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Tandag City, Surigao del Sur
                      <br />
                      Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Facebook */}
              <div className="bg-white border border-border-subtle rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-accent/10 rounded-[3px] flex items-center justify-center shrink-0 mt-0.5">
                    <RiFacebookBoxFill className="text-accent" size={17} />
                  </div>
                  <div>
                    <h4
                      className="text-gray-900 text-[13px] font-bold mb-1.5"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      Facebook
                    </h4>
                    <a
                      href="https://www.facebook.com/profile.php?id=100083088619270"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent text-sm hover:text-accent-hover transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Future Technologies — Tandag
                    </a>
                    <p
                      className="text-gray-400 text-xs mt-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Message us directly for quick inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="bg-white border border-border-subtle rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-accent/10 rounded-[3px] flex items-center justify-center shrink-0 mt-0.5">
                    <RiTimeLine className="text-accent" size={17} />
                  </div>
                  <div>
                    <h4
                      className="text-gray-900 text-[13px] font-bold mb-3"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      Business Hours
                    </h4>
                    <div className="space-y-1.5">
                      {[
                        { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
                        { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                        { day: "Sunday", time: "Closed" },
                      ].map((h) => (
                        <div key={h.day} className="flex justify-between gap-4">
                          <span
                            className="text-slate-500 text-xs"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {h.day}
                          </span>
                          <span
                            className={`text-xs font-medium ${
                              h.time === "Closed"
                                ? "text-gray-400"
                                : "text-gray-700"
                            }`}
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
