import { heroMetrics, resultsTable, businessGrowth } from "@/data/hcb-case-data";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "./SectionDivider";

export function HybridResults() {
  return (
    <section id="results" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <SectionDivider number="06" label="Results" />
        </FadeIn>

        {/* 4 big hero numbers */}
        <FadeIn>
          <div className="grid grid-cols-2 divide-x divide-y divide-border/40 border border-border/40 sm:grid-cols-4 sm:divide-y-0">
            {heroMetrics.map((m) => (
              <div key={m.label} className="p-6 sm:p-8">
                <p className="font-mono text-4xl font-bold tracking-tight text-amber-600 sm:text-5xl">
                  {m.value}
                </p>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Results table */}
        <FadeIn delay={100}>
          <div className="mt-12 overflow-x-auto border border-border">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="px-6 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                    Metric
                  </th>
                  <th className="px-4 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                    Before
                  </th>
                  <th className="px-4 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                    After
                  </th>
                  <th className="px-4 py-4 text-left font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                    &Delta;
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultsTable.map((row) => (
                  <tr
                    key={row.metric}
                    className="border-b border-border/50 last:border-b-0"
                  >
                    <td className="px-6 py-4 text-sm font-medium">{row.metric}</td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">{row.before}</td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">{row.after}</td>
                    <td className="px-4 py-4 text-sm font-bold text-amber-600">{row.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Business growth — simple 4-col numbers, no cards */}
        <FadeIn delay={200}>
          <div className="mt-16 border-t border-border/40 pt-10">
            <p className="mb-8 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
              Business growth — not design-only, shown for context
            </p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {businessGrowth.map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
