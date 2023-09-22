const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'https://petstore.swagger.io/v2',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
});
