"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Compass } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#09090b] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 radial-glow pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Company Info */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex flex-col gap-1">
            <span className="font-serif text-3xl font-bold tracking-widest bg-gradient-to-r from-gold-100 via-gold-400 to-gold-700 bg-clip-text text-transparent">
              THE FORK
            </span>
            <span className="text-[10px] tracking-[0.3em] font-sans text-gold-500 uppercase font-light">
              Luxury Catering Services
            </span>
          </Link>
          <p className="text-zinc-400 text-sm font-light max-w-sm leading-relaxed">
            Delivering elite 5-star culinary craftsmanship, ambiance design, and bespoke hospitality across major global event destinations.
          </p>
          <div className="flex flex-col gap-3 mt-2 text-sm text-zinc-400 font-light">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Farm No. 1, Baghwani Nursery Jonapur, Chatarpur New Delhi - 110047</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <div className="flex gap-2">
                <a href="tel:+919958032617" className="hover:text-gold-400 transition-colors">+91 99580 32617</a>
                <span>/</span>
                <a href="tel:+919718525601" className="hover:text-gold-400 transition-colors">+91 97185 25601</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="mailto:thefork16@gmail.com" className="hover:text-gold-400 transition-colors">thefork16@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-gold-300 text-lg font-medium tracking-wide">Explore</h4>
          <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-light">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-white transition-colors">Cuisines</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">Culinary Blog</Link>
            </li>
          </ul>
        </div>

        {/* Global Reach */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-gold-300 text-lg font-medium tracking-wide">Regional Footprint</h4>
          <ul className="flex flex-col gap-4 text-sm text-zinc-400 font-light">
            <li className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-gold-400" />
              <div>
                <p className="text-white font-medium text-xs">New Delhi, India</p>
                <p className="text-[11px] text-zinc-500">Corporate HQ & Premium Kitchens</p>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-gold-400" />
              <div>
                <p className="text-white font-medium text-xs">Thailand</p>
                <p className="text-[11px] text-zinc-500">Destination Weddings & Socials</p>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-gold-400" />
              <div>
                <p className="text-white font-medium text-xs">Ahmedabad & Dehradun</p>
                <p className="text-[11px] text-zinc-500">Regional Events & Conventions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative Large Text */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-zinc-600 text-xs font-light tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} The Fork Luxury Catering Services. All Rights Reserved. 
          <span className="block sm:inline sm:ml-2 text-[10px] text-zinc-700 uppercase tracking-widest">
            Design inspired by Apple & Vercel
          </span>
        </p>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          Back to Top
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="w-full text-center mt-12 select-none pointer-events-none opacity-[0.02]">
        <h2 className="text-[8vw] font-serif font-bold tracking-[0.2em] text-white leading-none uppercase">
          THE FORK
        </h2>
      </div>
    </footer>
  );
}
