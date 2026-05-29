"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ChevronRight, Award, Flame, ShieldCheck, Send, Loader2, CheckCircle } from "lucide-react";
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
  const [heroForm, setHeroForm] = useState({ name: "", phone: "", eventType: "wedding", message: "" });
  const [heroLoading, setHeroLoading] = useState(false);
  const [heroSuccess, setHeroSuccess] = useState(false);

  const handleHeroForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...heroForm, email: "", eventDate: "", guestCount: "" }),
      });
      if (res.ok) {
        setHeroSuccess(true);
        setHeroForm({ name: "", phone: "", eventType: "wedding", message: "" });
      }
    } catch { /* silent */ }
    setHeroLoading(false);
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-white text-zinc-900 relative overflow-hidden">
        {/* Ambient background glows — positioned below hero */}
        <div className="absolute top-[100vh] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-200/20 blur-[120px] pointer-events-none select-none" />
        <div className="absolute top-[140vh] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-amber-200/15 blur-[120px] pointer-events-none select-none" />

        {/* ═══════════════════════════════════════════════════════════════
            1. HERO SECTION — Light Split Layout
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative bg-white overflow-hidden">
          {/* === BACKGROUND LAYERS === */}
          {/* Gold ambient glow — top left */}
          <motion.div
            animate={{ opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-gold-200/30 blur-[120px] pointer-events-none"
          />
          {/* Gold ambient glow — bottom right */}
          <motion.div
            animate={{ opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-[10%] -right-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-amber-100/30 blur-[100px] pointer-events-none"
          />

          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b05_1px,transparent_1px),linear-gradient(to_bottom,#18181b05_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

          {/* === MAIN CONTENT === */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center pt-28 pb-12 lg:pt-24 lg:pb-10">

              {/* LEFT — Editorial Text */}
              <div className="flex flex-col gap-5 lg:gap-6 order-2 lg:order-1">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-700 text-[10px] font-medium tracking-[0.25em] uppercase">
                    <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
                    Five-Star Culinary Excellence
                  </div>
                </motion.div>

                {/* Headline — Mixed typography for editorial impact */}
                <div className="flex flex-col gap-1">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight text-zinc-900 leading-[1.05]"
                  >
                    Elevating
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight leading-[1.05] bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent"
                  >
                    Ambiance & Taste
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight text-zinc-900 leading-[1.05]"
                  >
                    Into Artistry
                  </motion.h1>
                </div>

                {/* Gold accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-20 h-[2px] bg-gradient-to-r from-gold-500 to-gold-500/0 origin-left"
                />

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-zinc-500 font-light text-sm sm:text-base md:text-lg max-w-lg leading-relaxed"
                >
                  Premium hospitality creation, dramatic layouts, and award-winning menus — crafting unforgettable five-star experiences across India & beyond.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <MagneticButton>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-semibold text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-full shadow-[0_4px_20px_rgba(188,142,59,0.25)] hover:shadow-[0_8px_32px_rgba(188,142,59,0.4)] hover:from-gold-300 hover:to-gold-500 transition-all duration-300"
                    >
                      Plan Your Event
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>

                  <Link
                    href="/services"
                    className="flex items-center justify-center gap-1.5 text-zinc-700 hover:text-black font-medium text-xs sm:text-sm tracking-wider uppercase px-6 py-3 border border-zinc-200 rounded-full hover:border-gold-500/30 hover:bg-zinc-50 transition-all duration-300"
                  >
                    Our Services
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex items-center gap-5 pt-1"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <span className="text-zinc-500 text-xs font-light">10,000+ guests served</span>
                  </div>
                  <div className="w-px h-4 bg-zinc-200" />
                  <span className="text-zinc-500 text-xs font-light">4 Global Regions</span>
                </motion.div>
              </div>

              {/* RIGHT — Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative order-1 lg:order-2 w-full max-w-[480px] mx-auto"
              >
                {/* Form card with gold border glow */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-gold-500/15 via-gold-500/5 to-gold-500/15 pointer-events-none" />
                <div className="relative rounded-3xl border border-zinc-200 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-xl shadow-zinc-200/50">
                  {/* Form header */}
                  <div className="mb-5">
                    <p className="text-gold-600 text-[10px] uppercase tracking-[0.25em] font-medium mb-1">Get Started</p>
                    <h3 className="text-zinc-900 text-xl font-serif font-medium">Plan Your Event</h3>
                    <p className="text-zinc-500 text-xs font-light mt-1">Tell us about your occasion and we&apos;ll craft the perfect experience.</p>
                  </div>

                  <AnimatePresence mode="wait">
                    {heroSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center gap-3 py-8 text-center"
                      >
                        <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                          <CheckCircle className="w-7 h-7 text-green-400" />
                        </div>
                        <h4 className="text-zinc-900 text-lg font-serif">Enquiry Sent!</h4>
                        <p className="text-zinc-500 text-sm font-light max-w-xs">Our team will contact you within 24 hours to discuss your event.</p>
                        <button
                          onClick={() => setHeroSuccess(false)}
                          className="text-gold-600 text-xs uppercase tracking-wider font-medium hover:text-gold-500 transition-colors mt-2"
                        >
                          Send Another
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleHeroForm}
                        className="flex flex-col gap-4"
                      >
                        {/* Name */}
                        <div>
                          <label className="text-zinc-500 text-[11px] uppercase tracking-wider font-medium mb-1.5 block">Your Name</label>
                          <input
                            type="text"
                            required
                            value={heroForm.name}
                            onChange={(e) => setHeroForm(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="Full Name"
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="text-zinc-500 text-[11px] uppercase tracking-wider font-medium mb-1.5 block">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={heroForm.phone}
                            onChange={(e) => setHeroForm(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="+91 99580 XXXXX"
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all"
                          />
                        </div>

                        {/* Event Type */}
                        <div>
                          <label className="text-zinc-500 text-[11px] uppercase tracking-wider font-medium mb-1.5 block">Event Type</label>
                          <select
                            value={heroForm.eventType}
                            onChange={(e) => setHeroForm(prev => ({ ...prev, eventType: e.target.value }))}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-zinc-900 text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all appearance-none cursor-pointer"
                          >
                            <option value="wedding">Wedding & Reception</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="birthday">Birthday / Social</option>
                            <option value="cocktail">Cocktail Party</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="text-zinc-500 text-[11px] uppercase tracking-wider font-medium mb-1.5 block">Brief Details</label>
                          <textarea
                            rows={2}
                            value={heroForm.message}
                            onChange={(e) => setHeroForm(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="Guest count, date, cuisine preferences..."
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={heroLoading}
                          className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-semibold text-sm tracking-wider uppercase px-6 py-3 rounded-xl shadow-[0_4px_20px_rgba(188,142,59,0.2)] hover:shadow-[0_8px_32px_rgba(188,142,59,0.35)] hover:from-gold-300 hover:to-gold-500 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {heroLoading ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                          ) : (
                            <><Send className="w-4 h-4" /> Send Enquiry</>
                          )}
                        </button>

                        <p className="text-zinc-600 text-[10px] text-center font-light">
                          We respond within 24 hours. No spam, ever.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>

        </section>

        {/* ═══════════════════════════════════════════════════════════════
            2. INFINITE SCROLL MARQUEE
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative z-10 bg-white">
          <Marquee items={marqueeItems} direction="left" speed={28} />
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            3. EXPERIENCE HIGHLIGHT (ABOUT US)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="flex flex-col gap-7 items-start">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">
              Our Vision
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-zinc-900 leading-[1.1]">
              Crafting Huge Occasions To Last A Lifetime
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed">
              Arising as one of the best in terms of hospitality and five-star quality, The Fork transforms simple celebrations into grand, majestic occasions. Under the dedicated direction of <strong className="text-zinc-800">Mr. Anil Yadav</strong> and <strong className="text-zinc-800">Mr. Sonu Gahlot</strong>, we provide personalized setups that match the high status and expectations of our distinguished guests.
            </p>
            <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed">
              We never compromise on quality. Serving premium delicacies with traditional cuisines like Awadhi/Dumpukh, Punjabi, Rajasthani, and Kashmiri is our absolute passion. We are hosts obsessed with warmth, quality, and originality.
            </p>
            <div className="mt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 text-gold-600 hover:text-gold-500 text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                Discover Our Heritage
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-zinc-200/80 aspect-video lg:aspect-square w-full shadow-2xl shadow-zinc-900/5">
            <Image
              src="/images/image_5.jpg"
              alt="Premium gourmet dish presentation by The Fork"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle gold accent border on hover */}
            <div className="absolute inset-0 border-2 border-transparent hover:border-gold-500/20 rounded-2xl transition-colors duration-500" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            4. STATISTICS COUNTER — Dark band for contrast
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-28 bg-zinc-950 relative z-10 overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative">
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-gold-400">
                <Counter value={10000} suffix="+" />
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-widest font-light">Guests Served</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-gold-400">
                <Counter value={4} suffix="" />
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-widest font-light">Global Regions</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-gold-400">
                <Counter value={5} suffix="★" />
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-widest font-light">Food Quality Status</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-gold-400">
                <Counter value={100} suffix="%" />
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-widest font-light">Originality Assurance</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            5. SERVICES GRID HIGHLIGHT
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center flex flex-col items-center gap-5 mb-20">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">
              Core Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-zinc-900 max-w-3xl leading-[1.1]">
              Sensory Curations For Every Luxury Format
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg max-w-lg font-light leading-relaxed">
              We translate specific design briefs into premium dining. Explore our premier catering verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="flex flex-col gap-6 justify-between h-full p-8">
              <div className="flex flex-col gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold-50 border border-gold-500/20 flex items-center justify-center text-gold-600">
                  <Flame className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-zinc-900">Weddings & Receptions</h3>
                <p className="text-zinc-600 text-base font-light leading-relaxed">
                  Bespoke, multi-station banquet layouts showcasing traditional Awadhi and Kashmiri specialties, coordinated by friendly personnel.
                </p>
              </div>
              <Link href="/services#wedding" className="text-gold-600 hover:text-gold-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-4 group">
                Learn More <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col gap-6 justify-between h-full p-8">
              <div className="flex flex-col gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold-50 border border-gold-500/20 flex items-center justify-center text-gold-600">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-zinc-900">Corporate Conventions</h3>
                <p className="text-zinc-600 text-base font-light leading-relaxed">
                  Timely corporate lunches, conventions, and high-impact product launches customized to reinforce corporate prestige.
                </p>
              </div>
              <Link href="/services#corporate" className="text-gold-600 hover:text-gold-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-4 group">
                Learn More <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SpotlightCard>

            <SpotlightCard className="flex flex-col gap-6 justify-between h-full p-8">
              <div className="flex flex-col gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold-50 border border-gold-500/20 flex items-center justify-center text-gold-600">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-zinc-900">Cocktails & Social Affairs</h3>
                <p className="text-zinc-600 text-base font-light leading-relaxed">
                  Immersive bar configurations, global small-plates, and high-energy birthday bashes, designed to delight and engage.
                </p>
              </div>
              <Link href="/services#cocktail" className="text-gold-600 hover:text-gold-500 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 mt-4 group">
                Learn More <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SpotlightCard>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            6. PHOTO GALLERY SHOWCASE
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-28 bg-[#fdfbf7] border-t border-zinc-200/60 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="flex flex-col gap-3">
                <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">Visual Showcase</span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-zinc-900 tracking-tight leading-[1.1]">Our Curated Catering Portfolio</h2>
              </div>
              <p className="text-zinc-600 text-base sm:text-lg font-light max-w-sm leading-relaxed">
                A glimpse into our luxurious arrangements, premium presentations, and five-star gatherings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeGallery.map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative group rounded-2xl overflow-hidden border border-zinc-200/60 aspect-[4/3] bg-zinc-100 cursor-pointer shadow-lg shadow-zinc-900/5"
                >
                  <Image
                    src={imgSrc}
                    alt={`Catering Gallery Asset ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-gold-300 font-serif text-base tracking-wide">Signature Curation {idx + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            7. CTA SECTION — Dark band for impact
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-32 relative z-10 text-center px-6 bg-zinc-950 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 relative">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-[1.1]">
              Ready to Design an Absolute Masterpiece?
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-light max-w-xl leading-relaxed">
              Mr. Anil Yadav, Mr. Sonu Gahlot, and our team of hosts are waiting to translate your custom brief into reality. Get in touch to schedule a menu consultation.
            </p>
            <div className="mt-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-semibold text-sm tracking-widest uppercase px-10 py-5 rounded-full shadow-[0_8px_32px_rgba(188,142,59,0.35)] hover:shadow-[0_12px_48px_rgba(188,142,59,0.5)] hover:from-gold-300 hover:to-gold-500 transition-all duration-300"
                >
                  Begin Designing
                  <ArrowRight className="w-4 h-4" />
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

