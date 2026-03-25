"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxHero({
  src,
  alt,
  children,
  bottomContent,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
  bottomContent?: React.ReactNode;
}) {
  const [viewportHeight, setViewportHeight] = useState(0);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, (value) => Math.max(value, 0) * -0.15);
  const contentY = useTransform(scrollY, (value) => Math.max(value, 0) * -0.3);
  const contentOpacity = useTransform(scrollY, (value) => {
    const clampedValue = Math.max(value, 0);

    return viewportHeight > 0
      ? Math.max(0, 1 - clampedValue / (viewportHeight * 0.6))
      : 1;
  });

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 h-[50vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ top: "-10%", bottom: "-10%", y: imageY }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className="absolute inset-0 text-center text-white will-change-transform"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="flex h-full flex-col items-center justify-center px-6">
            {children}
          </div>

          {bottomContent && (
            <div className="absolute inset-x-0 bottom-8 flex justify-center px-6">
              {bottomContent}
            </div>
          )}
        </motion.div>
      </div>

      <div className="h-[50vh]" />
    </>
  );
}
