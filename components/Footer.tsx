import Link from "next/link";

const categoryLinks = [
  { href: "/kategooria/hommikuks", label: "Hommikuks" },
  { href: "/kategooria/lounaks-ja-ohtuks", label: "Lõunaks ja õhtuks" },
  { href: "/kategooria/magustoidud", label: "Magustoidud" },
  { href: "/kategooria/lisandid", label: "Lisandid" },
];

const externalLinks = [
  { href: "https://siretallas.ee/", label: "Siretallas.ee" },
  {
    href: "https://toitumisjateraapiakeskus.ee/",
    label: "Viimsi Toitumis- ja Teraapiakeskus",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-20">
          {/* Brand + socials */}
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-[0.15em] uppercase text-white"
            >
              Veganlane
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Taimsed retseptid igaks päevaks. Tervem. Ilusam. Elavam.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="http://facebook.com/veganlane.ee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.092.043 1.541.103v3.3h-1.257c-1.469 0-1.956.7-1.956 2.076v2.079h3.089l-.53 3.667h-2.559v8.168A11.999 11.999 0 0012 24c-.39 0-.776-.019-1.158-.055a12.077 12.077 0 01-1.741-.254z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/veganlane.ee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Retseptid
            </h4>
            <ul className="mt-5 space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Vaata lisaks
            </h4>
            <ul className="mt-5 space-y-3">
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Info
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/meist"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Meist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} Veganlane
          </p>
          <p className="text-xs text-white/35">
            Kõik õigused kaitstud
          </p>
        </div>
      </div>
    </footer>
  );
}
