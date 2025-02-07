import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Replace with your website's URL
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', // Match .spec.js files
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});