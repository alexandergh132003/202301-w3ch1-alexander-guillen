module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: [["xo-typescript", "prettier"]],
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-expressions": "type",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
