import { cn } from "@/lib/utils";

export function ScreenshotPlaceholder({
  label = "Screenshot",
  aspect = "4/3",
  className,
}: {
  label?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden border border-border", className)}>
      {/* Mac window chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary/70 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground/40">
          {label}
        </span>
      </div>
      {/* Content area */}
      <div
        className="flex items-center justify-center bg-secondary/20"
        style={{ aspectRatio: aspect }}
      >
        <span className="font-mono text-[11px] tracking-widest text-muted-foreground/20">
          · · ·
        </span>
      </div>
    </div>
  );
}
