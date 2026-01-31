# adventofcode

Stores puzzle solutions separated by language and year.

[Advent of Code](https://adventofcode.com/)

## Intro

Software engineer by trade, looking to solve some problems (puzzles) and learn
new languages in my spare time.

Plan to include solutions to puzzles in multiple languages. Currently, only
Typescript has been implemented. Will eventually add solutions in java, go,
and potentially others (c/c++, rust, python).

P.S. Personally excel in self-deprecation and selling myself short, so please
feel free to open up issues to tell me how bad my code is and how I can improve!

## Structure

The intension is to separate solutions for AoC puzzles by language > year > day.
Resulting in a directory structure that will look similar to the outline below.

```text
root/
├── ts/
│   └── src/
│       ├── index.ts
│       ├── package.json
│       ├── 2015/
│       ├── 2016/
│       └── ...
│           ├── tests/
│           │   └── *.test.ts
│           ├── day1.ts
│           └── index.ts
├── java/
├── go/
└── rust/
```

## Typescript

The Typescript solutions included in this repository are intended to be run
using a cli tool. It can be added by installing the project globally
(`npm install -g .`) or by creating a symlink via `npm link`.

### Setup

In order to setup the cli, follow the steps below:

1. Navigate to the `/ts` folder.
2. Run `npm run build` to compile the ts to js.
3. Ensure that the `dist/index.js` file is executable.
   - `chmod +x dist/index.js` if it is not.
4. Run `npm install -g .` to install the package globally.
   - Can also be done by creating a symlink via `npm link`.
5. Verify the project has been installed, `npm ls -g`.
6. The `advent-util` command should now be recognized.

### Useful Commands

Project Scripts:

- `npm run build` - compiles ts to js, emits into `/dist`
- `npm run lint` - lints the code
- `npm run lint:fix` - lints the code and attempts to resolve problems
- `npm run test` - run unit tests
- `npm run test:coverage` - run unit tests with coverage

CLI Commands:

- `advent-util solve` - primary command to run code for a given puzzle
