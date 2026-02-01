import { describe, expect, test } from "vitest";
import { Day4 } from "../day4.js";

describe("day4", () => {
  const day = new Day4();

  test.each([
    ["abcdef", 609043],
    ["pqrstuv", 1048970],
  ])("part1", (input, expected) => {
    expect(day.part1(input)).toBe(expected);
  });

  test.each([
    ["abcdef", 6742839],
    ["pqrstuv", 5714438],
  ])(
    "part2",
    (input, expected) => {
      expect(day.part2(input)).toBe(expected);
    },
    15000,
  );
});
