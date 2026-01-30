import { createHash } from "crypto";
import { Puzzle } from "../puzzle.js";

export class Day4 extends Puzzle {
  constructor() {
    super(4);
  }

  public override part1(input: string): number {
    const predicate = (hash: string) => this.hashPredicate(hash, "00000");

    let i = 0;
    let hash = "";
    while (!predicate(hash)) {
      hash = createHash("MD5").update(`${input}${i}`).digest("hex");
      if (predicate(hash)) {
        break;
      }

      i++;
    }

    return i;
  }

  public override part2(input: string): number {
    const predicate = (hash: string) => this.hashPredicate(hash, "000000");

    let i = 0;
    let hash = "";
    while (!predicate(hash)) {
      hash = createHash("MD5").update(`${input}${i}`).digest("hex");
      if (predicate(hash)) {
        break;
      }

      i++;
    }

    return i;
  }

  private hashPredicate(hash: string, input: "00000" | "000000"): boolean {
    return hash.startsWith(input);
  }
}
