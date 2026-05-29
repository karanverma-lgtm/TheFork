"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, Send, Loader2, Landmark, Compass } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SpotlightCard from "@/components/ui/SpotlightCard";
import RevealText from "@/components/animations/RevealText";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "wedding",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Sync state from query parameters if redirected from estimator
  useEffect(() => {
    const type = searchParams.get("eventType");
    const guests = searchParams.get("guests");
    const wantsBar = searchParams.get("wantsBar");
    const cuisine = searchParams.get("cuisineTier");

    let messageAppend = "";
    if (guests) {
      setFormData((prev) => ({
        ...prev,
        eventType: type || "wedding",
        guestCount: guests,
      }));
      messageAppend = `Estimated Event Profile:\n- Occasion Type: ${type}\n- Estimated Guests: ${guests}\n- Cuisine Tier: ${cuisine}\n- Include Bar Setup: ${wantsBar}\n\n`;
      setFormData((prev) => ({
        ...prev,
        message: messageAppend,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setErrorMsg("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        setSuccessMsg(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "wedding",
          eventDate: "",
          guestCount: "",
          message: "",
        });
      } else {
        setSuccess(false);
        setErrorMsg(result.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setSuccess(false);
      setErrorMsg("Unable to connect to the server. Please verify your network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* Contact Information Column */}
      <div className="lg:col-span-5 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-serif font-medium text-zinc-900">Direct Coordinates</h3>
          <p className="text-zinc-600 text-xs font-light leading-relaxed">
            Our supervisors respond to menu enquiries within 12 hours. Reach out directly or complete the event brief form.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <SpotlightCard className="p-5 flex items-start gap-4 bg-zinc-50/90 border border-zinc-200/60">
            <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-zinc-900 text-sm font-serif font-medium">Call Us</h4>
              <div className="flex flex-col gap-1 mt-1 text-xs text-zinc-600 font-light">
                <a href="tel:+919958032617" className="hover:text-gold-600 transition-colors">+91 99580 32617</a>
                <a href="tel:+919718525601" className="hover:text-gold-600 transition-colors">+91 97185 25601</a>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-5 flex items-start gap-4 bg-zinc-50/90 border border-zinc-200/60">
            <Mail className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-zinc-900 text-sm font-serif font-medium">Email Us</h4>
              <a href="mailto:thefork16@gmail.com" className="text-xs text-zinc-600 hover:text-gold-600 transition-colors mt-1 block font-light">
                thefork16@gmail.com
              </a>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-5 flex items-start gap-4 bg-zinc-50/90 border border-zinc-200/60">
            <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-zinc-900 text-sm font-serif font-medium">HQ Address</h4>
              <p className="text-xs text-zinc-600 leading-relaxed mt-1 font-light">
                Farm No. 1, Baghwani Nursery Jonapur, Chatarpur New Delhi - 110047
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* Global Locations Map Placeholder */}
        <div className="relative rounded-2xl border border-zinc-200/60 bg-zinc-50/90 p-6 overflow-hidden flex flex-col gap-4">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/10 blur-[50px] pointer-events-none" />
          <h4 className="text-zinc-900 text-xs font-serif font-medium uppercase tracking-wider flex items-center gap-2">
            <Compass className="w-4 h-4 text-gold-600 animate-spin-slow" />
            International catering Operations
          </h4>
          <p className="text-zinc-600 text-[11px] font-light leading-relaxed">
            In addition to Delhi NCR, The Fork actively operates professional kitchen units and destination catering coordination in:
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {["Thailand", "Ahmedabad", "Dehradun"].map((loc) => (
              <span key={loc} className="text-[10px] text-gold-700 bg-gold-50 border border-gold-500/20 px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Enquiry Form Column */}
      <div className="lg:col-span-7 rounded-2xl border border-zinc-200/60 bg-[#fdfbf7] p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200/10 blur-[80px] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center py-12 gap-6"
            >
              <CheckCircle className="w-16 h-16 text-gold-600" />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-serif font-medium text-zinc-900">Enquiry Received</h3>
                <p className="text-zinc-600 text-sm font-light max-w-sm leading-relaxed mt-1">
                  {successMsg}
                </p>
              </div>
              <button
                onClick={() => setSuccess(null)}
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors border border-zinc-800"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 relative z-10"
            >
              <h3 className="text-xl font-serif font-medium text-zinc-900 border-b border-zinc-200/60 pb-4">
                Submit Event Details
              </h3>

              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-light">
                  {errorMsg}
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-zinc-900 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-zinc-900 transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Event Type Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91-XXXXX-XXXXX"
                    className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-zinc-900 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="eventType" className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Event Type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-zinc-900 transition-colors cursor-pointer"
                  >
                    <option value="wedding">Wedding / Reception</option>
                    <option value="corporate">Corporate Lunch / Launch</option>
                    <option value="cocktail">Cocktail Dinner / Bar</option>
                    <option value="birthday">Birthday Bash</option>
                    <option value="social">Social Affair / Other</option>
                  </select>
                </div>
              </div>

              {/* Date & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="eventDate" className="text-xs text-zinc-600 font-medium uppercase tracking-wider font-sans">Event Date (Optional)</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-zinc-900 transition-colors text-zinc-800"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="guestCount" className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Estimated Guests</label>
                  <input
                    type="number"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 150"
                    className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-zinc-900 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-zinc-600 font-medium uppercase tracking-wider">Your Message / Menu Outline</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your requirements..."
                  className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 text-zinc-900 transition-colors resize-none font-light leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-gold-500 hover:text-white disabled:opacity-50 font-bold text-xs tracking-widest uppercase py-4 rounded-xl transition-all duration-300 border border-zinc-800"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send Event Brief
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-white text-zinc-900 pt-32 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-200/10 blur-[120px] pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl flex flex-col gap-6 mb-20">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-600 uppercase">Coordinate</span>
            <RevealText
              text="Let us Realize Your Next Memorable Occasion"
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-zinc-900 leading-tight"
            />
            <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed">
              Based in Jonapur Chatarpur New Delhi, The Fork designs premium banqueting structures for weddings, cocktails, and product launches globally.
            </p>
          </div>

          <Suspense fallback={
            <div className="flex items-center justify-center py-20 text-zinc-400">
              <Loader2 className="w-8 h-8 animate-spin text-gold-400" />
            </div>
          }>
            <ContactFormContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </>
  );
}
