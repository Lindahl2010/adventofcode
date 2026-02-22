import { describe, expect, it, test } from "vitest";
import { Day7 } from "../day7.js";

describe("2015: day 6", () => {
  const day = new Day7();

  it("part1", () => {
    // given
    const input = [
      "123 -> x",
      "456 -> y",
      "x AND y -> d",
      "d RSHIFT 5 -> lo",
      "lo LSHIFT 2 -> f",
      "NOT f -> a",
    ].join("\n");

    // when
    const result = day.part1(input);

    // then
    expect(result).toBe(65527);
  });

  test.each([])("part2", (input, expected) => {
    expect(day.part2(input)).toBe(expected);
  });
});
