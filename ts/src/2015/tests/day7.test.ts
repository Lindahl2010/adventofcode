import { describe, expect, it } from "vitest";
import { Day7 } from "../day7.js";

describe("2015: day 7", () => {
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

  it("part2", () => {
    // given
    const input = [
      "123 -> x",
      "456 -> b",
      "x AND b -> d",
      "d RSHIFT 5 -> lo",
      "lo LSHIFT 2 -> f",
      "NOT f -> a",
    ].join("\n");

    // when
    const result = day.part2(input);

    // then
    expect(result).toBe(65523);
  });
});
