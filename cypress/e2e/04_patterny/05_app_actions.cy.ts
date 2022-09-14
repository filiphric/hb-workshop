it('Shows a notification message', () => {

  const message = 'Hello everybody! 👋'

  cy.visit('/')
  cy.store('showNotification', message)

})