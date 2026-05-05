import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./contains-duplicate";

describe("contains duplicate", () => {
  it("should return true if duplicates exist", () => {
    expect(containsDuplicate([1, 2, 3, 3])).toBe(true);
  });
  it("should return false if no dupicates exist", () => {
    expect(containsDuplicate([1, 2, 3])).toBe(false);
  });
  it("should return false if array is empty", () => {
    expect(containsDuplicate([])).toBe(false);
  });
  it("should return true even if duplicates are negative", () => {
    expect(containsDuplicate([-1, 3, 2, -1])).toBe(true);
  });
  it("should detect duplicate zeros", () => {
    expect(containsDuplicate([0, 1, 0])).toBe(true);
  });
});
