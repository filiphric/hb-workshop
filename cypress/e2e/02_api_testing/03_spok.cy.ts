import spok from 'cy-spok'

// before(() => {
//   cy.request('POST', '/api/reset')
// });

it('tests the whole response', () => {

  const boardName = 'board created via API'
  const expectedBody = {
    name: boardName,
    user: 0,
    starred: false,
    created: "2022-09-16",
    id: 1
  }

  cy.api({
    method: 'POST',
    url: '/api/boards',
    body: {
      name: boardName
    }
  }).should(spok({
    body: {
      name: boardName,
      user: 0,
      id: spok.type('number')
    },
    status: 201
  }))

});