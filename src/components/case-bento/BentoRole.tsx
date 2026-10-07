import { role } from "@/data/hcb-case-data";

export function BentoRole() {
  return (
    <div className="rounded-2xl bg-card p-8 ring-1 ring-border sm:p-10">
      <p className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        My Role
      </p>
      <ul className="space-y-4">
        {role.map((item) => (
          <li
            key={item}
            className="flex gap-4 text-base leading-relaxed text-foreground/80"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
