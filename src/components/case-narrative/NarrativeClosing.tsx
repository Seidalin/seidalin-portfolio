import { closing, role } from "@/data/hcb-case-data";

export function NarrativeClosing() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        {/* My Role */}
        <p className="mb-12 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          My Role
        </p>
        <div className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {role.map((item) => (
            <div key={item} className="border-t border-border pt-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
            {closing.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-16 text-3xl font-bold tracking-tight sm:text-4xl">
            {closing.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
