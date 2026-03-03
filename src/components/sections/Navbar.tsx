"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { label: "Cases", href: "#cases" },
  { label: "Experience", href: "#experience" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-900"
        >
          Timur Seidalin
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="sm:hidden p-2 -mr-2 text-zinc-600"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 pt-12">
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="text-lg font-medium text-zinc-900"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
