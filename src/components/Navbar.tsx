"use client";

import Link from "next/link";
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-secondary/95 backdrop-blur-sm shadow-[0_1px_0_rgba(74,74,74,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-5">
          {/* Brand mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className="text-white font-semibold text-[14px] tracking-wide"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Future Technologies
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-white/60 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 bg-accent text-[#1a1a1a] text-[13px] font-bold rounded-[3px] hover:bg-accent-hover transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white/80 hover:text-white p-1 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border-subtle/60 py-4 bg-bg-secondary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-3 text-[13px] font-medium rounded-[3px] transition-colors mb-1 ${
                  pathname === link.href
                    ? "text-accent bg-bg-primary"
                    : "text-white/60 hover:text-white hover:bg-bg-primary"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border-subtle/40">
              <Link
                href="/contact"
                className="block text-center py-2.5 bg-accent text-[#1a1a1a] text-[13px] font-bold rounded-[3px] hover:bg-accent-hover transition-colors"
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
