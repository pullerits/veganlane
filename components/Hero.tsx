"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const y = window.scrollY;
        const progress = Math.min(y / (vh * 0.6), 1);

        if (textRef.current) {
          textRef.current.style.opacity = String(1 - progress);
        }
        if (imgRef.current) {
          imgRef.current.style.transform = `translateY(${y * -0.3}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="hero" className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ top: "-20%", bottom: "-20%" }}>
        <Image
          src="/images/hero.jpg"
          alt="Taimsed toidud kaunis kauses"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />

      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center will-change-[opacity]"
      >
        <span className="text-5xl font-semibold tracking-[0.2em] uppercase text-white sm:text-7xl lg:text-8xl">
          Veganlane
        </span>
        <p className="mt-4 text-sm tracking-[0.3em] uppercase text-white/60 sm:text-base">
          Tervem. Ilusam. Elavam.
        </p>
      </div>
    </div>
  );
}
