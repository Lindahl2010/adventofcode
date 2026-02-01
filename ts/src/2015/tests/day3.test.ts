import { describe, expect, test } from "vitest";
import { Day3 } from "../day3.js";

describe("day3", () => {
  const day = new Day3();

  test.each([
    [">", 2],
    ["^>v<", 4],
    ["^v^v^v^v^", 2],
  ])("part1", (input, expected) => {
    expect(day.part1(input)).toBe(expected);
  });

  test.each([
    ["^v", 3],
    ["^>v<", 3],
    ["^v^v^v^v^v", 11],
  ])("part2", (input, expected) => {
    expect(day.part2(input)).toBe(expected);
  });
});
