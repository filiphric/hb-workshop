export const cardListsLoadRandomly = (delay: number = 500) => {
  cy.intercept({
    url: /api\/cards\?listId=/,
    middleware: true,
  }, (req) => {
    req.reply(res => {
      res.delay = Math.floor(Math.random() * delay);
    })
  }).as('😈')
}

export const cardsLoadSlowly = (delay: number) => {
  cy.intercept({
    url: /api\/cards\?listId=/,
    middleware: true,
  }, ({ reply }) => {
    reply((res) => {
      res.delay = delay
    })
  }).as('😈')
}