import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function CaseStudies() {
  return (
    <section id="cases" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-12">
            Selected Work
          </p>
        </FadeIn>
        <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 — HCB Business */}
          <a
            href="/cases/hcb-business"
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="aspect-video relative overflow-hidden bg-zinc-100">
              <Image
                src="/case1-cover.jpg"
                alt="HCB Business Redesign"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white mb-4">
                55% → 76% conversion
              </span>
              <h3 className="text-xl font-semibold text-zinc-900 tracking-tight">
                HCB Business Redesign
              </h3>
              <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                Evolving a Banking App from MVP to a Scalable Platform
              </p>
            </div>
          </a>

          {/* Card 2 — In progress */}
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 flex items-center justify-center min-h-[320px]">
            <div className="text-center px-6">
              <p className="text-sm font-medium text-zinc-400">
                Case study in progress
              </p>
              <p className="mt-1 text-xs text-zinc-300">Coming soon</p>
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
