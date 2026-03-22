import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-20 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
        Viga 404
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground">
        Lehekülge ei leitud
      </h1>
      <p className="mt-4 max-w-md text-base text-muted">
        Kahjuks ei leidnud me seda lehekülge. Kontrolli aadressi või mine
        tagasi avalehele.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-sm bg-primary px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-primary-dark"
      >
        Tagasi avalehele
      </Link>
    </div>
  );
}
