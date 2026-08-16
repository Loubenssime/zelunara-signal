import { useState } from "react";
import { pocketSignals, forexSignals } from "@/data/mockData";
import { SignalFilters } from "@/components/SignalFilters";
import { ResultBadge, StatusBadge, DirectionBadge } from "@/components/SignalBadges";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Direction } from "@/types";

export function SignalHistory() {
  const [tab, setTab] = useState("pocket");
  const [pairFilter, setPairFilter] = useState("all");
  const [strategyFilter, setStrategyFilter] = useState("all");
  const [resultFilter, setResultFilter] = useState("all");

  const signals =
    tab === "pocket"
      ? pocketSignals.map((s) => ({ ...s, direction: s.direction as Direction }))
      : forexSignals.map((s) => ({ ...s, direction: s.direction as Direction }));

  const filtered = signals.filter(
    (s) =>
      (pairFilter === "all" || s.pair === pairFilter) &&
      (strategyFilter === "all" || s.strategy === strategyFilter) &&
      (resultFilter === "all" || s.result === resultFilter),
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-amber-400">Historique des signaux</h2>
        <p className="text-sm text-zinc-500">Consultez l'ensemble des signaux passés</p>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="rounded-lg border border-zinc-800 bg-zinc-900">
          <TabsTrigger value="pocket" className="rounded-md data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400">
            Pocket LIVE
          </TabsTrigger>
          <TabsTrigger value="forex" className="rounded-md data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400">
            Forex PRO
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="border-zinc-800 bg-zinc-950/60">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold text-zinc-300">
            {tab === "pocket" ? "Signaux Pocket" : "Signaux Forex"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignalFilters
            mode={tab === "pocket" ? "pocket" : "forex"}
            pairFilter={pairFilter}
            strategyFilter={strategyFilter}
            resultFilter={resultFilter}
            onPairChange={setPairFilter}
            onStrategyChange={setStrategyFilter}
            onResultChange={setResultFilter}
          />
          <div className="overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50 text-left text-xs uppercase tracking-wider text-zinc-500">
                  <th className="px-4 py-3 font-semibold">Paire</th>
                  <th className="px-4 py-3 font-semibold">Direction</th>
                  <th className="px-4 py-3 font-semibold">Stratégie</th>
                  <th className="px-4 py-3 font-semibold">Statut</th>
                  <th className="px-4 py-3 font-semibold">Résultat</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-12 text-center text-sm text-zinc-500">
                      Aucun signal — Mode démonstration, en attente d'un fournisseur de données de marché.
                    </td>
                  </tr>
                ) : (
                  filtered.map((s) => (
                    <tr key={s.id} className="border-b border-zinc-900 transition-colors hover:bg-zinc-900/40">
                      <td className="px-4 py-3 font-medium text-zinc-200">{s.pair}</td>
                      <td className="px-4 py-3"><DirectionBadge direction={s.direction} /></td>
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