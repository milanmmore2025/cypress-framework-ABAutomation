import { registerPage } from '../../pages/registerPage';
const registerObj = new registerPage();
import registerData from '../../fixtures/registerData.json';

describe('Automation Framework Sanity Testsuite', () => {
    it('Register flow', () => {
        registerObj.launchRegisterPage();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterPhone(registerData.phone);
        registerObj.enterPassword(registerData.password);
        registerObj.enterConfirmPassword(registerData.password);
        registerObj.checkPolicyCheckbox();
        registerObj.clickContinueButton();
        cy.get(registerObj.weblocators.successMessage).should('be.visible');
    })

});



