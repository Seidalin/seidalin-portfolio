import { meta } from "@/data/hcb-case-data";
import { ScreenshotPlaceholder } from "@/components/case-shared/ScreenshotPlaceholder";

export function NarrativeHero() {
  return (
    <section className="px-6 pt-32 sm:pt-44">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-[5.5rem] lg:leading-[1.05]">
          HCB Business Redesign
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
          Evolving a Banking App from MVP to a Scalable Platform
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          {meta.company} · {meta.year} · {meta.role} · {meta.team}
        </p>

        {/* Hero mockup — full width */}
        <div className="mt-16">
          <div className="flex items-center justify-center rounded-2xl bg-secondary" style={{ aspectRatio: "21/9" }}>
            <span className="text-xs font-medium text-muted-foreground">
              App overview mockup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
