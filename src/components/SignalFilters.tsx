import { POCKET_PAIRS, FOREX_PAIRS, STRATEGIES } from "@/data/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterProps {
  mode: "pocket" | "forex";
  pairFilter: string;
  strategyFilter: string;
  resultFilter: string;
  onPairChange: (v: string) => void;
  onStrategyChange: (v: string) => void;
  onResultChange: (v: string) => void;
}

export function SignalFilters({
  mode,
  pairFilter,
  strategyFilter,
  resultFilter,
  onPairChange,
  onStrategyChange,
  onResultChange,
}: FilterProps) {
  const pairs = mode === "pocket" ? POCKET_PAIRS : FOREX_PAIRS;
  return (
    <div className="flex flex-wrap gap-3">
      <Select value={pairFilter} onValueChange={onPairChange}>
        <SelectTrigger className="w-[180px] rounded-lg border-zinc-800 bg-zinc-900 text-sm text-zinc-200">
          <SelectValue placeholder="Toutes les paires" />
        </SelectTrigger>
        <SelectContent className="border-zinc-800 bg-zinc-900 text-zinc-200">
          <SelectItem value="all">Toutes les paires</SelectItem>
          {pairs.map((p) => (
            <SelectItem key={p} value={p}>
              {p}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={strategyFilter} onValueChange={onStrategyChange}>
        <SelectTrigger className="w-[220px] rounded-lg border-zinc-800 bg-zinc-900 text-sm text-zinc-200">
          <SelectValue placeholder="Toutes les stratégies" />
        </SelectTrigger>
        <SelectContent className="border-zinc-800 bg-zinc-900 text-zinc-200">
          <SelectItem value="all">Toutes les stratégies</SelectItem>
          {STRATEGIES.map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={resultFilter} onValueChange={onResultChange}>
        <SelectTrigger className="w-[150px] rounded-lg border-zinc-800 bg-zinc-900 text-sm text-zinc-200">
          <SelectValue placeholder="Tous les résultats" />
        </SelectTrigger>
        <SelectContent className="border-zinc-800 bg-zinc-900 text-zinc-200">
          <SelectItem value="all">Tous les résultats</SelectItem>
          <SelectItem value="WIN">WIN</SelectItem>
          <SelectItem value="LOSS">LOSS</SelectItem>
          <SelectItem value="DRAW">DRAW</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}