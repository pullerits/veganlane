import { categories } from "@/lib/data/categories";
import { recipes } from "@/lib/data/recipes";
import type { Category, CategorySlug, Recipe } from "@/lib/types";

export function getAllRecipes(): Recipe[] {
  return recipes;
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getRecipesByCategory(category: CategorySlug): Recipe[] {
  return recipes.filter((r) => r.category === category);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
