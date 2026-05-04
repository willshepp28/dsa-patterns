import { describe, expect, it } from "vitest";
import { twoSum } from "./two-sum";

describe("twoSum", () => {
  it("returns indices for a basic pair", () => {
    expect(twoSum([1, 4, 5, 6], 10)).toEqual([1, 3]);
  });
});
