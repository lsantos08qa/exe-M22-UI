/// <reference types="cypress" />
const data = require("../fixtures/login.json");
const CheckoutClass = require("../support/pages/checkout.page");

describe("Checkout", () => {
  before("Adiciona o produto no carrinho", () => {
    cy.realizarLogin(data.email, data.pass);
    cy.adicionarProdutoCarrinho();
  });

  it("Realizar Checkout com sucesso", () => {
    CheckoutClass.FinalizarCompra();

    CheckoutClass.pageTitle.should("contain", "Pedido recebido");
    CheckoutClass.pageSubtitle.should(
      "contain",
      "Obrigado. Seu pedido foi recebido."
    );
  });
});