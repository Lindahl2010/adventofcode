import { Puzzle } from "../puzzle.js";

enum Event {
  ON = "turn on",
  OFF = "turn off",
  TOGGLE = "toggle",
}

type Coordinate = {
  x: number;
  y: number;
};

type Command = {
  action: Event;
  start: Coordinate;
  end: Coordinate;
};

export class Day6 extends Puzzle {
  constructor() {
    super(6);
  }

  public override part1(input: string): number {
    const data = input.split("\n");

    const applyCommand = (graph: boolean[][], command: Command) => {
      for (let x = command.start.x; x <= command.end.x; x++) {
        for (let y = command.start.y; y <= command.end.y; y++) {
          if (graph[x] === undefined) graph[x] = [];
          if (graph[x]![y] === undefined) graph[x]![y] = false;
          switch (command.action) {
            case Event.ON:
              graph[x]![y] = true;
              break;
            case Event.OFF:
              graph[x]![y] = false;
              break;
            case Event.TOGGLE:
              graph[x]![y] = !graph[x]![y];
              break;
          }
        }
      }

      return graph;
    };

    return data
      .map(this.mapCommand)
      .reduce(applyCommand, [])
      .reduce((count, row) => count + row.filter((v) => v).length, 0);
  }

  public override part2(input: string): number {
    const data = input.split("\n");

    const applyCommand = (graph: number[][], command: Command) => {
      for (let x = command.start.x; x <= command.end.x; x++) {
        for (let y = command.start.y; y <= command.end.y; y++) {
          if (graph[x] === undefined) graph[x] = [];
          if (graph[x]![y] === undefined) graph[x]![y] = 0;
          switch (command.action) {
            case Event.ON:
              graph[x]![y]! += 1;
              break;
            case Event.OFF:
              if (graph[x]![y]! > 0) graph[x]![y]! -= 1;
              break;
            case Event.TOGGLE:
              graph[x]![y]! += 2;
              break;
          }
        }
      }

      return graph;
    };

    return data
      .map(this.mapCommand)
      .reduce(applyCommand, [])
      .reduce(
        (count, row) => count + row.reduce((prev, curr) => prev + curr),
        0,
      );
  }

  private mapCommand(line: string): Command {
    const match = line.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/) ?? [];
    if (match.length === 6) {
      const start: Coordinate = {
        x: Number.parseInt(match[2]!),
        y: Number.parseInt(match[3]!),
      };

      const end: Coordinate = {
        x: Number.parseInt(match[4]!),
        y: Number.parseInt(match[5]!),
      };

      return {
        action: match[1] as Event,
        start: start,
        end: end,
      };
    }

    throw new Error("Unable to map command");
  }
}
