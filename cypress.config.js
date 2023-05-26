const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure:false,
  video:false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on,config)
    },
    baseUrl: "https://react-redux.realworld.io/"
  },
});
