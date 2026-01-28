import { Puzzle } from "./puzzle.js";

export class AdventYear {
  private readonly year: number;
  private readonly puzzles: Map<number, Puzzle>;

  constructor(year: number) {
    this.year = year;
    this.puzzles = new Map([]);
  }

  puzzle(puzzle: Puzzle): AdventYear {
    puzzle.setYear(this.year);
    this.puzzles.set(puzzle.getDay(), puzzle);
    return this;
  }

  getPuzzle(day: number): Puzzle {
    const puzzle = this.puzzles.get(day);
    if (puzzle) {
      return puzzle;
    }

    throw new Error(`Puzzle for day ${day} was not found.`);
  }
}
