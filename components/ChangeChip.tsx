import { changeTone, formatPercent } from "@/lib/format";

type ChangeChipProps = {
  value: number | null | undefined;
  className?: string;
};

const toneClasses = {
  up: "bg-up-soft text-up ring-1 ring-up/25",
  down: "bg-down-soft text-down ring-1 ring-down/25",
  neutral: "bg-surface-elevated text-muted-strong ring-1 ring-border",
} as const;

export function ChangeChip({ value, className = "" }: ChangeChipProps) {
  const tone = changeTone(value);

  return (
    <span
      className={`inline-flex min-w-[4.75rem] items-center justify-center rounded-md px-2 py-1 text-[12px] font-semibold tabular ${toneClasses[tone]} ${className}`}
    >
      {formatPercent(value)}
    </span>
  );
}
