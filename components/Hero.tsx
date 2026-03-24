"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [viewportHeight, setViewportHeight] = useState(0);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, (value) => value * -0.3);
  const textY = useTransform(scrollY, (value) => value * -0.4);
  const textOpacity = useTransform(scrollY, (value) =>
    viewportHeight > 0 ? Math.max(0, 1 - value / (viewportHeight * 0.7)) : 1
  );

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  return (
    <div id="hero" className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ top: "-20%", bottom: "-20%", y: imageY }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Taimsed toidud kaunis kauses"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>
      {/* Overall tint */}
      <div className="absolute inset-0 bg-black/25" />
      {/* Top edge gradient for navbar readability */}
      <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black/70 to-transparent" />
      {/* Bottom edge gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center will-change-transform"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Logo image — comment out below and uncomment the span to revert to text */}
        <Image
          src="/images/veganlane-logo-white-transparent.png"
          alt="Veganlane"
          width={520}
          height={160}
          className="w-64 sm:w-96 lg:w-[520px]"
          priority
        />
        {/* <span className="text-5xl font-semibold tracking-[0.2em] uppercase text-white sm:text-7xl lg:text-8xl">
          Veganlane
        </span> */}
        <p className="mt-4 text-sm tracking-[0.3em] uppercase text-white/60 sm:text-base">
          Tervem. Ilusam. Elavam.
        </p>
      </motion.div>
    </div>
  );
}
