import { anyNumber, anyString, expect, test } from "../dev_deps.ts";
import { fetchTime } from "./time.ts";

test("fetchTime", async () => {
  await expect(fetchTime()).resolves.toEqual({
    data: {
      iso: anyString(),
      epoch: anyNumber(),
    },
  });
});
