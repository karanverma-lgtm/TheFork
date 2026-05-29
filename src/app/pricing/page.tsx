"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HelpCircle, Check, Info } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SpotlightCard from "@/components/ui/SpotlightCard";
import RevealText from "@/components/animations/RevealText";

const packages = [
  {
    name: "Elite Banquet",
    description: "Ideal for birthdays, social affairs, and intimate cocktail dinners.",
    startingPrice: "1,800",
    features: [
      "Select 2 Indian + 1 Global Cuisine",
      "Standard Buffet Setup & Chafing Dishes",
      "Full Service Team & Stewards",
      "Assurance of Quality & Freshness"
    ],
    cta: "Request Proposal",
    accent: "border-zinc-200/60"
  },
  {
    name: "Corporate Prestige",
    description: "Designed for high-impact product launches, conventions, and executive lunches.",
    startingPrice: "2,500",
    features: [
      "Select 3 Cuisines + Custom Mocktail Bar",
      "Modern Minimalist Buffet Stations",
      "Executive Hosts & Supervisors",
      "Full Safety & Temperature Control Logs"
    ],
    cta: "Request Proposal",
    accent: "border-gold-500/40 shadow-sm"
  },
  {
    name: "Royal Heritage",
    description: "Bespoke multi-course structures for grand weddings and VIP receptions.",
    startingPrice: "3,800",
    features: [
      "Exclusive Awadhi/Dumpukh and Kashmiri Wazwan",
      "Bespoke Luxury Ambiance & Glassware",
      "Live Themed Kitchen Counters",
      "Sonu Gahlot's Direct Venue Supervision"
    ],
    cta: "Book Menu Tasting",
    accent: "border-zinc-200/60"
  }
];

