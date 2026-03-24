import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllRecipes, getCategoryBySlug, getRecipeBySlug } from "@/lib/recipes";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRecipes().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return {};
  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      images: [recipe.image],
    },
  };
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const category = getCategoryBySlug(recipe.category);
  const difficultyLevel = { KERGE: 1, KESKMINE: 2, KEERUKAM: 3 }[recipe.raskusaste] ?? 1;
  const difficultyLabel =
    recipe.raskusaste.charAt(0) + recipe.raskusaste.slice(1).toLowerCase();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: recipe.image,
    recipeYield: recipe.kogus,
    totalTime: recipe.valmistusaeg,
    recipeIngredient: recipe.koostisosad,
    recipeInstructions: recipe.valmistamine.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-6 pb-28 pt-24 lg:px-10 lg:pt-24">

        {/* Back link */}
        {category && (
          <Link
            href={`/kategooria/${category.slug}`}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
          >
            &larr; {category.title}
          </Link>
        )}

        {/* Header: title/meta left, image right */}
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          {/* Left: text content */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              {recipe.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {recipe.description}
            </p>

            {/* Metadata */}
            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-foreground/8 bg-foreground/8">
              <div className="bg-background px-5 py-5">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Kogus
                </span>
                <span className="mt-1.5 block text-sm font-medium text-foreground">
                  {recipe.kogus}
                </span>
              </div>
              <div className="bg-background px-5 py-5">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Valmistusaeg
                </span>
                <span className="mt-1.5 block text-sm font-medium text-foreground">
                  {recipe.valmistusaeg}
                </span>
              </div>
              <div className="bg-background px-5 py-5">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Raskusaste
                </span>
                <div className="mt-2.5 flex gap-1">
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className={`h-1.5 w-7 rounded-full ${
                        n <= difficultyLevel ? "bg-primary" : "bg-foreground/10"
                      }`}
                    />
                  ))}
                </div>
                <span className="mt-1.5 block text-sm font-medium text-foreground">
                  {difficultyLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative w-full shrink-0 overflow-hidden rounded-sm bg-cream lg:w-[340px]">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={0}
              height={0}
              sizes="(min-width: 1024px) 340px, 100vw"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-foreground/8" />

        {/* Ingredients + Steps */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_2fr]">
          <section>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Koostisosad
            </h2>
            <ul className="mt-6 space-y-3">
              {recipe.koostisosad.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-foreground/5 pb-3 text-sm leading-relaxed"
                >
                  <span className="mt-[7px] block h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Valmistamine
            </h2>
            <ol className="mt-6 space-y-8">
              {recipe.valmistamine.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Tips */}
        {recipe.nipid && (
          <aside className="mt-16 rounded-sm bg-cream p-8">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Nipid
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {recipe.nipid}
            </p>
          </aside>
        )}
      </article>
    </>
  );
}
