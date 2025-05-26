import { homePage } from '../../pages/homePage';
const homePageObj = new homePage();
//import { LoginPage } from '../../pageObjects/LoginPage';
//import { CartPage } from '../../pageObjects/CartPage';
import testData  from '../../fixtures/testData.json';

describe('Automation Framework Sanity Testsuite', () => {
    before(() => {
        cy.login(testData.login.email, testData.login.password);
    })
    it('Add to cart flow', () => {
        cy.log(testData.product.productName);
        homePageObj.searchProduct(testData.product.productName);
        homePageObj.addToCart();
        // Verify item is added to cart
        //cy.log(testData.message.successMessage);

        homePageObj.verifySucessMessage()
            .invoke('text')
            .then((text) => {
                expect(text).to.include(testData.message.successMessage);
                //expect(text).to.include(testData.product.productName);
                

        });


        //homePageObj.verifySucessMessage().should('match', new RegExp(`.*${testData.product.productName}.*added to your cart.*`, 'i'));


        //homePageObj.verifySucessMessage().should('contain', testData.message.productName)
    });
}
);
