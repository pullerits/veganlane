import Link from "next/link";
import Image from "next/image";
import type { Recipe } from "@/lib/types";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/retseptid/${recipe.slug}`}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-cream">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-base font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
          {recipe.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {recipe.description}
        </p>
        <div className="mt-3 flex gap-3 text-[11px] uppercase tracking-[0.1em] text-muted">
          <span>{recipe.valmistusaeg}</span>
          <span className="text-foreground/20">/</span>
          <span>{recipe.raskusaste.toLowerCase()}</span>
        </div>
      </div>
    </Link>
  );
}
