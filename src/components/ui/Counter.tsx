"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
