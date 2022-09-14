import Board from "trelloapp/src/typings/board"

export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Bookmark a board
       * @param id identifier of the board
       * @param starred state of the board
       * @example cy.bookmarkBoard(1, true)
       */
      bookmarkBoard(id: Board['id'], starred: Board['starred']): Chainable<any>
    }
  }
}

Cypress.Commands.add('bookmarkBoard', (id: Board['id'], starred: Board['starred']) => {
  return cy.request('PATCH', `/api/boards/${id}`, { starred }).its('body')
})