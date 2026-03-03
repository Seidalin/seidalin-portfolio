import { ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Telegram",
    href: "https://t.me/seidalint",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/seidalint",
  },
  {
    label: "Email",
    href: "mailto:seidalin.tim@gmail.com",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-zinc-100">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Open to new opportunities
          </h2>
          <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
            I am open to Head of Design, Design Director, and VP of Design
            roles. Based in Kazakhstan, available for remote work.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="mt-24 text-sm text-zinc-300">
          &copy; {new Date().getFullYear()} Timur Seidalin
        </div>
      </div>
    </footer>
  );
}
