export default function CoinLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="h-4 w-20 animate-pulse rounded bg-surface-hover" />
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 animate-pulse rounded-2xl bg-surface-hover" />
            <div className="space-y-2">
              <div className="h-7 w-40 animate-pulse rounded bg-surface-hover" />
              <div className="h-4 w-14 animate-pulse rounded bg-surface-hover" />
            </div>
          </div>
          <div className="space-y-3 sm:text-right">
            <div className="ml-auto h-10 w-36 animate-pulse rounded bg-surface-hover" />
            <div className="ml-auto h-7 w-20 animate-pulse rounded-full bg-surface-hover" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-20 animate-pulse rounded-2xl border border-border bg-surface"
          />
        ))}
      </div>
    </div>
  );
}
