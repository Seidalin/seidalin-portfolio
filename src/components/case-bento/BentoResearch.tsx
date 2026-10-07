import { research } from "@/data/hcb-case-data";

const accents = [
  { num: "50+", color: "text-purple-400" },
  { num: "13", color: "text-cyan-400" },
  { num: "Top 10", color: "text-pink-400" },
];

export function BentoResearch() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Cards */}
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
        {research.tracks.map((track, i) => (
          <div
            key={track.title}
            className="rounded-2xl bg-card p-8 ring-1 ring-border sm:p-10"
          >
            <p className={`text-4xl font-bold tracking-tight sm:text-5xl ${accents[i].color}`}>
              {accents[i].num}
            </p>
            <p className="mt-4 text-lg font-semibold">
              {track.title}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {track.text}
            </p>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div className="relative overflow-hidden rounded-2xl bg-card p-8 ring-1 ring-cyan-500/20 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent" />
        <p className="relative mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
          Key Insight
        </p>
        <p className="relative text-lg leading-relaxed text-foreground/80 sm:text-xl sm:leading-relaxed">
          {research.keyInsight}
        </p>
      </div>
    </div>
  );
}
