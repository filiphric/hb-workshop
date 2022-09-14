import Board from "trelloapp/src/typings/board";

it('test', () => {

  cy.request<Board>('POST', '/api/boards', { name: "new board" })
    .then(({ body }) => {
      expect(body).to.be.a('number')
    })

});
