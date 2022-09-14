import * as data from '@fixtures/singleBoardTwoListsFiveCards.json'
import { cardsLoadSlowly } from '@scripts/evilCode'

before(() => {

  // cardsLoadSlowly(5000)
  cy.task('seedDatabase', data)

})

it('loads cards in our list very slowly', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .should('have.length', 5)

});