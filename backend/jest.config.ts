/* eslint-disable import/no-extraneous-dependencies */
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { resolve } from 'path';
import { compilerOptions } from './tsconfig.json';

export default {
  roots: ['<rootDir>/__tests__'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleNameMapper: {
    '^@main/(.*)$': resolve(__dirname, './src/main/$1'),
    '^@presentation/(.*)$': resolve(__dirname, './src/presentation/$1'),
    '^@domain/(.*)$': resolve(__dirname, './src/domain/$1'),
    '^@application/(.*)$': resolve(__dirname, './src/application/$1'),
    '^@infra/(.*)$': resolve(__dirname, './src/infra/$1'),
  },
  preset: 'ts-jest',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};
