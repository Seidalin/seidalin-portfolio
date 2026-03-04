export function CaseStudyHCB() {
  return (
    <section id="case-hcb" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* 1. Header */}
        <header className="mb-16">
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">
            Case Study
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            HCB Business Redesign
          </h2>
          <p className="mt-4 text-xl text-zinc-500">
            Evolving a Banking App from MVP to a Scalable Platform
          </p>

          {/* Meta */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-zinc-400">Company</p>
              <p className="mt-1 font-medium text-zinc-900">
                Home Credit Bank Kazakhstan
              </p>
            </div>
            <div>
              <p className="text-zinc-400">Duration</p>
              <p className="mt-1 font-medium text-zinc-900">
                2025
              </p>
            </div>
            <div>
              <p className="text-zinc-400">Role</p>
              <p className="mt-1 font-medium text-zinc-900">
                Head of Product Design
              </p>
            </div>
            <div>
              <p className="text-zinc-400">Team</p>
              <p className="mt-1 font-medium text-zinc-900">
                Design team, multiple streams
              </p>
            </div>
          </div>
        </header>

        {/* 3. Background */}
        <CaseSection title="Background">
          <p>
            HCB Business is a digital bank for SMEs, launched as an MVP in 6
            months (2023). Two currency accounts, basic payments, onboarding —
            nothing more.
          </p>
          <p>
            Then the product scaled fast: 7 currencies, business cards,
            deposits, loans, online accounting, insurance, merchant sales
            cabinet, tariff plans. All layered on top of the MVP architecture
            with no room for growth. The app became a{" "}
            <strong>Frankenstein — functional, but cluttered and inconsistent</strong>.
          </p>
          <p>
            I initiated the redesign as part of our annual design strategy,
            presenting the business case to C-level stakeholders and
            shareholders. <strong>The majority of the App Vision deck was my work</strong>.
          </p>
          <p>
            This was not a business request —{" "}
            <strong>
              the design team identified the need, built the case, and sold it
              to leadership
            </strong>
            . A purely design-led initiative.
          </p>
        </CaseSection>

        {/* 4. Research */}
        <CaseSection title="Research">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose">
            <div className="rounded-xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-900 mb-2">
                User Research
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                In-depth interviews, regular surveys, and quantitative
                studies across all client segments — merchants, general SMEs,
                and foreign trade businesses.
              </p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-900 mb-2">
                Competitive Analysis
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Feature comparison matrix across Kazakh banks (Kaspi, Halyk,
                Jusan, HCB). Screen-by-screen benchmarking of every key flow.
                Best practice references from top global banks via Mobbin.{" "}
                <strong className="text-zinc-900">Full competitive landscape analyzed</strong>.
              </p>
            </div>
            <div className="rounded-xl bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-900 mb-2">
                Top 10 Banking Operations
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Identified the 10 most frequent operations in SME banking.
                Compared implementation quality across competitors to prioritize
                which flows to redesign first.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
            <p className="text-sm font-semibold text-zinc-900 mb-1">
              Key Insight
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              SME clients prioritize{" "}
              <strong className="text-zinc-900">
                speed over feature richness
              </strong>{" "}
              — they want to find what they need in seconds, not navigate
              complex menus. The pre-authorization zone was the single biggest
              conversion lever.
            </p>
          </div>
        </CaseSection>

        {/* 5. Key Decisions */}
        <CaseSection title="Key Decisions">
          {/* Decision 1 */}
          <DecisionBlock
            title="Pre-Authorization Zone"
            metric="Registration conversion"
            before="Static splash screen. Two buttons — register or sign in. No reason to explore the app."
            after={[
              "Product information, tariffs, and promotional offers",
              "Quick access: branches, FAQ, support, exchange rates",
              "Registration split by entity type (sole proprietor, LLC, employee) with step-by-step guidance — people were confused between entity types",
            ]}
            result="Significant increase in registration conversion after launch."
          />

          {/* Decision 2 */}
          <DecisionBlock
            title="Home Screen"
            metric="Stickiness & engagement"
            before="Dense, overloaded. No quick actions, no customization. Users could not find bank details or statements."
            after={[
              "Quick actions section — market-standard pattern we were missing; users could not find statements and bank details",
              "Tab bar unified with retail app's design language — first step toward a single design platform",
              '"My Bank" section — all accounts and products in one place',
              "Home screen limited to 3 active accounts — no overload",
              "Fully customizable: accounts, quick actions, widget order — all user-configurable",
            ]}
            result="Measurable increase in stickiness and sessions per user. VoC stable post-release."
          />

          {/* Decision 3 */}
          <DecisionBlock
            title="Merchant Sales Cabinet"
            metric="Promoted to 5th Tab"
            before="Our core audience is merchants. Their main tool — the Sales Cabinet — was buried deep in the navigation."
            after={[
              "Moved to the 5th tab in bottom navigation. Instant access to sales, POS settings, history, and analytics.",
            ]}
            result="Growth in MAU, DAU, new merchant sign-ups, and revenue after launch."
          />
        </CaseSection>

        {/* 6. Process */}
        <CaseSection title="Process">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            {[
              {
                title: "Metrics-Driven Iterations",
                text: "Every feature passed through a cycle: research, prototype, test, launch, metrics, iteration. No design decision shipped without data to support it.",
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
                text: "Each designer owns multiple product streams. The redesign was done on top of regular workload — no dedicated squad, no pause on delivery. Pure resource management.",
              },
              {
                title: "AI-Assisted Workflow",
                text: "AI tools used throughout to accelerate research synthesis, exploration, and content generation. The team actively uses AI in daily work.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-zinc-50 p-6">
                <p className="text-sm font-semibold text-zinc-900 mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* 7. Design System */}
        <CaseSection title="Design System">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            {[
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
                text: "High design-to-development consistency — measured by QA audits. Components documented for developers with specs and usage guidelines.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-zinc-50 p-6">
                <p className="text-sm font-semibold text-zinc-900 mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* 8. Results */}
        <CaseSection title="Results">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            {[
              { title: "Registration conversion", text: "Significant uplift after pre-authorization zone redesign" },
              { title: "Stickiness & engagement", text: "Measurable growth in workday stickiness and sessions per user" },
              { title: "VoC rating", text: "Stable post-release, quick recovery after major update" },
              { title: "Merchant Cabinet", text: "Growth in MAU, DAU, new merchant sign-ups, and revenue" },
              { title: "Business growth", text: "Positive impact on loan volume, GMV, and client base" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-zinc-50 p-6">
                <p className="text-sm font-semibold text-zinc-900 mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* 9. My Role */}
        <CaseSection title="My Role">
          <ul className="space-y-3 not-prose">
            {[
              "Initiated the redesign as part of annual design strategy — design-led, not business-requested",
              "Created the App Vision deck for C-level and shareholder review",
              "Led a team of designers across multiple product streams — all working on redesign in parallel with regular delivery",
              "Directed user research and competitive analysis across the full landscape",
              "Made key UX decisions: pre-auth architecture, home screen structure, navigation model, information architecture",
              "Co-owned budget and roadmap with CPO and product owners",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-zinc-700 leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* 10. Why It Matters */}
        <div className="mt-20 rounded-2xl bg-zinc-900 p-8 sm:p-12 text-white">
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">
            Why It Matters
          </p>
          <div className="space-y-4 text-base leading-relaxed text-zinc-300">
            <p>
              This case is not about a cosmetic facelift. It is about a design
              team that saw a systemic problem, built the case for change, and
              delivered it — all while maintaining regular product delivery for
              10 streams.
            </p>
            <p>
              The redesign transformed HCB Business from a patched-together MVP
              into a scalable, consistent platform that serves tens of thousands
              of SME clients.
            </p>
            <p>
              For me, it proves that{" "}
              <strong className="text-white">
                design leadership at its best is proactive, not reactive
              </strong>
              . The best design initiatives do not come from a brief — they come
              from a team that understands the product deeply enough to know what
              needs to change before anyone asks.
            </p>
            <p className="text-white font-semibold text-lg pt-2">
              Concept to production. No dedicated squad. Design-led from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Shared sub-components --- */

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-20">
      <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">
        {title}
      </h3>
      <div className="space-y-4 text-base leading-relaxed text-zinc-700">
        {children}
      </div>
    </div>
  );
}

function DecisionBlock({
  title,
  metric,
  before,
  after,
  result,
  note,
}: {
  title: string;
  metric: string;
  before: string;
  after: string[];
  result: string;
  note?: string;
}) {
  return (
    <div className="mb-10 rounded-2xl border border-zinc-200 overflow-hidden not-prose">
      <div className="p-6 sm:p-8">
        <h4 className="text-lg font-semibold text-zinc-900">{title}</h4>
        <p className="text-sm text-zinc-400 mt-1">{metric}</p>
      </div>

      {/* Screenshots — Before / After */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-zinc-200">
        <div className="aspect-[4/3] bg-zinc-100 flex items-center justify-center sm:border-r border-b sm:border-b-0 border-zinc-200">
          <span className="text-xs text-zinc-300">Before screenshot</span>
        </div>
        <div className="aspect-[4/3] bg-zinc-50 flex items-center justify-center">
          <span className="text-xs text-zinc-300">After screenshot</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Before */}
        <div className="bg-zinc-50 p-6 sm:p-8 border-t border-zinc-200 sm:border-r">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            Before
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">{before}</p>
        </div>

        {/* After */}
        <div className="bg-white p-6 sm:p-8 border-t border-zinc-200">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            After
          </p>
          <ul className="space-y-2">
            {after.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-zinc-700 leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Result */}
      <div className="p-6 sm:p-8 border-t border-zinc-200 bg-zinc-900">
        <p className="text-sm font-semibold text-white">{result}</p>
        {note && (
          <p className="mt-2 text-sm text-zinc-400">{note}</p>
        )}
      </div>
    </div>
  );
}
