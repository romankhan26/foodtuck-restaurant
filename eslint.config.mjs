import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve file path information
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for backward compatibility with older configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define ESLint configuration using the compat object
const eslintConfig = [
  // Extend from Next.js base config with core web vitals and TypeScript support
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  {
    overrides: [
      {
        files: ["*.ts", "*.tsx"], // Targeting TypeScript files specifically
        rules: {
          "@typescript-eslint/no-explicit-any": "off", // Disable the explicit-any rule for TypeScript files
        },
      },
    ],
  },
];

export default eslintConfig;
