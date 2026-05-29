"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // customizable glow color (defaults to gold)
}

export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(188, 142, 59, 0.08)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
    }
  };

  const hasPadding = className.split(" ").some(
    (c) => c.startsWith("p-") || c.startsWith("px-") || c.startsWith("py-")
  );
  const paddingClass = hasPadding ? "" : "p-6";

  const hasBorder = className.split(" ").some((c) => c.startsWith("border-"));
  const borderClass = hasBorder ? "" : "border border-zinc-200/60";

  const hasBg = className.split(" ").some((c) => c.startsWith("bg-"));
  const bgClass = hasBg ? "" : "bg-zinc-50/90";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl ${borderClass} ${bgClass} backdrop-blur-md ${paddingClass} transition-all duration-500 hover:border-gold-500/30 ${className}`}
    >
      {/* Background radial glow that follows mouse */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl border border-gold-500/20 opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.4 : 0,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
