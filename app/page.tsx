import CategoryCard from "@/components/CategoryCard";
import RecipeCard from "@/components/RecipeCard";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import { getAllCategories, getAllRecipes } from "@/lib/recipes";

export default function Home() {
  const categories = getAllCategories();
  const latestRecipes = getAllRecipes().slice(0, 6);

  return (
    <>
      <Hero />

      {/* Spacer so content starts below the fixed hero */}
      <div className="h-screen" />

      {/* Content drawer that scrolls over the hero */}
      <div className="relative z-10 bg-background">
        {/* Categories */}
        <section className="bg-cream px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Mida soovid valmistada?
            </h2>
            <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
              {categories.map((cat, i) => (
                <CategoryCard key={cat.slug} category={cat} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest recipes */}
        {latestRecipes.length > 0 && (
          <section className="px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Uued retseptid
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {latestRecipes.map((recipe) => (
                  <RecipeCard key={recipe.slug} recipe={recipe} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Quote section */}
        <QuoteSection />
      </div>
    </>
  );
}
