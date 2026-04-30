import type { ReactNode } from "react";

/**
 * SectionBadge — Origin UI inspired pill label
 * Replaces the old dash + small-caps pattern across section headers.
 */

interface SectionBadgeProps {
  children: ReactNode;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-semibold tracking-[0.18em] uppercase ${className}`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {children}
    </span>
  );
}
