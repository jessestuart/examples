module.exports = {
  env: { es6: true, node: true },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['import'],
  parserOptions: { ecmaVersion: 2017 },
  root: true,
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
        parser: 'typescript',
      },
    ],
    strict: 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
  },
}
