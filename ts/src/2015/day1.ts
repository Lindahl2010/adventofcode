import { Puzzle } from "../puzzle.js";

enum Direction {
  UP = "(",
  DOWN = ")",
}

export class Day1 extends Puzzle {
  constructor() {
    super(1);
  }

  public override part1(input: string): number {
    let floor = 0;
    const changeFloor = (direction: Direction) =>
      direction === Direction.UP ? floor++ : floor--;

    const directions = input.split("") as Direction[];
    directions.forEach(changeFloor);
    return floor;
  }

  public override part2(input: string): number {
    let position = 0;
    let floor = 0;
    const changeFloor = (direction: Direction) =>
      direction === Direction.UP ? floor++ : floor--;

    const directions = input.split("") as Direction[];
    directions.forEach((direction, index) => {
      changeFloor(direction);
      if (floor == -1 && position == 0) {
        position = index + 1;
      }
    });

    return position;
  }
}
