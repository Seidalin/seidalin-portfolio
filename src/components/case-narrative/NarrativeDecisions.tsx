import { decisions } from "@/data/hcb-case-data";

export function NarrativeDecisions() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-20 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Key Decisions
        </p>
      </div>

      <div className="space-y-32 sm:space-y-40">
        {decisions.map((d, i) => (
          <div key={d.title}>
            <div className="mx-auto max-w-[1200px] px-6">
              <p className="text-sm text-muted-foreground/60">0{i + 1}</p>
              <h3 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                {d.title}
              </h3>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm text-muted-foreground/60">Before</p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {d.before}
                  </p>
                </div>
                <div>
                  <p className="mb-3 text-sm text-muted-foreground/60">After</p>
                  <ul className="space-y-2">
                    {d.after.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-lg leading-relaxed text-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="mx-auto mt-16 max-w-[1200px] px-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center justify-center rounded-2xl bg-secondary" style={{ aspectRatio: "4/3" }}>
                  <span className="text-xs font-medium text-muted-foreground">Before</span>
                </div>
                <div className="flex items-center justify-center rounded-2xl bg-secondary" style={{ aspectRatio: "4/3" }}>
                  <span className="text-xs font-medium text-muted-foreground">After</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="mx-auto mt-12 max-w-[1200px] px-6">
              <p className="text-2xl font-semibold sm:text-3xl">
                {d.result}
              </p>
              {d.note && (
                <p className="mt-3 text-base text-muted-foreground">{d.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
