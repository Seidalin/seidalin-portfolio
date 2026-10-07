import { CaseNavbar } from "@/components/case-shared/CaseNavbar";
import { CaseStudyBento } from "@/components/case-bento/CaseStudyBento";

export const metadata = {
  title: "HCB Business Redesign — Timur Seidalin",
  description:
    "Evolving a Banking App from MVP to a Scalable Platform. Registration conversion 55% → 76%, VoC 4.9.",
};

export default function VersionAPage() {
  return (
    <div className="dark">
      <CaseNavbar />
      <main>
        <CaseStudyBento />
      </main>
    </div>
  );
}
