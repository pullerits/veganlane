import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meist",
  description: "Veganlane lugu - kes me oleme ja miks usume taimsesse toitu.",
};

export default function AboutPage() {
  return (
    <div className="bg-background px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">

          {/* ── Left: text ── */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Veganlase lugu
            </h1>
            <div className="mt-3 h-0.5 w-32 bg-primary" />

            <div className="mt-8 space-y-4 text-base leading-7 text-foreground sm:text-[1.05rem] sm:leading-8">
              <p>
                Veganlane on alguse saanud soovist jagada perekeskselt
                klassikalisi retsepte, mida kõik armastavad ja on harjunud
                sööma. Mitmed klassikalised retseptid on läbinud
                &ldquo;veganiseerimise&rdquo; ning leidnud tunnustust uute
                klassikutena.
              </p>

              <p className="font-semibold italic text-primary">
                Retseptid, mis siit leiad, on kõik taimsest toorainest.
              </p>

              <p>
                <strong>Oled</strong> toiduvalmistamises veel algaja, aga tahad
                teha maitsvat ja kodust toitu nagu ema tegi?
                <br />
                <strong>Oled</strong> loobunud loomsetest toiduainetest ja
                nuputad endamisi mida millega asendada?
                <br />
                <strong>Oled</strong> tüdinud oma tavapärasest menüüst ja
                mõtled:&ldquo;Mida teised küll söövad&rdquo;?
              </p>

              <p>
                Siin on sulle põhjalike juhenditega ehk{" "}
                <strong>puust ja punaseks</strong> retseptid lihtsatele ja
                klassikalistele toitudele. Retseptid on täiendatud
                kommentaaride ja nippidega ning mõnikord ka soovitustega
                tooraine osas.
              </p>
            </div>
          </div>

          {/* ── Right: image collage ── */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream">
              <Image
                src="/images/meist1.jpg"
                alt="Veganlane"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42rem"
                priority
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream">
              <Image
                src="/images/meist2.jpg"
                alt="Veganlane"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42rem"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
