import { BASE_URL, PRICES } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import { PriceResponse, reviver } from "./price_buy.ts";
import type { BTC } from "../deps.ts";

export type PriceSpotOptions = {
  currencyPair: `${BTC}-${string}`;
  date?: string;
};
export function fetchPriceSpot(
  { currencyPair, date }: PriceSpotOptions,
  init?: RequestInit,
): Promise<PriceResponse> {
  const url = new URL(`${PRICES}/${currencyPair}/spot`, BASE_URL);

  if (date) {
    url.searchParams.set("date", date);
  }

  return jsonFetch(url, init, { parseJson: reviver });
}
