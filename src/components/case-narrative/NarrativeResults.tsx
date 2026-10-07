import { resultsTable, businessGrowth, heroMetrics } from "@/data/hcb-case-data";

export function NarrativeResults() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-16 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Results
        </p>

        {/* Big metrics */}
        <div className="mb-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {heroMetrics.map((m) => (
            <div key={m.label}>
              <p className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {m.value}
              </p>
              <p className="mt-3 text-base text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-8 py-4 text-left text-sm font-medium text-muted-foreground">
                  Metric
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  Before
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  After
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                  Δ
                </th>
              </tr>
            </thead>
            <tbody>
              {resultsTable.map((row) => (
                <tr
                  key={row.metric}
                  className="border-b border-border last:border-b-0"
                >
                  <td className="px-8 py-4 text-base font-medium">
                    {row.metric}
                  </td>
                  <td className="px-6 py-4 text-base text-muted-foreground">
                    {row.before}
                  </td>
                  <td className="px-6 py-4 text-base text-muted-foreground">
                    {row.after}
                  </td>
                  <td className="px-6 py-4 text-base font-semibold">
                    {row.delta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Business growth */}
        <p className="mb-6 mt-16 text-sm text-muted-foreground">
          Business growth (not design-only)
        </p>
        <div className="flex flex-wrap gap-8">
          {businessGrowth.map((m) => (
            <div key={m.label}>
              <span className="text-3xl font-bold sm:text-4xl">{m.value}</span>
              <span className="ml-3 text-base text-muted-foreground">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
