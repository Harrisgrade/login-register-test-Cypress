class LoginPage {
    getUsername() {
      return  cy.get('[data-cy="username"]');
    }
    getPassword() {
       return cy.get('[data-cy="password"]');
    }
    getTermsBox() {
        return cy.get('#terms')
    }
    getSignInBtn() {
        return cy.get('[data-cy="signin-btn"]')
    }
    getErrorMsg() {
        return cy.get('[data-cy="error-msg"]')
    }
}

export default LoginPage