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
      <article className="mx-auto max-w-4xl px-4 py-12">
        {category && (
          <Link
            href={`/kategooria/${category.slug}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            &larr; {category.title}
          </Link>
        )}

        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          {recipe.title}
        </h1>
        <p className="mt-2 text-lg text-muted">{recipe.description}</p>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl bg-primary-light">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-6 rounded-lg bg-primary-light px-6 py-4 text-sm">
          <div>
            <span className="block text-xs uppercase tracking-wide text-muted">
              Kogus
            </span>
            <span className="font-medium">{recipe.kogus}</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wide text-muted">
              Valmistusaeg
            </span>
            <span className="font-medium">{recipe.valmistusaeg}</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wide text-muted">
              Raskusaste
            </span>
            <span className="font-medium">
              {recipe.raskusaste.charAt(0) +
                recipe.raskusaste.slice(1).toLowerCase()}
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <section>
            <h2 className="text-xl font-bold text-foreground">Koostisosad</h2>
            <ul className="mt-4 space-y-2">
              {recipe.koostisosad.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground">Valmistamine</h2>
            <ol className="mt-4 space-y-4">
              {recipe.valmistamine.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {recipe.nipid && (
          <aside className="mt-10 rounded-lg border border-accent/30 bg-accent/10 p-6">
            <h3 className="font-bold text-foreground">Nipid</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {recipe.nipid}
            </p>
          </aside>
        )}
      </article>
    </>
  );
}
