const COINGECKO_BASE = "https://api.coingecko.com/api/v3";

export type MarketCoin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number | null;
  market_cap_rank: number | null;
};

export type CoinDetail = {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    total_volume: { usd: number };
    circulating_supply: number | null;
    total_supply: number | null;
    ath: { usd: number };
    atl: { usd: number };
    price_change_percentage_24h: number | null;
    high_24h: { usd: number };
    low_24h: { usd: number };
  };
};

async function coingeckoFetch<T>(
  path: string,
  options: { revalidate?: number } = {},
): Promise<T> {
  const res = await fetch(`${COINGECKO_BASE}${path}`, {
    headers: {
      Accept: "application/json",
    },
    ...(options.revalidate != null
      ? { next: { revalidate: options.revalidate } }
      : { cache: "no-store" as const }),
  });

  if (!res.ok) {
    throw new Error(`CoinGecko request failed (${res.status})`);
  }

  return res.json() as Promise<T>;
}

export async function getMarkets(perPage = 50): Promise<MarketCoin[]> {
  const params = new URLSearchParams({
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: String(perPage),
    page: "1",
    sparkline: "false",
  });

  return coingeckoFetch<MarketCoin[]>(`/coins/markets?${params}`);
}

export async function getCoin(id: string): Promise<CoinDetail> {
  const params = new URLSearchParams({
    localization: "false",
    tickers: "false",
    market_data: "true",
    community_data: "false",
    developer_data: "false",
    sparkline: "false",
  });

  return coingeckoFetch<CoinDetail>(
    `/coins/${encodeURIComponent(id)}?${params}`,
    { revalidate: 60 },
  );
}
