import { describe, expect, test } from "vitest";
import { Day2 } from "../day2.js";

describe("day2", () => {
  const day = new Day2();

  test.each([
    ["2x3x4", 58],
    ["1x1x10", 43],
  ])("part1", (input, expected) => {
    expect(day.part1(input)).toBe(expected);
  });

  test.each([
    ["2x3x4", 34],
    ["1x1x10", 14],
  ])("part2", (input, expected) => {
    expect(day.part2(input)).toBe(expected);
  });
});
