"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import RevealText from "@/components/animations/RevealText";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#050505] text-[#f4f4f5] pt-32 pb-24 relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gold-950/15 blur-[120px] pointer-events-none select-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-stone-900/40 blur-[120px] pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl flex flex-col gap-6 mb-20">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-500 uppercase">
              Our Legacy
            </span>
            <RevealText
              text="Our Passion Is Serving Perfection, Our Obsession Is Hosting Warmth"
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-white leading-tight"
            />
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
              Arising as one of the best in the luxury catering industry, The Fork was founded on a simple promise: never compromise on quality, taste, or presentation.
            </p>
          </div>

          {/* Leadership Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32"
          >
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-4xl font-serif font-medium text-white tracking-tight">
                Supervised by Mr. Anil Yadav & Mr. Sonu Gahlot
              </h2>
              <div className="w-16 h-[1px] bg-gold-500" />
              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                Under the direct supervision and expertise of our founders, The Fork renders elite hospitality and event management services. Based on the specifications of our clients, we have effectively organized occurrences ranging from simple intimate celebrations to grand majestic wedding occasions.
              </p>
              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                Our founders bring a wealth of hospitality, food, and beverage industry knowledge that has propelled The Fork into remarkable success in a highly competitive domain. With a dedicated, friendly, and trained workforce, we guide you through the process of realizing a memorable catering structure.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-square"
            >
              <Image
                src="/images/image_3.jpg"
                alt="Banquet preparation setup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>

          {/* Quality & Originality Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32"
          >
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 order-last lg:order-first relative rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-square"
            >
              <Image
                src="/images/image_7.jpg"
                alt="Luxury dinner table setup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-4xl font-serif font-medium text-white tracking-tight">
                Assurance of Quality & Originality
              </h2>
              <div className="w-16 h-[1px] bg-gold-500" />
              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                Dealing exclusively with premium, professional-quality products, serving gourmet food is our absolute passion. We are highly concerned about the quality in relation to value; we never compromise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-950/50 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm font-serif">Obsessed Servers</h4>
                    <p className="text-zinc-500 text-xs mt-1 font-light leading-relaxed">
                      Warmth and hospitality are integrated into every server's attitude.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-950/50 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm font-serif">Mouth-Watering Taste</h4>
                    <p className="text-zinc-500 text-xs mt-1 font-light leading-relaxed">
                      Passionate chefs cooking traditional recipes to absolute five-star standards.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-3xl border border-white/5 bg-[#09090b] p-8 sm:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-900/10 blur-[100px] pointer-events-none" />
            <div className="max-w-3xl flex flex-col gap-6 relative z-10">
              <span className="text-xs tracking-[0.25em] font-semibold text-gold-500 uppercase">
                Our Vision
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight leading-tight">
                To emerge as the single-solution provider that transforms your occasion into a huge, life-lasting memory.
              </h3>
              <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
                We design and realize environments where food quality meets five-star hospitality, leaving a deep impact not only in your soul but in the souls of every guest in attendance.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 text-black font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-gold-400 transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
