import HomePage from "../../support/pageObjects/HomePage";
const url_data = require("../../fixtures/test_data/endpoint.json");

describe("Credit Card Test: ", { testIsolation: false }, () => {
  before(() => {
    cy.visit(url_data.url),
      {
        timeouts: 3000,
      };
  });

  it("verify that the home page logo is visible ", () => {
    HomePage.isLogoVisible();
  });

  it("verify that user can navigate to the credit card page", () => {
    const relativeUrl = "personal/cards/credit-cards/";
    cy.visit(url_data.url + relativeUrl);
    HomePage.navigateToCreditCard(relativeUrl);
  });
});
