/// <reference types="cypress" />
const AccountClass = require("../support/pages/conta.page");
const faker = require("faker-br");

describe("Conta", () => {
  before("Acessar página de cadastro", () => {
    cy.visit("/my-account");
  });

  it("Cadastro com sucesso", () => {
    const newUser = {
      email: faker.internet.email(),
      password: "teste123",
    };

    const name = AccountClass.RealizarCadastro(newUser.email, newUser.password);
    AccountClass.myAccountName.should("contain", `Olá, ${name}`);
  });
});