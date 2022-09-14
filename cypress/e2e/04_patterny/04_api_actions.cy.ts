it('Tesitng a board', () => {

  cy.addBoardApi('new board')
    .its('starred')
    .should('eq', false)

});