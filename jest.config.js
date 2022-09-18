const {defaults} = require('jest-config');

const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
  collectCoverageFrom: [
    'src/**/*.{ts,js}'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__fixtures__/',
    '/__tests__/',
    '/(__)?mock(s__)?/',
    '/__jest__/',
    '.?.d.ts',
    '/config/',
    'app.js',
    'server.js',
    '/service/',
    '/utils/',
    'router.js'
  ],
};

module.exports = config;