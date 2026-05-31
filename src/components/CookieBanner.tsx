"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiShieldCheckLine, RiCloseLine, RiInformationLine } from "react-icons/ri";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ft-cookie-consent");
    if (!consent) {
      // Slight delay so it doesn't flash on initial paint
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("ft-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("ft-cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop blur layer on mobile */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-998 bg-black/20 backdrop-blur-[2px] sm:hidden"
            onClick={decline}
          />

          <motion.div
            key="banner"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-999 w-[calc(100%-2rem)] max-w-2xl"
          >
            <div
              className="relative rounded-xl border border-gray-200 shadow-[0_24px_64px_rgba(0,0,0,0.12)] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.98)" }}
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent to-transparent opacity-70" />

              <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Icon */}
                <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0">
                  <RiInformationLine className="text-accent" size={22} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-gray-900 text-[13.5px] font-semibold mb-1"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    We use cookies
                  </p>
                  <p
                    className="text-slate-500 text-[12px] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    We use essential cookies to keep the site running smoothly.
                    No tracking, no third-party ads, just a better experience
                    for you.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={decline}
                    className="flex-1 sm:flex-none px-4 py-2 text-[12px] font-medium text-gray-500 hover:text-gray-700 border border-gray-200 hover:border-gray-300 rounded-md transition-all duration-200"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Decline
                  </button>
                  <button
                    onClick={accept}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2 bg-accent hover:bg-accent-hover text-white text-[12px] font-bold rounded-md transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <RiShieldCheckLine size={14} />
                    Accept
                  </button>
                </div>

                {/* Close */}
                <button
                  onClick={decline}
                  className="absolute top-3.5 right-3.5 text-gray-300 hover:text-gray-500 transition-colors"
                  aria-label="Dismiss"
                >
                  <RiCloseLine size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
