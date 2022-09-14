import { Selectors } from '../@types/selectors';

declare global {
  namespace Cypress {
    interface Chainable {
      getByData(
        input: Selectors
      ): Chainable<any>
    }
  }
}

/**
 * Gets element using data-cy selector
 * @param input data-cy attribute value
 * @example
 * // this command
 * cy.getByData('header')
 * // will select this element
 * <div data-cy="header">
 * </div>
 *
 */
Cypress.Commands.add('getByData', (
  input: Selectors
) => {

  Cypress.log({
    consoleProps() {
      return {
        selector: input,
      };
    },
    displayName: 'getByData',
    name: 'Get by [data-cy] attribute',
  });

  return cy.get(`[data-cy='${input}']`);

});