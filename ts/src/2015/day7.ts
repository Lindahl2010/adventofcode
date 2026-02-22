import { Puzzle } from "../puzzle.js";

enum Operator {
  AND = "AND",
  OR = "OR",
  LSHIFT = "LSHIFT",
  RSHIFT = "RSHIFT",
  NOT = "NOT",
}

type NotSoSimple = {
  not?: string;
  input: string;
  target: string;
};

type Instruction = {
  operand1: string;
  operator: Operator;
  operand2: string;
  target: string;
};

class Wire {
  readonly label: string;
  readonly instruction: string;
  readonly mapper: () => number;
  value: number | undefined;

  constructor(label: string, instruction: string) {
    this.label = label;
    this.instruction = instruction;
    this.mapper = this.mapValue(instruction);
  }

  getValue(): number {
    if (this.value === undefined) {
      this.value = this.mapper();
    }

    return this.value!;
  }

  mapValue(input: string): () => number {
    const pattern1 =
      /(?<operand1>[a-z]+|[0-9]+) (?<operator>AND|OR|LSHIFT|RSHIFT) (?<operand2>[a-z]+|[0-9]+) -> (?<target>[a-z]+)/;
    const pattern2 =
      /(?<not>NOT )?(?<input>[a-z]+|[0-9]+) -> (?<target>[a-z]+)/;

    const match1 = pattern1.exec(input);
    const match2 = pattern2.exec(input);

    if (match1) {
      const values = match1.groups as Instruction;
      return function () {
        const operand1 = parseValue(values.operand1);
        const operand2 = parseValue(values.operand2);
        switch (values.operator) {
          case Operator.AND:
            return operand1 & operand2;
          case Operator.OR:
            return operand1 | operand2;
          case Operator.LSHIFT:
            return operand1 << operand2;
          case Operator.RSHIFT:
            return operand1 >> operand2;
          case Operator.NOT:
            throw new Error("How did you get here?");
        }
      };
    }

    if (match2) {
      const values = match2.groups as NotSoSimple;
      return function () {
        const value = parseValue(values.input);
        if (values.not) {
          return ~value & 0xffff;
        }

        return value;
      };
    }

    throw new Error(`Unable to process input: ${input}`);
  }
}

const wireMap: Map<string, Wire> = new Map();

function parseValue(value: string): number {
  const parsed = parseInt(value);
  if (!isNaN(parsed)) {
    return parsed;
  }

  const wire = wireMap.get(value);
  if (wire) {
    return wire.getValue();
  }

  throw new Error(`Unable to retrieve wire with value: ${value}`);
}

export class Day7 extends Puzzle {
  constructor() {
    super(7);
  }

  public override part1(input: string): number {
    const data = input.split("\n");
    data.forEach((instruction) => {
      const pattern = /(?:.*) -> ([a-z]+)/;
      const values = pattern.exec(instruction);

      if (values) {
        const label = values[1]!;
        wireMap.set(label, new Wire(label, instruction));
      } else {
        throw new Error(
          `Unable to map wire object for instruction: ${instruction}`,
        );
      }
    });

    const wireA = wireMap.get("a");
    if (wireA) {
      return wireA.getValue();
    }

    throw new Error("Error retrieving the value for Wire A");
  }

  public override part2(_input: string): number {
    return 0;
  }
}
