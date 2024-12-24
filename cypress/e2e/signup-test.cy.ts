import { signupSelectors } from "../selectors/signup-selectors";
import * as data from "../fixtures/pageData";

describe("Signup test cases", () => {
  beforeEach(() => {
    cy.visit(data.pageData.signupUrl);
  });
  it("displays error msg when inputs are empty", () => {
    cy.get(signupSelectors.getRegSignInBtn).click();
    cy.validateResults(signupSelectors.getMsg, data.pageData.blankFieldMsgs);
    // cy.get(signupSelectors.getMsg)
    //   .should(($el) => {
    //     const texts = $el.map((i, el) => Cypress.$(el).text());
    //     const erMsgText = texts.get();
    //     expect(erMsgText).to.have.length(5);
    //     expect(erMsgText).to.deep.eq(data.pageData.blankFieldMsgs);
    //   })
    //   .and("be.visible");
  });
  it("form validation", () => {
    cy.get(signupSelectors.getForm).within(() => {
      cy.get(signupSelectors.getRegName).type(data.validFormFill.name);
      cy.get(signupSelectors.getRegUsername).type(data.validFormFill.username);
      cy.get(signupSelectors.getRegEmail).type(data.validFormFill.email);
      cy.get(signupSelectors.getRegPassword).type(data.validFormFill.password);
      cy.get(signupSelectors.getRegPasswordConfirm).type(
        data.validFormFill.password_confirm
      );
      cy.get(signupSelectors.getRegSignInBtn).click();
      cy.validateResults(signupSelectors.getMsg, data.pageData.successFieldMsgs);
    });
  });
  it("email fails", () => {
    cy.get(signupSelectors.getRegEmail).type(data.invalidFormFill.email);
    cy.get(signupSelectors.getRegSignInBtn).click();
    cy.get(signupSelectors.getMsg)
      .eq(2)
      .should("have.text", "Not a valid email")
      .and("be.visible");
  });
    it("password fails", () => {
        cy.get(signupSelectors.getRegPassword).type(data.invalidFormFill.password);
        cy.get(signupSelectors.getRegPasswordConfirm).type(
        data.invalidFormFill.password_confirm
        );
        cy.get(signupSelectors.getRegSignInBtn).click();
        cy.get(signupSelectors.getMsg)
        .eq(3)
        .should("have.text", "Valid Password")
        .and("be.visible");
        cy.get(signupSelectors.getMsg)
        .eq(4)
        .should("have.text", "Passwords do not match")
        .and("be.visible");
    });
});
