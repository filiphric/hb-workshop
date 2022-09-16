import { loginPage } from '@support/page_objects/login'

before(() => {

  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/signup', { email: 'filip@example.com', password: 'i<3slovakia!' })

})

it('visiting the login page', () => {

  loginPage
    .load()
    .login('filip@example.com', 'i<3slovakia!')

});

