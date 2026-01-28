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
    const boxes: Box[] = this.mapBoxes(input);
    return boxes
      .map((box) => {
        const s1 = box.length * box.width;
        const s2 = box.width * box.height;
        const s3 = box.height * box.length;

        const smallest = Math.min(s1, s2, s3);
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

  public override part2(input: string): number {
    const boxes: Box[] = this.mapBoxes(input);
    return boxes
      .map((box) => {
        const perimeter = (s1: number, s2: number) => s1 * 2 + s2 * 2;
        const p1 = perimeter(box.length, box.width);
        const p2 = perimeter(box.width, box.height);
        const p3 = perimeter(box.height, box.length);

        const smallest = Math.min(p1, p2, p3);
        const volume = box.length * box.width * box.height;
        return smallest + volume;
      })
      .reduce((prev, curr) => prev + curr);
  }

  private mapBoxes(input: string): Box[] {
    const data = input.split("\n");
    return data.map((str) => {
      const dimensions = str.split("x").map((v) => parseInt(v));
      return {
        length: dimensions[0] ?? 0,
        width: dimensions[1] ?? 0,
        height: dimensions[2] ?? 0,
      };
    });
  }
}
