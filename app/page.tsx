import { MarketView } from "@/components/MarketView";
import { getMarkets } from "@/lib/coingecko";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const coins = await getMarkets(50);
  return <MarketView coins={coins} />;
}
