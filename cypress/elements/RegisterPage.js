class RegisterPage {
    getRegName() {
      return  cy.get('[data-cy="reg-name"]');
    }
    getRegUsername() {
       return cy.get('[data-cy="reg-username"]');
    }
    getRegEmail() {
        return cy.get('[data-cy="reg-email"]');
    }
    getRegPassword() {
        return cy.get('[data-cy="reg-password"]');
    }
    getRegPasswordConfirm() {
        return cy.get('[data-cy="reg-password-confirm"]');
    }
    getErrorMsg() {
        return cy.get('small')
    }
    getFormInput() {
        return cy.get('.form__input')
    }
    getRegSignInBtn() {
        return cy.get('[data-cy="reg-submit-btn"]');
    }
}

export default RegisterPage