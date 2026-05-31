"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(226,232,240,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-5">

          {/* Brand — left */}
          <Link href="/" className="shrink-0 flex items-center gap-2.5">
            {/* Logo circle — white bg matches logo's own background */}
            <div className="relative w-7 h-7 shrink-0">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-white">
                <Image
                  src="/assets/images/logobetter.jpg"
                  alt="Future Technologies logo"
                  width={28}
                  height={28}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              {/* subtle ring overlay so it reads against both light and dark bg */}
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20 pointer-events-none" />
            </div>
            <span
              className="text-gray-900 font-bold text-[15px] tracking-wide"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Future{" "}
              <span className="text-accent">Technologies</span>
            </span>
          </Link>

          {/* Nav links — right of brand, hidden on mobile */}
          <div className="hidden md:flex items-center gap-1 ml-10">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[12.5px] font-medium rounded-sm transition-all duration-200 ${
                    active
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-px bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle — far right */}
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white text-[12px] font-bold rounded-sm hover:bg-accent-hover transition-colors duration-200 tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-gray-500 hover:text-gray-900 p-1 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <RiCloseLine size={21} /> : <RiMenuLine size={21} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border-subtle py-3 bg-white shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2.5 px-3 text-[13px] font-medium rounded-sm transition-colors mb-0.5 ${
                  pathname === link.href
                    ? "text-accent bg-accent/5"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border-subtle/40">
              <Link
                href="/contact"
                className="block text-center py-2.5 bg-accent text-white text-[13px] font-bold rounded-sm hover:bg-accent-hover transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
