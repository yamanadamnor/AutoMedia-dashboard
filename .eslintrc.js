module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
  },
};
