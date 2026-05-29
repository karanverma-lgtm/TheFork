"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Home, Sparkles, Calculator, BookOpen, PhoneCall } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header (Desktop & Mobile Brand view) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#050505]/75 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Centered on mobile for premium app look, left-aligned on desktop */}
          <div className="flex items-center group w-full md:w-auto justify-center md:justify-start">
            <Link href="/">
              <Image 
                src="/lg-removebg-preview.png" 
                alt="The Fork Logo" 
                width={120} 
                height={40} 
                className="object-contain invert transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation (Hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-light tracking-wide text-zinc-400 hover:text-white transition-colors py-2"
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Button (Hidden on mobile) */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-gold-400 hover:text-black transition-colors duration-300 border border-white/10"
            >
              Enquire Now
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Sticky Bottom Navigation Bar (Mobile View Only) */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
        <div className="glass rounded-full px-5 py-3.5 flex items-center justify-between shadow-[0_-8px_30px_rgb(0,0,0,0.5)] border border-white/10 max-w-md mx-auto">
          <Link
            href="/"
            className={`flex flex-col items-center gap-1.5 transition-colors ${
              pathname === "/" ? "text-gold-400" : "text-zinc-400 hover:text-white"
            }`}
          >
            <Home className="w-4.5 h-4.5" />
            <span className="text-[9px] font-sans tracking-wider uppercase font-light">Home</span>
          </Link>

          <Link
            href="/services"
            className={`flex flex-col items-center gap-1.5 transition-colors ${
              pathname === "/services" ? "text-gold-400" : "text-zinc-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-4.5 h-4.5" />
            <span className="text-[9px] font-sans tracking-wider uppercase font-light">Services</span>
          </Link>

          <Link
            href="/pricing"
            className={`flex flex-col items-center gap-1.5 transition-colors ${
              pathname === "/pricing" ? "text-gold-400" : "text-zinc-400 hover:text-white"
            }`}
          >
            <Calculator className="w-4.5 h-4.5" />
            <span className="text-[9px] font-sans tracking-wider uppercase font-light">Estimator</span>
          </Link>

          <Link
            href="/blog"
            className={`flex flex-col items-center gap-1.5 transition-colors ${
              pathname === "/blog" ? "text-gold-400" : "text-zinc-400 hover:text-white"
            }`}
          >
            <BookOpen className="w-4.5 h-4.5" />
            <span className="text-[9px] font-sans tracking-wider uppercase font-light">Blog</span>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className={`flex flex-col items-center gap-1.5 transition-colors ${
              isOpen ? "text-gold-400" : "text-zinc-400 hover:text-white"
            }`}
          >
            <Menu className="w-4.5 h-4.5" />
            <span className="text-[9px] font-sans tracking-wider uppercase font-light">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Slide-up from bottom) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md md:hidden flex flex-col justify-end"
          >
            {/* Dismiss backdrop overlay click */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full bg-[#09090b] border-t border-white/10 rounded-t-3xl max-h-[85vh] overflow-y-auto p-6 z-10 flex flex-col gap-6 shadow-2xl"
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image 
                    src="/lg-removebg-preview.png" 
                    alt="The Fork Logo" 
                    width={100} 
                    height={32} 
                    className="object-contain invert"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      key={link.href}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-center text-center p-3.5 rounded-xl border text-xs tracking-wider uppercase font-medium transition-all ${
                          isActive
                            ? "bg-gold-500/10 border-gold-500/30 text-gold-400"
                            : "bg-white/5 border-white/5 text-zinc-400 hover:border-white/10 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Contacts */}
              <div className="flex flex-col gap-3.5 border-t border-white/5 pt-6">
                <span className="text-zinc-500 text-[9px] uppercase tracking-widest font-semibold font-sans">
                  Direct Inquiries
                </span>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+919958032617"
                    className="flex items-center gap-3 text-xs text-zinc-300 hover:text-white font-light bg-white/5 p-3 rounded-xl border border-white/5"
                  >
                    <PhoneCall className="w-4 h-4 text-gold-400" />
                    <span>+91 99580 32617</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-xs tracking-widest uppercase py-3.5 rounded-xl shadow-lg"
                  >
                    Book Event Consultation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="text-center text-[9px] text-zinc-600 tracking-wider mt-4">
                © {new Date().getFullYear()} The Fork Luxury Catering
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
