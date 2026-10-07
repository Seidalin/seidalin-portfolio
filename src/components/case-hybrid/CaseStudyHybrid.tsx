import { decisions } from "@/data/hcb-case-data";
import { SectionNav } from "./SectionNav";
import { HybridHero } from "./HybridHero";
import { HybridContext } from "./HybridContext";
import { HybridResearch } from "./HybridResearch";
import { HybridDecision } from "./HybridDecision";
import { HybridDesignSystem } from "./HybridDesignSystem";
import { HybridProcess } from "./HybridProcess";
import { HybridResults } from "./HybridResults";
import { HybridLearnings } from "./HybridLearnings";
import { HybridClosing } from "./HybridClosing";

export function CaseStudyHybrid() {
  return (
    <div className="bg-background text-foreground">
      <SectionNav />
      <HybridHero />
      <HybridContext />
      <HybridResearch />

      {/* Decisions separator */}
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="h-px bg-border" />
      </div>

      {decisions.map((d, i) => (
        <div key={d.title}>
          <HybridDecision decision={d} index={i} />
          {i < decisions.length - 1 && (
            <div className="mx-auto max-w-[1200px] px-6">
              <div className="h-px bg-border" />
            </div>
          )}
        </div>
      ))}

      <HybridDesignSystem />
      <HybridProcess />
      <HybridResults />
      <HybridLearnings />
      <HybridClosing />
    </div>
  );
}
