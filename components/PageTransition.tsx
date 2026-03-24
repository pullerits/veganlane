"use client";

import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

const FADE_IN_DURATION = 0.4;
const HOLD_DURATION = 800;

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const pendingHref = useRef<string | null>(null);
  const isTransitioning = useRef(false);

  // Sync children when not transitioning
  useEffect(() => {
    if (!isTransitioning.current) {
      setDisplayChildren(children);
    }
  }, [children]);

  // When pathname changes during a transition, the new page has loaded
  // Swap children under the overlay, hold, then fade out
  useEffect(() => {
    if (isTransitioning.current && pendingHref.current) {
      setDisplayChildren(children);
      const timer = setTimeout(() => {
        setShowOverlay(false);
        isTransitioning.current = false;
        pendingHref.current = null;
      }, HOLD_DURATION);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Intercept internal link clicks: prevent navigation, show overlay, navigate after fade-in
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (isTransitioning.current) return;

      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("#") ||
        href === pathname
      )
        return;

      e.preventDefault();

      isTransitioning.current = true;
      pendingHref.current = href;
      setShowOverlay(true);

      // Navigate after the overlay has faded in
      setTimeout(() => {
        router.push(href);
      }, FADE_IN_DURATION * 1000);
    },
    [pathname, router]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleClick]);

  return (
    <>
      {displayChildren}

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="page-transition"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_IN_DURATION, ease: "easeInOut" }}
          >
            <motion.span
              className="text-xl font-semibold uppercase tracking-[0.15em] text-foreground"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            >
              Veganlane
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
