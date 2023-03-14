import LoginPage from '../elements/LoginPage'
const loginpage = new LoginPage()


describe('login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('submit btn should be disabled by default enabled by termsbox', () => {
    loginpage.getSignInBtn().should('be.disabled');
    loginpage.getTermsBox().click({force:true});
    loginpage.getSignInBtn().should('be.enabled');

  })
  it('displays error msg when inputs are empty', () => {
    loginpage.getTermsBox().click({force:true});
    loginpage.getSignInBtn().click({force:true});
    loginpage.getErrorMsg().should('be.visible');
  })
  it('displays error msg with invalid credentials', () => {
    loginpage.getUsername().type('users');
    loginpage.getPassword().type('1234');
    loginpage.getTermsBox().click({force : true});
    loginpage.getSignInBtn().click({force : true});
    loginpage.getErrorMsg().should('be.visible');
  })
  it('displays two todo items by default', () => {
    loginpage.getUsername().type('user');
    loginpage.getPassword().type('123');
    loginpage.getTermsBox().click({force:true});
    loginpage.getSignInBtn().click({force:true});
    cy.get('[data-cy="page-title"]').should('have.text','Homepage')
  })
})