import RegisterPage from '../elements/RegisterPage';
const registerPage = new RegisterPage();

Cypress.Commands.add("inputBoarder", () => {

    registerPage.getFormInput().each(($e1, index, $list) =>{    
        {
            registerPage.getFormInput().eq(index)
            const x = index
            registerPage.getFormInput().eq(x)
        }
})
})