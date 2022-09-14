before(() => {

  cy.task('seedDatabase', {
    "boards": [
      {
        "name": "new board",
        "user": 0,
        "starred": false,
        "created": "2022-09-14",
        "id": 1
      }
    ],
    "cards": [],
    "lists": [],
    "users": []
  })

})

it('opens a new board', () => {

  cy.visit('/board/1')

})