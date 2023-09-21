const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.oysho.com',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
});
