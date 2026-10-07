# HCB Business Case Study — Design Brief for Coder

## Overview

Redesign the HCB Business case study page (`/cases/hcb-business`) using a **bento grid / card-based layout**. The current version is text-heavy and monotonous. The new version should be scannable, visual, and metric-driven.

Reference screenshots are in `/Refs/` folder — study them before starting.

Data source: `src/data/hcb-case-data.ts` (single source of truth for all content).

---

## Theme

Support both **light and dark themes**. Use CSS variables from shadcn/ui theme system.

- Cards: `bg-card` with `border-border` (1px solid)
- Page background: `bg-background`
- Use subtle card elevation in dark mode (lighter border or faint shadow), not heavy drop shadows
- Accent color: **amber** for metrics, highlights, and interactive states
- Secondary accents: use muted purple/blue sparingly for tags (see Process section)

Do NOT hardcode colors. Everything through CSS variables and Tailwind theme classes so theming works automatically.

---

## Global Design Principles

### Bento Grid
- Sections use **CSS Grid** with mixed card sizes (1x1, 2x1, 1x2, full-width)
- Cards have consistent padding (`p-6` sm, `p-8` md), `rounded-2xl`, and `border border-border`
- Cards are **self-contained units** — each card = one idea, one concept
- Max content width: `max-w-[1200px]` (same as current)
- Grid gap: `gap-4` or `gap-6`

### Visual Hierarchy
- **Numbers are heroes.** Metrics should be the largest elements on the page (`text-5xl` to `text-7xl`)
- Descriptions under metrics: small (`text-sm`), `text-muted-foreground`
- Section titles: bold, large, but smaller than metrics
- Body text inside cards: `text-sm` or `text-base`, max 2-3 sentences per card
- If text doesn't fit in 3 sentences — it needs to be split into multiple cards

### Rhythm & Pacing
- Alternate between: dense grids (2x2, 3-col) and full-width breathing sections
- Every 2-3 sections, insert a **visual break**: full-width image, pull quote, or large metric callout
- Never have two identical grid layouts back to back

---

## Section-by-Section Instructions

### 1. Hero

Keep the current approach but tighten:
- Title: `HCB Business Redesign` — large, bold
- Subtitle: one line
- Meta pills: company, year, role, team (as now)
- Hero metrics: 4 metrics in a row — **numbers huge**, labels small
- Hero image placeholder below (full-width, `rounded-2xl`)

No changes to the hero structure — it works.

---

### 2. Context (replace HybridContext)

**Bento grid: 2x2 cards**

| Card | Title | Content |
|------|-------|---------|
| Top-left | **Context** | First paragraph from `background.paragraphs[0]`. Trim to 2-3 sentences max. |
| Top-right | **Inputs** | "15+ products crammed into MVP architecture. Navigation issues in client feedback. Two separate apps (retail & business) needed unification." |
| Bottom-left | **Problem** | "The app had outgrown its architecture. Functional, but cluttered and inconsistent." |
| Bottom-right | **Goal** | "Transform a patched-together MVP into a scalable, consistent platform for tens of thousands of SME clients." |

Each card:
- Title: `text-lg font-semibold` + small icon (optional, from lucide-react)
- Body: `text-sm text-muted-foreground`, 2-3 sentences max
- `bg-card rounded-2xl border border-border p-6`

**Below the grid — one full-width accent card:**
- "Design-Led Initiative" callout
- Key phrase LARGE: "This was a design-led initiative — not a business request."
- Supporting text below, small
- Subtle amber accent (left border or background tint)

---

### 3. Research (replace HybridResearch)

**Layout: 3 metric cards in a row + full-width insight quote below**

Three cards, each containing:
- Big number: `50+`, `13`, `Top 10` — `text-5xl font-bold`
- Title: `text-base font-semibold`
- Description: `text-sm text-muted-foreground`, 1-2 sentences

Below: **Pull quote** (full width)
- `research.keyInsight`
- Left amber border, large text
- This is the visual break between Research and Decisions

---

### 4. Key Decisions (replace HybridDecision x3)

This is the core of the case. Each decision gets its own mini-section.

**For each decision:**

