import { Puzzle } from "../puzzle.js";

type Box = {
  length: number;
  width: number;
  height: number;
};

export class Day2 extends Puzzle {
  constructor() {
    super(2);
  }

  public override part1(input: string): number {
    const data = input.split("\n");
    const boxes: Box[] = data.map((str) => {
      const dimensions = str.split("x").map((v) => parseInt(v));
      return {
        length: dimensions[0] ?? 0,
        width: dimensions[1] ?? 0,
        height: dimensions[2] ?? 0,
      };
    });

    return boxes
      .map((box) => {
        const side1 = box.length * box.width;
        const side2 = box.width * box.height;
        const side3 = box.height * box.length;

        const smallest = Math.min(side1, side2, side3);
        return this.surfaceArea(box) + smallest;
      })
      .reduce((prev, curr) => prev + curr);
  }

  private surfaceArea(box: Box): number {
    return (
      2 * box.length * box.width +
      2 * box.width * box.height +
      2 * box.height * box.length
    );
  }

  public override part2(_input: string): number {
    return 0;
  }
}
