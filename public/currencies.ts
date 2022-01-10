import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";

const CURRENCIES = "currencies";

export type CurrenciesResponse = {
  data: {
    id: string;
    name: string;
    min_size: string;
  }[];
};

/**
 * @see https://developers.coinbase.com/api/v2?javascript#currencies
 */
export function fetchCurrencies(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<CurrenciesResponse> {
  const url = new URL(CURRENCIES, BASE_URL);
  return jsonFetch(url, init);
}
