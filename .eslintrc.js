const dotenv = require("dotenv");

console.log("--- dot env", dotenv.config());

module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
  ],
  ignorePatterns: ["*.config.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": process.env.REACT_APP_ENV === "development" 
    || process.env.REACT_APP_ENV === "production" ? "error" : "warn",
    "@typescript-eslint/no-var-requires": "off",
    "no-unused-vars": "off",

    "@typescript-eslint/no-empty-interface": "off",
    "object-curly-spacing": ["error", "always"],
    "max-len": [
      "error",
      120,
      2,
      {
        ignoreComments: true,
      },
    ],

  },
};
