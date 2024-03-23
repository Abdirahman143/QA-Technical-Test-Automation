const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: "", //enter base url of your server 
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotsFolder: "cypress/screenshots",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
  },
});
