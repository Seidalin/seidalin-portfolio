"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";

const timeline = [
  {
    period: "Nov 2024 – Present",
    company: "Home Credit Bank",
    role: "Head of Design SME",
    detail:
      "Led product design for the SME division, managing 5 designers across 10 product streams in partnership with the CPO. Grew app VoC to 4.9 and registration conversion to 76%. Built team operating model from scratch: Double Diamond sprints, design reviews, 1-on-1s, PDPs. Co-owned annual design strategy and budget planning. Shipped production-ready design system with design tokens, dark theme, and dynamic typography. Championed AI adoption across the design org.",
  },
  {
    period: "Feb 2023 – Nov 2024",
    company: "Home Credit Bank",
    role: "Product Designer → Design Lead",
    detail:
      "Joined as the founding designer on HCB Business. Grew from IC to team lead within 18 months, building the design function from zero. Launched a full-scale digital bank for SME clients in 6 months. Designed core financial flows: currency conversion, international transfers, contracts, and account management. Built UI Kit and design documentation from scratch.",
  },
  {
    period: "Oct 2023 – Oct 2024",
    company: "START",
    role: "Design System Lead (contract)",
    detail:
      "Built and maintained a multi-platform design system (iOS, Android, Web, TV) for 2 brands (START and UNICO) using atomic design principles and design tokens. Partnered with 4 engineering teams. Mentored 2 junior designers. Speaker at DesignScience 2024.",
  },
  {
    period: "Aug 2021 – Feb 2023",
    company: "UsabilityLab",
    role: "Senior Product Designer",
    detail:
      "UX consulting and outstaffing agency. Worked on large-scale products across fintech, OSINT, charity, and enterprise sectors. Key clients: Sber (Supply Center B2B, SuperApp PRO_CS, SBOL PRO), AiMap (OSINT platform). Speaker at DesignScience 2023.",
  },
  {
    period: "May 2022 – Nov 2022",
    company: "Bank CenterCredit",
    role: "Senior Product Designer",
    detail:
      "One of the largest commercial banks in Kazakhstan. Designed Kidly — a children's activity subscription product connecting parents with local classes.",
  },
  {
    period: "Feb 2021 – Jul 2021",
    company: "SETURON",
    role: "Product Designer",
    detail:
      'EdTech and HR-tech product company. Designed "HR Testing" and "Learning Platform" products (mobile + web). Conducted user research, built landing pages on Webflow.',
  },
  {
    period: "Sep 2019 – Jan 2021",
    company: "Open Systems",
    role: "UI/UX Designer",
    detail:
      "B2B software company. Shipped 5 products in the e-invoicing ecosystem: IS ESF (mobile + web), Passport ESF, ESF CONNECT, and custom invoicing apps.",
  },
  {
    period: "Jan 2018 – May 2019",
    company: "PANAMA DC",
    role: "UI/UX Designer",
    detail:
      "Digital agency. Designed web portals and mobile apps for Olympic.kz, Atameken.kz, Kassa Nova Bank, inBusiness.kz.",
  },
];

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="scroll-mt-20 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-12">
            Experience
          </p>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={100}>
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200 hidden sm:block" />

          <div className="space-y-0">
            {timeline.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left group"
                >
                  <div className="flex gap-6 sm:gap-8 py-5 relative">
                    {/* Node */}
                    <div className="hidden sm:flex shrink-0 relative z-10">
                      <span
                        className={`mt-1.5 h-[15px] w-[15px] rounded-full border-2 transition-colors duration-200 ${
                          isOpen || i === 0
                            ? "border-zinc-900 bg-zinc-900"
                            : "border-zinc-300 bg-white group-hover:border-zinc-500"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                        <p className="text-sm text-zinc-400 shrink-0 sm:w-44">
                          {item.period}
                        </p>
                        <div className="mt-1 sm:mt-0">
                          <p className="font-semibold text-zinc-900">
                            {item.company}
                          </p>
                          <p className="text-sm text-zinc-500">{item.role}</p>
                        </div>
                      </div>

                      {/* Expanded detail */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-zinc-500 leading-relaxed sm:ml-48">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {i < timeline.length - 1 && (
                    <div className="border-b border-zinc-100 sm:ml-[31px]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        </FadeIn>

        {/* Career narrative */}
        <p className="mt-12 text-sm text-zinc-400">
          7+ years. From agency UI designer → B2B product → fintech lead → Head
          of Design.
        </p>
      </div>
    </section>
  );
}
