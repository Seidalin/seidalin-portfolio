import { research } from "@/data/hcb-case-data";

export function NarrativeResearch() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-16 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Research
        </p>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
              We conducted quantitative and qualitative analyses, mapped the
              competitive landscape, and dug deeper into what SME clients
              actually need from a banking app.
            </p>

            <blockquote className="mt-12 border-l-[3px] border-foreground pl-6">
              <p className="text-xl font-medium leading-snug text-foreground sm:text-2xl sm:leading-snug">
                {research.keyInsight}
              </p>
            </blockquote>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 content-start">
            <div className="rounded-2xl bg-secondary p-8">
              <p className="text-5xl font-bold tracking-tight sm:text-6xl">
                50+
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                In-depth interviews
              </p>
            </div>
            <div className="rounded-2xl bg-secondary p-8">
              <p className="text-5xl font-bold tracking-tight sm:text-6xl">
                13
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Banks analyzed
              </p>
            </div>
            <div className="col-span-2 rounded-2xl bg-secondary p-8">
              <p className="text-5xl font-bold tracking-tight sm:text-6xl">
                Top 10
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Most frequent banking operations mapped and compared
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
