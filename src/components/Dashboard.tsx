import { pocketSignals } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Bell, CheckCircle2, XCircle, TrendingUp, Wifi, Send, Zap, AlertTriangle } from "lucide-react";

export function Dashboard() {
  const wins = pocketSignals.filter((s) => s.result === "WIN").length;
  const losses = pocketSignals.filter((s) => s.result === "LOSS").length;
  const draws = pocketSignals.filter((s) => s.result === "DRAW").length;
  const total = wins + losses + draws;

  const winRate = total > 0 ? ((wins / total) * 100).toFixed(1) : null;
  const lossRate = total > 0 ? ((losses / total) * 100).toFixed(1) : null;
  const drawRate = total > 0 ? ((draws / total) * 100).toFixed(1) : null;

  const stats = [
    { label: "Paires analysées", value: "15", icon: Activity, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Pré-alertes", value: total > 0 ? String(total) : "Données insuffisantes", icon: Bell, color: "text-sky-400", bg: "bg-sky-500/10" },
    { label: "Confirmations", value: total > 0 ? String(total) : "Données insuffisantes", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Annulations", value: total > 0 ? "0" : "Données insuffisantes", icon: XCircle, color: "text-red-400", bg: "bg-red-500/10" },
    { label: "Win Rate", value: winRate ? `${winRate}%` : "Données insuffisantes", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Loss Rate", value: lossRate ? `${lossRate}%` : "Données insuffisantes", icon: XCircle, color: "text-red-400", bg: "bg-red-500/10" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-amber-400">Tableau de bord</h2>
          <p className="text-sm text-zinc-500">Vue d'ensemble des performances et de l'activité</p>
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
        DÉMONSTRATION, AUCUN SIGNAL RÉEL — Aucune analyse en temps réel. L'application n'exécute pas de trades.
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-zinc-800 bg-zinc-950/60">
            <CardContent className="p-4">
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <p className="mt-3 text-xl font-bold text-zinc-100">{stat.value}</p>
              <p className="text-xs text-zinc-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {total > 0 && (
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-zinc-300">
              Répartition des résultats (Total: 100%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                <p className="text-xs text-zinc-500">WIN</p>
                <p className="text-2xl font-bold text-emerald-400">{winRate}%</p>
              </div>
              <div className="flex-1 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                <p className="text-xs text-zinc-500">LOSS</p>
                <p className="text-2xl font-bold text-red-400">{lossRate}%</p>
              </div>
              <div className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800/40 p-4">
                <p className="text-xs text-zinc-500">DRAW</p>
                <p className="text-2xl font-bold text-zinc-400">{drawRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-zinc-300">Meilleures paires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-zinc-500">Données insuffisantes — en attente de signaux complétés.</p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-zinc-300">Meilleures stratégies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-zinc-500">Données insuffisantes — en attente de signaux complétés.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700/30">
              <Wifi className="h-5 w-5 text-zinc-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-200">Données de marché</p>
              <p className="text-xs text-zinc-500">Mode démonstration, flux LIVE non connecté</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700/30">
              <Send className="h-5 w-5 text-zinc-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-200">Telegram</p>
              <p className="text-xs text-zinc-500">NON CONFIGURÉ</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}