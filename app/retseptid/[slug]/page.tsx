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

      {/* Hero image */}
      <div className="relative h-[50vh] w-full bg-cream sm:h-[60vh]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        {category && (
          <Link
            href={`/kategooria/${category.slug}`}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
          >
            &larr; {category.title}
          </Link>
        )}

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {recipe.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {recipe.description}
        </p>

        {/* Metadata bar */}
        <div className="mt-10 flex flex-wrap gap-10 border-y border-foreground/10 py-6">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Kogus
            </span>
            <span className="mt-1 block text-sm font-medium">{recipe.kogus}</span>
          </div>
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Valmistusaeg
            </span>
            <span className="mt-1 block text-sm font-medium">
              {recipe.valmistusaeg}
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Raskusaste
            </span>
            <span className="mt-1 block text-sm font-medium">
              {recipe.raskusaste.charAt(0) +
                recipe.raskusaste.slice(1).toLowerCase()}
            </span>
          </div>
        </div>

        {/* Content: Ingredients + Steps */}
        <div className="mt-14 grid gap-16 lg:grid-cols-[1fr_2fr]">
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
