import { designSystem } from "@/data/hcb-case-data";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "./SectionDivider";

export function HybridDesignSystem() {
  return (
    <section id="design-system" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <SectionDivider number="04" label="Design System" />
        </FadeIn>

        {/* Lead statement */}
        <FadeIn>
          <p className="mt-2 max-w-3xl font-serif text-3xl tracking-tight sm:text-4xl">
            For the first time, business and retail share one design language.
          </p>
        </FadeIn>

        {/* 2-column details */}
        <FadeIn delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border/40 pt-10 sm:grid-cols-2">
            {designSystem.map((item) => (
              <div key={item.title}>
                <p className="mb-2 text-sm font-semibold">{item.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
