import { BASE_URL, PRICES } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";
import { PriceOptions, PriceResponse, reviver } from "./price_buy.ts";

export function fetchPriceSell(
  { currencyPair }: PriceOptions,
  init?: RequestInit,
): Promise<PriceResponse> {
  const url = new URL(`${PRICES}/${currencyPair}/sell`, BASE_URL);

  return jsonFetch(url, init, { parseJson: reviver });
}
