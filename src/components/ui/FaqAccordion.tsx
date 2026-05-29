"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

// Helper to parse and format inline markdown elements (bold, italics, and inline code)
function formatInlineMarkdown(text: string): React.ReactNode {
  if (!text) return "";
  const regex = /(\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
  const parts = text.split(regex);
  
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={idx} className="italic text-zinc-300 font-light">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={idx} className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded font-mono text-xs text-gold-400">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-8 flex flex-col gap-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-white/5 bg-[#09090b]/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-gold-500/20"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left p-6 flex justify-between items-center gap-4 text-white hover:text-gold-400 transition-colors cursor-pointer"
            >
              <span className="font-serif text-base sm:text-lg font-medium leading-snug">
                {formatInlineMarkdown(faq.question)}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 pt-2 text-zinc-300 font-light leading-relaxed text-sm sm:text-base border-t border-white/5">
                    {formatInlineMarkdown(faq.answer)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
