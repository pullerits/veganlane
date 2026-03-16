import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-xl text-foreground">Lehekülge ei leitud</p>
      <p className="mt-2 text-muted">
        Kahjuks ei leidnud me seda lehekülge. Kontrolli aadressi või mine
        tagasi avalehele.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Tagasi avalehele
      </Link>
    </div>
  );
}
