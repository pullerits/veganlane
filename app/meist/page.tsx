import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meist",
  description:
    "Veganlane lugu — kes me oleme ja miks usume taimsesse toitu.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
        Veganlane lugu
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
        <p>
          Veganlane sündis soovist näidata, et taimne toit võib olla lihtne,
          maitsev ja kättesaadav igaühele. Me usume, et iga taimne eine on samm
          parema tervise ja puhtama planeedi poole.
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

      <div className="mt-12 rounded-lg border border-primary-light bg-white p-6">
        <h2 className="text-xl font-bold text-foreground">Meie väärtused</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Lihtsus</strong> — retseptid,
              mida igaüks saab valmistada
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Kohalikkus</strong> — Eesti
              tooraineid eelistades
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Jätkusuutlikkus</strong> —
              taimne toit kui teadlik valik
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
