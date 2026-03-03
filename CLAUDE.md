# Portfolio Site — Timur Seidalin

Personal portfolio site for Timur Seidalin, Head of Product Design.

## Stack

- **Framework:** Next.js 16 (App Router, RSC)
- **UI:** shadcn/ui (new-york style, zinc base color, CSS variables)
- **Styling:** Tailwind CSS v4 + tw-animate-css
- **Icons:** lucide-react
- **Fonts:** Geist Sans (body) + Geist Mono (code)
- **Language:** TypeScript (strict mode)
- **Static site** — no backend, no database, no auth

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (use to verify before committing)
- `npm run lint` — run ESLint
- `npx shadcn@latest add <component>` — add shadcn/ui component

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout (Geist fonts, metadata)
│   ├── page.tsx         # Single-page portfolio
│   └── globals.css      # Tailwind + shadcn theme tokens
├── components/
│   └── ui/              # shadcn/ui primitives
├── lib/
│   └── utils.ts         # cn() helper
└── hooks/               # Custom hooks (if needed)
```

Path alias: `@/*` → `./src/*`

## Content

All site content lives in `content.md` at the project root. This is the single source of truth — never hardcode content that contradicts this file.

## Design Rules

- **Light theme only.** No dark mode toggle. Clean white background.
- **Minimalist.** Generous whitespace, large headings, clean typography.
- **Single-page scrollable layout.** No routing, no sub-pages. Recruiter scrolls through everything.
- **English only.** No Russian text.
- **Mobile-first responsive.** Must work well on phone screens.

### Section Order

1. Hero — name, headline, tagline, 3 key metrics (4.9 VoC | 55→76% Conversion | 5 Designers, 10 Streams)
2. About — short intro (3-4 lines max), photo + contacts
3. Case Study 1: HCB Business Redesign (full inline case — no accordions/toggles)
4. Speaking & Community
5. Experience Timeline (compact)
6. CTA + Contact links (Telegram, LinkedIn, Email)

### Visual Style

- Gradient backgrounds (blue-purple) under mockup groups
- Bold key phrases for scannability
- Metrics everywhere — numbers are the differentiator
- Before/after comparisons for key decisions
- No accordions or toggles for case content — everything inline

### Positioning

- Always present as **design leader**, never as IC
- Language: "I led", "under my direction", "the team shipped"
- Always show team scale and AI angle
- Target roles: Head of Design, Design Director, VP of Design

## Code Conventions

- Use shadcn/ui components when available — don't build custom equivalents
- Use `cn()` from `@/lib/utils` for conditional class merging
- Tailwind utility classes for all styling — no CSS modules, no styled-components
- Components in `src/components/` with PascalCase filenames
- Keep `page.tsx` as the composition root — extract sections into separate components under `src/components/sections/`
- Prefer Server Components (default in App Router). Only add `"use client"` when state or browser APIs are needed.
