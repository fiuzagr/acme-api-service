module.exports = {
  // ignore all entries and run in all files
  // see: https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
  'src/**/*.ts': () => 'npm run check-types',
  'src/**/*.{js,ts}': ['npm run format:staged', 'npm run test:staged'],
};
