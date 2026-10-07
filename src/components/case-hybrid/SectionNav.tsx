"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "context", label: "Context" },
  { id: "research", label: "Research" },
  { id: "decision-1", label: "Pre-Auth Zone" },
  { id: "decision-2", label: "Home Screen" },
  { id: "decision-3", label: "Sales Cabinet" },
  { id: "design-system", label: "Design System" },
  { id: "process", label: "Process" },
  { id: "results", label: "Results" },
  { id: "learnings", label: "Learnings" },
  { id: "closing", label: "My Role" },
];

export function SectionNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 xl:flex xl:flex-col xl:gap-3">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={cn(
            "text-[11px] font-medium transition-colors duration-200",
            active === s.id
              ? "text-foreground"
              : "text-muted-foreground/30 hover:text-muted-foreground/60"
          )}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
