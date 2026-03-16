"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Avaleht" },
  { href: "/kategooria/hommikuks", label: "Hommikuks" },
  { href: "/kategooria/lounaks-ja-ohtuks", label: "Lõunaks ja õhtuks" },
  { href: "/kategooria/magustoidud", label: "Magustoidud" },
  { href: "/kategooria/lisandid", label: "Lisandid" },
  { href: "/meist", label: "Meist" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-primary-light bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-primary">
            Veganlane
          </span>
          <span className="text-xs tracking-wide text-muted">
            Tervem. Ilusam. Elavam.
          </span>
        </Link>

        <nav className="hidden gap-6 md:flex" aria-label="Peamine navigatsioon">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Sulge menüü" : "Ava menüü"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-primary-light px-4 pb-4 md:hidden" aria-label="Mobiilne navigatsioon">
          <ul className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary-light hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
