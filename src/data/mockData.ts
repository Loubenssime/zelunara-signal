import type { PocketSignal, ForexSignal } from "@/types";

export const POCKET_PAIRS = [
  "EUR/USD OTC",
  "GBP/USD OTC",
  "USD/JPY OTC",
  "USD/CHF OTC",
  "AUD/USD OTC",
  "USD/CAD OTC",
  "NZD/USD OTC",
  "EUR/JPY OTC",
  "GBP/JPY OTC",
  "EUR/GBP OTC",
  "AUD/JPY OTC",
  "CAD/JPY OTC",
  "GBP/CHF OTC",
  "EUR/AUD OTC",
  "AUD/CAD OTC",
];

export const FOREX_PAIRS = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "AUD/USD",
  "USD/CHF",
  "USD/CAD",
  "NZD/USD",
  "EUR/GBP",
];

export const STRATEGIES = [
  "MOMENTUM_PULLBACK_M1",
  "EMA_PULLBACK_M1",
  "TREND_REJECTION_M1",
  "ENGULFING_CONFIRM_M1",
  "FIBONACCI_REJECTION_M1",
  "WICK_REJECTION_M1",
  "BREAKOUT_RETEST_M1",
  "THREE_BAR_REVERSAL_M1",
  "MOMENTUM_3BAR_M1",
];

export const POCKET_RULES = [
  { label: "Pré-alerte", value: "60 secondes" },
  { label: "Confirmation", value: "20 secondes" },
  { label: "Expiration", value: "M1" },
  { label: "Score pré-alerte", value: "80" },
  { label: "Score confirmation", value: "85" },
  { label: "Payout minimum", value: "80%" },
  { label: "Score maximum", value: "95" },
  { label: "Signaux actifs", value: "1 maximum" },
  { label: "Cooldown", value: "60 secondes" },
];

export const pocketSignals: PocketSignal[] = [];
export const forexSignals: ForexSignal[] = [];