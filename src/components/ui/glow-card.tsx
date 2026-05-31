"use client";

/**
 * GlowCard — Origin UI / Animate UI inspired
 * A card wrapper that renders a radial accent spotlight that follows the mouse.
 * Drop-in replacement for a plain <div> — just pass your existing className.
 */

import { useRef, useState, type ReactNode } from "react";

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
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden transition-colors duration-300 ${className}`}
      style={
        hovered
          ? {
              background: `radial-gradient(${radius}px at ${pos.x}px ${pos.y}px, rgba(22,163,74,0.07), transparent 80%)`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
