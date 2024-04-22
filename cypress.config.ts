import { defineConfig } from "cypress";
import fs from "fs";

export default defineConfig({
  //macbook-16
  viewportWidth: 1536,
  viewportHeight: 960,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on(
      //   'after:spec',
      //   (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
      //     if (results && results.video) {
      //       // Do we have failures for any retry attempts?
      //       const failures = results.tests.some((test) =>
      //         test.attempts.some((attempt) => attempt.state === 'failed')
      //       )
      //       if (!failures) {
      //         // delete the video if the spec passed and no tests retried
      //         fs.unlinkSync(results.video)
      //       }
      //     }
      //   }
      // )
    },
    baseUrl: "https://telnyx.com",  
    video: true 
  },
});
