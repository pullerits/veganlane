export default function Footer() {
  return (
    <footer className="border-t border-primary-light bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Veganlane. Kõik õigused kaitstud.</p>
      </div>
    </footer>
  );
}
