import { anyNumber, anyString, expect, test } from "../dev_deps.ts";
import { fetchPriceBuy } from "./price_buy.ts";

test("fetchPriceBuy", async () => {
  await expect(fetchPriceBuy({ "currencyPair": "BTC-USD" })).resolves.toEqual({
    data: {
      base: anyString(),
      currency: anyString(),
      amount: anyNumber(),
    },
  });
});
