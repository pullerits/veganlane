"use client";

import { useEffect, useRef, useState } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-background px-6 pt-16 pb-36 text-center lg:px-10 lg:pt-24 lg:pb-44"
    >
      <div className="mx-auto max-w-3xl">
        <blockquote
          className={`text-3xl font-light leading-relaxed italic text-foreground transition-all duration-1000 sm:text-4xl lg:text-5xl lg:leading-relaxed ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          &ldquo;Iga taimne eine on samm parema tervise ja puhtama planeedi
          poole.&rdquo;
        </blockquote>

      </div>
    </section>
  );
}
