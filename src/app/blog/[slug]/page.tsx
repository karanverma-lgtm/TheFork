import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { User, ArrowLeft, BookOpen, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { blogPosts } from "@/lib/blogData";
import SpotlightCard from "@/components/ui/SpotlightCard";
import FaqAccordion from "@/components/ui/FaqAccordion";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

// Bespoke Visual Render for Dumpukh Timeline Diagram
function DumpukhTimeline() {
  const steps = [
    { title: "1784: Great Famine of Awadh", desc: "Nawab Asaf-ud-Daula initiates food relief constructions in Lucknow." },
    { title: "Sealed Clay Handis", desc: "Cooks seal massive pots with wheat dough to keep food warm for night workers." },
    { title: "The Royal Discovery", desc: "Nawab smells the trapped aromas escaping the pots and orders his chefs to replicate it." },
    { title: "Palace Refinements", desc: "Royal chefs (rakabdars) refine the spice-layering and slow-sealing parameters." },
    { title: "The Royal Cuisine Status", desc: "Dumpukh becomes Lucknow's signature royal cuisine, served to nobility." }
  ];

  return (
    <div className="my-12 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 bg-zinc-50/90 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold-200/10 blur-[60px] pointer-events-none" />
      <h4 className="text-zinc-900 font-serif text-lg font-medium mb-8 flex items-center gap-2">
        <span className="w-2 h-2 bg-gold-500 rounded-full" />
        Awadhi Dumpukh Historical Timeline
      </h4>
      <div className="relative border-l border-gold-500/30 ml-4 flex flex-col gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4.5 h-4.5 rounded-full bg-white border-2 border-gold-500 shadow-sm flex items-center justify-center" />
            <h5 className="text-zinc-900 text-sm font-semibold font-sans uppercase tracking-wider">{step.title}</h5>
            <p className="text-zinc-600 text-xs sm:text-sm font-light mt-1.5 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Bespoke Visual Render for Wedding Gantt Chart
function WeddingGantt() {
  const phases = [
    { title: "Phase 1: Consultation & Budget", duration: "Month 1-2", progress: 100, status: "Complete" },
    { title: "Phase 2: Menu Selection & Tastings", duration: "Month 3", progress: 100, status: "Complete" },
    { title: "Phase 3: Site Inspection & Layouts", duration: "Month 4-5", progress: 60, status: "In Progress" },
    { title: "Phase 4: Guest Ratios & Execution", duration: "Month 6", progress: 10, status: "Active Logistics" }
  ];

  return (
    <div className="my-12 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 bg-zinc-50/90 relative overflow-hidden">
      <h4 className="text-zinc-900 font-serif text-lg font-medium mb-8 flex items-center gap-2">
        <span className="w-2 h-2 bg-gold-500 rounded-full" />
        Wedding Catering Planning Gantt
      </h4>
      <div className="flex flex-col gap-6">
        {phases.map((phase, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-zinc-800 font-medium">{phase.title}</span>
              <span className="text-gold-600 font-mono">{phase.duration} ({phase.status})</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full" 
                style={{ width: `${phase.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Bespoke Visual Render for Ice Comparison
function IceComparison() {
  return (
    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Cloudy Ice */}
      <SpotlightCard className="p-6 border border-zinc-200/60 bg-zinc-50/90" glowColor="rgba(239, 68, 68, 0.03)">
        <div className="flex items-center gap-2 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
          <AlertTriangle className="w-4 h-4" />
          Standard Cloudy Ice
        </div>
        <h4 className="text-zinc-900 font-serif text-lg font-medium mb-3">Fast Freezing Process</h4>
        <ul className="flex flex-col gap-3 text-xs text-zinc-600 font-light leading-relaxed">
          <li>• Contains trapped gases, air bubbles, and minerals</li>
          <li>• Brittle structure that cracks easily when warm liquid is poured</li>
          <li>• Dilutes drinks in under 15 minutes, watering down flavor balance</li>
          <li>• Cloudy, unpolished visual appearance in crystal glasses</li>
        </ul>
      </SpotlightCard>

      {/* Clear Ice */}
      <SpotlightCard className="p-6 border border-gold-500/20 bg-gold-50" glowColor="rgba(188, 142, 59, 0.08)">
        <div className="flex items-center gap-2 text-gold-600 text-xs font-semibold uppercase tracking-wider mb-4">
          <CheckCircle2 className="w-4 h-4" />
          The Fork's Crystal Clear Ice
        </div>
        <h4 className="text-zinc-900 font-serif text-lg font-medium mb-3">Directional Freezing Science</h4>
        <ul className="flex flex-col gap-3 text-xs text-zinc-700 font-light leading-relaxed">
          <li>• Pure boiled and filtered water removes all dissolved minerals</li>
          <li>• Directional freezing pushes air bubbles away, leaving crystal clarity</li>
          <li>• High density ice block melts up to 4x slower, preventing dilution</li>
          <li>• Hand-cut shapes stamped with custom event monograms</li>
        </ul>
      </SpotlightCard>
    </div>
  );
}

// Helper to parse and format inline markdown elements (bold, italics, and inline code)
function formatInlineMarkdown(text: string): React.ReactNode {
  if (!text) return "";
  const regex = /(\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
  const parts = text.split(regex);
  
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="text-zinc-900 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={idx} className="italic text-zinc-700 font-light">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={idx} className="bg-zinc-50 border border-zinc-200 px-1.5 py-0.5 rounded font-mono text-xs text-gold-600">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

// Markdown Table Parser and Stylist
function RenderTable({ content }: { content: string }) {
  const lines = content.split("\n").filter(line => line.trim() !== "");
  const rows = lines
    .filter(line => !line.includes("---"))
    .map(line => {
      return line
        .split("|")
        .map(cell => cell.trim())
        .filter((cell, idx, arr) => idx > 0 && idx < arr.length - 1);
    });

  if (rows.length === 0) return null;
  const headers = rows[0];
  const bodyRows = rows.slice(1);

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-zinc-200/60 bg-zinc-50/90 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-200/60 bg-zinc-100/50">
            {headers.map((th, idx) => (
              <th key={idx} className="p-4 text-xs font-semibold uppercase tracking-wider text-gold-600 font-sans">
                {formatInlineMarkdown(th)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, rIdx) => (
            <tr key={rIdx} className="border-b border-zinc-200/40 hover:bg-zinc-100/45 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-4 text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
                  {formatInlineMarkdown(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex-grow bg-white text-zinc-900 pt-40 pb-32 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-serif text-zinc-900 mb-4">Article Not Found</h1>
          <p className="text-zinc-600 text-sm max-w-sm leading-relaxed mb-8">
            The culinary article you are looking for has been moved or does not exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-gold-500 hover:text-white transition-colors border border-zinc-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  // Read the markdown content dynamically from the server
  let bodyContent = "";
  try {
    const filePath = path.join(process.cwd(), "src/content/blogs", `${slug}.md`);
    // Normalize Windows CRLF to standard LF newlines immediately
    const fileContent = fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
    
    const separatorIndex = fileContent.indexOf("---");
    if (separatorIndex !== -1) {
      bodyContent = fileContent.slice(separatorIndex + 3).trim();
    } else {
      bodyContent = fileContent;
    }
  } catch (err) {
    console.error(`Failed to read markdown file for slug ${slug}:`, err);
    bodyContent = "Content temporarily unavailable.";
  }

  // Sequential line-by-line block compiler
  const compileMarkdown = () => {
    const lines = bodyContent.split("\n");
    const elements: React.ReactNode[] = [];
    
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // 1. Skip empty lines
      if (trimmedLine === "") {
        i++;
        continue;
      }
      
      // 2. Render actual separators
      if (trimmedLine.startsWith("---") || trimmedLine.startsWith("***")) {
        elements.push(<hr key={i} className="my-10 border-t border-zinc-200/60" />);
        i++;
        continue;
      }
      
      // 3. Render Headings
      if (trimmedLine.startsWith("###")) {
        elements.push(
          <h4 key={i} className="text-xl font-serif text-zinc-900 font-medium tracking-wide mt-8 pt-4">
            {formatInlineMarkdown(trimmedLine.replace("###", "").trim())}
          </h4>
        );
        i++;
        continue;
      }
      
      // Special FAQ section parser
      if (trimmedLine.startsWith("## FAQ")) {
        elements.push(
          <h3 key={i} className="text-2xl font-serif text-zinc-900 font-semibold tracking-wide mt-12 pt-6 border-t border-zinc-200/60 mb-6">
            {formatInlineMarkdown(trimmedLine.replace("##", "").trim())}
          </h3>
        );
        i++;
        
        const faqItems: { question: string; answer: string }[] = [];
        while (i < lines.length && !lines[i].trim().startsWith("## ") && !lines[i].trim().startsWith("---")) {
          const currentLine = lines[i].trim();
          if (currentLine.startsWith("### Q")) {
            // Extract question
            const questionText = currentLine.replace(/^###\s*Q\d+:\s*/i, "").trim();
            i++;
            
            // Extract answer (non-empty line)
            let answerText = "";
            while (i < lines.length && lines[i].trim() === "") {
              i++;
            }
            if (i < lines.length) {
              const ansLine = lines[i].trim();
              if (ansLine.startsWith("**A") || ansLine.startsWith("A")) {
                answerText = ansLine.replace(/^\*\*A\d+:\*\*\s*/i, "").replace(/^A\d+:\s*/i, "").trim();
              } else {
                answerText = ansLine;
              }
              i++;
            }
            
            if (questionText && answerText) {
              faqItems.push({ question: questionText, answer: answerText });
            }
          } else {
            i++;
          }
        }
        
        if (faqItems.length > 0) {
          elements.push(<FaqAccordion key={`faq-${i}`} faqs={faqItems} />);
        }
        continue;
      }
      
      if (trimmedLine.startsWith("##")) {
        elements.push(
          <h3 key={i} className="text-2xl font-serif text-zinc-900 font-semibold tracking-wide mt-12 pt-6 border-t border-zinc-200/60">
            {formatInlineMarkdown(trimmedLine.replace("##", "").trim())}
          </h3>
        );
        i++;
        continue;
      }
      
      // 4. Render Code Blocks (Mermaid or ASCII layouts)
      if (trimmedLine.startsWith("```")) {
        const codeLines: string[] = [];
        const isMermaid = trimmedLine.includes("mermaid");
        i++; // skip opening backticks
        
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing backticks
        
        if (isMermaid) {
          let component = null;
          if (slug === "dumpukh-secrets") {
            component = <DumpukhTimeline key={i} />;
          } else if (slug === "wedding-menu-planning") {
            component = <WeddingGantt key={i} />;
          } else if (slug === "bespoke-mixology") {
            component = <IceComparison key={i} />;
          }
          
          if (component) {
            elements.push(component);
          } else {
            elements.push(
              <pre key={i} className="bg-zinc-50 border border-zinc-200 p-5 rounded-xl font-mono text-[10px] sm:text-xs overflow-x-auto text-zinc-600 leading-relaxed my-6">
                {codeLines.join("\n")}
              </pre>
            );
          }
        } else {
          // Render ASCII layouts in a styled monospace box
          elements.push(
            <pre key={i} className="bg-zinc-50 border border-zinc-200 p-5 rounded-xl font-mono text-[10px] sm:text-xs overflow-x-auto text-zinc-600 leading-relaxed my-6">
              {codeLines.join("\n")}
            </pre>
          );
        }
        continue;
      }
      
      // 5. Render Tables
      if (trimmedLine.startsWith("|")) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          tableLines.push(lines[i]);
          i++;
        }
        elements.push(<RenderTable key={i} content={tableLines.join("\n")} />);
        continue;
      }
      
      // 6. Render Lists
      if (trimmedLine.startsWith("-") && !trimmedLine.startsWith("---")) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("-") && !lines[i].trim().startsWith("---")) {
          listItems.push(lines[i].trim());
          i++;
        }
        
        elements.push(
          <ul key={i} className="list-disc list-inside space-y-2.5 text-zinc-600 pl-4 my-6">
            {listItems.map((li, lidx) => {
              const cleanedLi = li.replace(/^-/, "").trim();
              return (
                <li key={lidx} className="font-light text-sm sm:text-base leading-relaxed">
                  {formatInlineMarkdown(cleanedLi)}
                </li>
              );
            })}
          </ul>
        );
        continue;
      }
      
      // 7. Render Paragraphs
      elements.push(
        <p key={i} className="whitespace-pre-line text-zinc-700 font-light leading-relaxed text-sm sm:text-base my-4">
          {formatInlineMarkdown(line)}
        </p>
      );
      i++;
    }
    
    return elements;
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-white text-zinc-900 pt-36 pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold-200/10 blur-[130px] pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-8">
          {/* Back Navigation */}
          <div className="border-b border-zinc-200/60 pb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4 text-xs text-gold-600 uppercase tracking-widest font-sans font-medium">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-medium text-zinc-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-zinc-600 font-light border-y border-zinc-200/60 py-4">
              <User className="w-4 h-4 text-gold-600" />
              <span>Written by <strong>{post.author}</strong></span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] w-full border border-zinc-200/80 my-4 bg-zinc-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-gold max-w-none space-y-6 text-zinc-800">
            {compileMarkdown()}
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-zinc-200/60 pt-12 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-left">
              <BookOpen className="w-8 h-8 text-gold-600 shrink-0" />
              <div>
                <p className="text-zinc-900 font-serif font-medium text-sm">Need professional menu advice?</p>
                <p className="text-[11px] text-zinc-600">Coordinate directly with our catering supervisors.</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-gold-500 hover:text-white transition-colors border border-zinc-800"
            >
              Consult Our Team
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
