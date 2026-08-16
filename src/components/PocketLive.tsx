import { useState } from "react";
import { pocketSignals, POCKET_PAIRS, POCKET_RULES } from "@/data/mockData";
import { SignalFilters } from "@/components/SignalFilters";
import { ResultBadge, StatusBadge, DirectionBadge } from "@/components/SignalBadges";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Target, TrendingUp, AlertTriangle } from "lucide-react";

export function PocketLive() {
  const [pairFilter, setPairFilter] = useState("all");
  const [strategyFilter, setStrategyFilter] = useState("all");
  const [resultFilter, setResultFilter] = useState("all");

  const filtered = pocketSignals.filter(
    (s) =>
      (pairFilter === "all" || s.pair === pairFilter) &&
      (strategyFilter === "all" || s.strategy === strategyFilter) &&
      (resultFilter === "all" || s.result === resultFilter),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-amber-400">
            Pocket LIVE
          </h2>
          <p className="text-sm text-zinc-500">
            15 paires OTC • Timeframe M1 • Mode démonstration, flux LIVE non connecté
          </p>
        </div>
        <Button
          disabled
          className="gap-2 rounded-lg border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 text-sm font-bold text-black opacity-50"
        >
          <Zap className="h-4 w-4" />
          Lancer l'analyse
        </Button>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-xs font-semibold text-amber-400">
        <AlertTriangle className="h-4 w-4" />
        DÉMONSTRATION, AUCUN SIGNAL RÉEL — L'analyse requiert un fournisseur de données de marché connecté.
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Target className="h-3.5 w-3.5" /> Paires OTC
            </div>
            <p className="mt-1 text-2xl font-bold text-zinc-100">15</p>
          </CardContent>
        </Card>
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <TrendingUp className="h-3.5 w-3.5" /> Win Rate
            </div>
            <p className="mt-1 text-sm font-medium text-zinc-500">Données insuffisantes</p>
          </CardContent>
        </Card>
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Clock className="h-3.5 w-3.5" /> Cooldown
            </div>
            <p className="mt-1 text-2xl font-bold text-amber-400">60s</p>
          </CardContent>
        </Card>
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Zap className="h-3.5 w-3.5" /> Score Max
            </div>
            <p className="mt-1 text-2xl font-bold text-zinc-100">95</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-zinc-800 bg-zinc-950/60">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold text-zinc-300">
            Règles Pocket LIVE
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {POCKET_RULES.map((rule) => (
              <div
                key={rule.label}
                className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2.5"
              >
                <span className="text-xs text-zinc-500">{rule.label}</span>
                <span className="font-mono text-sm font-bold text-amber-400">
                  {rule.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-950/60">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold text-zinc-300">
            Paires OTC autorisées ({POCKET_PAIRS.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {POCKET_PAIRS.map((pair) => (
              <span
                key={pair}
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                {pair}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-950/60">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold text-zinc-300">
            Signaux récents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignalFilters
            mode="pocket"
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
                  <th className="px-4 py-3 font-semibold">Score IA</th>
                  <th className="px-4 py-3 font-semibold">Payout</th>
                  <th className="px-4 py-3 font-semibold">Entrée</th>
                  <th className="px-4 py-3 font-semibold">Expiration</th>
                  <th className="px-4 py-3 font-semibold">Stratégie</th>
                  <th className="px-4 py-3 font-semibold">Statut</th>
                  <th className="px-4 py-3 font-semibold">Résultat</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-12 text-center text-sm text-zinc-500">
                      Aucun signal disponible. Connectez un fournisseur de données LIVE pour commencer l'analyse.
                    </td>
                  </tr>
                ) : (
                  filtered.map((s) => (
                    <tr
                      key={s.id}
                      className="border-b border-zinc-900 transition-colors hover:bg-zinc-900/40"
                    >
                      <td className="px-4 py-3 font-medium text-zinc-200">{s.pair}</td>
                      <td className="px-4 py-3"><DirectionBadge direction={s.direction} /></td>
                      <td className="px-4 py-3"><span className="font-mono font-bold text-amber-400">{s.score}</span></td>
                      <td className="px-4 py-3 text-zinc-300">{s.payout}%</td>
                      <td className="px-4 py-3 font-mono text-zinc-400">{s.entryTime}</td>
                      <td className="px-4 py-3 font-mono text-zinc-400">{s.expirationTime}</td>
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