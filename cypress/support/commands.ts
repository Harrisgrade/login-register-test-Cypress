/// <reference types="cypress" />

Cypress.Commands.add("verifyScroll", () => {
    cy.get("@initialScrollY").then((initialValue) => {
        cy.window()
          .its("scrollY")
          .then((newValue) => {
            cy.wrap(newValue).should("be.gte", initialValue);
          });
      });
});

Cypress.Commands.add("isScrolledTo", (selector) => {
    cy.get(selector).then(($el) => {
        const bottom = Cypress.config('viewportHeight');
        const rect = $el[0].getBoundingClientRect();
        // Expected element not to be below the visible scrolled area
        cy.wrap(rect.top).should('be.gte', 0 - rect.height);
        //Expected element not to be above the visible scrolled area
        cy.wrap(rect.top).should('be.lte', bottom);
    });
});

Cypress.Commands.add('validateResults', (selector, expectedResult) => {
    cy.get(selector)
      .then(($el) => {
        const texts = $el.map((i, el) => Cypress.$(el).text());
        const actualMessages = texts.get();
        cy.wrap(actualMessages).should("have.length", expectedResult.length)
        cy.wrap(actualMessages).should("deep.eq", expectedResult);
      });
  });


