import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    overrides: [
      {
        files: ["*.ts", "*.tsx"], // Apply the rule specifically to TypeScript files
        rules: {
          "@typescript-eslint/no-explicit-any": "off", // Disable the rule
        },
      },
    ],
  },
];

export default eslintConfig;
