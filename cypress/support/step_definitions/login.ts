import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given('User exists', () => {
  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/signup', { email: 'filip@example.com', password: 'i<3slovakia!' })
})

When("User visits login", () => {
  cy.visit("/login");
});

Then("User submits credentials", () => {
  cy.get('[data-cy="login-email"]').type("filip@example.com")
  cy.get('[data-cy="login-password"]').type("i<3slovakia!")
  cy.get('[data-cy="login-submit"]').click()
});
