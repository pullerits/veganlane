"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/kategooria/hommikuks", label: "Hommikuks" },
  { href: "/kategooria/lounaks-ja-ohtuks", label: "Lõunaks ja õhtuks" },
  { href: "/kategooria/magustoidud", label: "Magustoidud" },
  { href: "/kategooria/lisandid", label: "Lisandid" },
  { href: "/meist", label: "Meist" },
];

export default function Header() {
  const pathname = usePathname();
  const hasHero = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroLogoVisible, setHeroLogoVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const next = window.scrollY > 10;
        return prev === next ? prev : next;
      });
      if (hasHero) {
        setHeroLogoVisible((prev) => {
          const next = window.scrollY > window.innerHeight * 0.4;
          return prev === next ? prev : next;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onHero = hasHero && !scrolled;
  const logoVisible = !hasHero || heroLogoVisible;

  return (
    <>
      {/* Mobile overlay menu — rendered outside header to avoid backdrop-blur stacking context issues */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-8"
          aria-label="Mobiilne navigatsioon"
        >
          <Image
            src="/images/veganlane-logo-black-transparent.webp"
            alt="Veganlane"
            width={160}
            height={48}
            className="mb-4 h-7 w-auto"
          />
          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            onClick={() => setTimeout(() => setMenuOpen(false), 500)}
          >
            Avaleht
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
              onClick={() => setTimeout(() => setMenuOpen(false), 500)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          menuOpen
            ? "bg-transparent"
            : !onHero
              ? "bg-white/90 backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 lg:py-2.5 lg:px-10">
          {/* Left nav links (desktop) */}
          <nav
            className="hidden flex-1 items-center gap-8 lg:flex"
            aria-label="Peamine navigatsioon"
          >
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  onHero
                    ? "text-white after:bg-white"
                    : "text-foreground after:bg-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link
            href="/"
            className={`text-center transition-all duration-500 ${
              logoVisible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            {/* Logo image — comment out below and uncomment the span to revert to text */}
            <Image
              src="/images/veganlane-logo-black-transparent.webp"
              alt="Veganlane"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
            {/* <span
              className={`text-xl font-semibold tracking-[0.15em] uppercase transition-colors duration-500 ${
                menuOpen
                  ? "text-foreground"
                  : onHero
                    ? "text-white"
                    : "text-foreground"
              }`}
            >
              Veganlane
            </span> */}
          </Link>

          {/* Right nav links (desktop) */}
          <nav
            className="hidden flex-1 items-center justify-end gap-8 lg:flex"
            aria-label="Peamine navigatsioon"
          >
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  onHero
                    ? "text-white after:bg-white"
                    : "text-foreground after:bg-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Sulge menüü" : "Ava menüü"}
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                  menuOpen || !onHero ? "bg-foreground" : "bg-white"
                } ${
                  menuOpen && i === 0
                    ? "translate-y-[7px] rotate-45"
                    : menuOpen && i === 1
                      ? "opacity-0"
                      : menuOpen && i === 2
                        ? "-translate-y-[7px] -rotate-45"
                        : ""
                }`}
              />
            ))}
          </button>
        </div>
      </header>
    </>
  );
}
