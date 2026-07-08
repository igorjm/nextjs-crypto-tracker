import { CoinDetail } from "@/components/CoinDetail";
import { getCoin } from "@/lib/coingecko";
import { notFound } from "next/navigation";

type CoinPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: CoinPageProps) {
  const { id } = await params;
  try {
    const coin = await getCoin(id);
    return {
      title: coin.name,
      description: `Live price and market data for ${coin.name}.`,
    };
  } catch {
    return { title: "Coin" };
  }
}

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params;
  const coin = await getCoin(id);

  if (!coin?.market_data) {
    notFound();
  }

  return <CoinDetail coin={coin} />;
}
