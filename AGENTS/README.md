# THE FORK — Agent Orchestration Hub

> This directory contains role-specific instructions for all AI agents working on **The Fork** luxury catering website.

---

## Project Overview

| Field | Value |
|---|---|
| **Project Name** | The Fork Luxury Catering |
| **Framework** | Next.js 16 (App Router) |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion |
| **Database** | PostgreSQL via Prisma ORM |
| **Deployment** | Vercel |
| **Repository** | `karanverma-lgtm/TheFork` |

---

## Design System

### Brand Colors (Tailwind Tokens)
- **Primary Gold**: `gold-500` (#bc8e3b) — accent, CTAs, highlights
- **Gold Range**: `gold-50` to `gold-950` — full palette in `globals.css`
- **Background**: `#ffffff` (white) — site-wide default
- **Text Primary**: `zinc-900` (#18181b)
- **Text Secondary**: `zinc-600` (#52525b)
- **Text Muted**: `zinc-400` (#a1a1aa)

### Typography
- **Headings**: `font-serif` (Playfair Display or similar)
- **Body/UI**: `font-sans` (Inter or system)
- **Hero H1**: `text-4xl` → `text-8xl` (responsive)
- **Section H2**: `text-3xl` → `text-6xl` (responsive)
- **Card H3**: `text-2xl`
- **Body Text**: `text-base` → `text-lg`

### Spacing Conventions
- **Section padding**: `py-28` to `py-32`
- **Max content width**: `max-w-7xl`
- **Card padding**: `p-8`
- **Grid gap**: `gap-8` (cards), `gap-20` (sections)

### Component Patterns
- **SpotlightCard**: Reusable card with mouse-tracking glow (`src/components/ui/SpotlightCard.tsx`)
- **MagneticButton**: Magnetic hover effect button wrapper (`src/components/ui/MagneticButton.tsx`)
- **RevealText**: Word-by-word cinematic text reveal (`src/components/animations/RevealText.tsx`)

---

## File Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services page
│   ├── features/page.tsx     # Cuisines/Features page
│   ├── pricing/page.tsx      # Cost estimator page
│   ├── contact/page.tsx      # Contact form page
│   ├── blog/page.tsx         # Blog listing
│   ├── blog/[slug]/page.tsx  # Dynamic blog post
│   ├── faq/page.tsx          # FAQ accordion page
│   ├── globals.css           # Global styles + Tailwind theme
│   └── layout.tsx            # Root layout (fonts, metadata)
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SpotlightCard.tsx
│   │   ├── MagneticButton.tsx
│   │   └── Counter.tsx
│   ├── animations/           # Animation components
│   │   └── RevealText.tsx
│   └── sections/             # Page section components
│       └── Marquee.tsx
├── lib/                      # Utilities & database
│   └── prisma.ts
public/
├── images/                   # All static images
└── lg-removebg-preview.png   # Brand logo
```

---

## Agent Roles

| Agent | File | Responsibility |
|---|---|---|
| **Queen** | [queen.md](./queen.md) | Master orchestrator — delegates tasks, validates outputs, enforces quality |
| **Frontend** | [frontend-agent.md](./frontend-agent.md) | UI engineering — Next.js, animations, interactive experiences |
| **Backend** | [backend-agent.md](./backend-agent.md) | API design, database, authentication, scalability |
| **SEO** | [seo-agent.md](./seo-agent.md) | Content strategy, meta tags, blog writing, search ranking |
| **Tester** | [tester-agent.md](./tester-agent.md) | QA automation, regression, accessibility, performance |
| **UI/UX** | [uiux-agent.md](./uiux-agent.md) | Design system, visual consistency, user experience |

---

## Rules for All Agents

1. **Read your role file** before starting any task
2. **Follow the design system** — no ad-hoc colors, fonts, or spacing
3. **Use existing components** — check `src/components/` before creating new ones
4. **Keep the white/gold theme** — dark sections are only used for hero, stats, and CTA bands
5. **Font sizes must be readable** — minimum `text-base` for body, `text-2xl` for card headings
6. **All animations via Framer Motion** — no raw CSS animations unless performance-critical
7. **Mobile-first** — the bottom navigation bar on mobile is the primary nav
8. **Test before committing** — `npm run build` must pass with zero errors
9. **Commit messages** — use conventional commits (`feat:`, `fix:`, `style:`, etc.)

---

## Quick Commands

```bash
# Development
npm run dev

# Build (must pass before deploy)
npm run build

# Database
npx prisma generate
npx prisma db push

# Deploy (auto via Vercel on push to main)
git push origin main
```
