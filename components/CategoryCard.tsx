import Link from "next/link";
import type { Category } from "@/lib/types";

const bgColors: Record<string, string> = {
  hommikuks: "bg-jewel-green",
  "lounaks-ja-ohtuks": "bg-jewel-blue",
  magustoidud: "bg-jewel-purple",
  lisandid: "bg-jewel-amber",
};

export default function CategoryCard({ category }: { category: Category }) {
  const bg = bgColors[category.slug] ?? "bg-jewel-green";

  return (
    <Link
      href={`/kategooria/${category.slug}`}
      className={`group relative aspect-square flex flex-col justify-end overflow-hidden rounded-sm ${bg} p-8 text-white transition-transform duration-500 hover:scale-[1.02]`}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold tracking-tight">
          {category.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {category.description}
        </p>
        <span className="mt-6 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 group-hover:text-white">
          Avasta retsepte &rarr;
        </span>
      </div>
    </Link>
  );
}