**Header row:**
- Section number (`03.1`, `03.2`, `03.3`) in mono + amber
- Decision title: `text-4xl font-bold`
- Metric badge: amber pill (as current `MetricBadge`)

**Bento grid: 2 columns**

| Left card: **Before** | Right card: **After** |
|---|---|
| "Before" label (uppercase, small, muted) | "After" label (uppercase, small, amber) |
| `decision.before` text | Bullet list from `decision.after` |
| Muted styling, slightly subdued card | Slightly emphasized card (amber border-left or ring) |

Important: **max 3 bullets in After**. If `decision.after` has more than 3 items, the first 3 are shown as bullets, the rest can be collapsed or cut. Three is the cognitive limit.

**Below cards: Before/After screenshots** (full-width, side by side)
- Keep `BeforeAfterComparison` component but improve labels
- "Before" badge: dark/muted
- "After" badge: amber accent

**Result callout card** (full-width):
- The NUMBER from the result — extract and display huge (`text-5xl`)
  - e.g., "76%" or "+23%" or "+19%"
- The context text — small below
- `decision.note` if exists — even smaller, muted
- Card with subtle amber tint or left border

**Divider between decisions:** thin `border-border` line (as now)

---

### 5. Design System (replace HybridDesignSystem)

**Bento grid: 2x2 cards + 1 wide screenshot card**

Four cards from `designSystem` array:
- Each card: title + 1-2 sentences
- Grid: `sm:grid-cols-2`

Below or alongside: screenshot placeholder (design system overview)
- This is where visual artifacts would go — component library, token table, etc.
- For now: placeholder with `aspect-video`

Optional: if we later get actual design system images, this section should support a gallery or multi-image layout.

---

### 6. Process & Team (replace HybridProcess)

**This section needs the most visual change.**

**Layout: 2x3 card grid** (like the reference)

Each card represents a phase:
1. Metrics-Driven Iterations
2. Continuous Validation
3. Design Reviews
4. Parallel Execution
5. AI-Assisted Workflow

Each card:
- Title: `font-semibold`
- **Colored tags/pills** inside each card (2-4 per card)
- Tags represent methods/tools used in that phase
- Tag colors: use 2-3 distinct muted colors (amber, purple/violet, blue) for visual variety
- Body text: remove or shorten to 1 sentence. The tags tell the story.

Example tags for "Metrics-Driven Iterations":
- `Research` (purple), `Prototype` (blue), `A/B Testing` (amber), `Analytics` (purple)

Example tags for "Parallel Execution":
- `4 Designers` (amber), `9 Streams` (purple), `Sprint Planning` (blue)

The coder should derive sensible tags from the existing text descriptions. The point is **visual density without text density**.

---

### 7. Results (replace HybridResults)

**Remove the duplicate `heroMetrics` grid at the top.** The hero already shows these.

**Keep and improve:**
- Results table — clean, works well. Keep as is.
- Delta column: amber bold (already done)

**Business growth section:**
- 4 metric cards in a row (as now, but inside actual cards with borders)
- Disclaimer text above: keep "shown for context"

Optional: add a full-width "headline result" card above the table:
- e.g., "55% -> 76% Registration Conversion" — huge text, amber accent
- This is the one number someone remembers

---

### 8. Closing (replace HybridClosing)

**Simplify drastically.**

**My Role:**
- Keep the grid of role items, but limit to **4 items max** (pick the strongest)
- Card-based: each role item in a small card

**Reflection:**
- ONE paragraph, not three. Pick the strongest one:
  > "The best design initiatives do not come from a brief — they come from a team that understands the product deeply enough to know what needs to change before anyone asks."
- Display as a centered pull quote, large text

**Tagline:**
- `closing.tagline` — bold, large, centered
- This is the last thing the reader sees

**CTA:**
- Add a "Back to portfolio" link or "Next case" link
- Contact links (Telegram, LinkedIn, Email) — small, centered below tagline
- This gives the recruiter a clear next action

---

### 9. NEW: Learnings Section (add before Closing)

Add a new section between Results and Closing.

**Layout: 2 columns**

| Left: **What Worked** | Right: **What I'd Do Differently** |
|---|---|
| 3-4 bullet points | 2-3 bullet points |
| Normal text color | Slightly muted or different accent |

