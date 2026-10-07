import { BentoHero } from "./BentoHero";
import { BentoBackground } from "./BentoBackground";
import { BentoResearch } from "./BentoResearch";
import { BentoDecisions } from "./BentoDecisions";
import { BentoProcess } from "./BentoProcess";
import { BentoDesignSystem } from "./BentoDesignSystem";
import { BentoResults } from "./BentoResults";
import { BentoRole } from "./BentoRole";
import { BentoClosing } from "./BentoClosing";

export function CaseStudyBento() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <BentoHero />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 space-y-4">
        <BentoBackground />
        <BentoResearch />
        <BentoDecisions />
        <BentoProcess />
        <BentoDesignSystem />
        <BentoResults />
        <BentoRole />
        <BentoClosing />
      </div>
    </div>
  );
}
