import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  modulePathIgnorePatterns: [
    '<rootDir>/test/__fixtures__',
    '<rootDir>/node_modules',
    '<rootDir>/build',
  ],
  preset: 'ts-jest',
  fakeTimers: {
    enableGlobally: true,
  },
};

export default config;
