#!/usr/bin/env node
import * as fs from "fs";
import { Command } from "commander";
import { adventYear as twenty15 } from "./2015/index.js";

type ProgramOptions = {
  year: string;
  day: string;
  part: string;
};

const program = new Command();
program
  .name("advent-util")
  .description("CLI to run code for Advent of Code puzzles.")
  .version("0.1.0");

program
  .command("solve")
  .name("solve")
  .description("Solve an Advent of Code puzzle.")
  .argument("<file>", "file containing puzzle input")
  .option("-y, --year <year>", "the year of the advent calendar", "2015")
  .option("-d, --day <day>", "the day of the advent calendar", "1")
  .option("-p, --part <part>", "the part of the puzzle", "1")
  .action(solveActionHandler);

function solveActionHandler(file: string, options: ProgramOptions) {
  const { year, day } = options;
  const data = fs.readFileSync(file, "utf-8");
  switch (year) {
    case "2015":
      const puzzle = twenty15.getPuzzle(Number(day));
      puzzle.solve(data);
      break;
  }
}

program.parse();
