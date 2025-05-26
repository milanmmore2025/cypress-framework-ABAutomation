export class registerPage {

    weblocators = {
        firstName : '#input-firstname',
        lastName : '#input-lastname',
        email : '#input-email',
        phone : '#input-telephone',
        password : '#input-password',
        confirmPassword : '#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continueButton : '.btn.btn-primary',
        registerButton : '#input-registerButton',
        successMessage : 'hi',
        errorMessage : '#error-message'
    }

    enterFirstName(firstName) {
        cy.get(this.weblocators.firstName).clear().type(firstName);
    }
    enterLastName(lastName) {
        cy.get(this.weblocators.lastName).clear().type(lastName);
    }
    enterEmail(email) {
        cy.get(this.weblocators.email).clear().type(email);
    }
    enterPhone(phone) {
        cy.get(this.weblocators.phone).clear().type(phone);
    }

    enterPassword(password) {
        cy.get(this.weblocators.password).clear().type(password);
    }
    enterConfirmPassword(confirmPassword) {
        cy.get(this.weblocators.confirmPassword).clear().type(confirmPassword);
    }
    checkPolicyCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check();
    }
    clickContinueButton() {
        cy.get(this.weblocators.continueButton).click();
    }

    launchRegisterPage() {
        cy.visit(Cypress.env('baseUrl') + Cypress.env('registerPageUrl'));
    }




}

