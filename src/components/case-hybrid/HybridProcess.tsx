import { process } from "@/data/hcb-case-data";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "./SectionDivider";

export function HybridProcess() {
  return (
    <section id="process" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <SectionDivider number="05" label="Process & Team" />
        </FadeIn>

        <FadeIn>
          <div className="divide-y divide-border/40 border-t border-border/40">
            {process.map((item, i) => (
              <div key={item.title} className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[80px_1fr_2fr]">
                <span className="font-mono text-2xl font-bold text-muted-foreground/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
