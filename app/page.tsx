import CategoryCard from "@/components/CategoryCard";
import RecipeCard from "@/components/RecipeCard";
import { getAllCategories, getAllRecipes } from "@/lib/recipes";

export default function Home() {
  const categories = getAllCategories();
  const latestRecipes = getAllRecipes().slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Tervem, Ilusam, Elavam
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Avasta maitsvaid taimseid retsepte, mis toovad rõõmu igasse päeva.
          Lihtne, tervislik ja alati maitsev.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground">Kategooriad</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {latestRecipes.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">
            Viimased retseptid
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
