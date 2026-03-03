const cases = [
  {
    id: "hcb-business",
    title: "HCB Business Redesign",
    subtitle: "Evolving a Banking App from MVP to a Scalable Platform",
    role: "Head of Product Design",
    company: "Home Credit Bank Kazakhstan",
    year: "2025",
    metrics: ["55→76% conversion", "+23% stickiness", "4.9 VoC"],
  },
  {
    id: "design-system",
    title: "Design System",
    subtitle: "Token-Based Architecture for 10 Product Streams",
    role: "Design System Lead",
    company: "Home Credit Bank & START",
    year: "2023–2025",
    metrics: ["95% consistency", "2 brands", "4 platforms"],
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-12">
          Selected Work
        </p>
        <div className="grid grid-cols-1 gap-8">
          {cases.map((cs) => (
            <div
              key={cs.id}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 transition-colors hover:border-zinc-300"
            >
              {/* Placeholder image area */}
              <div className="aspect-[2/1] sm:aspect-[3/1] bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
                <span className="text-sm text-zinc-400">
                  Project mockups coming soon
                </span>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    {cs.company}
                  </span>
                  <span className="text-zinc-300">·</span>
                  <span className="text-xs text-zinc-400">{cs.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                  {cs.title}
                </h3>
                <p className="mt-2 text-base text-zinc-500">{cs.subtitle}</p>

                {/* Metrics chips */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {cs.metrics.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 border border-zinc-200"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
