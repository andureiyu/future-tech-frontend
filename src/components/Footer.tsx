import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookBoxFill,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { label: "Workstations & PCs" },
  { label: "Server Solutions" },
  { label: "CCTV & Security" },
  { label: "Network Infrastructure" },
  { label: "Gadgets & Peripherals" },
  { label: "IT Support & Maintenance" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border-subtle/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <div className="relative w-9 h-9 shrink-0">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-white">
                  <Image
                    src="/assets/images/logobetter.jpg"
                    alt="Future Technologies logo"
                    width={36}
                    height={36}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 rounded-full ring-1 ring-white/15 pointer-events-none" />
              </div>
              <span
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Future Technologies
              </span>
            </Link>
            <p
              className="text-white/35 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Your trusted IT solutions partner in Tandag, Surigao del Sur.
              Serving businesses, schools, and government agencies across
              Mindanao.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100083088619270"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/35 hover:text-accent transition-colors text-sm group"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <RiFacebookBoxFill size={17} />
              <span>Facebook Page</span>
              <RiArrowRightUpLine
                size={13}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white text-[11px] font-bold mb-5 uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/35 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white text-[11px] font-bold mb-5 uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href="/services"
                    className="text-white/35 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white text-[11px] font-bold mb-5 uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <RiMapPinLine
                  className="text-accent mt-0.5 shrink-0"
                  size={15}
                />
                <span
                  className="text-white/35 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Tandag City, Surigao del Sur
                  <br />
                  Philippines
                </span>
              </li>
              <li className="flex items-center gap-3">
                <RiPhoneLine className="text-accent shrink-0" size={15} />
                <a
                  href="https://www.facebook.com/profile.php?id=100083088619270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/35 hover:text-accent text-sm transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Inquire via Facebook
                </a>
              </li>
              <li className="flex items-center gap-3">
                <RiMailLine className="text-accent shrink-0" size={15} />
                <Link
                  href="/contact"
                  className="text-white/35 hover:text-accent text-sm transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Send an Inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border-subtle/30 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {new Date().getFullYear()} Future Technologies. All rights
            reserved.
          </p>
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Tandag, Surigao del Sur · Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
