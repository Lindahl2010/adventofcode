import * as fs from "fs";

/** Abstract class representing a puzzle for a given day for Advent of Code */
export abstract class Puzzle {
  private year: number = 2015; // Default to 2015, first year of AoC.
  private readonly day: number;

  constructor(day: number) {
    this.day = day;
  }

  public abstract part1(input: string): number;
  public abstract part2(input: string): number;

  public run(): void {
    const input = this.getInput();
    console.log(`----- Day ${this.day} Part 1: ${this.part1(input)} -----`);
    console.log(`----- Day ${this.day} Part 2: ${this.part2(input)} -----`);
  }

  /**
   * Helper method to build the file path based on the day and return the input.
   * @returns string contents of the puzzle input file
   */
  private getInput(): string {
    const dateStr = `${this.day}`.padStart(2, "0");
    const path = `../input/${this.year}/day${dateStr}.txt`;
    const data = fs.readFileSync(path, "utf-8");
    return data;
  }

  getDay(): number {
    return this.day;
  }

  setYear(year: number): void {
    this.year = year;
  }
}
