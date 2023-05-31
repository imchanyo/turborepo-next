module.exports = {
  ...require("eslint-config-custom/index"),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: ["plugin:storybook/recommended", "plugin:storybook/recommended"]
};