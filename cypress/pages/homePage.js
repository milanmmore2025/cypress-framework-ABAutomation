export class homePage {

weblocators = {

        search_input: '.form-control',
        click_search: '.btn.btn-default.btn-lg',
        product: 'img[title="MacBook"]',
        addtocart: 'Add to Cart',
        successMessage: 'div.alert.alert-success.alert-dismissible'


    }

    searchProduct(productName) {
        cy.log(productName);
        cy.get(this.weblocators.search_input).type(productName);
        cy.get(this.weblocators.click_search).click()
    }
    addToCart() {
        cy.contains(this.weblocators.addtocart).first().click()
    }

    verifySucessMessage() {
        return cy.get(this.weblocators.successMessage)
    }
    
    
}