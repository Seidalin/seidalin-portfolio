import { meta, heroMetrics } from "@/data/hcb-case-data";

export function BentoHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 sm:pt-44 sm:pb-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        {/* Tag */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-purple-500/15 px-4 py-1.5 text-sm font-medium text-purple-400 ring-1 ring-purple-500/20">
            Case Study
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          HCB Business
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Redesign
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-muted-foreground sm:text-2xl sm:leading-relaxed">
          Evolving a Banking App from MVP to a Scalable Platform
        </p>

        {/* Meta */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[meta.company, meta.year + " · " + meta.duration, meta.role, meta.team].map(
            (item) => (
              <span
                key={item}
                className="rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground ring-1 ring-border"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {heroMetrics.map((m) => (
            <div
              key={m.label}
              className="group rounded-2xl bg-card p-6 ring-1 ring-border transition-colors hover:ring-purple-500/30 sm:p-8"
            >
              <p className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {m.value}
              </p>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
