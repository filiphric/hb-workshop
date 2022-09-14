import * as data from '@fixtures/singleBoardTwoListsFiveCards.json'

before(() => {
  cy.task('seedDatabase', data)
})

it('tests the lists', () => {

  cy.request({
    method: 'GET',
    url: '/api/lists',
    headers: {
      accept: 'application/json'
    }
  })

});