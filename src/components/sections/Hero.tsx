import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center pt-24 pb-20 px-6">
      <div className="flex flex-col items-center text-center max-w-2xl">
        <Image
          src="/photo.png"
          alt="Timur Seidalin"
          width={96}
          height={96}
          className="rounded-full"
          priority
        />
        <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
          Hi, I&apos;m Timur
        </h1>
        <p className="mt-4 text-lg sm:text-xl leading-relaxed text-zinc-500">
          Head of Product Design focused on building teams,
          shipping fintech products, and integrating AI into design workflows.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="#cases"
            className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Case Studies
          </a>
          <a
            href="#experience"
            className="rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            About me
          </a>
        </div>
      </div>
    </section>
  );
}
