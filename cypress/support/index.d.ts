/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<Subject = any> {
		verifyScroll(): Chainable<any>;
        isScrolledTo(selector: string): Chainable<any>;
        validateResults(selector: string, item: any) : Chainable<any>;
		parseCsv(content: any) : Chainable<any>;
	}
}