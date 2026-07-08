import { CoinTableSkeleton } from "@/components/EmptyState";

export default function Loading() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <div className="h-8 w-36 animate-pulse rounded-lg bg-surface-hover" />
          <div className="h-4 w-40 animate-pulse rounded bg-surface-hover" />
        </div>
        <div className="h-10 w-full max-w-[280px] animate-pulse rounded-[10px] bg-surface-hover" />
      </div>
      <CoinTableSkeleton />
    </div>
  );
}
