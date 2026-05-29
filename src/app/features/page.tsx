"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Star, Shield, ChefHat, Leaf, ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SpotlightCard from "@/components/ui/SpotlightCard";
import RevealText from "@/components/animations/RevealText";

const cuisines = [
  {
    name: "Awadhi & Dumpukh",
    tagline: "The Art of Royal Slow-Cooking",
    desc: "Directly descended from the royal kitchens of Lucknow, our Awadhi preparation leverages the 'Dumpukh' method—sealing dishes in heavy handis to slow-cook in their own steam, intensifying flavors and aromas.",
    image: "/images/image_21.png",
    accent: "bg-amber-950/20 border-amber-500/20 text-amber-400"
  },
  {
    name: "Kashmiri Wazwan",
    tagline: "A Majestic Multi-Course Banquet",
    desc: "A celebration of Kashmiri heritage. Featuring slow-cooked meat curries, aromatic saffron infusions, and traditional spices, curated carefully to deliver authentic Himalayan flavors.",
    image: "/images/image_22.jpg",
    accent: "bg-red-950/20 border-red-500/20 text-red-400"
  },
  {
    name: "Punjabi Grandeur",
    tagline: "Bold Flavors & Tandoori Heat",
    desc: "A high-energy, rich culinary structure showcasing butter-infused sauces, slow-roasted tandoori meats, and robust spices that capture the true spirit of Punjabi hospitality.",
    image: "/images/image_23.jpg",
    accent: "bg-orange-950/20 border-orange-500/20 text-orange-400"
  },
  {
    name: "Rajasthani Royal Feast",
    tagline: "Heritage Delicacies of the Desert",
    desc: "Enjoy traditional royal delights including slow-cooked lentils, ghee-infused baati, and rich curries flavored with local spices, prepared using authentic traditional methods.",
    image: "/images/image_24.jpg",
    accent: "bg-yellow-950/20 border-yellow-500/20 text-yellow-400"
  }
];

export default function Features() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#050505] text-[#f4f4f5] pt-32 pb-24 relative overflow-hidden">
        {/* Background gradient glow */}
        <div className="absolute top-[20%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gold-950/10 blur-[130px] pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl flex flex-col gap-6 mb-24">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-500 uppercase">Culinary Identity</span>
            <RevealText
              text="Heritage Cuisines & Obsessive Culinary Standards"
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-white leading-tight"
            />
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
              We specialize in recreating authentic regional recipes, using modern cooking technologies and uncompromising sourcing to ensure 5-star presentation.
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            {cuisines.map((cuisine, idx) => (
              <SpotlightCard key={idx} className="flex flex-col gap-6 h-full p-6">
                <div className="relative rounded-xl overflow-hidden border border-white/5 aspect-video w-full">
                  <Image
                    src={cuisine.image}
                    alt={cuisine.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs tracking-wider text-gold-400 font-serif italic">{cuisine.tagline}</span>
                  <h3 className="text-2xl font-serif font-medium text-white">{cuisine.name}</h3>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed mt-2">{cuisine.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Sourcing & Standards */}
          <div className="border-t border-white/5 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs tracking-[0.3em] font-semibold text-gold-500 uppercase">Quality Assurance</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight">
                Our Three Uncompromising Culinary Pillars
              </h2>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Every ingredient is verified, every menu custom-built, and every presentation supervised by our directors. Here is how we guarantee an elite dining standard.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium font-serif text-lg">Farm-Fresh Sourcing</h4>
                  <p className="text-zinc-400 text-sm font-light mt-1 leading-relaxed">
                    Leveraging our local nurseries and partner farms in Chhatarpur, New Delhi, we source fresh organic herbs, microgreens, and artisanal vegetables daily.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium font-serif text-lg">Five-Star Culinary Standards</h4>
                  <p className="text-zinc-400 text-sm font-light mt-1 leading-relaxed">
                    Our kitchens adhere to rigorous corporate safety protocols. Food preparation uses premium machinery, ensuring exact temperature controls for mass serving.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium font-serif text-lg">100% Originality Guarantee</h4>
                  <p className="text-zinc-400 text-sm font-light mt-1 leading-relaxed">
                    We never use cheap fillers, pre-mixed pastes, or artificial preservatives. Every curry base, sauce, and spice mixture is ground and prepared fresh for each event.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-32 rounded-3xl border border-white/5 bg-[#09090b] p-8 sm:p-16 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 relative z-10">
              <h3 className="text-2xl sm:text-4xl font-serif font-medium text-white tracking-tight">Experience Our Cuisines Firsthand</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                We host private tasting sessions for event coordinators, allowing you to preview and customize the menu structure before final booking.
              </p>
              <div className="mt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-gold-400 transition-colors"
                >
                  Schedule A Tasting
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
