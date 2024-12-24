// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<Subject = any> {
		verifyMessages(selector: string, expectedMessages: string): Chainable<any>;
	}
}