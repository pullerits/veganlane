# Veganlane.ee Recipe Data

Extracted from [veganlane.ee](https://veganlane.ee) — 46 vegan recipes structured for use in a Next.js rebuild.

## Files

| File | Recipes | Description |
|------|---------|-------------|
| `all-recipes.json` | 46 | All recipes combined — best for AI context |
| `breakfast.json` | 8 | Hommikuks |
| `lunch-dinner.json` | 23 | Lõunaks ja õhtuks |
| `desserts.json` | 11 | Magustoidud |
| `condiments.json` | 4 | Lisandid |

## Recipe Schema

Each recipe follows this structure:

```ts
type Recipe = {
  slug: string;           // URL-safe id, matches original site URL
  title: string;          // Estonian title
  titleEn: string;        // English translation
  category: "breakfast" | "lunch-dinner" | "desserts" | "condiments";
  servings: number | null;
  yield?: string;         // e.g. "8–10 cookies" (used when servings is null)
  prepTime: string;       // e.g. "30 min"
  difficulty: "easy" | "medium" | "hard";
  ingredients: string[];
  instructions: string[];
  notes?: string;
}
```

## Suggested Next.js Usage

### Static data import (App Router)
```ts
// lib/recipes.ts
import allRecipes from '@/data/recipes/all-recipes.json';
import type { Recipe } from '@/types/recipe';

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return (allRecipes as Recipe[]).find(r => r.slug === slug);
}

export function getRecipesByCategory(category: Recipe['category']): Recipe[] {
  return (allRecipes as Recipe[]).filter(r => r.category === category);
}
```

### Dynamic routes
```ts
// app/recipes/[slug]/page.tsx
import { getRecipeBySlug } from '@/lib/recipes';
import allRecipes from '@/data/recipes/all-recipes.json';

export function generateStaticParams() {
  return allRecipes.map(r => ({ slug: r.slug }));
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug);
  // ...
}
```

## File Size Guide

- `all-recipes.json` — ~60 KB, well within Claude Code's context window
- Category files — ~5–20 KB each, ideal for focused work on one section
- **Recommendation:** Use `all-recipes.json` when building shared components/types, category files when working on specific pages or layouts.
