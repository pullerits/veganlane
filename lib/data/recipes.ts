import { Recipe } from "@/lib/types";

export const recipes: Recipe[] = [
  {
    slug: "kookose-kaerapuder",
    title: "Kookose kaerapuder marjadega",
    description:
      "Kremjas kookospiimaga kaerapuder, mida kroonistavad värsked marjad ja pähklid.",
    category: "hommikuks",
    image: "/images/recipes/kookose-kaerapuder.jpg",
    kogus: "2 portsjonit",
    valmistusaeg: "15 min",
    raskusaste: "KERGE",
    koostisosad: [
      "1 klaas kaerahelbeid",
      "1 klaas kookospiima",
      "1 klaas vett",
      "1 spl vahtrasiirupit",
      "Näputäis soola",
      "Värsked marjad serveerimiseks",
      "Pähklid serveerimiseks",
    ],
    valmistamine: [
      "Pane kaerahelbed, kookospiim, vesi ja sool potti ning kuumuta keemiseni.",
      "Keera tuld maha ja keeda 5 minutit, segades aeg-ajalt.",
      "Lisa vahtrasiirup ja sega läbi.",
      "Tõsta kaussidesse ja kata värskete marjade ning pähklitega.",
    ],
    nipid:
      "Kasuta täistera kaerahelbeid parema tekstuuri jaoks. Puder on veelgi parem, kui lisad peale kookoshelbed.",
  },
  {
    slug: "kirjuoad-tomatikastmes",
    title: "Kirjuoad tomatikastmes",
    description:
      "Lihtne ja toitev kirjuubade roog tomatikastmes, täiuslik kiireks lõunaks.",
    category: "lounaks-ja-ohtuks",
    image: "/images/recipes/kirjuoad-tomatikastmes.jpg",
    kogus: "4 portsjonit",
    valmistusaeg: "35 min",
    raskusaste: "KERGE",
    koostisosad: [
      "2 purki kirjuube (à 400g)",
      "1 purk konserveeritud tomateid (400g)",
      "1 sibul, hakitud",
      "3 küüslauguküünt, purustatud",
      "1 tl kumiinat",
      "1 tl suitsupaprikat",
      "Soola ja pipart maitse järgi",
      "2 spl oliiviõli",
      "Värske koriander serveerimiseks",
    ],
    valmistamine: [
      "Kuumuta oliiviõli suurel pannil keskmise kuumuse peal.",
      "Lisa hakitud sibul ja praadi 5 minutit, kuni sibul on pehme.",
      "Lisa küüslauk, kumiin ja suitsupaprika, praadi veel 1 minut.",
      "Lisa konserveeritud tomatid ja kirjuoad (kurnatud).",
      "Hauta 20 minutit, kuni kaste on paksenud.",
      "Maitsesta soola ja pipraga. Serveeri värske koriandriga.",
    ],
    nipid:
      "Serveeri riisi või värske leivaga. Roog on veelgi parem järgmisel päeval, kui maitsed on kokku jõudnud.",
  },
];
