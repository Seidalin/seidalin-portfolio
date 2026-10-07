import { decisions } from "@/data/hcb-case-data";
import { ScreenshotPlaceholder } from "@/components/case-shared/ScreenshotPlaceholder";

const accentColors = [
  { gradient: "from-purple-600/20", badge: "bg-purple-500/15 text-purple-400 ring-purple-500/25", dot: "bg-purple-500" },
  { gradient: "from-cyan-600/20", badge: "bg-cyan-500/15 text-cyan-400 ring-cyan-500/25", dot: "bg-cyan-500" },
  { gradient: "from-pink-600/20", badge: "bg-pink-500/15 text-pink-400 ring-pink-500/25", dot: "bg-pink-500" },
];

export function BentoDecisions() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Section label */}
      <div className="rounded-2xl bg-card px-8 py-6 ring-1 ring-border sm:px-10">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Key Decisions
        </p>
      </div>

      {decisions.map((d, i) => {
        const accent = accentColors[i];
        return (
          <div
            key={d.title}
            className="overflow-hidden rounded-2xl bg-card ring-1 ring-border"
          >
            {/* Header */}
            <div className="flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <span className="text-sm text-muted-foreground/60">0{i + 1}</span>
                <h3 className="mt-1 text-2xl font-bold sm:text-3xl">
                  {d.title}
                </h3>
              </div>
              <span
                className={`inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ${accent.badge}`}
              >
                {d.metric}
              </span>
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 gap-3 px-8 sm:grid-cols-2 sm:px-10">
              <ScreenshotPlaceholder label="Before" aspect="16/10" />
              <ScreenshotPlaceholder label="After" aspect="16/10" />
            </div>

            {/* Before / After */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2">
              <div className="border-t border-border p-8 sm:border-r sm:p-10">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                  Before
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {d.before}
                </p>
              </div>
              <div className="border-t border-border p-8 sm:p-10">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                  After
                </p>
                <ul className="space-y-3">
                  {d.after.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-base leading-relaxed text-foreground/80"
                    >
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Result */}
            <div className="relative border-t border-border">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${accent.gradient} to-transparent`} />
              <div className="relative p-8 sm:p-10">
                <p className="text-lg font-semibold sm:text-xl">
                  {d.result}
                </p>
                {d.note && (
                  <p className="mt-3 text-sm text-muted-foreground">{d.note}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
