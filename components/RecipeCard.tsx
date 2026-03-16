import Link from "next/link";
import Image from "next/image";
import type { Recipe } from "@/lib/types";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/retseptid/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-primary-light bg-white transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full bg-primary-light">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary">
          {recipe.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">
          {recipe.description}
        </p>
        <div className="mt-3 flex gap-3 text-xs text-muted">
          <span>{recipe.valmistusaeg}</span>
          <span>&middot;</span>
          <span>{recipe.raskusaste.toLowerCase()}</span>
        </div>
      </div>
    </Link>
  );
}
