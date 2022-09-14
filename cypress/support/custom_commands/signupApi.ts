export { }
declare global {
  namespace Cypress {
    interface Chainable {
      signupApi({ email, password, login }): Chainable<any>
    }
  }
}

/**
 * Creates a new user using the API
 * @param email user email 
 * @param password user password
 * @param login defaults to true, logs in the user
 * @example
 * cy.signupApi({ email: 'filip@example.com', password: 'nbusr123', login: false })
 */
Cypress.Commands.add('signupApi', ({ email, password, login = true }: { email: string, password: string, login?: boolean }) => {

  cy
    .request('POST', '/api/signup', {
      email, password
    }).then(({ body }) => {
      if (login) cy.setCookie('trello_token', body.accessToken)
      cy.wrap(body).as('user');
    });

});