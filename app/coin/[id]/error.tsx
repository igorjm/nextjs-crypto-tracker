"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function CoinError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border bg-surface px-6 py-12 text-center animate-fade-in">
      <p className="text-base font-medium text-foreground">
        Couldn’t load this coin
      </p>
      <p className="mt-2 text-sm text-muted">
        Please try again in a moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-flex rounded-xl bg-accent-soft px-4 py-2 text-sm font-medium text-accent transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
