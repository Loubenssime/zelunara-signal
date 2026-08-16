import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, Lock, ShieldAlert } from "lucide-react";

export function Telegram() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-amber-400">Telegram</h2>
        <p className="text-sm text-zinc-500">Configuration et statut du bot Telegram</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold text-zinc-300">Connexion du bot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <ShieldAlert className="h-5 w-5 text-red-400" />
              <div>
                <p className="text-sm font-semibold text-red-400">Bot non configuré. Backend sécurisé requis.</p>
                <p className="text-xs text-zinc-500">Aucune connexion simulée. L'application ne demande pas et ne stocke pas le token côté client.</p>
              </div>
            </div>
            
            <div className="space-y-1.5">
              <Label className="text-zinc-400">Token du bot</Label>
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-xs text-zinc-500">
                <Lock className="h-4 w-4 text-amber-400" />
                Le token Telegram doit être configuré uniquement dans les secrets sécurisés du serveur.
              </div>
            </div>
            
            <div className="space-y-1.5">
              <Label className="text-zinc-400">ID du canal</Label>
              <Input
                disabled
                placeholder="Backend sécurisé requis"
                className="rounded-lg border-zinc-800 bg-zinc-900/40 text-zinc-500"
              />
            </div>
            
            <Button
              disabled
              className="w-full gap-2 rounded-lg border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 text-sm font-bold text-black opacity-50"
            >
              <Send className="h-4 w-4" />
              Connecter le bot
            </Button>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-950/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-semibold text-zinc-300">Paramètres de livraison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Pré-alertes (60s avant)",
              "Confirmations (20s avant)",
              "Résultats WIN",
              "Résultats LOSS",
              "Rapport quotidien",
            ].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/40 p-3 opacity-60">
                <span className="flex items-center gap-2 text-sm text-zinc-200">
                  <Send className="h-3.5 w-3.5 text-zinc-500" />
                  {item}
                </span>
                <span className="text-xs font-semibold text-zinc-500">Désactivé</span>
              </div>
            ))}
            <p className="pt-2 text-xs text-zinc-500">
              Tous les paramètres de livraison resteront désactivés jusqu'à ce qu'un backend sécurisé soit connecté.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}