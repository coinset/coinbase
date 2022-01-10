import { anyNumber, anyString, expect, test } from "../dev_deps.ts";
import { fetchPriceSpot } from "./price_spot.ts";

test("fetchPriceSpot", async () => {
  await expect(fetchPriceSpot({ "currencyPair": "BTC-USD" })).resolves.toEqual({
    data: {
      base: anyString(),
      currency: anyString(),
      amount: anyNumber(),
    },
  });
});
