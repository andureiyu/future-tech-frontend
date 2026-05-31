"use client";

/**
 * GlowCard — Origin UI / Animate UI inspired
 * A card wrapper that renders a radial accent spotlight that follows the mouse.
 * Drop-in replacement for a plain <div> — just pass your existing className.
 *
 * Uses direct DOM style mutation on mousemove to avoid React re-renders
 * on every pixel of movement.
 */

import { useRef, type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** Spotlight radius in px */
  radius?: number;
}

export function GlowCard({
  children,
  className = "",
  radius = 220,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !ref.current) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.background = `radial-gradient(${radius}px at ${x}px ${y}px, rgba(22,163,74,0.07), transparent 80%)`;
  }

  function handleMouseLeave() {
    if (ref.current) ref.current.style.background = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
