import { cn } from "@/lib/utils";

type BentoCardVariant = "default" | "accent" | "muted" | "ghost";

interface BentoCardProps {
  variant?: BentoCardVariant;
  span?: "1" | "2" | "full";
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BentoCardVariant, string> = {
  default: "bg-card border border-border rounded-2xl p-6",
  accent:
    "nato-weave bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/30 border-l-[3px] border-l-amber-500 rounded-2xl p-6",
  muted: "bg-secondary/40 border border-border/60 rounded-2xl p-6",
  ghost: "p-6",
};

const spanStyles: Record<string, string> = {
  "1": "col-span-1",
  "2": "sm:col-span-2",
  full: "col-span-full",
};

export function BentoCard({
  variant = "default",
  span,
  className,
  children,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        variantStyles[variant],
        span && spanStyles[span],
        className
      )}
    >
      {children}
    </div>
  );
}
