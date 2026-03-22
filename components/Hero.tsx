"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;

      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(0,${y * -0.3}px,0)`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0,${y * -0.4}px,0)`;
        textRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.7)));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
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
      {/* Overall tint */}
      <div className="absolute inset-0 bg-black/25" />
      {/* Top edge gradient for navbar readability */}
      <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black/70 to-transparent" />
      {/* Bottom edge gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />

      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center will-change-transform"
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
