"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SpotlightCard from "@/components/ui/SpotlightCard";
import RevealText from "@/components/animations/RevealText";
import { blogPosts } from "@/lib/blogData";

export default function Blog() {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-[#050505] text-[#f4f4f5] pt-32 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-950/15 blur-[120px] pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl flex flex-col gap-6 mb-20">
            <span className="text-xs tracking-[0.3em] font-semibold text-gold-500 uppercase">Culinary Intel</span>
            <RevealText
              text="Stories from Our Kitchens & Banqueting Halls"
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-white leading-tight"
            />
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed">
              We share our secrets. Explore guides on menu structure, slow-cooking heritage, and mixology innovations compiled by the directors.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <SpotlightCard
                key={post.id}
                className="flex flex-col h-full bg-[#09090b] border border-white/5 cursor-pointer group"
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="flex flex-col h-full justify-between gap-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] w-full border border-white/5">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="flex items-center gap-4 text-[10px] text-zinc-500 uppercase tracking-widest font-sans font-light">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-serif font-medium text-white group-hover:text-gold-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 mt-4 group-hover:text-gold-300">
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
