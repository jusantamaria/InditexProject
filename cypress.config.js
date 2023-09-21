const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
});
