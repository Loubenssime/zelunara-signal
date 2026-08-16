import { useState } from "react";
import { forexSignals } from "@/data/mockData";
import { SignalFilters } from "@/components/SignalFilters";
import { ResultBadge, StatusBadge, DirectionBadge } from "@/components/SignalBadges";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export function ForexPro() {
  const [pairFilter, setPairFilter] = useState("all");
  const [strategyFilter, setStrategyFilter] = useState("all");
  const [resultFilter, setResultFilter] = useState("all");

  const filtered = forexSignals.filter(
    (s) =>
      (pairFilter === "all" || s.pair === pairFilter) &&
      (strategyFilter === "all" || s.strategy === strategyFilter) &&
      (resultFilter === "all" || s.result === resultFilter),
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-amber-400">Forex PRO</h2>
        <p className="text-sm text-zinc-500">
          Paires Forex régulières • No scalping • BUY / SELL • Risk-Reward
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-xs font-semibold text-amber-400">
        <AlertTriangle className="h-4 w-4" />
        DÉMONSTRATION, AUCUN SIGNAL RÉEL — L'analyse requiert un fournisseur de données de marché connecté.
      </div>

      <Card className="border-zinc-800 bg-zinc-950/60">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold text-zinc-300">
            Signaux Forex
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignalFilters
            mode="forex"
            pairFilter={pairFilter}
            strategyFilter={strategyFilter}
            resultFilter={resultFilter}
            onPairChange={setPairFilter}
            onStrategyChange={setStrategyFilter}
            onResultChange={setResultFilter}
          />
          <div className="overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50 text-left text-xs uppercase tracking-wider text-zinc-500">
                  <th className="px-4 py-3 font-semibold">Paire</th>
                  <th className="px-4 py-3 font-semibold">Direction</th>
                  <th className="px-4 py-3 font-semibold">Entrée</th>
                  <th className="px-4 py-3 font-semibold">Stop Loss</th>
                  <th className="px-4 py-3 font-semibold">Take Profit</th>
                  <th className="px-4 py-3 font-semibold">R/R</th>
                  <th className="px-4 py-3 font-semibold">TF</th>
                  <th className="px-4 py-3 font-semibold">Stratégie</th>
                  <th className="px-4 py-3 font-semibold">Statut</th>
                  <th className="px-4 py-3 font-semibold">Résultat</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="px-4 py-12 text-center text-sm text-zinc-500">
                      Aucun signal — Mode démonstration, en attente d'un fournisseur de données de marché.
                    </td>
                  </tr>
                ) : (
                  filtered.map((s) => (
                    <tr key={s.id} className="border-b border-zinc-900 transition-colors hover:bg-zinc-900/40">
                      <td className="px-4 py-3 font-medium text-zinc-200">{s.pair}</td>
                      <td className="px-4 py-3"><DirectionBadge direction={s.direction} /></td>
                      <td className="px-4 py-3 font-mono text-zinc-300">{s.entry}</td>
                      <td className="px-4 py-3 font-mono text-red-400">{s.stopLoss}</td>
                      <td className="px-4 py-3 font-mono text-emerald-400">{s.takeProfit}</td>
                      <td className="px-4 py-3 font-mono text-amber-400">{s.riskReward.toFixed(2)}</td>
                      <td className="px-4 py-3 text-zinc-300">{s.timeframe}</td>
                      <td className="px-4 py-3 text-zinc-300">{s.strategy}</td>
                      <td className="px-4 py-3"><StatusBadge status={s.status} /></td>
                      <td className="px-4 py-3"><ResultBadge result={s.result} /></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}