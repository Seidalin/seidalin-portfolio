import { resultsTable, businessGrowth } from "@/data/hcb-case-data";

export function BentoResults() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-border">
        <div className="px-8 py-6 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Results
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-border">
                <th className="px-8 py-4 text-left text-sm font-medium text-muted-foreground sm:px-10">
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
                <tr key={row.metric} className="border-t border-border">
                  <td className="px-8 py-4 text-base font-medium sm:px-10">
                    {row.metric}
                  </td>
                  <td className="px-6 py-4 text-base text-muted-foreground/60">
                    {row.before}
                  </td>
                  <td className="px-6 py-4 text-base text-muted-foreground">
                    {row.after}
                  </td>
                  <td className="px-6 py-4 text-base font-bold text-purple-400">
                    {row.delta}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Business growth */}
      <div className="rounded-2xl bg-card p-8 ring-1 ring-border sm:p-10">
        <p className="mb-6 text-sm font-medium text-muted-foreground">
          Business growth (not design-only)
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {businessGrowth.map((m) => (
            <div key={m.label} className="rounded-xl bg-secondary p-6">
              <p className="text-3xl font-bold sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
