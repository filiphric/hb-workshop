it('board has no lists', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=list]')
    .should('not.exist')

});