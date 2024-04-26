import cypress, { defineConfig } from "cypress";
const { allureCypress } = require("allure-cypress/reporter");
import fs from "fs";

export default defineConfig({
  projectId: '7wmxm7',
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

      // on(
      //   "after:spec",
      //   (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
      //     if (results && results.video) {
      //       // Do we have failures for any retry attempts?
      //       const failures = results.tests.some((test) =>
      //         test.attempts.some((attempt) => attempt.state === "failed")
      //       );
      //       if (!failures) {
      //         // delete the video if the spec passed and no tests retried
      //         fs.unlinkSync(results.video);
      //       }
      //     }
      //   }
      // );
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
