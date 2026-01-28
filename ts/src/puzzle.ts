/** Abstract class representing a puzzle for a given day for Advent of Code */
export abstract class Puzzle {
  private readonly day: number;

  constructor(day: number) {
    this.day = day;
  }

  public abstract part1(input: string): number;
  public abstract part2(input: string): number;

  public solve(data: string): void {
    console.log(`----- Day ${this.day} Part 1: ${this.part1(data)} -----`);
    console.log(`----- Day ${this.day} Part 2: ${this.part2(data)} -----`);
  }

  getDay(): number {
    return this.day;
  }
}
