import { describe, expect, it } from "vitest";
import { Day5 } from "../day5.js";

describe("day5", () => {
  const day = new Day5();

  it("part1", () => {
    // given
    // why. must. template. strings. preserve. code. indentation.
    const input = [
      "ugknbfddgicrmopn",
      "aaa",
      "jchzalrnumimnmhp",
      "haegwjzuvuyypxyu",
      "dvszwmarrgswjxmb",
    ].join("\n");

    // when
    const result = day.part1(input);

    // then
    expect(result).toBe(2);
  });

  it("part2", () => {
    // given
    // want template strings, but like, see line 9.
    const input = [
      "xyxy",
      "aabcdefgaa",
      "aaa",
      "xyx",
      "abcdefeghi",
      "qjhvhtzxzqqjkmpb",
      "xxyxx",
      "uurcxstgmygtbstg",
      "ieodomkazucvgmuy",
    ].join("\n");

    // when
    const result = day.part2(input);

    // then
    expect(result).toBe(3);
  });
});
