import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import ts from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import _import from "eslint-plugin-import";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([
  ...compat.extends("next/core-web-vitals"),
]);

export default [
  ...patchedConfig,
  {
    ignores: [
      "**/eslint.config.mjs",
      "**/*.config.js",
      "**/*.config.cjs",
      "**/.next",
      "**/dist",
      "**/package-lock.yaml",
    ],
  },
  {
    files: [
      "app/**/*.ts",
      "pages/**/*.tsx",
      "components/**/*.tsx",
      "data/**/*.ts",
      "prisma/**/*.ts",
      "server/**/*.ts",
      "ui/**/*.tsx",
      "utils/**/*.ts",
      "utils/**/*.tsx",
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@next/next/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-type-checked",
    ),
  ),
  {
    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
    },

    languageOptions: {
      parser: tsParser,
      sourceType: "script",
      parserOptions: { projectService: true },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "no-console": ["error"],
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-misused-promises": [
        2,
        { checksVoidReturn: { attributes: false } },
      ],
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "react/prop-types": "off",
    },
  },
];
