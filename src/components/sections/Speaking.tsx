import { MapPin, Mic } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const talks = [
  {
    event: "DesignScience 2023",
    topic: "How to build processes and communication with clients",
    year: "2023",
    location: "Astana",
  },
  {
    event: "DesignScience 2024",
    topic: "How a design system makes the team happier",
    year: "2024",
    location: "Tashkent",
  },
  {
    event: "Design Weekend 2025",
    topic: "Vibe coding and AI in design",
    year: "2025",
    location: "Kazan",
  },
];

const community = [
  "Internal AI evangelist at HCB — running meetups and workshops for designers, PMs, and developers",
  "Astana design community — regular talks on AI in design",
  "AI trends research for banking — contributed to HCB 2026 product strategy",
  "Led a design workshop for kids at BeginIT Summer Fest by inDrive",
];

export function Speaking() {
  return (
    <section id="speaking" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">
            Speaking &amp; Community
          </p>
          <p className="text-base text-zinc-500 mb-12 max-w-xl">
            I believe in sharing knowledge openly. I speak at conferences, run
            internal meetups, and contribute to the design community in Central
            Asia.
          </p>
        </FadeIn>

        {/* Conference talks */}
        <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {talks.map((talk) => (
            <div
              key={talk.event}
              className="rounded-xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Mic className="h-4 w-4 text-zinc-400" />
                <span className="text-xs font-medium text-zinc-400">
                  {talk.year}
                </span>
              </div>
              <p className="font-semibold text-zinc-900 text-sm">
                {talk.event}
              </p>
              <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                {talk.topic}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-zinc-400">
                <MapPin className="h-3 w-3" />
                {talk.location}
              </div>
            </div>
          ))}
        </div>

        </FadeIn>

        {/* Upcoming */}
        <FadeIn delay={150}>
        <div className="rounded-xl border border-dashed border-zinc-200 p-6 mb-16 flex items-center gap-4">
          <span className="shrink-0 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500">
            2026
          </span>
          <p className="text-sm text-zinc-500">
            2 more talks planned — AI and design leadership. Dates TBD.
          </p>
        </div>
        </FadeIn>

        {/* Community */}
        <FadeIn delay={200}>
        <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-6">
          Community
        </p>
        <ul className="space-y-3">
          {community.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm text-zinc-700 leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
              {item}
            </li>
          ))}
        </ul>
        </FadeIn>
      </div>
    </section>
  );
}
