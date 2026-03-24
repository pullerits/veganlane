import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meist",
  description: "Veganlane lugu - kes me oleme ja miks usume taimsesse toitu.",
};

const questions = [
  "Oled toiduvalmistamises veel algaja, aga tahad teha maitsvat ja kodust toitu nagu ema tegi?",
  "Oled loobunud loomsetest toiduainetest ja nuputad endamisi mida millega asendada?",
  "Oled tüdinud oma tavapärasest menüüst ja mõtled: mida teised küll söövad?",
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* ── Hero ── */}
      <section className="px-6 pt-32 pb-16 lg:px-10 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-accent" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-accent">
              Meie lugu
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.55fr] lg:gap-16 lg:items-end">
            <div>
              <h1 className="text-[3.25rem] font-semibold tracking-tight text-foreground leading-[0.97] sm:text-7xl lg:text-[6rem]">
                Veganlase
                <br />
                lugu
              </h1>
              <div className="mt-10 max-w-lg space-y-5 text-base leading-8 text-muted sm:text-lg">
                <p>
                  Veganlane on alguse saanud soovist jagada perekeskselt
                  klassikalisi retsepte, mida kõik armastavad ja on harjunud
                  sööma.
                </p>
                <p>
                  Mitmed klassikalised retseptid on läbinud veganiseerimise ning
                  leidnud tunnustust uute klassikutena.
                </p>
                <p className="font-medium text-foreground">
                  Retseptid, mis siit leiad, on kõik taimsest toorainest.
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream shadow-[0_20px_60px_rgba(26,26,26,0.10)]">
                <Image
                  src="/images/meist1.jpg"
                  alt="Veganlane"
                  fill
                  className="object-cover"
                  sizes="22rem"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile image ── */}
      <section className="lg:hidden px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream">
          <Image
            src="/images/meist1.jpg"
            alt="Veganlane"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* ── Questions ── */}
      <section className="bg-cream px-6 py-24 lg:px-10 lg:py-32 mt-16 lg:mt-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] tracking-[0.22em] uppercase text-accent mb-14">
            Kas see oled sina?
          </p>
          <div className="divide-y divide-foreground/10">
            {questions.map((question, i) => (
              <div key={i} className="flex gap-7 py-10 lg:gap-10 lg:py-12">
                <span className="shrink-0 text-3xl font-semibold tabular-nums leading-none text-foreground/[0.08] mt-0.5 lg:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-medium leading-8 text-foreground sm:text-xl sm:leading-9">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-20 lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream shadow-[0_20px_60px_rgba(26,26,26,0.08)]">
              <Image
                src="/images/meist2.jpg"
                alt="Veganlane"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 28rem"
              />
            </div>
            <div>
              <div className="h-px w-10 bg-accent mb-8" />
              <p className="text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
                Siin on sulle põhjalike juhenditega ehk puust ja punaseks
                retseptid lihtsatele ja klassikalistele toitudele. Retseptid on
                täiendatud kommentaaride ja nippidega ning mõnikord ka
                soovitustega tooraine osas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
