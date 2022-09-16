/// <reference types="cypress" />

const { defineConfig } = require("cypress");
import { seedDatabase } from './cypress/scripts/seedDatabase'
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
import { cucumberPreprocessorConfig } from './utils/cucumberPreprocessorConfig'
import { createDefaultUser } from './utils/createDefaultUser'

module.exports = defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    specPattern: "cypress/e2e/**/*.{feature,ts}",
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      on('task', {
        seedDatabase
      })
      require('cypress-grep/src/plugin')(config);
      await addCucumberPreprocessorPlugin(on, config);
      await cucumberPreprocessorConfig(on, config)
      await createDefaultUser(on, config)
      return config
    },
    baseUrl: 'http://localhost:3000',
    experimentalSessionAndOrigin: true,
    experimentalWebKitSupport: true,
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true
    }
  }
});
