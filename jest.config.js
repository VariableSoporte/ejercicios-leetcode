module.exports = {
  roots: ['<rootDir>/ejercicios'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
