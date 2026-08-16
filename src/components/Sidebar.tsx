import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Radio,
  TrendingUp,
  History,
  BarChart3,
  Send,
  CreditCard,
  Settings,
  Lock,
  Star,
} from "lucide-react";

export type SectionId =
  | "dashboard"
  | "pocket"
  | "forex"
  | "history"
  | "analytics"
  | "telegram"
  | "subscriptions"
  | "settings"
  | "admin";

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ElementType;
  disabled?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "pocket", label: "Pocket LIVE", icon: Radio },
  { id: "forex", label: "Forex PRO", icon: TrendingUp },
  { id: "history", label: "Historique", icon: History },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "telegram", label: "Telegram", icon: Send },
  { id: "subscriptions", label: "Abonnements", icon: CreditCard },
  { id: "settings", label: "Paramètres", icon: Settings },
  { id: "admin", label: "Administration", icon: Lock, disabled: true },
];

interface SidebarProps {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

export function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="flex h-full w-full flex-col border-r border-zinc-800 bg-zinc-950">
      <div className="flex items-center gap-2.5 border-b border-zinc-800 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600">
          <Star className="h-5 w-5 fill-black text-black" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg font-bold tracking-wide text-amber-400">ZELUNARA</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Signal</span>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <Button
              key={item.id}
              variant="ghost"
              disabled={item.disabled}
              onClick={() => !item.disabled && onSelect(item.id)}
              className={cn(
                "h-auto justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
                isActive
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200",
                item.disabled && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-zinc-400"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
              {item.disabled && <Lock className="ml-auto h-3.5 w-3.5" />}
            </Button>
          );
        })}
      </nav>

      <div className="border-t border-zinc-800 px-5 py-4">
        <p className="text-[10px] leading-relaxed text-zinc-600">
          Mode démonstration. Aucune connexion réelle aux marchés. Aucune exécution de trades.
        </p>
      </div>
    </aside>
  );
}