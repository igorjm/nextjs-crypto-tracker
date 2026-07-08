import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border bg-surface px-6 py-12 text-center">
      <h1 className="text-lg font-semibold text-foreground">Coin not found</h1>
      <p className="mt-2 text-sm text-muted">
        That asset isn’t available. Head back to markets and pick another one.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-xl bg-accent-soft px-4 py-2 text-sm font-medium text-accent transition-opacity hover:opacity-90"
      >
        Back to markets
      </Link>
    </div>
  );
}
