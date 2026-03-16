import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RecipeCard from "@/components/RecipeCard";
import {
  getAllCategories,
  getCategoryBySlug,
  getRecipesByCategory,
} from "@/lib/recipes";
import type { CategorySlug } from "@/lib/types";

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

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          {category.title}
        </h1>
        <p className="mt-2 text-lg text-muted">{category.description}</p>
        <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted">
          &ldquo;{category.quote.text}&rdquo;
          <span className="mt-1 block text-sm not-italic">
            — {category.quote.author}
          </span>
        </blockquote>
      </header>

      {recipes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-muted">
          Selles kategoorias pole veel retsepte. Tule varsti tagasi!
        </p>
      )}
    </div>
  );
}
