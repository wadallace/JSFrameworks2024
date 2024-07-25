module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    indent: ["off", 2, { SwitchCase: 1 }],
    "linebreak-style": ["off", "unix"],
    "no-alert": "off",
    "no-console": "off",
    "no-empty": "warn",
    "no-unused-vars": "off",
    quotes: ["off", "double"],
    semi: ["warn", "always"],
  },
};
