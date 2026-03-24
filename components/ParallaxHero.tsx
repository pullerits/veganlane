"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(0,${y * -0.15}px,0)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0,${y * -0.3}px,0)`;
        contentRef.current.style.opacity = String(
          Math.max(0, 1 - y / (vh * 0.6))
        );
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 h-[50vh] w-full overflow-hidden">
        <div
          ref={imgRef}
          className="absolute inset-0 will-change-transform"
          style={{ top: "-10%", bottom: "-10%" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div
          ref={contentRef}
          className="absolute inset-0 text-center text-white will-change-transform"
        >
          <div className="flex h-full flex-col items-center justify-center px-6">
            {children}
          </div>

          {bottomContent && (
            <div className="absolute inset-x-0 bottom-8 flex justify-center px-6">
              {bottomContent}
            </div>
          )}
        </div>
      </div>

      <div className="h-[50vh]" />
    </>
  );
}
