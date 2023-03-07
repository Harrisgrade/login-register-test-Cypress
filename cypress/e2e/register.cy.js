import RegisterPage from '../elements/RegisterPage';
const registerPage = new RegisterPage();

describe('login page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/register.html');
	});
	it('displays error msg when inputs are empty', () => {
        cy.inputBoarder().should('have.css','border-color', 'rgb(240, 240, 240)');
		registerPage.getRegSignInBtn().click({ force: true });
		registerPage.getErrorMsg().should('be.visible').and('have.length', '5');
        cy.inputBoarder().should('have.css','border-color', 'rgb(231, 76, 60)');
		registerPage.getErrorMsg().eq(0).should('have.text', 'Name cannot be blank');
		registerPage.getErrorMsg().eq(1).should('have.text', 'Username cannot be blank');
		registerPage.getErrorMsg().eq(2).should('have.text', 'Email cannot be blank');
		registerPage.getErrorMsg().eq(3).should('have.text', 'Password cannot be blank');
		registerPage.getErrorMsg().eq(4).should('have.text', 'Password Confirm cannot be blank');
	});
	it('form validation', () => { 
		registerPage.getFormFill().find('.form__input').then((input) => {
			cy.wrap(input[0]).should('have.value','Ash J. Williams')
			cy.wrap(input[1]).should('have.value','the chosen one')
			cy.wrap(input[2]).should('have.value','Klaatu@Barada.cough')
			cy.wrap(input[3]).should('have.value','S-Mart')
			cy.wrap(input[4]).should('have.value','S-Mart')
			console.log(input)
		})
		cy.inputBoarder().should('have.css','border-color', 'rgb(46, 204, 113)');
		registerPage.getErrorMsg().eq(0).should('have.text', 'Success');
		registerPage.getErrorMsg().eq(1).should('have.text', 'Success');
		registerPage.getErrorMsg().eq(2).should('have.text', 'Valid Email');
		registerPage.getErrorMsg().eq(3).should('have.text', 'Valid Password');
		registerPage.getErrorMsg().eq(4).should('have.text', 'Passwords Match');
    });
	it('email fails', () => {
        registerPage.getRegEmail().type('Klaatu,Barada.cough{enter}');
        registerPage.getErrorMsg().eq(2).should('have.text', 'Not a valid email');
  
	})
	it('password fails', () => {
		registerPage.getFormFill()
		registerPage.getErrorMsg().eq(3).should('have.text', 'Valid Password').and('be.visible');
		registerPage.getRegPasswordConfirm().type('SMart{enter}');
		registerPage.getErrorMsg().eq(4).should('have.text', 'Passwords does not match').and('be.visible');
	})
	it('password success', () => {
		registerPage.getFormFill()
		registerPage.getErrorMsg().eq(3).should('have.text', 'Valid Password').and('be.visible');
		registerPage.getErrorMsg().eq(4).should('have.text', 'Passwords Match').and('be.visible');
	})
});
