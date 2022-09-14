describe('Login', () => {

  const user = {
    email: 'filip@example.com',
    password: 'Asdf.1234#'
  }

  beforeEach(() => {

    cy.request('POST', '/api/reset')
    cy.signupApi({ login: false, ...user })

  });

  it('logs in a user (click)', { tags: '@smoke' }, () => {

    cy.visit('/')

    cy.getByData('login-menu')
      .should('be.visible')
      .click()

    cy.location('pathname')
      .should('eq', '/login')

    cy.getByData('login-email')
      .type(user.email)

    cy.getByData('login-password')
      .type('invalid{enter}')

    cy.getByData('notification-message')
      .should('contain.text', 'Incorrect password')

    cy.location('pathname')
      .should('eq', '/')

    cy.go('back')

    cy.getByData('login-password')
      .clear()
      .type(user.password)

    cy.getByData('login-submit')
      .click()

    cy.location('pathname')
      .should('eq', '/')

    cy.getCookie('trello_token')
      .should('exist')

    cy.getByData('logged-user')
      .click()

    cy.getByData('notification-message')
      .should('contain.text', 'User was logged out')

  });

  it('logs in a user (enter)', () => {

    cy.visit('/')

    cy.getByData('login-menu')
      .should('be.visible')
      .click()

    cy.location('pathname')
      .should('eq', '/login')

    cy.getByData('login-email')
      .type(user.email)

    cy.getByData('login-password')
      .type(`${user.password}{enter}`)

    cy.location('pathname')
      .should('eq', '/')

    cy.getCookie('trello_token')
      .should('exist')

    cy.getByData('logged-user')
      .click()

    cy.getByData('notification-message')
      .should('contain.text', 'User was logged out')

  });

  it('shows error on invalid login', () => {

    cy.setCookie('trello_token', 'invalid')

    cy.visit('/login')

    cy.getByData('notification-message')
      .should('contain.text', 'Invalid authorization')

  })

});