import { Menu, Search, Bell } from "lucide-react";
import type { SectionId } from "@/types";

const TITLES: Record<SectionId, { title: string; subtitle: string }> = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Vue d'ensemble des signaux et performances",
  },
  pocket: {
    title: "Pocket LIVE",
    subtitle: "Signaux OTC · Timeframe M1 · Pré-alerte 60s",
  },
  forex: {
    title: "Forex PRO",
    subtitle: "Signaux Forex avec gestion du risque",
  },
  history: {
    title: "Historique des signaux",
    subtitle: "Tous les signaux passés et résultats",
  },
  analytics: {
    title: "Analytics",
    subtitle: "Statistiques avancées et tendances",
  },
  telegram: {
    title: "Telegram",
    subtitle: "Connexion et diffusion des signaux",
  },
  subscriptions: {
    title: "Abonnements",
    subtitle: "Gestion des plans et accès",
  },
  settings: {
    title: "Paramètres",
    subtitle: "Configuration de l'application",
  },
  admin: {
    title: "Administration",
    subtitle: "Gestion des utilisateurs et système",
  },
};

export function TopBar({
  onMenu,
  section,
}: {
  onMenu: () => void;
  section: SectionId;
}) {
  const { title, subtitle } = TITLES[section];
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-900 bg-[#0a0a0c]/85 backdrop-blur-md">
      <div className="flex items-center gap-3 px-4 py-4 sm:px-6 lg:px-10">
        <button
          onClick={onMenu}
          className="rounded-lg border border-zinc-800 p-2 text-zinc-300 hover:bg-zinc-900 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-xl font-bold text-amber-300 sm:text-2xl">
            {title}
          </h2>
          <p className="truncate text-xs text-zinc-500 sm:text-sm">
            {subtitle}
          </p>
        </div>
        <div className="hidden items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-zinc-600" />
          <input
            placeholder="Rechercher..."
            className="w-40 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none"
          />
        </div>
        <button className="relative rounded-lg border border-zinc-800 p-2 text-zinc-300 hover:bg-zinc-900">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/30 bg-gradient-to-br from-amber-500/20 to-transparent text-sm font-bold text-amber-300">
          Z
        </div>
      </div>
    </header>
  );
}
