export function SectionDivider({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-16 flex items-center gap-4">
      <span className="font-mono text-xs font-semibold tracking-[0.15em] text-amber-600">
        {number}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
        {label}
      </span>
      {/* Bezel graduation line */}
      <div className="relative flex-1 h-[6px]">
        {/* Tick marks — like bezel graduations */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(to right, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 12px)`,
            backgroundSize: "12px 3px",
            backgroundPosition: "0 100%",
            backgroundRepeat: "repeat-x",
            opacity: 0.55,
          }}
        />
        {/* Main line fading right */}
        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent" />
      </div>
    </div>
  );
}
