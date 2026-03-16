import Link from "next/link";
import type { Category } from "@/lib/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/kategooria/${category.slug}`}
      className="group flex flex-col rounded-xl border border-primary-light bg-white p-6 transition-shadow hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
        {category.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {category.description}
      </p>
      <span className="mt-4 text-sm font-medium text-primary">
        Vaata retsepte &rarr;
      </span>
    </Link>
  );
}
