import * as data from '@fixtures/singleBoardTwoListsFiveCards.json'
import { cardListsLoadRandomly } from '@scripts/evilCode'

before(() => {

  cardListsLoadRandomly()
  cy.task('seedDatabase', data)

})

it('loads cards in our list randomly', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .eq(1)
    .invoke('text')
    .should('eq', 'Bread')

});