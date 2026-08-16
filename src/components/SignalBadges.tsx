import { cn } from "@/lib/utils";
import type { SignalResult, SignalStatus, Direction } from "@/types";

export function ResultBadge({ result }: { result: SignalResult }) {
  const styles: Record<SignalResult, string> = {
    WIN: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    LOSS: "bg-red-500/15 text-red-400 border-red-500/30",
    DRAW: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
    PENDING: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold",
        styles[result],
      )}
    >
      {result}
    </span>
  );
}

export function StatusBadge({ status }: { status: SignalStatus }) {
  const styles: Record<SignalStatus, string> = {
    PRE_ALERT: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    CONFIRMED: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    CANCELLED: "bg-red-500/15 text-red-400 border-red-500/30",
    ACTIVE: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    CLOSED: "bg-zinc-700/40 text-zinc-400 border-zinc-600/40",
  };
  const labels: Record<SignalStatus, string> = {
    PRE_ALERT: "PRÉ-ALERTE",
    CONFIRMED: "CONFIRMÉ",
    CANCELLED: "ANNULÉ",
    ACTIVE: "ACTIF",
    CLOSED: "FERMÉ",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold",
        styles[status],
      )}
    >
      {labels[status]}
    </span>
  );
}

export function DirectionBadge({ direction }: { direction: Direction }) {
  const isUp = direction === "CALL" || direction === "BUY";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-bold",
        isUp
          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
          : "bg-red-500/15 text-red-400 border-red-500/30",
      )}
    >
      {isUp ? "▲" : "▼"} {direction}
    </span>
  );
}