export default function Pricing() {
  const [eventType, setEventType] = useState("wedding");
  const [guests, setGuests] = useState(150);
  const [cuisineTier, setCuisineTier] = useState("signature");
  const [wantsBar, setWantsBar] = useState(false);

  // Estimation math
  const calculateEstimate = () => {
    let perGuestPrice = 1800;
    if (eventType === "corporate") perGuestPrice = 2500;
    if (eventType === "wedding") perGuestPrice = 3800;

    if (cuisineTier === "premium") perGuestPrice += 500;
    if (cuisineTier === "royal") perGuestPrice += 1200;

    if (wantsBar) perGuestPrice += 750;

    const baseCost = perGuestPrice * guests;
    return {
      perGuest: perGuestPrice,
      total: baseCost,
    };
  };

  const estimate = calculateEstimate();

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-white text-zinc-900 pt-32 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-200/10 blur-[130px] pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl flex flex-col gap-6 mb-20">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">Consultation & Investment</span>
            <RevealText
              text="Bespoke Pricing Tailored to Your Expectations"
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-zinc-900 leading-tight"
            />
            <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed">
              Every luxury event is custom-designed. We present standard starting packages to guide your budget planning, alongside an interactive digital estimator.
            </p>
          </div>

          {/* Standard Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {packages.map((pkg, idx) => (
              <SpotlightCard key={idx} className={`flex flex-col justify-between h-full p-8 border ${pkg.accent} bg-zinc-50/90`}>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-serif font-medium text-zinc-900">{pkg.name}</h3>
                    <p className="text-zinc-600 text-xs font-light mt-2 min-h-[40px]">{pkg.description}</p>
                  </div>
                  <div className="border-y border-zinc-200/60 py-4 flex items-baseline gap-1">
                    <span className="text-zinc-500 text-xs font-light">Starting at</span>
                    <span className="text-3xl font-serif font-bold text-gold-600">₹{pkg.startingPrice}</span>
                    <span className="text-zinc-500 text-xs font-light">/ guest</span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-light">
                        <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-8 flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-gold-500 hover:text-white font-semibold text-xs tracking-wider uppercase py-3 rounded-full transition-all duration-300 border border-zinc-800"
                >
                  {pkg.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </SpotlightCard>
            ))}
          </div>

          {/* Interactive Cost Estimator */}
          <div className="border-t border-zinc-200/60 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs tracking-[0.25em] font-semibold text-gold-600 uppercase">Interactive Tool</span>
                <h2 className="text-3xl font-serif font-medium text-zinc-900 tracking-tight">Catering Cost Estimator</h2>
                <p className="text-zinc-600 text-sm font-light">
                  Input your event details to dynamically calculate starting ranges for food and service.
                </p>
              </div>

              {/* Form Controls */}
              <div className="flex flex-col gap-6">
                {/* Event Type */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs uppercase tracking-wider text-zinc-600 font-medium">Select Occasion Format</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { key: "social", name: "Social affair" },
                      { key: "corporate", name: "Corporate" },
                      { key: "wedding", name: "Wedding / Gala" },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setEventType(opt.key)}
                        className={`py-3 px-4 rounded-xl border text-xs tracking-wide transition-all duration-300 ${
                          eventType === opt.key
                            ? "bg-gold-500/15 border-gold-500 text-gold-700 font-medium"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100/50"
                        }`}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Count Slider */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between text-xs uppercase tracking-wider text-zinc-600 font-medium">
                    <span>Expected Guest Count</span>
                    <span className="text-gold-600 font-semibold">{guests} Guests</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="25"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer bg-zinc-200 h-1.5 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500">
                    <span>50 Guests</span>
                    <span>1,000+ Guests</span>
                  </div>
                </div>

                {/* Cuisine Tier */}
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs uppercase tracking-wider text-zinc-600 font-medium">Cuisine Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { key: "classic", name: "Core Cuisines" },
                      { key: "signature", name: "Signature Mix" },
                      { key: "royal", name: "Heritage Royal" },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setCuisineTier(opt.key)}
                        className={`py-3 px-4 rounded-xl border text-xs tracking-wide transition-all duration-300 ${
                          cuisineTier === opt.key
                            ? "bg-gold-500/15 border-gold-500 text-gold-700 font-medium"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100/50"
                        }`}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bar Service Toggle */}
                <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200/60 bg-zinc-50/90">
                  <div>
                    <h4 className="text-sm font-serif text-zinc-900 font-medium">Include Bespoke Bar Services</h4>
                    <p className="text-[11px] text-zinc-600 font-light mt-0.5">Adds professional mocktail setup and glassware.</p>
                  </div>
                  <button
                    onClick={() => setWantsBar(!wantsBar)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                      wantsBar ? "bg-gold-500" : "bg-zinc-200"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 shadow-sm ${
                        wantsBar ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Estimate Summary Panel */}
            <div className="lg:col-span-5 rounded-2xl border border-zinc-200/60 bg-[#fdfbf7] p-6 lg:p-8 flex flex-col gap-6 sticky top-24 shadow-sm">
              <div className="flex items-center gap-2 text-gold-600 text-xs font-semibold uppercase tracking-wider">
                <Info className="w-4 h-4" />
                Estimated Price Range
              </div>
              
              <div className="border-b border-zinc-200/60 pb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-zinc-500 text-xs font-light">Per Guest</span>
                  <span className="text-2xl font-serif text-zinc-900">₹{estimate.perGuest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-zinc-500 text-xs font-light">Estimated Total</span>
                  <span className="text-3xl font-serif font-bold text-gold-600">
                    ₹{estimate.total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="text-xs text-zinc-500 leading-relaxed font-light">
                *Estimates include core food preparations, catering staff, standard layout design, and cutlery. Final quotes depend on custom menu modifications and specific distance calculations from Jonapur, New Delhi.
              </div>

              <Link
                href={{
                  pathname: "/contact",
                  query: {
                    eventType,
                    guests,
                    cuisineTier,
                    wantsBar: wantsBar ? "yes" : "no",
                  },
                }}
                className="flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-gold-500 hover:text-white font-bold text-xs tracking-widest uppercase py-4 rounded-xl transition-all duration-300 border border-zinc-800"
              >
                Proceed With This Estimate
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
