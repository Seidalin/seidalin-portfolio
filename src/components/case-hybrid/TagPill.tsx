import { cn } from "@/lib/utils";

type TagColor = "amber" | "purple" | "blue" | "olive";

interface TagPillProps {
  color: TagColor;
  className?: string;
  children: React.ReactNode;
}

const colorStyles: Record<TagColor, string> = {
  amber:
    "bg-amber-200/80 text-amber-900 dark:bg-amber-500/25 dark:text-amber-300",
  purple:
    "bg-purple-100 text-purple-800 dark:bg-purple-500/25 dark:text-purple-300",
  blue:
    "bg-blue-100 text-blue-800 dark:bg-blue-500/25 dark:text-blue-300",
  olive:
    "bg-olive-200/80 text-olive-900 dark:bg-olive-500/25 dark:text-olive-300",
};

export function TagPill({ color, className, children }: TagPillProps) {
  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-medium", colorStyles[color], className)}>
      {children}
    </span>
  );
}
