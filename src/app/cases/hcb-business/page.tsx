import { Navbar } from "@/components/sections/Navbar";
import { CaseStudyHCB } from "@/components/sections/CaseStudyHCB";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "HCB Business Redesign — Timur Seidalin",
  description:
    "Evolving a Banking App from MVP to a Scalable Platform.",
};

export default function HCBCasePage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudyHCB />
      </main>
      <Footer />
    </>
  );
}
