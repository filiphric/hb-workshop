import Board from "trelloapp/src/typings/board"

export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Invoke an app action from application store function
       * @example cy.store('showNotification', 'hello world')
       */
      store(...args: any[]): Chainable<any>
    }
  }
}

Cypress.Commands.add('store', (...args) => {
  const action = args[0]
  const params = args.slice(1)
  return cy.window().invoke('store').invoke(action, ...params)
})