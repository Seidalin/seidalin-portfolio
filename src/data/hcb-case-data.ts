/* ── HCB Business Case Study — shared data layer ──────────────── */

export interface Metric {
  value: string;
  label: string;
  tooltip?: string;
}

export interface Decision {
  title: string;
  metric: string;
  before: string;
  after: string[];
  result: string;
  note?: string;
  nikitaLink?: boolean;
}

export interface ResultRow {
  metric: string;
  before: string;
  after: string;
  delta: string;
}

/* ── Meta ──────────────────────────────────────────────────────── */

export const meta = {
  company: "Home Credit Bank Kazakhstan",
  year: "2025",
  duration: "10 months",
  role: "Head of Product Design",
  team: "4 designers · 9 streams",
};

/* ── Hero metrics ─────────────────────────────────────────────── */

export const heroMetrics: Metric[] = [
  { value: "55→76%", label: "Registration conversion" },
  { value: "+23%", label: "Stickiness (workdays)" },
  {
    value: "+19%",
    label: "Merchant MAU",
    tooltip:
      "Merchants are our core B2B audience. As their segment grew faster than expected, we prioritized the Sales Cabinet experience in the redesign — promoting it to a primary tab.",
  },
  { value: "4.9", label: "VoC rating" },
];

/* ── Background ───────────────────────────────────────────────── */

export const background = {
  paragraphs: [
    "HCB Business launched as an MVP in 6 months (2023) — two currency accounts, basic payments, onboarding. Then the product scaled fast: 7 currencies, business cards, deposits, loans, online accounting, insurance, merchant sales cabinet, tariff plans. All layered on top of the MVP architecture.",
    "The app had outgrown its architecture — 15+ products crammed into an interface designed for 2. Functional, but cluttered and inconsistent.",
  ],
  initiative:
    "When presenting our annual design strategy to C-level and shareholders, I made the redesign a priority. The architecture couldn't support the bank's growth roadmap, client feedback pointed to navigation issues, and two historically separate apps (retail and business) needed a unified design platform. I built ~80% of the App Vision deck that secured stakeholder buy-in. This was a design-led initiative — not a business request.",
};

/* ── Research ─────────────────────────────────────────────────── */

export const research = {
  tracks: [
    {
      title: "User Research",
      text: "50+ interviews. Merchants, SMEs, foreign trade. Surveys + quant studies across all client segments.",
    },
    {
      title: "Competitive Analysis",
      text: "13 banks analyzed. Feature comparison matrix. Screen-by-screen benchmark. Best practice references from top global banks via Mobbin.",
    },
    {
      title: "Top 10 Operations",
      text: "Identified the 10 most frequent operations in SME banking. Compared implementation quality across competitors to prioritize redesign scope.",
    },
  ],
  keyInsight:
    "SME clients prioritize speed over feature richness — they want to find what they need in seconds, not navigate complex menus. The pre-authorization zone was the single biggest conversion lever.",
};

/* ── Key Decisions ────────────────────────────────────────────── */

export const decisions: Decision[] = [
  {
    title: "Pre-Authorization Zone",
    metric: "55% → 76% conversion · +38% relative",
    before:
      "Static splash screen. Two buttons — register or sign in. No reason to explore the app.",
    after: [
      "Product information, tariffs, and promotional offers",
      "Quick access: branches, FAQ, support, exchange rates",
      "Registration split by entity type (sole proprietor, LLC, employee) with step-by-step guidance — people were confused between entity types",
    ],
    result:
      "Conversion jumped to 70% at launch, stabilized at 75–76%. A +38% relative increase.",
  },
  {
    title: "Home Screen",
    metric: "+23% stickiness · +15% sessions/user",
    before:
      "Dense, overloaded. No quick actions, no customization. Users could not find bank details or statements.",
    after: [
      "Quick actions section — market-standard pattern we were missing; users could not find statements and bank details",
      "Tab bar unified with retail app's design language — first step toward a single design platform",
      '"My Bank" section — all accounts and products in one place',
      "Home screen limited to 3 active accounts — no overload",
      "Fully customizable: accounts, quick actions, widget order — all user-configurable",
    ],
    result:
      "Workday stickiness 15% → 18.5% (+23%). Sessions per user 6.7 → 7.7/month (+15%).",
    note: "VoC post-release: dipped from 4.91 to 4.78 after the December release — typical for major updates. Recovered to 4.86 within a month.",
  },
  {
    title: "Merchant Sales Cabinet",
    metric: "Promoted to 5th Tab",
    before:
      "Our core audience is merchants. Their main tool — the Sales Cabinet — was buried deep in the navigation.",
    after: [
      "Moved to the 5th tab in bottom navigation. Instant access to sales, POS settings, history, and analytics.",
    ],
    result: "MAU +19%. DAU +13%. New merchants +40%. Revenue +21%.",
    nikitaLink: true,
  },
];

