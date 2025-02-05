/// <reference types="cypress" />

class CheckoutClass {
    get #termsCheck() {
      return cy.get("#terms", { timeout: 10000 });
    }
  
    get #finalizarBtn() {
      return cy.get("#place_order");
    }
  
    get pageTitle() {
      return cy.get(".page-title");
    }
  
    get pageSubtitle() {
      return cy.get(".woocommerce-notice");
    }
  
    FinalizarCompra() {
      this.#termsCheck.click();
      this.#finalizarBtn.click();
    }
  }
  
  module.exports = new CheckoutClass();