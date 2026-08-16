import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Lock, ShieldAlert } from "lucide-react";

const RULES = [
  { label: "Score de pré-alerte", value: "80" },
  { label: "Score de confirmation", value: "85" },
  { label: "Payout minimum", value: "80%" },
  { label: "Score maximum", value: "95" },
  { label: "Cooldown", value: "60s" },
  { label: "Signaux actifs maximum", value: "1" },
];

const PREFERENCES = [
  {
    title: "Notifications sonores",
    description: "Émettre une alerte sonore lors d'une pré-alerte ou confirmation.",
  },
  {
    title: "Pré-alertes visuelles",
    description: "Afficher une notification visuelle pour chaque pré-alerte.",
  },
  {
    title: "Annulation automatique",
    description: "Annuler automatiquement les signaux non confirmés à temps.",
  },
  {
    title: "Synchronisation Telegram",
    description: "Envoyer les signaux vers le canal Telegram configuré.",
  },
  {
    title: "Rapports par email",
    description: "Recevoir un résumé quotidien des performances par email.",
  },
];

export function Settings() {
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <div className="min-w-0">
        <h2 className="font-serif text-2xl font-bold text-amber-400">Paramètres</h2>
        <p className="text-sm text-zinc-500">Configuration des règles et préférences</p>
      </div>

      <div className="flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-xs font-semibold text-amber-400">
        <ShieldAlert className="h-4 w-4 flex-shrink-0" />
        <span>Mode démonstration. Ces paramètres sont informatifs et ne peuvent pas être modifiés sans backend sécurisé.</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold text-zinc-300">Règles Pocket LIVE</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2.5">
            {RULES.map((rule) => (
              <div
                key={rule.label}
                className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2.5"
              >
                <span className="text-sm text-zinc-400">{rule.label}</span>
                <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-sm font-bold text-amber-400">
                  {rule.value}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold text-zinc-300">Préférences</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {PREFERENCES.map((pref) => (
              <div
                key={pref.title}
                className="relative flex flex-col gap-1 rounded-lg border border-zinc-800 bg-zinc-900/40 p-3 pr-12 opacity-60"
              >
                <div className="absolute right-3 top-3">
                  <Switch disabled />
                </div>
                <span className="text-sm font-semibold text-zinc-200">{pref.title}</span>
                <span className="text-xs text-zinc-500">{pref.description}</span>
                <span className="mt-1 text-xs font-semibold text-zinc-600">Non configurable en démonstration</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Button
        disabled
        className="w-full gap-2 rounded-lg border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 text-sm font-bold text-black opacity-50"
      >
        <Lock className="h-4 w-4" />
        Enregistrer les paramètres
      </Button>
    </div>
  );
}