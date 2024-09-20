// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "no-console": "error",
            "dot-notation": "error",
            "@typescript-eslint/require-await": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-missued-promise": "off",
        },
    },
    {
        ignores: ["node_modules", "build"],
    }
);
