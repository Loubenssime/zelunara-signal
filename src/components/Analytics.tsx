import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-amber-400">Analytics</h2>
        <p className="text-sm text-zinc-500">Analyse détaillée des performances</p>
      </div>

      <Card className="border-zinc-800 bg-zinc-950/60">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-semibold text-zinc-300">Performance globale</CardTitle>
        </CardHeader>
        <CardContent className="p-12 text-center">
          <p className="text-sm text-zinc-500">
            Données insuffisantes — Les graphiques de performance seront disponibles une fois des signaux complétés.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}