"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, ChevronRight, Award, Flame, ShieldCheck } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import MagneticButton from "@/components/ui/MagneticButton";
import SpotlightCard from "@/components/ui/SpotlightCard";
import RevealText from "@/components/animations/RevealText";
import Marquee from "@/components/sections/Marquee";
import Counter from "@/components/ui/Counter";

const marqueeItems = [
  "Awadhi Cuisine",
  "Dumpukh Slow Cook",
  "Punjabi Feast",
  "Rajasthani Royal Dining",
  "Kashmiri Wazwan",
  "5-Star Food Quality",
  "Cocktail Dinners",
  "Bespoke Ambiance Creation",
  "Obsessed Hosts & Servers",
  "Delhi NCR",
  "Thailand Destination",
  "Ahmedabad & Dehradun",
];

const homeGallery = [
  "/images/image_10.jpg",
  "/images/image_11.jpg",
  "/images/image_12.jpg",
  "/images/image_14.jpg",
  "/images/image_16.jpg",
  "/images/image_18.jpg",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-white text-zinc-900 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-200/20 blur-[120px] pointer-events-none select-none" />
        <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-amber-200/15 blur-[120px] pointer-events-none select-none" />

        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6">
          <div className="absolute inset-0 z-0 select-none">
            {/* Parallax Hero Image Cover */}
            <div className="relative w-full h-full opacity-[0.08] filter contrast-[1.0] grayscale">
              <Image
                src="/images/image_4.jpg"
                alt="Luxury Banquet setup by The Fork"
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* Light overlay grid */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-white/80" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b05_1px,transparent_1px),linear-gradient(to_bottom,#18181b05_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-700 text-xs font-light tracking-[0.15em] uppercase"
            >
              <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
              Five-Star Culinary Excellence
            </motion.div>

            <RevealText
              text="Elevating Ambiance And Taste Into Five-Star Artistry"
              as="h1"
              className="text-4xl sm:text-6xl md:text-7xl font-serif font-semibold tracking-tight text-zinc-900 leading-tight max-w-4xl"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-zinc-600 font-light text-sm sm:text-lg max-w-2xl leading-relaxed"
            >
              The Fork Luxury Catering merges premium hospitality creation, dramatic layouts, and award-winning menus to craft unforgettable experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-full shadow-lg hover:from-gold-300 hover:to-gold-500 transition-all duration-300 min-w-[200px]"
                >
                  Plan Your Event
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <Link
                href="/services"
                className="flex items-center justify-center gap-1.5 text-zinc-700 hover:text-black font-medium text-sm tracking-wider uppercase px-8 py-4 border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all duration-300 min-w-[200px]"
              >
                Our Services
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. INFINITE SCROLL MARQUEE */}
        <section className="relative z-10 bg-white">
          <Marquee items={marqueeItems} direction="left" speed={28} />
        </section>

        {/* 3. EXPERIENCE HIGHLIGHT (ABOUT US) */}
        <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex flex-col gap-6 items-start">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">
              Our Vision
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-zinc-900 leading-tight">
              Crafting Huge Occasions To Last A Lifetime
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
              Arising as one of the best in terms of hospitality and five-star quality, The Fork transforms simple celebrations into grand, majestic occasions. Under the dedicated direction of <strong>Mr. Anil Yadav</strong> and <strong>Mr. Sonu Gahlot</strong>, we provide personalized setups that match the high status and expectations of our distinguished guests.
            </p>
            <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
              We never compromise on quality. Serving premium delicacies with traditional cuisines like Awadhi/Dumpukh, Punjabi, Rajasthani, and Kashmiri is our absolute passion. We are hosts obsessed with warmth, quality, and originality.
            </p>
            <div className="mt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-gold-600 hover:text-gold-500 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                Discover Our Heritage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-zinc-200/80 aspect-video lg:aspect-square w-full">
            <Image
              src="/images/image_5.jpg"
              alt="Premium gourmet dish presentation by The Fork"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </section>

        {/* 4. STATISTICS COUNTER */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-200/60 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl md:text-6xl font-serif font-semibold text-gold-600">
                <Counter value={10000} suffix="+" />
              </h3>
              <p className="text-zinc-600 text-xs md:text-sm uppercase tracking-widest font-light">Guests Served</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl md:text-6xl font-serif font-semibold text-gold-600">
                <Counter value={4} suffix="" />
              </h3>
              <p className="text-zinc-600 text-xs md:text-sm uppercase tracking-widest font-light">Global Regions</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl md:text-6xl font-serif font-semibold text-gold-600">
                <Counter value={5} suffix="★" />
              </h3>
              <p className="text-zinc-600 text-xs md:text-sm uppercase tracking-widest font-light">Food Quality Status</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl md:text-6xl font-serif font-semibold text-gold-600">
                <Counter value={100} suffix="%" />
              </h3>
              <p className="text-zinc-600 text-xs md:text-sm uppercase tracking-widest font-light">Originality Assurance</p>
            </div>
          </div>
        </section>

        {/* 5. SERVICES GRID HIGHLIGHT */}
        <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center flex flex-col items-center gap-4 mb-20">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">
              Core Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-zinc-900 max-w-2xl leading-tight">
              Sensory Curations For Every Luxury Format
            </h2>
            <p className="text-zinc-600 text-sm max-w-md font-light leading-relaxed">
              We translate specific design briefs into premium dining. Explore our premier catering verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="flex flex-col gap-6 justify-between h-full">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-500/20 flex items-center justify-center text-gold-600">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-zinc-900">Weddings & Receptions</h3>
                <p className="text-zinc-600 text-sm font-light leading-relaxed">
                  Bespoke, multi-station banquet layouts showcasing traditional Awadhi and Kashmiri specialties, coordinated by friendly personnel.
                </p>
              </div>
              <Link href="/services#wedding" className="text-gold-600 hover:text-gold-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 mt-4">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col gap-6 justify-between h-full">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-500/20 flex items-center justify-center text-gold-600">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-zinc-900">Corporate Conventions</h3>
                <p className="text-zinc-600 text-sm font-light leading-relaxed">
                  Timely corporate lunches, conventions, and high-impact product launches customized to reinforce corporate prestige.
                </p>
              </div>
              <Link href="/services#corporate" className="text-gold-600 hover:text-gold-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 mt-4">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col gap-6 justify-between h-full">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-500/20 flex items-center justify-center text-gold-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-medium text-zinc-900">Cocktails & Social Affairs</h3>
                <p className="text-zinc-600 text-sm font-light leading-relaxed">
                  Immersive bar configurations, global small-plates, and high-energy birthday bashes, designed to delight and engage.
                </p>
              </div>
              <Link href="/services#cocktail" className="text-gold-600 hover:text-gold-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 mt-4">
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </SpotlightCard>
          </div>
        </section>

        {/* 6. PHOTO GALLERY SHOWCASE */}
        <section className="py-24 bg-[#fdfbf7] border-t border-zinc-200/60 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="flex flex-col gap-3">
                <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">Visual Showcase</span>
                <h2 className="text-3xl sm:text-5xl font-serif font-medium text-zinc-900 tracking-tight">Our Curated Catering Portfolio</h2>
              </div>
              <p className="text-zinc-600 text-sm font-light max-w-sm leading-relaxed">
                A glimpse into our luxurious arrangements, premium presentations, and five-star gatherings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeGallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden border border-zinc-200/60 aspect-[4/3] bg-zinc-100 cursor-pointer"
                >
                  <Image
                    src={imgSrc}
                    alt={`Catering Gallery Asset ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-gold-300 font-serif text-sm tracking-wide">Signature Curation {idx + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CONTACT EVENT CALL TO ACTION */}
        <section className="py-32 relative z-10 text-center px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-zinc-900 leading-tight">
              Ready to Design an Absolute Masterpiece?
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-light max-w-xl leading-relaxed">
              Mr. Anil Yadav, Mr. Sonu Gahlot, and our team of hosts are waiting to translate your custom brief into reality. Get in touch to schedule a menu consultation.
            </p>
            <div className="mt-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white font-semibold text-xs tracking-widest uppercase px-8 py-4.5 rounded-full hover:bg-gold-500 hover:text-white transition-all duration-300 border border-zinc-800"
                >
                  Begin Designing
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
