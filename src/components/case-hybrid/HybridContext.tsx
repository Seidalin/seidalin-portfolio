import { background } from "@/data/hcb-case-data";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "./SectionDivider";

export function HybridContext() {
  return (
    <section id="context" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <SectionDivider number="01" label="Context" />
        </FadeIn>

        {/* Provocative statement */}
        <FadeIn>
          <p className="mt-2 max-w-4xl font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            We built a&nbsp;Frankenstein.
          </p>
        </FadeIn>

        {/* 2-column narrative */}
        <FadeIn delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border/40 pt-10 sm:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
                The Setup
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                HCB Business launched as an MVP in 6 months — two currency
                accounts, basic payments, onboarding. Then the product scaled
                fast: 7 currencies, business cards, deposits, loans, online
                accounting, insurance, merchant sales cabinet, tariff plans.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                All of it layered on top of MVP architecture that was never
                designed to hold it.
              </p>
            </div>

            <div>
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
                The Problem
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                15+ products crammed into an interface built for 2. Navigation
                issues everywhere. Two historically separate apps — retail and
                business — with zero shared design language.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The app was functional. But it was cluttered, inconsistent, and
                not built to grow.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Design-led initiative — amber accent block */}
        <FadeIn delay={200}>
          <div className="mt-12 border-l-[3px] border-l-amber-500 pl-6">
            <p className="text-lg font-semibold leading-snug sm:text-xl">
              This was a design-led initiative — not a business request.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {background.initiative}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
