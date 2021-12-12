module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '\\.yaml$': 'jest-transform-yaml',
    '^.+\\.(ts|tsx)?$': '@swc/jest',
  },
}
