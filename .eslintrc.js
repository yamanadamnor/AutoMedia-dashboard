module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next', 'prettier'],
  rules: {
    'no-console': 'error',
    'prefer-const': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
