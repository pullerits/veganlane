import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meist",
  description: "Veganlane lugu - kes me oleme ja miks usume taimsesse toitu.",
};

const questions = [
  "Oled toiduvalmistamises veel algaja, aga tahad teha maitsvat ja kodust toitu nagu ema tegi?",
  "Oled loobunud loomsetest toiduainetest ja nuputad endamisi mida millega asendada?",
  "Oled tüdinenud oma tavapärasest menüüst ja mõtled: mida teised küll söövad?",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-28 pt-16 lg:px-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
        Meist
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
        Veganlase lugu
      </h1>

      <div className="mt-12 border-t border-foreground/8" />

      <div className="mt-12 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          Veganlane on alguse saanud soovist jagada perekeskselt klassikalisi
          retsepte, mida kõik armastavad ja on harjunud sööma.
        </p>
        <p>
          Mitmed klassikalised retseptid on läbinud
          {" "}
          <span>&quot;veganiseerimise&quot;</span>
          {" "}
          ning leidnud tunnustust uute klassikutena.
        </p>
        <p className="font-medium text-foreground">
          Retseptid, mis siit leiad, on kõik taimsest toorainest.
        </p>
      </div>

      <div className="mt-16">
        <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          See leht on sulle, kui...
        </p>
        {questions.map((q, i) => (
          <div key={i} className="flex gap-8 border-t border-foreground/8 py-8">
            <span className="shrink-0 pt-0.5 text-[11px] font-semibold tabular-nums text-foreground/20">
              0{i + 1}
            </span>
            <p className="text-lg font-medium leading-snug text-foreground">
              {q}
            </p>
          </div>
        ))}
        <div className="border-t border-foreground/8" />
      </div>

      <div className="mt-16 max-w-2xl text-base leading-relaxed text-muted">
        <p>
          Siin on sulle põhjalike juhenditega ehk puust ja punaseks retseptid
          lihtsatele ja klassikalistele toitudele. Retseptid on täiendatud
          kommentaaride ja nippidega ning mõnikord ka soovitustega tooraine
          osas.
        </p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream">
          <Image
            src="/images/hero.jpg"
            alt="Köögiviljad paberikotis"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream">
          <Image
            src="/images/lõuna-hero.webp"
            alt="Vegan poke bowl marineeritud tofuga"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
      </div>

      <div className="mt-16 rounded-sm bg-cream px-10 py-10">
        <p className="text-lg font-medium leading-relaxed text-foreground">
          Valmista maitsvat ja tervislikku toitu ise ja jaga retsepte oma
          lähedastega.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Kui midagi hästi välja tuleb, jaga seda pildi või kommentaari abil{" "}
          <a
            href="https://www.facebook.com/veganlane"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Veganlase Facebooki lehel
          </a>
          .
        </p>
      </div>
    </div>
  );
}
