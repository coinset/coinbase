import { BASE_URL, PRICES } from "./constants.ts";
import { jsonFetch, Reviver } from "./_utils.ts";
import { isString } from "../deps.ts";
import type { BTC, ETH } from "../deps.ts";

export type PriceOptions = {
  currencyPair: `${BTC | ETH}-${string}`;
};
export type PriceResponse = {
  data: {
    base: string;
    currency: string;
    amount: number;
  };
};

const reviver: Reviver = (key, value) => {
  if (key === "amount" && isString(value)) {
    return Number(value);
  }
  return value;
};

export function fetchPriceBuy(
  { currencyPair }: PriceOptions,
  init?: RequestInit,
): Promise<PriceResponse> {
  const url = new URL(`${PRICES}/${currencyPair}/buy`, BASE_URL);

  return jsonFetch(url, init, { parseJson: reviver });
}

export { reviver };
