import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1024, 
  viewportHeight: 768,
  video: true,
  screenshotOnRunFailure: true,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://telnyx.com',
  },

});
