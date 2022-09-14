it('opens testing user', () => {

  cy.setCookie('trello_token', Cypress.env('user').accessToken)

  cy.visit('/')

});