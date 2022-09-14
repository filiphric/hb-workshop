import Board from "trelloapp/src/typings/board"

export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Add a new board via api
       * @example cy.addBoardApi('my shopping')
       */
      addBoardApi(name: Board['name']): Chainable<any>
    }
  }
}

Cypress.Commands.add('addBoardApi', (name: Board['name']) => {
  return cy.request<Board>('POST', '/api/boards', { name }).its('body')
})