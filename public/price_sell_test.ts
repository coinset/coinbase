import { anyNumber, anyString, expect, test } from "../dev_deps.ts";
import { fetchPriceSell } from "./price_sell.ts";

test("fetchPriceSell", async () => {
  await expect(fetchPriceSell({ "currencyPair": "BTC-USD" })).resolves.toEqual({
    data: {
      base: anyString(),
      currency: anyString(),
      amount: anyNumber(),
    },
  });
});
