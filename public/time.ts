import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./_utils.ts";

const TIME = "time";

export type TimeResponse = {
  data: {
    iso: string;
    epoch: number;
  };
};

export function fetchTime(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<TimeResponse> {
  const url = new URL(TIME, BASE_URL);

  return jsonFetch(url, init);
}
