import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function Footer() {
  return (
    <>
      {/* CTA */}
      <section id="contact" className="scroll-mt-20 py-24 px-6">
        <FadeIn>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Let&apos;s Talk
          </h2>
          <p className="mt-4 text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Open to Head of Design, Design Director, and VP of Design roles.
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Kazakhstan · Remote · UAE · Georgia
          </p>
          <a
            href="https://t.me/seidalint"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-300">
            &copy; 2026 Timur Seidalin
          </p>
          <div className="flex gap-6">
            <a
              href="https://t.me/seidalint"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              Telegram
            </a>
            <a
              href="https://linkedin.com/in/seidalint"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
