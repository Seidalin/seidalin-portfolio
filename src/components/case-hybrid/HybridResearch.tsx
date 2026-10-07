import { research } from "@/data/hcb-case-data";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "./SectionDivider";

const stats = ["50+", "13", "10"];

export function HybridResearch() {
  return (
    <section id="research" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <SectionDivider number="02" label="Research" />
        </FadeIn>

        {/* Stats row — no cards, just numbers */}
        <FadeIn>
          <div className="grid grid-cols-3 divide-x divide-border/40 border-t border-border/40 pt-10">
            {research.tracks.map((track, i) => (
              <div key={track.title} className="pr-8 first:pl-0 pl-8">
                <p className="font-mono text-5xl font-bold tracking-tight sm:text-6xl">
                  {stats[i]}
                </p>
                <p className="mt-3 text-sm font-semibold">{track.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {track.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Key insight — as a plain styled blockquote */}
        <FadeIn delay={150}>
          <div className="mt-16 border-t border-border/40 pt-10">
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
              Key Insight
            </p>
            <p className="max-w-3xl font-serif text-2xl leading-relaxed tracking-tight sm:text-3xl">
              &ldquo;{research.keyInsight}&rdquo;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
