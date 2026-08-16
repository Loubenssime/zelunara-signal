import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ShieldAlert, Lock } from "lucide-react";

const PLANS = [
  {
    name: "PRO",
    price: "$39.99",
    period: "USD / mois",
    features: [
      "Accès Pocket LIVE",
      "15 paires OTC autorisées",
      "Signaux M1",
      "Pré-alertes et confirmations",
      "Historique des signaux",
      "Notifications Telegram après configuration sécurisée",
    ],
  },
  {
    name: "ELITE",
    price: "$59.99",
    period: "USD / mois",
    features: [
      "Tout ce qui est inclus dans PRO",
      "Accès Forex PRO",
      "Analytics avancés",
      "Rapports de performance",
      "Accès prioritaire aux futures fonctionnalités",
    ],
  },
];

export function Subscriptions() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-amber-400">Abonnements</h2>
        <p className="text-sm text-zinc-500">Choisissez le plan qui vous correspond</p>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-xs font-semibold text-red-400">
        <ShieldAlert className="h-4 w-4" />
        Paiements non configurés. Backend sécurisé et Stripe requis.
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {PLANS.map((plan) => (
          <Card
            key={plan.name}
            className="relative border border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-zinc-950/60"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-zinc-100">{plan.name}</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-3xl font-bold text-amber-400">{plan.price}</span>
                <span className="text-sm text-zinc-500">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {plan.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                  <Check className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  {f}
                </div>
              ))}
              <Button
                disabled
                className="mt-4 w-full gap-2 rounded-lg border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 text-sm font-bold text-black opacity-50"
              >
                <Lock className="h-4 w-4" />
                Souscrire à {plan.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}