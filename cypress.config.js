const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://naveenautomationlabs.com/opencart/",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  env: {
    loginPageurl: "index.php?route=account/login",
    registerPageUrl: "index.php?route=account/register"
  }
});
