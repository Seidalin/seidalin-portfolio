import { Footer } from "@/components/sections/Footer";

export default function CaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
