"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = "", onClick }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      // Calculate cursor position relative to button center
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      // Attract button by 35% of the mouse displacement
      setPosition({ x: x * 0.35, y: y * 0.35 });
    }
  };

  const handleMouseLeave = () => {
    // Return button to original position
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
