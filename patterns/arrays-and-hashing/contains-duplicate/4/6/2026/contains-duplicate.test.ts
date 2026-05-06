import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./contains-duplicate";

/**
 *   Test Cases I’ll Run:
     - when duplicates exist
     - when duplicates dont exist
     - emtpy values
     - negative values
     - only one value in array
 */

describe("contains duplicate", () => {
  it("should return true if duplicates exist", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });
  it("return false when no duplicates exists", () => {
    expect(containsDuplicate([1, 2, 3])).toBe(false);
  });
  it("should return false when array is empty", () => {
    expect(containsDuplicate([])).toBe(false);
  });
  it("should return true with duplicate negative values", () => {
    expect(containsDuplicate([-100, 2, 3, -100, 4])).toBe(true);
  });
  it("should return false when only one value in array", () => {
    expect(containsDuplicate([1])).toBe(false);
  });
});
