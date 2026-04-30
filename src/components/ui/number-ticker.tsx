"use client";

/**
 * NumberTicker — Animate UI inspired
 * Counts up from 0 to `value` when scrolled into view.
 */

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  prefix?: string;
  /** Animation duration in seconds */
  duration?: number;
  className?: string;
}

export function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent =
            prefix + Math.floor(latest).toLocaleString() + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value, suffix, prefix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
