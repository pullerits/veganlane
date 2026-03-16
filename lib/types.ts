export type Difficulty = "KERGE" | "KESKMINE" | "KEERUKAM";

export type CategorySlug =
  | "hommikuks"
  | "lounaks-ja-ohtuks"
  | "magustoidud"
  | "lisandid";

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  image: string;
  kogus: string;
  valmistusaeg: string;
  raskusaste: Difficulty;
  koostisosad: string[];
  valmistamine: string[];
  nipid?: string;
}

export interface Category {
  slug: CategorySlug;
  title: string;
  description: string;
  quote: {
    text: string;
    author: string;
  };
}
