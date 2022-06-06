const { defineConfig } = require('cypress')

module.exports = defineConfig({
  hosts: {
    'auth.corp.com': '127.0.0.1',
  },
  fixturesFolder: false,
  e2e: {
    baseUrl: 'http://localhost:7074',
  },
})
