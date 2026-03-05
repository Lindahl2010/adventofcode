import { describe, expect, it } from "vitest";
import { Day8 } from "../day8.js";

describe("2015: day 8", () => {
  const day = new Day8();
  const input = ['""', '"abc"', '\"aaa\\"aaa\"', '"\\x27"'].join("\n");

  it("part1", () => {
    // when
    const result = day.part1(input);

    // then
    expect(result).toBe(12);
  });

  it("part2", () => {
    // when
    const result = day.part2(input);

    // then
    expect(result).toBe(19);
  });
});
