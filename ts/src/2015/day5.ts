import { Puzzle } from "../puzzle.js";

export class Day5 extends Puzzle {
  constructor() {
    super(5);
  }

  public override part1(input: string): number {
    const data = input.split("\n");
    const vowels: string[] = ["a", "e", "i", "o", "u"];
    const badPairs: string[] = ["ab", "cd", "pq", "xy"];

    let count = 0;
    data.forEach((line) => {
      const letters = line.split("");

      const vowelCount = letters.filter((letter) =>
        vowels.includes(letter),
      ).length;

      let hasDouble = false;
      let naughty = false;
      for (let i = 0; i < letters.length - 1; i++) {
        const a = letters[i];
        const b = letters[i + 1];
        const badPair = badPairs.find((bad) => bad === `${a}${b}`);

        if (a === b) {
          hasDouble = true;
        }

        if (badPair) {
          naughty = true;
        }
      }

      if (vowelCount >= 3 && hasDouble && !naughty) {
        count++;
      }
    });

    return count;
  }

  // TODO: Refactor this one - dislike this solution, could be cleaner
  public override part2(input: string): number {
    const data = input.split("\n");

    let count = 0;
    data.forEach((line) => {
      const letters = line.split("");

      let hasDoublePair = false;
      let hasRepeat = false;
      for (let i = 0; i < letters.length; i++) {
        const curr = letters[i];
        const next = i + 1 <= letters.length ? letters[i + 1] : undefined;
        const skip = i + 2 <= letters.length ? letters[i + 2] : undefined;

        const pair = `${curr}${next}`;
        for (let j = letters.length; j > i + 2; j--) {
          const same = `${letters[j - 1]}${letters[j]}`;
          if (same === pair) {
            hasDoublePair = true;
          }
        }

        if (curr === skip) {
          hasRepeat = true;
        }
      }

      if (hasDoublePair && hasRepeat) {
        count++;
      }
    });

    return count;
  }
}
