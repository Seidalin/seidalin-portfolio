import { learnings } from "@/data/hcb-case-data";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "./SectionDivider";
import { BentoCard } from "./BentoCard";
import { CheckCircle2, RefreshCw } from "lucide-react";

export function HybridLearnings() {
  return (
    <section id="learnings" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <SectionDivider number="07" label="Learnings" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* What Worked */}
          <FadeIn>
            <BentoCard className="h-full">
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold">What Worked</h3>
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/50" />
              </div>
              <ul className="space-y-3">
                {learnings.worked.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </FadeIn>

          {/* What I'd Do Differently */}
          <FadeIn delay={100}>
            <BentoCard variant="muted" className="h-full">
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold">What I&apos;d Do Differently</h3>
                <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/30" />
              </div>
              <ul className="space-y-3">
                {learnings.wouldChange.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
