import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver } from "./_utils.ts";
import { isObject } from "../deps.ts";

const EXCHANGE_RATES = "exchange-rates";

export type ExchangeRatesOptions = {
  currency: string;
};
export type ExchangeRatesResponse = {
  data: {
    currency: string;
    rates: Record<string, number>;
  };
};

const reviver: Reviver = (key, value) => {
  if (key === "rates" && isObject(value)) {
    return Object.entries(value).reduce((acc, [key, value]) => {
      acc[key] = Number(value);
      return acc;
    }, {} as Record<string, number>);
  }
  return value;
};

export function fetchExchangeRates(
  options?: ExchangeRatesOptions,
  init?: RequestInit,
): Promise<ExchangeRatesResponse> {
  const url = new URL(EXCHANGE_RATES, BASE_URL);

  if (options) {
    url.searchParams.set("currency", options.currency);
  }

  return jsonFetch(url, init, { parseJson: reviver });
}
