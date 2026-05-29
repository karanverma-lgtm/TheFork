"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GlassWater, Landmark, Sparkles } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SpotlightCard from "@/components/ui/SpotlightCard";
import RevealText from "@/components/animations/RevealText";

const servicesList = [
  {
    id: "wedding",
    icon: Sparkles,
    image: "/images/image_14.jpg",
    title: "Grand Celebrations",
    subtitle: "Weddings, Receptions & Social Affairs",
    description: "Designing memorable occasions for life's most beautiful milestones. We guide you through the process of menu design, live stations, and elegant ambiance creation.",
    highlights: [
      "Traditional Awadhi & Kashmiri live banqueting",
      "Obsessed hospitality from certified hosts",
      "Dynamic setup sizes from 50 to 5,000+ guests",
      "Custom layout coordination by Sonu Gahlot"
    ],
    cta: "Book Wedding Menu Consultation"
  },
  {
    id: "corporate",
    icon: Landmark,
    image: "/images/image_17.jpg",
    title: "Corporate Excellence",
    subtitle: "Conventions, Product Launches & Lunches",
    description: "Re-inforce your corporate status with highly structured catering operations. Perfect for business engagements, conventions, and high-impact product launches.",
    highlights: [
      "Rigorous temperature control & hygienic service",
      "Executive board lunches & large conventions",
      "Custom branding & themed dessert stations",
      "Strict timing and seamless cleanup"
    ],
    cta: "Schedule Corporate Presentation"
  },
  {
    id: "cocktail",
    icon: GlassWater,
    image: "/images/image_20.jpg",
    title: "Bespoke Mixology & Socials",
    subtitle: "Cocktail Dinners, Bars & Birthday Bashes",
    description: "Immersive experiences prioritizing gourmet small-plates, customized bar programs, and vibrant layouts that encourage social interaction.",
    highlights: [
      "Professional cocktail menus & flair bartenders",
      "Fusion culinary bites & molecular gastronomy",
      "Intimate residential birthday bashes",
      "Premium 'Inside Materials' & bar accessories"
    ],
    cta: "Request Bar & Small-Plates Menu"
  }
];

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-white text-zinc-900 pt-32 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-200/10 blur-[120px] pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl flex flex-col gap-6 mb-24">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">Our Offerings</span>
            <RevealText
              text="Sensory Masterpieces Designed Around Your Occasions"
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-zinc-900 leading-tight"
            />
            <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed">
              We translate specific design briefs into memorable banqueting events. Under the supervision of Anil Yadav and Sonu Gahlot, we render the finest event and catering services in the industry.
            </p>
          </div>

          {/* Services Detailed List */}
          <div className="flex flex-col gap-24">
            {servicesList.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-32"
                >
                  {/* Image Panel */}
                  <div
                    className={`lg:col-span-5 relative rounded-2xl overflow-hidden border border-zinc-200/80 aspect-video lg:aspect-[4/5] ${
                      index % 2 === 1 ? "lg:order-last" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.subtitle}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Text Details */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-500/20 flex items-center justify-center text-gold-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs tracking-[0.2em] font-semibold text-gold-600 uppercase font-sans">
                        {service.title}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-serif font-medium text-zinc-900 tracking-tight">
                      {service.subtitle}
                    </h2>

                    <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-700 text-xs sm:text-sm font-light leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold bg-zinc-900 text-white hover:bg-gold-500 hover:text-white transition-colors px-6 py-3.5 rounded-full border border-zinc-800"
                      >
                        {service.cta}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick List Footer Grid */}
          <div className="mt-32 pt-20 border-t border-zinc-200/60 text-center">
            <h3 className="text-xl sm:text-2xl font-serif text-zinc-900 mb-12">We Systematically Structure Events For:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                "Weddings",
                "Receptions",
                "Business Engagements",
                "Social Affairs",
                "Corporate Lunches",
                "Product Launches",
                "Conventions",
                "Cocktail Dinners",
                "Birthday Bashes",
                "Custom Bars"
              ].map((item, idx) => (
                <SpotlightCard key={idx} className="p-4 text-center border border-zinc-200/60 bg-zinc-50/90">
                  <p className="text-zinc-700 text-xs sm:text-sm font-serif font-light">{item}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
