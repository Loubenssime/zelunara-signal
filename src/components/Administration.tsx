import { Card, CardContent } from "@/components/ui/card";
import { Lock, ShieldX } from "lucide-react";

export function Administration() {
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <div className="min-w-0">
        <h2 className="font-serif text-2xl font-bold text-amber-400">Administration</h2>
        <p className="text-sm text-zinc-500">Gestion système et contrôle d'accès</p>
      </div>

      <Card className="border-zinc-800 bg-zinc-950/60">
        <CardContent className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
            <Lock className="h-8 w-8 text-red-500" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-red-400">Accès administrateur verrouillé</h3>
            <p className="max-w-md text-sm text-zinc-500">
              Une authentification sécurisée côté serveur et un rôle ADMIN vérifié sont requis.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-xs font-semibold text-zinc-500">
            <ShieldX className="h-4 w-4" />
            Aucune action administrative disponible en démonstration
          </div>
        </CardContent>
      </Card>
    </div>
  );
}