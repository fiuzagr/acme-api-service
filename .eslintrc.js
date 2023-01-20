const OFF = 0;

module.exports = {
  root: true,
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  ignorePatterns: ['node_modules', 'dist', 'build', '!.*.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'sonarjs'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      // config files can be use CommonJS module
      files: ['./*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF,
      },
    },
    {
      files: ['**/__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
