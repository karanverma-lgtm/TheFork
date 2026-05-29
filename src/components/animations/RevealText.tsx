"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function RevealText({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  once = true,
  as: Component = "h2",
}: RevealTextProps) {
  const words = text.split(" ");

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVars = {
    initial: { y: "120%" },
    animate: {
      y: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for a cinematic, decelerating reveal
      },
    },
  };

  return (
    <Component className={`inline-block leading-tight ${className}`}>
      <motion.span
        variants={containerVars}
        initial="initial"
        whileInView="animate"
        viewport={{ once: once, margin: "-10%" }}
        className="flex flex-wrap gap-x-[0.2em] gap-y-0.5"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden py-1 -my-1">
            <motion.span variants={wordVars} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
