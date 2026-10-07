import { CaseNavbar } from "@/components/case-shared/CaseNavbar";
import { CaseStudyNarrative } from "@/components/case-narrative/CaseStudyNarrative";

export const metadata = {
  title: "HCB Business Redesign — Timur Seidalin",
  description:
    "Evolving a Banking App from MVP to a Scalable Platform. Registration conversion 55% → 76%, VoC 4.9.",
};

export default function VersionBPage() {
  return (
    <>
      <CaseNavbar />
      <main>
        <CaseStudyNarrative />
      </main>
    </>
  );
}
