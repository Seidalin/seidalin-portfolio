import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Image
            src="/photo.png"
            alt="Timur Seidalin"
            width={80}
            height={80}
            className="rounded-full mb-6"
            priority
          />
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">
            Head of Product Design
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
            Timur Seidalin
          </h1>
          <p className="mt-6 text-xl text-zinc-500 leading-relaxed max-w-2xl">
            I build design teams, launch products from zero, and integrate AI
            into design workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
