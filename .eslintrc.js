const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  plugins: ["react", "react-native", "import", "relay", "i18next", "react-hooks"],
  extends: [
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:import/errors",
    // "plugin:relay/recommended",
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'prettier/@typescript-eslint',
  ],
  rules: {
    // "comma-dangle": [2, "always-multiline"],
    // quotes: [2, "single", { allowTemplateLiterals: true }],
    // "react/prop-types": 0,
    // "react/jsx-no-bind": 0,
    // "react/display-name": 0,
    // "react/no-unescaped-entities": 0,
    // "new-cap": 0,
    // "react-native/no-unused-styles": 2,
    // "react-native/split-platform-components": 0,
    // "react-native/no-inline-styles": 1,
    // "react-native/no-color-literals": 0,
    // "no-class-assign": 1,
    // "no-console": 2,
    // "object-curly-spacing": [1, "always"],
    // "import/first": 2,
    // "import/default": 0,
    // "import/order": [2, { "newlines-between": "always-and-inside-groups" }],
    // "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    // "no-extra-boolean-cast": 0,
    // "import/no-duplicates": 2,
    // "import/no-resolved": 0,
    // "react/no-deprecated": 1,
    // "relay/graphql-syntax": "error",
    // "relay/compat-uses-vars": "warn",
    // "relay/graphql-naming": "error",
    // "relay/no-future-added-value": "warn",
    // "relay/unused-fields": "warn",
    // "no-invalid-this": "error",
    // 'import/no-unresolved': "warn",
    // indent: 0,
    // '@typescript-eslint/indent': 0,
    // '@typescript-eslint/camelcase': 0,
    // '@typescript-eslint/explicit-function-return-type': 0,
    // 'interface-over-type-literal': 0,
    // '@typescript-eslint/consistent-type-definitions': 0,
    // '@typescript-eslint/prefer-interface': 0,
    // 'lines-between-class-members': 0,
    // '@typescript-eslint/explicit-member-accessibility': 0,
    // '@typescript-eslint/no-non-null-assertion': 0,
    // '@typescript-eslint/no-unused-vars': [
    //   'error',
    //   {
    //     ignoreRestSiblings: true,
    //   },
    // ],
    // '@typescript-eslint/no-var-requires': 1,
    // 'react-hooks/rules-of-hooks': 'error',
    // TODO - this can cause bugs
    // 'react-hooks/exhaustive-deps': 'warn',
    // '@typescript-eslint/no-empty-function': 1,
  },
  globals: {
    __DEV__: true
  },
  settings: {
    // Remove when new release of esling-plugin-import is released
    // "import/ignore": ["node_modules"],
    // "import/resolver": {
    //   node: true,
    //   "eslint-import-resolver-typescript": true,
    //   'eslint-import-resolver-lerna': {
    //     packages: path.resolve(__dirname, 'packages'),
    //   },
    // }
  }
};