Content to add to `hcb-case-data.ts`:

```ts
export const learnings = {
  worked: [
    "Design-led initiative framing — stakeholders bought in because we owned the narrative",
    "Parallel execution model — redesign shipped without pausing product delivery",
    "Pre-auth zone bet — highest ROI decision, backed by research",
  ],
  wouldChange: [
    "VoC dipped post-release (4.91 -> 4.78) — would plan a more gradual rollout with feature flags",
    "Design system adoption was slower than expected — would embed a dedicated DS designer earlier",
  ],
};
```

This section shows maturity and self-awareness — critical for leadership roles.

---

## Component Architecture

```
src/components/case-hybrid/
  CaseStudyHybrid.tsx       -- composition root (update imports)
  HybridHero.tsx            -- keep, minor tweaks
  HybridContext.tsx          -- rewrite: bento 2x2 grid
  HybridResearch.tsx         -- minor update: ensure card styling
  HybridDecision.tsx         -- update: before/after cards, bigger result numbers
  HybridDesignSystem.tsx     -- update: bento grid
  HybridProcess.tsx          -- rewrite: card grid with colored tags
  HybridResults.tsx          -- update: remove hero metrics dupe, add headline card
  HybridLearnings.tsx        -- NEW
  HybridClosing.tsx          -- rewrite: simplify, add CTA

  -- Shared primitives (keep/update):
  BeforeAfterComparison.tsx
  MetricBadge.tsx
  PullQuote.tsx
  SectionDivider.tsx
  SectionNav.tsx

  -- NEW primitives:
  BentoCard.tsx              -- reusable card with variants
  TagPill.tsx                -- colored tag pill for Process section
```

### BentoCard variants

Create a `BentoCard` component with these variants:
- `default` — standard card (`bg-card border-border`)
- `accent` — amber tinted (for initiative callout, result highlights)
- `muted` — subdued (for "before" states)
- `ghost` — no border, just padding (for when cards would be too busy)

Props: `variant`, `className`, `children`, optional `span` (for grid column/row spans)

### TagPill

Simple colored pill component:
- Props: `children`, `color` (amber | purple | blue)
- Renders: `rounded-full px-3 py-1 text-xs font-medium`
- Colors should work in both light and dark themes

---

## Dark Mode Specifics

- Cards in dark mode: slightly lighter than background (`bg-card`), with `border-border`
- Avoid pure black backgrounds — use the shadcn zinc dark palette
- Amber accents should remain vibrant in dark mode (test contrast)
- Screenshot placeholders: adjust `bg-secondary` to not look washed out in dark
- Table borders and header backgrounds: check contrast in both themes
- Text: `text-foreground` and `text-muted-foreground` handle both modes automatically

---

## What NOT to Do

- Do NOT add dark mode toggle yet (theme switching will be implemented separately at site level)
- Do NOT change the data structure in `hcb-case-data.ts` unless adding the `learnings` export
- Do NOT add animations beyond the existing `FadeIn` — keep it subtle
- Do NOT use gradients on cards — keep flat, clean surfaces
- Do NOT make cards too small on mobile — on mobile, most cards should be full-width stacked
- Do NOT remove the SectionNav — just update section IDs if needed
- Do NOT add real screenshots — keep placeholders for now

---

## Mobile Behavior

- All grids collapse to single column on mobile (`grid-cols-1`)
- Cards: full-width, stacked vertically
- Metrics: 2-col grid on mobile (`grid-cols-2`), 4-col on desktop
- Before/After screenshots: stack vertically on mobile
- Results table: horizontal scroll (as now)
- SectionNav: hidden below `xl` (as now)

---

## Quality Checklist

Before submitting, verify:
- [ ] Light theme looks clean and minimal
- [ ] Dark theme has proper contrast and no washed-out elements
- [ ] All text from `hcb-case-data.ts` is used (nothing hardcoded)
- [ ] No section has more than 3 sentences of continuous prose
- [ ] Metrics are always the largest visual element in their context
- [ ] Process section has colored tags, not just text
- [ ] Closing has a CTA (back to portfolio / contact links)
- [ ] Mobile layout is usable and nothing overflows
- [ ] `npm run build` passes with no errors
