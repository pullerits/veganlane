import Link from "next/link";

const infoLinks = [
  { href: "/meist", label: "Meist" },
];

const categoryLinks = [
  { href: "/kategooria/hommikuks", label: "Hommikuks" },
  { href: "/kategooria/lounaks-ja-ohtuks", label: "Lõunaks ja õhtuks" },
  { href: "/kategooria/magustoidud", label: "Magustoidud" },
  { href: "/kategooria/lisandid", label: "Lisandid" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <span className="text-xl font-semibold tracking-[0.15em] uppercase text-foreground">
              Veganlane
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Taimsed retseptid igaks päevaks.
              <br />
              Tervem. Ilusam. Elavam.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Info
            </h4>
            <ul className="mt-4 space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Retseptid
            </h4>
            <ul className="mt-4 space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-foreground/5 pt-8">
          <p className="text-xs text-muted">
            Veganlane &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
