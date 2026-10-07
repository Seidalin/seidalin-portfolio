import { closing } from "@/data/hcb-case-data";

export function BentoClosing() {
  return (
    <div className="relative mb-24 overflow-hidden rounded-2xl bg-card p-8 ring-1 ring-purple-500/20 sm:p-12 lg:p-16">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[80px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-600/15 to-cyan-600/10" />

      <p className="relative mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Why It Matters
      </p>
      <div className="relative space-y-5 text-lg leading-relaxed text-foreground/80 sm:text-xl sm:leading-relaxed">
        {closing.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="relative mt-10 text-2xl font-bold sm:text-3xl">
        {closing.tagline}
      </p>
    </div>
  );
}
