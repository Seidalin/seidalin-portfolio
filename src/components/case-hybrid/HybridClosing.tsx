import { closing, role, contacts } from "@/data/hcb-case-data";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionDivider } from "./SectionDivider";
import { BentoCard } from "./BentoCard";
import { PullQuote } from "./PullQuote";
import { ArrowLeft, Send, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const topRoles = role.slice(0, 4);

const contactLinks = [
  { label: "Telegram", href: contacts.telegram, icon: Send },
  { label: "LinkedIn", href: contacts.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${contacts.email}`, icon: Mail },
];

export function HybridClosing() {
  return (
    <section id="closing" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <SectionDivider number="08" label="My Role & Reflection" />
        </FadeIn>

        {/* Role cards */}
        <FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {topRoles.map((item) => (
              <BentoCard key={item}>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </p>
              </BentoCard>
            ))}
          </div>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn>
          <div className="mx-auto mt-16 max-w-3xl">
            <PullQuote>
              {closing.paragraphs[2]}
            </PullQuote>
          </div>
        </FadeIn>

        {/* Tagline */}
        <FadeIn>
          <p className="mx-auto mt-16 max-w-3xl text-center font-serif text-3xl tracking-tight sm:text-4xl">
            {closing.tagline}
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="mt-16 flex flex-col items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>

            <div className="flex gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
