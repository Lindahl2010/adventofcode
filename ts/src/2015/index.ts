import { AdventYear } from "../adventYear.js";
import { Day1 } from "./day1.js";
import { Day2 } from "./day2.js";
import { Day3 } from "./day3.js";

export const adventYear = new AdventYear(2015)
  .puzzle(new Day1())
  .puzzle(new Day2())
  .puzzle(new Day3());
