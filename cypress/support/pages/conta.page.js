/// <reference types="cypress" />

class AccountClass {
    get #emailAddressInput() {
      return cy.get("#reg_email");
    }
    get #passwordInput() {
      return cy.get("#reg_password");
    }
    get #registerBtn() {
      return cy.get('[name="register"]');
    }
  
    get myAccountName() {
      return cy.get(".woocommerce-MyAccount-content");
    }
  
    RealizarCadastro(email, pass) {
      this.#emailAddressInput.type(email);
      this.#passwordInput.type(pass);
      this.#registerBtn.click();
  
      const regex = /^[^@]+/;
      const emailSeparado = regex.exec(email);
      const name = emailSeparado[0].toLowerCase();
      return name;
    }
  }
  
  module.exports = new AccountClass();