import Board from "trelloapp/src/typings/board";

it('Using types from source', () => {

  cy.request<Board>('POST', '/api/boards', { name: "new board" })
    .then(({ body }) => {
      expect(body.id).to.exist
    })

});
