module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "no-restricted-syntax": "off",
    "no-use-before-define": "off",
    "no-plusplus": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        parser: "flow",
      },
    ],
    "import/prefer-default-export": "off",
    "no-alert": "off",
    "no-underscore-dangle": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],

    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
