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
        <strong key={idx} className="text-zinc-900 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={idx} className="italic text-zinc-700 font-light">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={idx} className="bg-zinc-50 border border-zinc-200 px-1.5 py-0.5 rounded font-mono text-xs text-gold-600">
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
            className="rounded-2xl border border-zinc-200/60 bg-zinc-50/90 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-gold-500/30 hover:shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left p-6 flex justify-between items-center gap-4 text-zinc-900 hover:text-gold-600 transition-colors cursor-pointer"
            >
              <span className="font-serif text-base sm:text-lg font-medium leading-snug">
                {formatInlineMarkdown(faq.question)}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50"
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
                  <div className="px-6 pb-6 pt-2 text-zinc-600 font-light leading-relaxed text-sm sm:text-base border-t border-zinc-200/40">
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
