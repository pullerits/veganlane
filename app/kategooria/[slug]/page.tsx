import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RecipeCard from "@/components/RecipeCard";
import {
  getAllCategories,
  getCategoryBySlug,
  getRecipesByCategory,
} from "@/lib/recipes";
import type { CategorySlug } from "@/lib/types";

const bgColors: Record<string, string> = {
  hommikuks: "bg-jewel-green",
  "lounaks-ja-ohtuks": "bg-jewel-blue",
  magustoidud: "bg-jewel-purple",
  lisandid: "bg-jewel-amber",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const recipes = getRecipesByCategory(slug as CategorySlug);
  const bg = bgColors[slug] ?? "bg-jewel-green";

  return (
    <>
      <section
        className={`${bg} flex min-h-[50vh] flex-col items-center justify-center px-6 text-center text-white`}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Kategooria
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {category.title}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
          {category.description}
        </p>
        <blockquote className="mt-10 max-w-lg text-sm italic leading-relaxed text-white/50">
          &ldquo;{category.quote.text}&rdquo;
          <span className="mt-2 block text-[11px] not-italic tracking-[0.1em]">
            — {category.quote.author}
          </span>
        </blockquote>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {recipes.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted">
              Selles kategoorias pole veel retsepte. Tule varsti tagasi!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
