it('opening a board', function () {

  let boardId: number

  cy.request('POST', '/api/boards', { name: 'new board' })
    .then(({ body }) => {
      boardId = body.id
    })

  cy.visit(`/board/${boardId}`)

})