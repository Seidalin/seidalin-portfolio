import { cn } from "@/lib/utils";

export function PullQuote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={cn("border-l-[3px] border-amber-600 py-3 pl-8", className)}>
      <p className="font-serif italic text-xl leading-snug text-foreground sm:text-2xl sm:leading-snug">
        {children}
      </p>
    </blockquote>
  );
}
