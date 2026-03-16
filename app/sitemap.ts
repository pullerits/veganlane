import type { MetadataRoute } from "next";
import { getAllCategories, getAllRecipes } from "@/lib/recipes";

const BASE_URL = "https://veganlane.ee";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/meist`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = getAllCategories().map((c) => ({
    url: `${BASE_URL}/kategooria/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const recipeRoutes: MetadataRoute.Sitemap = getAllRecipes().map((r) => ({
    url: `${BASE_URL}/retseptid/${r.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...recipeRoutes];
}
