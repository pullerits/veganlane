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
          <div className="relative h-full min-h-[400px]">
            {/* Top-right image */}
            <div className="absolute top-0 right-0 z-10 h-[58%] w-[75%] overflow-hidden rounded-sm shadow-[0_12px_32px_rgba(26,26,26,0.14)]">
              <Image
                src="/images/meist2.jpg"
                alt="Veganlane"
                fill
                className="object-cover"
                sizes="32rem"
                priority
              />
            </div>
            {/* Bottom-left image */}
            <div className="absolute bottom-0 left-0 z-20 h-[58%] w-[75%] overflow-hidden rounded-sm shadow-[0_12px_32px_rgba(26,26,26,0.14)]">
              <Image
                src="/images/meist1.jpg"
                alt="Veganlane"
                fill
                className="object-cover"
                sizes="32rem"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Share section ── */}
      <div className="relative mt-24 overflow-hidden">
        <Image
          src="/images/lisandid-hero.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative flex items-center justify-center px-6 py-24">
          <div className="w-full max-w-4xl bg-background/80 px-8 py-10 backdrop-blur-sm sm:px-12">
            <div className="h-px bg-primary/40" />
            <div className="py-8 text-center space-y-3">
              <p className="text-base leading-7 text-foreground sm:text-lg">
                Valmista maitsvat ja tervislikku toitu ise ja jaga retsepte oma lähedastega.
              </p>
              <p className="text-base leading-7 text-foreground sm:text-lg">
                Kui midagi hästi välja tuleb, jaga seda pildi või kommentaari abil{" "}
                <a
                  href="https://www.facebook.com/veganlane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary-dark"
                >
                  Veganlase Facebooki lehel
                </a>
                .
              </p>
            </div>
            <div className="h-px bg-primary/40" />
            <div className="mt-8 flex justify-center gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/veganlane"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:?subject=Veganlane retsept&body=Vaata seda retsepti Veganlane lehelt!"
                aria-label="E-post"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              {/* Print */}
              <a
                href="javascript:print()"
                aria-label="Prindi"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                  <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/>
                  <rect x="6" y="14" width="12" height="8" rx="1"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
