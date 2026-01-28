import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  { 
    basePath: "./src",
    files: ["**/*.ts"],
    extends: [tseslint.configs.recommended],
    plugins: { prettier },
    rules: {
      "prettier/prettier": [
        "error",
        {
          plugins: ["@ianvs/prettier-plugin-sort-imports"],
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ]
    }
  }
]);
