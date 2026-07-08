"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { CoinTable } from "@/components/CoinTable";
import { SearchBar } from "@/components/SearchBar";
import type { MarketCoin } from "@/lib/coingecko";

type MarketViewProps = {
  coins: MarketCoin[];
};

export function MarketView({ coins }: MarketViewProps) {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);

  const filteredCoins = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();
    if (!query) return coins;

    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query) ||
        coin.symbol.toLowerCase().includes(query),
    );
  }, [coins, deferredSearch]);

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-[28px] font-semibold tracking-[-0.03em] text-foreground sm:text-[32px]">
            Markets
          </h1>
          <p className="mt-1 text-sm text-muted">
            Top {coins.length} by market cap
          </p>
        </div>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <CoinTable coins={filteredCoins} query={deferredSearch.trim()} />
    </div>
  );
}
