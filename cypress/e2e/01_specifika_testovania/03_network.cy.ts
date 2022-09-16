it('board has no lists', () => {

  cy.intercept('GET', '/api/lists?boardId=1').as('lists')

  cy.visit('/board/1')

  cy.wait('@lists')

  cy.get('[data-cy=list]')
    .should('not.exist')

});