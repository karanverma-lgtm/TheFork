"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function Marquee({ items, direction = "left", speed = 25 }: MarqueeProps) {
  // Duplicate items to ensure clean loop without visual gaps
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-zinc-200/60 py-8 bg-[#fdfbf7] select-none">
      {/* Edge fading gradients */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#fdfbf7] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#fdfbf7] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-16 w-max px-8"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-16 text-sm md:text-xl font-serif font-light tracking-[0.25em] text-zinc-600 uppercase"
          >
            <span>{item}</span>
            <span className="w-2 h-2 rotate-45 bg-gold-500/40 inline-block shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
