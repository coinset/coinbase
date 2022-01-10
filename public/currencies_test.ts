import { anyArray, anyString, expect, test } from "../dev_deps.ts";
import { fetchCurrencies } from "./currencies.ts";

test("fetchCurrencies", async () => {
  await expect(fetchCurrencies()).resolves.toEqual({
    data: anyArray({
      id: anyString(),
      name: anyString(),
      min_size: anyString(),
    }),
  });
});
