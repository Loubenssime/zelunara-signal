import { useState } from "react";
import { Star, LayoutDashboard, Radio, LineChart, History, BarChart3, Send, CreditCard, Settings as SettingsIcon, ShieldCheck } from "lucide-react";
import { Dashboard } from "@/components/Dashboard";
import { PocketLive } from "@/components/PocketLive";
import { ForexPro } from "@/components/ForexPro";
import { SignalHistory } from "@/components/SignalHistory";
import { Analytics } from "@/components/Analytics";
import { Telegram } from "@/components/Telegram";
import { Subscriptions } from "@/components/Subscriptions";
import { Settings } from "@/components/Settings";
import { Administration } from "@/components/Administration";
import type { SectionId } from "@/types";

const NAV_ITEMS: { id: SectionId; label: string; icon: typeof Star }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "pocket", label: "Pocket LIVE", icon: Radio },
  { id: "forex", label: "Forex PRO", icon: LineChart },
  { id: "history", label: "Historique", icon: History },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "telegram", label: "Telegram", icon: Send },
  { id: "subscriptions", label: "Abonnements", icon: CreditCard },
  { id: "settings", label: "Paramètres", icon: SettingsIcon },
  { id: "admin", label: "Administration", icon: ShieldCheck },
];

export default function App() {
  const [active, setActive] = useState<SectionId>("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderSection = () => {
    switch (active) {
      case "dashboard":
        return <Dashboard />;
      case "pocket":
        return <PocketLive />;
      case "forex":
        return <ForexPro />;
      case "history":
        return <SignalHistory />;
      case "analytics":
        return <Analytics />;
      case "telegram":
        return <Telegram />;
      case "subscriptions":
        return <Subscriptions />;
      case "settings":
        return <Settings />;
      case "admin":
        return <Administration />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-zinc-400"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-400/40 bg-gradient-to-br from-amber-500/20 to-amber-700/10">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <h1 className="font-serif text-lg font-bold tracking-wide text-amber-400">ZELUNARA</h1>
                <p className="-mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">Signal</p>
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800/40 px-3 py-1 text-xs font-semibold text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
              Mode démonstration
            </span>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="hidden w-60 shrink-0 border-r border-zinc-800 bg-zinc-950 lg:block">
          <nav className="space-y-1 p-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === item.id
                    ? "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
            <aside className="absolute left-0 top-0 h-full w-64 border-r border-zinc-800 bg-zinc-950 pt-16">
              <nav className="space-y-1 p-3">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActive(item.id);
                      setMobileOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active === item.id
                        ? "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        )}

        <main className="min-w-0 flex-1 p-4 lg:p-8">
          <div className="mx-auto max-w-7xl">{renderSection()}</div>
        </main>
      </div>
    </div>
  );
}
