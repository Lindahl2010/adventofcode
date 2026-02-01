import { describe, expect, test } from "vitest";
import { Day1 } from "../day1.js";

describe("day1", () => {
  const day = new Day1();

  test.each([
    ["(())", 0],
    ["()()", 0],
    ["(((", 3],
    ["(()(()(", 3],
    ["())", -1],
    ["))(", -1],
    [")))", -3],
    [")())())", -3],
  ])("part1", (input, expected) => {
    expect(day.part1(input)).toBe(expected);
  });

  test.each([
    [")", 1],
    ["())", 3],
    ["()())", 5],
    ["()(()))", 7],
  ])("part2", (input, expected) => {
    expect(day.part2(input)).toBe(expected);
  });
});
