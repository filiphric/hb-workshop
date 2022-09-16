
before(() => {

  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/signup', { email: 'filip@example.com', password: 'i<3slovakia!' })

})
it('visiting the login page', () => {

  cy.visit('/login')
    .login('filip@example.com', 'i<3slovakia!')

});

