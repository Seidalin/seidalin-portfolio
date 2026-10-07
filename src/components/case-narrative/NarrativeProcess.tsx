import { process } from "@/data/hcb-case-data";

export function NarrativeProcess() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-16 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Process & Team
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((item) => (
            <div key={item.title} className="border-t-2 border-foreground pt-6">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
