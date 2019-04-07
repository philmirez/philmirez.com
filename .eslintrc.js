module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
