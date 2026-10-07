"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function VersionSwitcher() {
  const pathname = usePathname();
  const isA = pathname.endsWith("/a");
  const isB = pathname.endsWith("/b");

  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full bg-foreground/90 p-1 shadow-lg backdrop-blur-md">
      <Link
        href="/cases/hcb-business/a"
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          isA ? "bg-background text-foreground" : "text-background/60 hover:text-background"
        )}
      >
        A — Bento
      </Link>
      <Link
        href="/cases/hcb-business/b"
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          isB ? "bg-background text-foreground" : "text-background/60 hover:text-background"
        )}
      >
        B — Narrative
      </Link>
    </div>
  );
}
