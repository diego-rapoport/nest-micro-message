export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePaths: ['src', '<rootDir>/src/', '<rootDir>/../'],
  // roots: ['./'],
  /* moduleNameMapper: {
    'src/@entities/content': './src/@entities/content',
  }, */
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
