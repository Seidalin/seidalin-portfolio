import Image from "next/image";
import type { Decision } from "@/data/hcb-case-data";
import { FadeIn } from "@/components/ui/fade-in";

const decisionImages = [
  "/case-hcb/pre-auth.png",
  "/case-hcb/home-screen.png",
  "/case-hcb/sales-cabinet.png",
];

const nikitaUrl =
  "https://nabugorn-design-portfolio.framer.website/project/hcb-business";

export function HybridDecision({
  decision,
  index,
}: {
  decision: Decision;
  index: number;
}) {
  const imageSrc = decisionImages[index];

  return (
    <section id={`decision-${index + 1}`} className="py-24 sm:py-32">
      {/* Section label + title */}
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">
              0{index + 1}
            </span>
            <div className="flex-1 border-t border-border/40" />
          </div>

          <h2 className="mt-6 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
            {decision.title}
          </h2>

          <p className="mt-4 font-mono text-xs tracking-[0.12em] text-muted-foreground/70">
            {decision.metric}
          </p>
        </FadeIn>
      </div>

      {/* Full-width before/after image */}
      <FadeIn delay={100}>
        <div className="mx-auto mt-12 max-w-[1440px] px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary/20">
            <Image
              src={imageSrc}
              alt={`${decision.title} — Before & After`}
              width={1440}
              height={720}
              className="w-full object-cover"
              priority={index === 0}
            />
          </div>
        </div>
      </FadeIn>

      {/* Before / After / Result — 3-col table */}
      <div className="mx-auto mt-12 max-w-[1200px] px-6">
        <FadeIn delay={150}>
          <div className="grid grid-cols-1 divide-y divide-border border border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* Before */}
            <div className="p-6">
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
                Before
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {decision.before}
              </p>
            </div>

            {/* After */}
            <div className="p-6">
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-600">
                After
              </p>
              <ul className="space-y-2.5">
                {decision.after.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div className="p-6">
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
                Result
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {decision.result}
              </p>
              {decision.note && (
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {decision.note}
                </p>
              )}
              {decision.nikitaLink && (
                <a
                  href={nikitaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.12em] text-amber-600 hover:underline"
                >
                  See Nikita&apos;s deep-dive &rarr;
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
