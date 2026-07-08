export function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center animate-fade-in">
      <p className="text-base font-medium text-foreground">No coins match</p>
      <p className="mt-2 max-w-sm text-sm text-muted">
        Nothing found for{" "}
        <span className="text-muted-strong">&ldquo;{query}&rdquo;</span>. Try a
        different name or ticker.
      </p>
    </div>
  );
}

export function ErrorState({ message }: { message?: string }) {
  return (
    <div className="panel rounded-2xl px-6 py-12 text-center animate-fade-in">
      <p className="text-base font-medium text-foreground">
        Couldn’t load market data
      </p>
      <p className="mt-2 text-sm text-muted">
        {message ?? "Please refresh the page and try again in a moment."}
      </p>
    </div>
  );
}

export function CoinTableSkeleton({ rows = 8 }: { rows?: number }) {
  return (
    <div className="panel overflow-hidden rounded-2xl">
      <div className="market-grid border-b border-border-subtle px-4 py-2.5 sm:px-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-3 rounded bg-surface-hover ${
              i === 0 ? "w-12" : "ml-auto w-12"
            } ${i > 2 ? "hidden sm:block" : ""}`}
          />
        ))}
      </div>
      <ul>
        {Array.from({ length: rows }).map((_, i) => (
          <li
            key={i}
            className="market-grid border-b border-border-subtle px-4 py-3 last:border-b-0 sm:px-5 sm:py-3.5"
          >
            <div className="flex items-center gap-3">
              <div className="hidden h-3 w-5 animate-pulse rounded bg-surface-hover sm:block" />
              <div className="h-8 w-8 animate-pulse rounded-full bg-surface-hover" />
              <div className="space-y-2">
                <div className="h-3.5 w-24 animate-pulse rounded bg-surface-hover" />
                <div className="h-3 w-10 animate-pulse rounded bg-surface-hover" />
              </div>
            </div>
            <div className="ml-auto h-3.5 w-16 animate-pulse rounded bg-surface-hover" />
            <div className="ml-auto h-6 w-16 animate-pulse rounded-md bg-surface-hover" />
            <div className="ml-auto hidden h-3.5 w-14 animate-pulse rounded bg-surface-hover sm:block" />
            <div className="ml-auto hidden h-3.5 w-16 animate-pulse rounded bg-surface-hover sm:block" />
          </li>
        ))}
      </ul>
    </div>
  );
}
