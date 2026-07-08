import { CoinRow } from "@/components/CoinRow";
import { EmptyState } from "@/components/EmptyState";
import type { MarketCoin } from "@/lib/coingecko";

const headers = [
  { label: "Asset", align: "left" as const, className: "" },
  { label: "Price", align: "right" as const, className: "" },
  { label: "24h", align: "right" as const, className: "" },
  {
    label: "Volume",
    align: "right" as const,
    className: "hidden sm:block",
  },
  {
    label: "Mkt Cap",
    align: "right" as const,
    className: "hidden sm:block",
  },
];

type CoinTableProps = {
  coins: MarketCoin[];
  query: string;
};

export function CoinTable({ coins, query }: CoinTableProps) {
  if (coins.length === 0) {
    return (
      <div className="panel overflow-hidden rounded-2xl">
        <EmptyState query={query} />
      </div>
    );
  }

  return (
    <div className="panel overflow-hidden rounded-2xl">
      <div className="market-grid border-b border-border-subtle bg-surface-elevated/40 px-4 py-2.5 sm:px-5">
        {headers.map((header) => (
          <p
            key={header.label}
            className={`text-[11px] font-medium uppercase tracking-[0.06em] text-muted ${
              header.align === "right" ? "text-right" : "text-left"
            } ${header.className}`}
          >
            {header.label}
          </p>
        ))}
      </div>
      <ul>
        {coins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index} />
        ))}
      </ul>
    </div>
  );
}
