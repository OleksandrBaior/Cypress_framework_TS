import cypress, { defineConfig } from "cypress";

export default defineConfig({
  retries: {
    runMode: process.env.CI ? 1 : 1 ,
    openMode: 0,
  },
  e2e: {
    //macbook-16
    viewportWidth: 1536,
    viewportHeight: 960,
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
    video: true,

    defaultCommandTimeout: 5000,
    execTimeout: 80000
  },
  
});
