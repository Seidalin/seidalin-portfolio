export function NarrativeBackground() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — text */}
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
            <p>
              HCB Business launched as an MVP in 6 months (2023) — two currency
              accounts, basic payments. Then 15+ products got layered on top of
              the MVP architecture.
            </p>
            <p>
              The app had outgrown its foundation —{" "}
              <strong className="text-foreground">
                functional, but cluttered and inconsistent.
              </strong>
            </p>

            {/* Goal + Role columns */}
            <div className="mt-8 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="mb-2 text-sm text-muted-foreground/60">Goal</p>
                <p className="text-base text-muted-foreground">
                  Transform a patched-together MVP into a scalable, consistent
                  platform for tens of thousands of SME clients.
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-muted-foreground/60">My role</p>
                <p className="text-base text-muted-foreground">
                  I initiated the redesign, built ~80% of the App Vision deck,
                  and led the design team through execution. Design-led, not
                  business-requested.
                </p>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="flex items-center justify-center rounded-2xl bg-secondary" style={{ aspectRatio: "3/4" }}>
            <span className="text-xs font-medium text-muted-foreground">
              App before redesign
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
