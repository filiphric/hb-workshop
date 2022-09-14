import * as boardSchema from '@fixtures/boardSchema.json'

it('json schemas', () => {

  cy
    .request({
      method: 'GET',
      url: '/api/boards/1',
      headers: {
        accept: "application/json"
      }
    })
    .its('body')
    .should('jsonSchema', boardSchema)

});