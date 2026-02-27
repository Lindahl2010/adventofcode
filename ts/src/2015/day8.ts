import { Puzzle } from "../puzzle.js";

export class Day8 extends Puzzle {
  constructor() {
    super(8);
  }

  public override part1(input: string): number {
    const data = input.split("\n");
    return data
      .map((line) => line.length - eval(line).length)
      .reduce((prev, curr) => prev + curr, 0);
  }

  public override part2(_input: string): number {
    return 0;
  }
}
