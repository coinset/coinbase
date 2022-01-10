import { CoinbaseSymbol } from "./types.ts";
export const BASE_URL = "https://api.coinbase.com/v2/";
export const PRICES = "prices";

export const ALL_COINBASE_SYMBOLS: CoinbaseSymbol[] = Array.from(
  new Set<CoinbaseSymbol>(["BCH", "BTC", "ETH", "LTC", "XLM"]),
);
