import { NarrativeHero } from "./NarrativeHero";
import { NarrativeBackground } from "./NarrativeBackground";
import { NarrativeResearch } from "./NarrativeResearch";
import { NarrativeDecisions } from "./NarrativeDecisions";
import { NarrativeProcess } from "./NarrativeProcess";
import { NarrativeDesignSystem } from "./NarrativeDesignSystem";
import { NarrativeResults } from "./NarrativeResults";
import { NarrativeClosing } from "./NarrativeClosing";

export function CaseStudyNarrative() {
  return (
    <div className="bg-background text-foreground">
      <NarrativeHero />
      <NarrativeBackground />
      <NarrativeResearch />
      <NarrativeDecisions />
      <NarrativeProcess />
      <NarrativeDesignSystem />
      <NarrativeResults />
      <NarrativeClosing />
    </div>
  );
}
