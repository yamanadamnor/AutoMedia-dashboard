import eslint from "@eslintint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default tseslint.config(
  eslint.configs.recommended,
  "plugin:@typescript-eslint/recommended",
  "plugin:@typescript-eslint/recommended-type-checked",
  "plugin:@typescript-eslint/stylistic-type-checked",
  "plugin:@next/next/recommended",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
  "prettier",
  tseslint.configs.recommended,
  {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./ui/**/*.{js,ts,jsx,tsx}",
    ],
    ignores: [
      "**/.eslintrc.cjs",
      "**/*.config.js",
      "**/*.config.cjs",
      "packages/config/**",
      ".next",
      "dist",
      "package-lock.yaml",
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      ecmaVersion: 2022,
      globals: {
        React: "writable",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      eact: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "no-console": ["error"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
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
);
