import { loginSelectors } from "../selectors/signin-selectors";
import { pageData } from "../fixtures/pageData";

describe("login page", () => {
  beforeEach(() => {
    cy.visit(pageData.signinUrl);
  });
  it("submit btn should be disabled by default and should not redirect", () => {
    cy.get(loginSelectors.getSignInBtn).then(($btn) => {
      cy.wrap($btn).should("be.disabled").and("be.visible");
      cy.wrap($btn).click({ force: true });
      cy.url().should("eq", pageData.signinUrl);
    });
  });
  it("terms box should be disabled by default", () => {
    cy.get(loginSelectors.getTermsBox).then(($box) => {
      cy.wrap($box).should("not.be.checked").and("be.visible");
      cy.wrap($box).should("have.attr", "type", "checkbox")
      .click().and("be.checked");
    });
  });
  it("register link has attr and redirects to page", () => {
    cy.get(loginSelectors.getRegBtn).then(($btn) => {
      cy.wrap($btn).should("have.attr", "href", "reg.html");
      cy.wrap($btn).should("have.text", "Register here").click();
    });
    cy.title().should("eq", "Register");
  });
});
context("login page terms checked", () => {
  beforeEach(() => {
    cy.visit(pageData.signinUrl);
    cy.get(loginSelectors.getTermsBox).check().and("be.checked");
  });
  it("displays error msg when inputs are empty", () => {
    cy.get(loginSelectors.getSignInBtn).click();
    cy.get(loginSelectors.getErrorMsg)
    .should("have.text", "Invalid Username/Password Combination").and("be.visible");
    
  });
  it("displays error msg with invalid credentials", () => {
    cy.get(loginSelectors.getForm).within(() => {
        cy.get(loginSelectors.getUsername).type("test")
        .and("have.value", "test");
        cy.get(loginSelectors.getPassword).type("test")
        .and("have.value", "test");
        cy.root().submit();
    });
    cy.get(loginSelectors.getErrorMsg).should("be.visible")
  });
});
