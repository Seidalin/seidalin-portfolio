import { process } from "@/data/hcb-case-data";

export function BentoProcess() {
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="rounded-2xl bg-card px-8 py-6 ring-1 ring-border sm:px-10">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Process
        </p>
      </div>

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-card p-8 ring-1 ring-border sm:p-10"
          >
            <p className="text-lg font-semibold">{item.title}</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
