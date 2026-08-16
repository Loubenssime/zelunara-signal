export type SignalResult = "WIN" | "LOSS" | "DRAW" | "PENDING";
export type SignalStatus = "PRE_ALERT" | "CONFIRMED" | "CANCELLED" | "ACTIVE" | "CLOSED";
export type Direction = "CALL" | "PUT" | "BUY" | "SELL";

export interface PocketSignal {
  id: string;
  pair: string;
  direction: "CALL" | "PUT";
  score: number;
  payout: number;
  entryTime: string;
  expirationTime: string;
  strategy: string;
  status: SignalStatus;
  result: SignalResult;
}

export interface ForexSignal {
  id: string;
  pair: string;
  direction: "BUY" | "SELL";
  entry: number;
  stopLoss: number;
  takeProfit: number;
  riskReward: number;
  timeframe: string;
  strategy: string;
  status: SignalStatus;
  result: SignalResult;
}

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