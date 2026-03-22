import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/kategooria/${category.slug}`}
      className="group relative aspect-square flex flex-col justify-end overflow-hidden rounded-sm text-white transition-transform duration-500 hover:scale-[1.02]"
    >
      <Image
        src={`/images/categories/${category.slug}.jpg`}
        alt={category.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="relative z-10 p-8">
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
