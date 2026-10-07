import { designSystem } from "@/data/hcb-case-data";

export function NarrativeDesignSystem() {
  return (
    <section className="bg-secondary/50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-16 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Design System
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            {designSystem.map((item) => (
              <div key={item.title}>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-secondary" style={{ aspectRatio: "3/4" }}>
            <span className="text-xs font-medium text-muted-foreground">
              Design system overview
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
