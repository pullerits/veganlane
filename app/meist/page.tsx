import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meist",
  description:
    "Veganlane lugu — kes me oleme ja miks usume taimsesse toitu.",
};

export default function AboutPage() {
  return (
    <>
      <section className="flex min-h-[50vh] flex-col items-center justify-center bg-jewel-green px-6 text-center text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Meie lugu
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Veganlane
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
          Taimsed retseptid, mis on loodud armastusega Eesti köögile mõeldes.
        </p>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl space-y-8 text-base leading-[1.8] text-muted">
          <p>
            Veganlane sündis soovist näidata, et taimne toit võib olla lihtne,
            maitsev ja kättesaadav igaühele. Me usume, et iga taimne eine on
            samm parema tervise ja puhtama planeedi poole.
          </p>
          <p>
            Meie retseptid on loodud Eesti köögile mõeldes — kasutame kohalikke
            tooraineid, hooajalisi vilju ja tuttavaid maitseid, andes neile uue,
            taimse hingamise. Siin ei ole keerulisi tehnikaid ega raskesti
            leitavaid koostisosi.
          </p>
          <p>
            Olenemata sellest, kas oled kogenud taimetoitlane või alles alustad
            oma teekonda, loodame, et Veganlane inspireerib sind proovima midagi
            uut. Sest hea toit ühendab meid kõiki.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
            Meie väärtused
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            Milles me usume
          </h2>
          <ul className="mt-10 space-y-8">
            {[
              {
                title: "Lihtsus",
                desc: "Retseptid, mida igaüks saab valmistada — ilma keeruliste tehnikate ja eksootilist koostisosadeta.",
              },
              {
                title: "Kohalikkus",
                desc: "Eesti tooraineid eelistades loome retsepte, mis on tuttavad ja kättesaadavad.",
              },
              {
                title: "Jätkusuutlikkus",
                desc: "Taimne toit kui teadlik valik parema planeedi ja tervise poole.",
              },
            ].map((value) => (
              <li
                key={value.title}
                className="border-b border-foreground/5 pb-8"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
