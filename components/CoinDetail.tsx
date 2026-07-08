import Image from "next/image";
import Link from "next/link";
import { ChangeChip } from "@/components/ChangeChip";
import type { CoinDetail as CoinDetailType } from "@/lib/coingecko";
import {
  formatCompactCurrency,
  formatCompactNumber,
  formatPrice,
} from "@/lib/format";

type CoinDetailProps = {
  coin: CoinDetailType;
};

export function CoinDetail({ coin }: CoinDetailProps) {
  const { market_data: market } = coin;

  const stats = [
    {
      label: "Market Cap",
      value: formatCompactCurrency(market.market_cap.usd),
    },
    {
      label: "24h Volume",
      value: formatCompactCurrency(market.total_volume.usd),
    },
    {
      label: "Circulating Supply",
      value: formatCompactNumber(market.circulating_supply),
    },
    {
      label: "All-Time High",
      value: formatPrice(market.ath.usd),
    },
    {
      label: "All-Time Low",
      value: formatPrice(market.atl.usd),
    },
    {
      label: "24h High / Low",
      value: `${formatPrice(market.high_24h.usd)} · ${formatPrice(market.low_24h.usd)}`,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-fade-in-up">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Markets
      </Link>

      <section className="panel rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-surface-elevated ring-1 ring-white/10 sm:h-16 sm:w-16">
              <Image
                src={coin.image.large}
                alt=""
                width={64}
                height={64}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[32px]">
                {coin.name}
              </h1>
              <p className="mt-1 text-sm uppercase tracking-[0.08em] text-muted">
                {coin.symbol}
              </p>
            </div>
          </div>

          <div className="sm:text-right">
            <p className="text-3xl font-semibold tracking-[-0.03em] tabular text-foreground sm:text-4xl">
              {formatPrice(market.current_price.usd)}
            </p>
            <div className="mt-3 flex sm:justify-end">
              <ChangeChip
                value={market.price_change_percentage_24h}
                className="min-w-[5.25rem] px-3 py-1.5 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
          Key stats
        </h2>
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="panel rounded-xl px-5 py-4 transition-colors hover:bg-surface-elevated/50"
            >
              <dt className="text-xs text-muted">{stat.label}</dt>
              <dd className="mt-1.5 text-base font-medium tabular tracking-[-0.01em] text-foreground">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
