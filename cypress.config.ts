import cypress, { defineConfig } from "cypress";
const { allureCypress } = require("allure-cypress/reporter");
import fs from "fs";

export default defineConfig({
  chromeWebSecurity: false,

  retries: {
    runMode: process.env.CI ? 1 : 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./reportAllure/allure-results",
      });
    },

    viewportWidth: 1536,
    viewportHeight: 960,

    baseUrl: "https://telnyx.com",
    video: true,
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,

    defaultCommandTimeout: 5000,
    execTimeout: 80000,
  },
});
