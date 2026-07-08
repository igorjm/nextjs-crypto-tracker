import Image from "next/image";
import Link from "next/link";
import { ChangeChip } from "@/components/ChangeChip";
import type { MarketCoin } from "@/lib/coingecko";
import { formatCompactCurrency, formatPrice } from "@/lib/format";

type CoinRowProps = {
  coin: MarketCoin;
  index: number;
};

export function CoinRow({ coin, index }: CoinRowProps) {
  return (
    <li
      className="animate-fade-in-up border-b border-border-subtle last:border-b-0"
      style={{ animationDelay: `${Math.min(index, 10) * 20}ms` }}
    >
      <Link
        href={`/coin/${coin.id}`}
        className="market-grid px-4 py-3 transition-colors duration-150 hover:bg-white/[0.035] focus-visible:bg-white/[0.05] focus-visible:outline-none sm:px-5 sm:py-3.5"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden w-5 shrink-0 text-right text-[11px] tabular text-muted sm:inline">
            {coin.market_cap_rank ?? index + 1}
          </span>
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-surface-elevated ring-1 ring-white/10">
            <Image
              src={coin.image}
              alt=""
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium tracking-[-0.01em] text-foreground">
              {coin.name}
            </p>
            <p className="text-[12px] uppercase tracking-[0.04em] text-muted">
              {coin.symbol}
            </p>
          </div>
        </div>

        <p className="text-right text-[14px] font-medium tabular tracking-[-0.01em] text-foreground">
          {formatPrice(coin.current_price)}
        </p>

        <div className="flex justify-end">
          <ChangeChip value={coin.price_change_percentage_24h} />
        </div>

        <p className="hidden text-right text-[14px] tabular text-muted-strong sm:block">
          {formatCompactCurrency(coin.total_volume)}
        </p>

        <p className="hidden text-right text-[14px] tabular text-muted-strong sm:block">
          {formatCompactCurrency(coin.market_cap)}
        </p>
      </Link>
    </li>
  );
}
