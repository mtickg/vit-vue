/** @type { import("prettier").Config } */
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  options: {
    error: {
      singleQuote: true,
      parser: flow,
    },
  },
};
