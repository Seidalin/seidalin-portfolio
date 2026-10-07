import { ScreenshotPlaceholder } from "@/components/case-shared/ScreenshotPlaceholder";

export function BeforeAfterComparison({
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-foreground/80 px-3 py-1 text-xs font-medium text-background">
            {beforeLabel}
          </span>
          <ScreenshotPlaceholder
            label={beforeLabel}
            aspect="16/10"
            className="rounded-2xl border-transparent bg-secondary/80"
          />
        </div>
        <div className="relative">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-amber-600 px-3 py-1 text-xs font-medium text-white">
            {afterLabel}
          </span>
          <ScreenshotPlaceholder
            label={afterLabel}
            aspect="16/10"
            className="rounded-2xl ring-2 ring-amber-500/20"
          />
        </div>
      </div>
    </div>
  );
}
