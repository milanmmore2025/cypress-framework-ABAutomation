const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "https://naveenautomationlabs.com/opencart/",
    registerPageUrl: "index.php?route=account/register"
  }
});
