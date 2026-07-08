# Crypto Tracker

A modern cryptocurrency markets tracker built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. Browse the top coins by market cap, search by name or symbol, and open a detail view with key stats — all powered by the [CoinGecko](https://www.coingecko.com/) API.

**Live demo:** [nextjs-crypto-tracker-rho.vercel.app](https://nextjs-crypto-tracker-rho.vercel.app/)

## Features

- Top 50 markets with price, 24h change, volume, and market cap
- Instant client-side search by name or ticker
- Coin detail page with ATH/ATL, circulating supply, and 24h range
- Loading skeletons, empty search state, and error recovery
- Dark, dense UI with accessibility-minded structure

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- CoinGecko public API

## Getting started

### Prerequisites

- Node.js 18.18+ (Node 20+ recommended)

### Install

```bash
git clone https://github.com/igorjm/nextjs-crypto-tracker.git
cd nextjs-crypto-tracker
npm install
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Project structure

```text
app/                 # App Router layouts, pages, loading/error states
components/          # Markets table, search, header, detail UI
lib/                 # CoinGecko client + number formatters
public/              # Static assets
```

## API notes

Market and coin data are fetched server-side from CoinGecko. The home page is rendered dynamically so rate limits during build do not bake in an empty state. No API key is required for the public endpoints used here; heavy usage may hit CoinGecko rate limits.

## License

MIT — see [LICENSE](LICENSE).

## Author

**Igor Melo** — [igorjm](https://github.com/igorjm)