/* ── Process ──────────────────────────────────────────────────── */

export const process = [
  {
    title: "Metrics-Driven Iterations",
    text: "Every feature passed through a cycle: research, prototype, test, launch, metrics, iteration. No design decision shipped without data.",
  },
  {
    title: "Continuous Validation",
    text: "Post-release tracking of satisfaction (VoC), adoption, and retention ensured measurable improvements. VoC data integrated directly into sprint planning.",
  },
  {
    title: "Design Reviews",
    text: "Weekly team critiques where every designer presents work. Established design-to-dev handoff with specs, tokens, and QA checklists.",
  },
  {
    title: "Parallel Execution",
    text: "4 designers × 2–3 streams each. The redesign was done on top of regular workload — no dedicated squad, no pause on delivery. Pure resource management.",
  },
  {
    title: "AI-Assisted Workflow",
    text: "AI tools used throughout to accelerate research synthesis, exploration, and content generation. The team actively uses AI in daily work.",
  },
];

/* ── Design System ────────────────────────────────────────────── */

export const designSystem = [
  {
    title: "Token-Based Architecture",
    text: "Built from atomic tokens (colors, spacing, typography) to complex UI components. Synced between Figma and code via Token Studio.",
  },
  {
    title: "Unified Design Language",
    text: "For the first time, business and retail apps share a visual language — tab bar, navigation patterns, iconography. Two apps that historically looked completely different now feel like one ecosystem.",
  },
  {
    title: "Theming",
    text: "Full light and dark mode support. Dynamic typography for accessibility.",
  },
  {
    title: "Consistency",
    text: "95% design-to-development consistency — measured by QA audits. Components documented for developers with specs and usage guidelines.",
  },
];

/* ── Results ──────────────────────────────────────────────────── */

export const resultsTable: ResultRow[] = [
  { metric: "Registration conversion", before: "55%", after: "76%", delta: "+38%" },
  { metric: "Stickiness (workdays)", before: "15.0%", after: "18.5%", delta: "+23%" },
  { metric: "Sessions/user/month", before: "6.7", after: "7.7", delta: "+15%" },
  { metric: "VoC", before: "—", after: "4.86", delta: "Stable" },
  { metric: "Merchant Cabinet MAU", before: "—", after: "—", delta: "+19%" },
  { metric: "Merchant revenue", before: "—", after: "—", delta: "+21%" },
  { metric: "Client base", before: "—", after: "—", delta: "+12%" },
];

export const businessGrowth: Metric[] = [
  { value: "+43%", label: "Loan volume (5.8B → 8.3B)" },
  { value: "+62%", label: "GMV POS" },
  { value: "+65%", label: "GMV SME" },
  { value: "+40%", label: "New merchants" },
];

/* ── My Role ──────────────────────────────────────────────────── */

export const role = [
  "Initiated the redesign as part of annual design strategy — design-led, not business-requested",
  "Created the App Vision deck for C-level and shareholder review (~80% of the presentation)",
  "Led a team of 4 designers across 9 product streams — all working on redesign in parallel with regular delivery",
  "Directed user research (50+ interviews) and competitive analysis (13 banks)",
  "Made key UX decisions: pre-auth architecture, home screen structure, navigation model, information architecture",
  "Co-owned budget and roadmap with CPO and product owners",
];

/* ── Closing ──────────────────────────────────────────────────── */

export const closing = {
  paragraphs: [
    "This case is not about a cosmetic facelift. It is about a design team that saw a systemic problem, built the case for change, and delivered it — all while maintaining regular product delivery for 9 streams.",
    "The redesign transformed HCB Business from a patched-together MVP into a scalable, consistent platform that serves tens of thousands of SME clients.",
    "For me, it proves that design leadership at its best is proactive, not reactive. The best design initiatives do not come from a brief — they come from a team that understands the product deeply enough to know what needs to change before anyone asks.",
  ],
  tagline: "Concept to production in 10 months. No dedicated squad. Design-led from day one.",
};

/* ── Learnings ─────────────────────────────────────────────────── */

export const learnings = {
  worked: [
    "Design-led initiative framing — stakeholders bought in because we owned the narrative",
    "Parallel execution model — redesign shipped without pausing product delivery",
    "Pre-auth zone bet — highest ROI decision, backed by research",
  ],
  wouldChange: [
    "VoC dipped post-release (4.91 → 4.78) — would plan a more gradual rollout with feature flags",
    "Design system adoption was slower than expected — would embed a dedicated DS designer earlier",
  ],
};

/* ── Contacts ──────────────────────────────────────────────────── */

export const contacts = {
  telegram: "https://t.me/seidalin_t",
  linkedin: "https://www.linkedin.com/in/seidalint/",
  email: "seidalin.tim@gmail.com",
};
