import { background } from "@/data/hcb-case-data";

export function BentoBackground() {
  return (
    <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
      {/* Problem */}
      <div className="rounded-2xl bg-card p-8 ring-1 ring-border sm:p-10">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Background
        </p>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
          {background.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Initiative */}
      <div className="relative overflow-hidden rounded-2xl bg-card p-8 ring-1 ring-purple-500/20 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-600/15 to-cyan-600/10" />
        <p className="relative mb-6 text-sm font-medium uppercase tracking-widest text-purple-400">
          Design-Led Initiative
        </p>
        <p className="relative text-base leading-relaxed text-foreground/80 sm:text-lg sm:leading-relaxed">
          {background.initiative}
        </p>
      </div>
    </div>
  );
}
