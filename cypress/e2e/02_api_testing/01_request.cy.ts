before(() => {
  cy.task('seedDatabase')
});

it.only('creates a board', () => {

  cy.request('POST', '/api/boards', { name: 'new board ' })
  // .its('status')
  // .should('eq', 210)
  cy.visit('/')

});

it('gets all boards from API', () => {

  cy.request({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    },
    headers: {
      accept: "application/json"
    }
  }).then(({ body }) => {
    expect(body[0].starred).to.be.true
  })

});