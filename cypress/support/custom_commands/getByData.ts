
export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Add a new board via api
       * @example cy.getByData('board-create')
       */
      getByData(selector: string): Chainable<Element>
    }
  }
}

Cypress.Commands.add('getByData', (selector) => {

  Cypress.log({
    displayName: 'dataCy',
    message: selector,
    consoleProps() {
      return {
        selector
      }
    }
  })

  cy.get(`[data-cy=${selector}]`, { log: false })

})