it('selects element by [data-cy] attribute', () => {

  cy.request('POST', '/api/reset')

  cy.visit('/')
  cy.getByData('first-board').should('be.visible')

});