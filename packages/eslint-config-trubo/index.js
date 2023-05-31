module.exports = {
    react: {
        version: 'latest', // instead of 'detect'
    },  
    extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "aribnb/hooks",
    "airbnb-typescript"],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
    parserOptions: {
      babelOptions: {
        presets: [require.resolve("next/babel")],
      },
    },
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    settings : {
        react: {
          version: "detect"
        }
      }
  };
