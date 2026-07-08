import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-background/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft ring-1 ring-accent/25">
            <BrandMark className="h-4 w-6" />
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
            Crypto Tracker
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-up opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-up" />
          </span>
          <p className="text-xs font-medium text-muted-strong">Live</p>
        </div>
      </div>
    </header>
  );
}
