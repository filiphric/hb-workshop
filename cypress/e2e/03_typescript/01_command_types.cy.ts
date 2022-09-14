it('creates new board', () => {

  cy.visit('/')

  cy.get('[data-cy=first-board]')
    .type(11111)

});