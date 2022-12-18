import { Config } from 'jest'

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePaths: ['src', '<rootDir>/src/', '<rootDir>/../'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  moduleDirectories: ['src', 'node_modules'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
}

export default config
