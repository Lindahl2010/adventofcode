import { Puzzle } from "../puzzle.js";

enum Direction {
  NORTH = "^",
  SOUTH = "v",
  EAST = ">",
  WEST = "<",
}

export class Day3 extends Puzzle {
  constructor() {
    super(3);
  }

  public override part1(input: string): number {
    const directions = input.split("");
    const coordinates = ["0, 0"]; // first house
    const isPresent = (coord: string) =>
      coordinates.filter((c) => c === coord).length > 0;

    let x = 0;
    let y = 0;
    directions.forEach((direction) => {
      switch (direction as Direction) {
        case Direction.NORTH:
          y++;
          break;
        case Direction.SOUTH:
          y--;
          break;
        case Direction.EAST:
          x++;
          break;
        case Direction.WEST:
          x--;
          break;
      }

      const newCoord = `${x}, ${y}`;
      if (!isPresent(newCoord)) {
        coordinates.push(newCoord);
      }
    });

    return coordinates.length;
  }

  public override part2(input: string): number {
    const directions = input.split("");
    const coordinates = ["0, 0"];
    const isPresent = (coord: string) =>
      coordinates.filter((c) => c === coord).length > 0;

    let x = 0;
    let y = 0;

    let rx = 0;
    let ry = 0;

    let robot = false;
    directions.forEach((direction) => {
      if (!robot) {
        switch (direction as Direction) {
          case Direction.NORTH:
            y++;
            break;
          case Direction.SOUTH:
            y--;
            break;
          case Direction.EAST:
            x++;
            break;
          case Direction.WEST:
            x--;
            break;
        }

        const newCoord = `${x}, ${y}`;
        if (!isPresent(newCoord)) {
          coordinates.push(newCoord);
        }
        robot = true; // robot next
      } else {
        switch (direction as Direction) {
          case Direction.NORTH:
            ry++;
            break;
          case Direction.SOUTH:
            ry--;
            break;
          case Direction.EAST:
            rx++;
            break;
          case Direction.WEST:
            rx--;
            break;
        }

        const newCoord = `${rx}, ${ry}`;
        if (!isPresent(newCoord)) {
          coordinates.push(newCoord);
        }
        robot = false; // santa next
      }
    });

    return coordinates.length;
  }
}
