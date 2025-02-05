Cypress.Commands.add("adicionarProdutoCarrinho", () => {
  const fd = new FormData();
  fd.append("add-to-cart", "10132"); 
  fd.append("quantity", "1");

  cy.request({
    url: "/product/stellar-solar-jacket/",
    method: "POST",
    body: fd,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });

  cy.visit("/carrinho");

  cy.get(".product-name").should("contain", "Stellar Solar Jacket");

  cy.visit("/checkout");
});

  
  Cypress.Commands.add("realizarLogin", (email, password) => {
    const fd = new FormData();
    fd.append("_wp_http_referer", "/minha-conta");
    fd.append("login", "Login");
    fd.append("password", password);
    fd.append("username", email);
    fd.append("woocommerce-login-nonce", "ed52a2e41a");
  
    cy.request({
      url: "/minha-conta",
      method: "POST",
      body: fd,
    });
  });
