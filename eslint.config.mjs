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
    rules: {
      // Temporarily allow img elements during migration
      // TODO: Remove after all images are migrated to next/image
      "@next/next/no-img-element": "warn",
      // Accessibility rules
      "jsx-a11y/alt-text": "warn",
    },
  },
];

export default eslintConfig;
