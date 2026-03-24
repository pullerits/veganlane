"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Category } from "@/lib/types";

export default function CategoryCard({
  category,
  index = 0,
}: {
  category: Category;
  index?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href={`/kategooria/${category.slug}`}
      className={`group relative aspect-square flex flex-col justify-end overflow-hidden rounded-sm text-white transition-all duration-700 hover:scale-[1.02] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
    >
      <motion.div
        className="absolute inset-[-20px] will-change-transform"
        style={{ y: imageY }}
      >
        <Image
          src={`/images/categories/${category.slug}.jpg`}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </motion.div>
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
