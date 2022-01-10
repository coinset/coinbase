import { anyObject, anyString, expect, test } from "../dev_deps.ts";
import { isNumber, isString } from "../deps.ts";
import { fetchExchangeRates } from "./exchange_rates.ts";

test("fetchExchangeRates", async () => {
  await expect(fetchExchangeRates({ "currency": "BTC" })).resolves.toEqual({
    data: {
      currency: anyString(),
      rates: anyObject((value) =>
        Object.entries(value).every(([key, value]) =>
          isString(key) && isNumber(value)
        )
      ),
    },
  });
});
