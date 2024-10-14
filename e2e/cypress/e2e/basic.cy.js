// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example e2e', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/studios').as('requestOne');
    cy.intercept('GET', '**/movies').as('requestTwo');
    cy.visit('/');
  });

  it('displays studios and list after fetch respective endpoints', () => {
    cy.wait('@requestOne');
    cy.wait('@requestTwo');

    // Add assertions to verify that studios and movies are displayed correctly
    cy.get('[data-testid="studios_section"]').should('be.visible');
  });
});
