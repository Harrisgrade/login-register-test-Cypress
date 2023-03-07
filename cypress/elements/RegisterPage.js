class RegisterPage {
    getFormFill() {
        return cy.get('[data-cy="form"]').within(() => {
			cy.get('[data-cy="reg-name"]').type('Ash J. Williams')
			cy.get('[data-cy="reg-username"]').type('the chosen one')
            cy.get('[data-cy="reg-email"]').type('Klaatu@Barada.cough')
            cy.get('[data-cy="reg-password"]').type('S-Mart')
            cy.get('[data-cy="reg-password-confirm"]').type('S-Mart')
            cy.get('[data-cy="reg-submit-btn"]').click({force:true})
		})
    }
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