import { describe, expect, test } from "vitest";
import { Day6 } from "../day6.js";

describe("day6", () => {
  const day = new Day6();

  test.each([
    ["turn on 0,0 through 0,0", 1],
    ["turn on 0,0 through 999,999", 1000000],
    ["toggle 0,0 through 999,0", 1000],
    ["turn on 0,0 through 999,999\nturn off 499,499 through 500,500", 999996],
  ])("part1", (input, expected) => {
    expect(day.part1(input)).toBe(expected);
  });

  test.each([
    ["turn on 0,0 through 0,0", 1],
    ["toggle 0,0 through 999,999", 2000000],
    ["toggle 0,0 through 999,0", 2000],
    ["turn on 0,0 through 999,999\nturn off 499,499 through 500,500", 999996],
  ])("part2", (input, expected) => {
    expect(day.part2(input)).toBe(expected);
  });
});
