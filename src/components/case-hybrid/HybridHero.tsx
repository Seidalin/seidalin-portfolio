import { meta, heroMetrics } from "@/data/hcb-case-data";
import { ScreenshotPlaceholder } from "@/components/case-shared/ScreenshotPlaceholder";
import { FadeIn } from "@/components/ui/fade-in";

export function HybridHero() {
  return (
    <section id="hero" className="px-6 pt-32 pb-16 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="mb-8 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/70">
            Case Study
          </p>

          <h1 className="font-serif text-5xl tracking-tight sm:text-7xl lg:text-[5.5rem] lg:leading-[1.05]">
            HCB Business
            <br />
            <span className="italic">Redesign</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-muted-foreground sm:text-2xl sm:leading-relaxed">
            Evolving a Banking App from MVP to a Scalable Platform
          </p>

          {/* Meta — spec sheet tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[meta.company, `${meta.year} · ${meta.duration}`, meta.role, meta.team].map(
              (item) => (
                <span
                  key={item}
                  className="rounded border border-border bg-secondary/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </FadeIn>

        {/* Hero metrics */}
        <FadeIn delay={150}>
          <div className="mt-16 border-t border-border/40 pt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {heroMetrics.map((m) => (
              <div key={m.label}>
                <p className="font-mono text-5xl font-bold tracking-tight sm:text-6xl">
                  {m.value}
                </p>
                <p className="mt-2 font-mono text-xs tracking-wide text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Hero mockup */}
        <FadeIn delay={300}>
          <div className="mt-20">
            <ScreenshotPlaceholder
              label="App overview mockup"
              aspect="21/9"
              className="rounded-2xl"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
